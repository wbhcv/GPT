"""Optional integration check: installed Python Playwright + Chromium, running npm start.
Uses normal keyboard/touch input. Observation hooks and planning only inspect live state;
look-ahead simulation is performed on copies. No hooks ship in play.html.
"""
from pathlib import Path
from datetime import datetime,timezone,timedelta
from playwright.sync_api import sync_playwright,expect
import json,hashlib,subprocess,os
ROOT=Path(__file__).resolve().parents[1]
BASE=os.environ.get('CLOUDHOP_TEST_URL','http://127.0.0.1:3000')
OUT=Path(os.environ.get('CLOUDHOP_TEST_OUTPUT','/tmp/cloudhop-verified'));OUT.mkdir(exist_ok=True)
source=(ROOT/'game.js').read_text()
pilot=(ROOT/'tests/pilot.mjs').read_text().split('\n',1)[1].replace('export function','function')
observer='''\nconst solidActive=s=>!s.broken&&(!s.hidden||s.revealed);
'''+pilot+'''
window.__observe=()=>({state:{index:game.index,status:game.status,area:game.area,x:game.player.x,y:game.player.y,vx:game.player.vx,vy:game.player.vy,lives:game.lives,score:game.score,coins:game.coins,power:game.player.power,mounted:Boolean(game.player.mount),swimming:game.player.swimming,flutterUsed:game.player.flutterUsed,tongue:Boolean(game.tongue),pearls:game.pearls,boss:game.level.boss,finish:game.finish,mode:soundtrack.mode},input:game.area==='lagoon'?waterInput(game):challengeInput(game,[[0,65,55],[16,95,55],[0,65,55]][game.index])});
window.__sample=async()=>{const a=soundtrack.context;if(!a)return 0;const analyser=a.createAnalyser();analyser.fftSize=2048;soundtrack.master.connect(analyser);let peak=0;for(let n=0;n<12;n++){await new Promise(r=>setTimeout(r,25));const v=new Float32Array(2048);analyser.getFloatTimeDomainData(v);for(const x of v)peak=Math.max(peak,Math.abs(x));}soundtrack.master.disconnect(analyser);return peak;};
'''
NOW=datetime(2026,10,21,10,tzinfo=timezone.utc)
def observed_page(browser,index=0):
 page=browser.new_page(viewport={'width':1440,'height':1050});errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.route('**/game.js',lambda r:r.fulfill(status=200,content_type='text/javascript',body=source+observer))
 page.clock.install(time=NOW);page.goto(BASE,wait_until='load');page.clock.pause_at(NOW+timedelta(seconds=2))
 if index:page.locator(f'[data-level="{index}"]').click()
 page.locator('#play-button').click();return page,errors

def drive(page,limit=7000,water=False):
 held=set();photo=False
 for frame in range(limit):
  data=page.evaluate('__observe()');s=data['state'];c=data['input']
  if water and s['area']!='lagoon':break
  if s['status'] in ['won','gameover']:break
  for field,key in [('right','ArrowRight'),('left','ArrowLeft'),('down','ArrowDown'),('attack','KeyX'),('sprint','ShiftLeft')]+([('jumpHeld','Space')] if water else []):
   if c.get(field,False) and key not in held:page.keyboard.down(key);held.add(key)
   elif not c.get(field,False) and key in held:page.keyboard.up(key);held.remove(key)
  if c.get('jumpPressed',False):page.keyboard.up('Space');page.keyboard.down('Space');held.add('Space')
  page.clock.run_for(16)
  if not photo and (s['x']>1000 if water else s.get('boss',{} ) and s['boss']['active']):
   page.screenshot(path=str(OUT/(f"water-{s['index']}.png" if water else 'boss.png')));photo=True
 for key in held:page.keyboard.up(key)
 return page.evaluate('__observe().state')

with sync_playwright() as p:
 browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
 for index in range(3):
  page,errors=observed_page(browser,index);state=drive(page)
  assert state['status']=='won',state
  if index==2:assert state['boss']['dead']
  page.clock.run_for(2000);expect(page.locator('#overlay')).to_be_visible();assert state['finish']['flagBonus']>0
  page.screenshot(path=str(OUT/f'won-{index}.png'))
  if index==0:
   page.locator('#play-button').click();continued=page.evaluate('__observe().state')
   assert continued['index']==1 and all(continued[k]==state[k] for k in ['lives','coins','score','power'])
   page.reload();assert page.locator('.level-record').first.inner_text().startswith('✓')
  assert not errors,errors
  print(json.dumps({'world':index+1,'actual_keyboard_complete':True,'lives':state['lives'],'guardian_defeated':bool(state['boss'] and state['boss']['dead']),'errors':errors}),flush=True);page.close()
 for index in range(3):
  page,errors=observed_page(browser,index)
  page.keyboard.down('ArrowRight');page.clock.run_for(300);page.keyboard.up('ArrowRight');page.clock.run_for(150);page.keyboard.press('KeyE');page.clock.run_for(32)
  assert page.evaluate('__observe().state.mounted')
  page.keyboard.down('Space');page.clock.run_for(650);assert page.evaluate('__observe().state.flutterUsed');page.screenshot(path=str(OUT/'mount.png'))
  page.keyboard.up('Space');page.clock.run_for(1100);page.keyboard.down('KeyX');page.clock.run_for(50);assert page.evaluate('__observe().state.tongue');page.keyboard.up('KeyX')
  page.keyboard.down('ArrowRight')
  for _ in range(100):
   if page.evaluate('__observe().state.x')>=267:break
   page.clock.run_for(16)
  page.keyboard.up('ArrowRight');page.clock.run_for(150);page.keyboard.down('ArrowDown');page.clock.run_for(32);page.keyboard.up('ArrowDown')
  assert page.evaluate('__observe().state.area')=='lagoon';assert not page.evaluate('__observe().state.mounted')
  page.clock.run_for(32);assert page.evaluate('__observe().state.mode').startswith('water:')
  state=drive(page,2600,water=True)
  assert state['area']=='main' and state['lives']==3 and state['pearls']==1,state
  assert not errors,errors
  print(json.dumps({'water_world':index+1,'keyboard_mount_flutter_tongue_swim_treasure_return':True,'lives':state['lives'],'errors':errors}),flush=True);page.close()
 # Real audio sample and persisted controls, without virtual clock.
 page=browser.new_page();errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.route('**/game.js',lambda r:r.fulfill(status=200,content_type='text/javascript',body=source+observer));page.goto(BASE);page.locator('#play-button').click();page.wait_for_timeout(150)
 peak=page.evaluate('__sample()');assert peak>.001,peak
 page.locator('#sound-button').click();page.wait_for_timeout(150);muted=page.evaluate('__sample()');assert muted<.001,muted
 page.locator('#sound-button').click();page.locator('#guide-button').click();page.locator('#music-toggle').uncheck();page.locator('#volume-slider').fill('37');page.locator('#volume-slider').dispatch_event('input');page.locator('#autorun-toggle').check();page.locator('#guide-done').click();page.wait_for_timeout(150)
 page.keyboard.press('KeyZ');effect=page.evaluate('__sample()');assert effect>.001,effect
 page.reload();page.locator('#guide-button').click();expect(page.locator('#music-toggle')).not_to_be_checked();expect(page.locator('#autorun-toggle')).to_be_checked();expect(page.locator('#volume-slider')).to_have_value('37');assert not errors,errors
 print(json.dumps({'music_peak':peak,'muted_peak':muted,'music_off_effect_peak':effect,'settings_persist':True,'errors':errors}),flush=True);page.close()
 # Exact, unmodified offline release. All interaction is real multi-touch.
 artifact=ROOT/'play.html';before=hashlib.sha256(artifact.read_bytes()).hexdigest();subprocess.run(['npm','run','build'],cwd=ROOT,check=True);assert before==hashlib.sha256(artifact.read_bytes()).hexdigest()
 context=browser.new_context(viewport={'width':390,'height':844},is_mobile=True,has_touch=True,offline=True)
 page=context.new_page();errors=[];requests=[];page.on('pageerror',lambda e:errors.append(str(e)));page.on('request',lambda r:requests.append(r.url))
 page.clock.install(time=NOW);page.set_content(artifact.read_text(),wait_until='load');page.clock.pause_at(NOW+timedelta(seconds=2));page.locator('#play-button').tap();client=context.new_cdp_session(page)
 def center(c):return page.locator(f'[data-control={c}]').evaluate('(e)=>{const r=e.getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2};}')
 def hold(controls,ms):client.send('Input.dispatchTouchEvent',{'type':'touchStart','touchPoints':[dict(center(c),id=i) for i,c in enumerate(controls)]});page.clock.run_for(ms)
 def release():client.send('Input.dispatchTouchEvent',{'type':'touchEnd','touchPoints':[]})
 hold(['right'],300);release();page.clock.run_for(150);expect(page.locator('[data-control=interact]')).to_be_enabled();page.locator('[data-control=interact]').tap();page.clock.run_for(32);expect(page.locator('#ability-status')).to_contain_text('苔角兽')
 hold(['jump','attack','right'],180)
 for c in ['jump','attack','right']:assert 'pressed' in page.locator(f'[data-control={c}]').get_attribute('class')
 page.screenshot(path=str(OUT/'mobile-mount.png'),full_page=True);release();page.locator('#restart-button').tap()
 hold(['right'],750);release();page.clock.run_for(150);hold(['down'],32);release();expect(page.locator('#region-label')).to_contain_text('蓝湾码头')
 hold(['right'],1100);hold(['right','jump'],350);expect(page.locator('#ability-status')).to_contain_text('游泳');page.screenshot(path=str(OUT/'mobile-water.png'),full_page=True);release();hold(['down'],220);release();expect(page.locator('#ability-status')).to_contain_text('游泳');assert not page.locator('.mobile-controls .pressed').count()
 page.locator('#pause-button').tap();timer=page.locator('#timer').inner_text();page.clock.run_for(2000);expect(page.locator('#timer')).to_have_text(timer);page.locator('#play-button').tap();page.clock.run_for(32)
 page.locator('#fullscreen-button').tap();page.clock.run_for(150);assert page.evaluate('Boolean(document.fullscreenElement)')
 ratio=page.locator('#game-viewport').evaluate('(e)=>{const r=e.getBoundingClientRect(),c=document.getElementById("game");return Math.abs(c.width/c.height-r.width/r.height)}');assert ratio<.003
 page.locator('#exit-fullscreen').tap();page.clock.run_for(150)
 for width in [390,320]:
  page.set_viewport_size({'width':width,'height':844});page.clock.run_for(50);assert page.evaluate('document.documentElement.scrollWidth')==width
  boxes=[page.locator(f'[data-control={c}]').bounding_box() for c in ['down','interact','attack','jump']]
  for a,b in zip(boxes,boxes[1:]):assert a['x']+a['width']<=b['x']-1,(width,a,b)
 assert not errors,errors;assert not requests,requests
 print(json.dumps({'exact_offline_release':True,'repeatable':True,'mobile_mount_three_finger_jump_attack':True,'mobile_swim_dive':True,'pause_fullscreen_and_320px_controls':True,'network_requests':requests,'errors':errors,'bytes':artifact.stat().st_size}),flush=True)
 browser.close()
