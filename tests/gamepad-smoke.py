"""Standard gamepad input simulation; requires Playwright and a running game server."""
from pathlib import Path
from datetime import datetime,timezone,timedelta
from playwright.sync_api import sync_playwright
import os,json
root=Path(__file__).resolve().parents[1]
source=(root/'game.js').read_text()+'\nwindow.__padState=()=>({status:game.status,x:game.player.x,y:game.player.y,vx:game.player.vx,vy:game.player.vy,mounted:Boolean(game.player.mount)});'
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox']);page=browser.new_page();errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.add_init_script("window.__pad={connected:true,mapping:'standard',axes:[0,0],buttons:Array.from({length:17},()=>({pressed:false}))};navigator.getGamepads=()=>[window.__pad];")
 page.route('**/game.js',lambda r:r.fulfill(status=200,content_type='text/javascript',body=source))
 now=datetime(2026,10,21,10,tzinfo=timezone.utc);page.clock.install(time=now);page.goto(os.environ.get('CLOUDHOP_TEST_URL','http://127.0.0.1:3000'));page.clock.pause_at(now+timedelta(seconds=2))
 page.evaluate('__pad.buttons[0].pressed=true');page.clock.run_for(32);assert page.evaluate('__padState().status')=='playing'
 page.evaluate('__pad.buttons[0].pressed=false;__pad.axes[0]=1;__pad.buttons[1].pressed=true');page.clock.run_for(300);assert page.evaluate('__padState().vx')==340
 page.evaluate('__pad.axes[0]=0;__pad.buttons[1].pressed=false;__pad.buttons[3].pressed=true');page.clock.run_for(32);assert page.evaluate('__padState().mounted')
 page.clock.run_for(150);assert page.evaluate('__padState().mounted')
 page.evaluate('__pad.buttons[3].pressed=false');page.clock.run_for(32);page.evaluate('__pad.buttons[3].pressed=true');page.clock.run_for(32);assert not page.evaluate('__padState().mounted');assert page.evaluate('__padState().vy')<0
 page.evaluate('__pad.buttons[9].pressed=true');page.clock.run_for(32);assert page.evaluate('__padState().status')=='paused';before=page.evaluate('__padState()');page.clock.run_for(300);assert before==page.evaluate('__padState()')
 page.evaluate('__pad.buttons[9].pressed=false');page.clock.run_for(32);page.evaluate('__pad.buttons[9].pressed=true');page.clock.run_for(32);assert page.evaluate('__padState().status')=='playing';assert not errors,errors
 print(json.dumps({'standard_gamepad_simulation':True,'A_start':True,'B_run':True,'Y_mount_dismount':True,'held_Y_and_Start_do_not_repeat':True,'Start_pause_resume':True,'errors':errors}))
 browser.close()
