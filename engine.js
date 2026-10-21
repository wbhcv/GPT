export const HEIGHT=520, GROUND=440;
export const PHYSICS=Object.freeze({walk:255,run:340,acceleration:1650,brake:2700,friction:2200,airAcceleration:1000,airDrag:85,gravity:1800,jump:720,runJump:55,coyote:.11,buffer:.13});
export const THEMES=[
 {name:'晴风草甸',subtitle:'SUNNY MEADOW',rank:'进阶 · 节奏跳跃',sky:['#c8e9df','#f2f2d5'],hill:'#92bea0',far:'#b2d5bb',grass:'#86b57a',earth:'#d1bf9c',accent:'#4b977d',regions:['苔木村','林间水道','风车花园','遗迹小径','珊瑚城堡']},
 {name:'暮色峡谷',subtitle:'GOLDEN CANYON',rank:'困难 · 时机连跳',sky:['#eeb5a7','#fae4bf'],hill:'#ba8a8b',far:'#dfb4a0',grass:'#bdab7e',earth:'#ba9586',accent:'#a66d7f',regions:['落日码头','瀑布悬桥','砂岩峡谷','水车小镇','霞光钟楼']},
 {name:'星光高地',subtitle:'STARLIGHT HEIGHTS',rank:'高手 · 极限穿越',sky:['#314764','#8495b2'],hill:'#486f80',far:'#617c98',grass:'#7caaa6',earth:'#6b8291',accent:'#a5bbba',regions:['月下遗迹','荧光森林','浮空回廊','钟摆长桥','星之要塞']}
];
const layouts=[
 {width:4300,floors:[[0,735,440],[870,540,440],[1560,700,420],[2420,750,440],[3330,970,440]],platforms:[[330,350,112],[540,270,118],[1180,345,116],[1630,325,110],[1840,235,118],[2110,315,104],[2500,345,110],[2740,265,104],[3060,310,96],[3500,345,112],[3710,265,108]],blocks:[[455,335,'fire'],[1290,350,'coin'],[2010,315,'star'],[2780,340,'life'],[3530,340,'fire']],hidden:[[300,300,'life'],[3610,230,'star']],bricks:[[489,335,1],[1940,315,3],[2820,340,3]],pipes:[[1010,380,1],[1780,364,0],[3400,378,0]],springs:[[1569,420],[3450,440]],spikes:[[2190,420,48],[2700,440,56],[4050,440,64]],flames:[[1135,440,82,3.9,1,1.1]],crumble:[3,8],moving:[[775,440,78,110,0],[3020,235,84,0,45]],enemies:[['walker',650,580,725],['turtle',1320,1180,1395],['flyer',1910,1840,2160],['walker',2630,2540,2770],['walker',3090,3060,3155],['turtle',3670,3600,3890]],checkpoint:[2460,440],relics:[[605,238],[1935,203]],tunnel:[2890,360,165]},
 {width:4700,floors:[[0,710,440],[860,700,430],[1760,700,440],[2660,830,420],[3680,1020,440]],platforms:[[300,350,110],[500,265,100],[1040,335,104],[1290,250,100],[1830,345,108],[2070,265,108],[2380,330,80],[2740,320,112],[2990,240,96],[3260,315,96],[3860,345,108],[4100,265,112]],blocks:[[460,335,'fire'],[1370,350,'star'],[2110,345,'coin'],[3060,335,'life'],[4120,340,'fire']],hidden:[[1090,265,'life'],[3960,265,'star']],bricks:[[494,335,3],[1410,350,3],[3100,335,4]],pipes:[[950,370,1],[1930,380,0],[3910,375,0]],springs:[[1770,440],[2800,420]],spikes:[[2210,440,64],[3380,420,64],[4380,440,80]],flames:[[1210,430,96,3.6,1.1,.2],[2050,440,102,3.4,1.15,1.7],[4010,440,104,3.5,1.1,.8]],crumble:[1,4,6,9],moving:[[1600,440,72,130,0],[2490,440,76,170,0],[3550,440,72,145,0]],enemies:[['turtle',625,535,700],['walker',1120,1090,1175],['walker',1460,1330,1545],['flyer',2270,2010,2370],['turtle',2880,2830,3100],['walker',3060,2960,3210],['flyer',4290,4140,4480],['walker',4280,4180,4460]],checkpoint:[2710,420],relics:[[1360,218],[3020,208]]},
 {width:5100,floors:[[0,640,440],[825,580,440],[1625,650,420],[2495,775,440],[3490,1610,440]],platforms:[[285,350,100],[490,265,96],[940,350,94],[1160,260,100],[1690,320,100],[1920,235,110],[2180,315,90],[2580,340,100],[2810,260,96],[3100,320,86],[3620,345,110],[3880,260,110],[4170,315,100],[4440,235,104]],blocks:[[440,335,'fire'],[1260,350,'star'],[2030,310,'coin'],[2940,340,'life'],[4280,335,'fire']],hidden:[[980,170,'life'],[4380,240,'star']],bricks:[[474,335,3],[2070,310,4],[4320,335,4]],pipes:[[860,380,1],[1750,360,0],[3760,375,0]],springs:[[1635,420],[3550,440]],spikes:[[2205,420,64],[2720,440,64],[3940,440,80],[4600,440,64]],flames:[[1080,440,110,3.2,1.15,.8],[2095,420,112,3.1,1.2,1.9],[2895,440,118,3,1.25,.3],[4530,440,118,3.2,1.2,1.4]],crumble:[1,3,6,10,11],moving:[[1470,440,62,170,0],[2340,440,66,195,0],[3340,440,62,190,0],[3990,215,68,0,60]],enemies:[['walker',580,485,630],['flyer',1100,990,1320,330],['turtle',1270,1140,1395],['flyer',2030,1840,2260],['walker',2070,2010,2175],['turtle',2760,2680,3010],['turtle',3190,3175,3255],['turtle',3990,3985,4090],['flyer',4200,4060,4360],['walker',4680,4670,4810]],checkpoint:[2540,440],relics:[[1980,203],[4500,203]],tunnel:[3030,360,140]}
];
const rect=(x,y,w,h,kind,extra={})=>({x,y,w,h,kind,...extra});
const approach=(a,b,n)=>a<b?Math.min(a+n,b):Math.max(a-n,b);
export const overlaps=(a,b)=>a.w>0&&b.w>0&&a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;
export const solidActive=s=>!s.broken&&(!s.hidden||s.revealed);
export const groundAt=(l,x)=>l.floors.find(f=>x>=f.x&&x<f.x+f.w)?.y??GROUND;
const block=(x,y,reward,hidden=false)=>rect(x,y,34,34,'block',{reward,hidden,revealed:!hidden,used:false,bump:0});
const item=(x,y,type,vx=0)=>({x,y,w:24,h:26,type,vx,vy:0,taken:false});
function sideRoom(index,water=false){
 const floors=water?[rect(0,440,215,180,'ground'),rect(215,480,1415,150,'ground'),rect(1630,440,250,180,'ground')]:[rect(0,440,1320,180,'ground')];
 const platforms=(water?[[460,335,110],[900,260,110],[1260,340,120]]:[[260,350,140],[500,270,140],[750,350,140]]).map(([x,y,w])=>rect(x,y,w,22,'platform'));
 const blocks=water?[]:[block(430,340,'star'),block(910,340,'life')];
 const pipes=[rect(water?1750:1130,380,64,60,'pipe',{exit:true,lagoon:water})];
 const coins=water?Array.from({length:25},(_,i)=>({x:280+i*53,y:260+Math.sin(i*.55)*70,taken:false})):Array.from({length:30},(_,i)=>({x:280+(i%10)*54,y:155+Math.floor(i/10)*42,taken:false}));
 const enemies=water?[[570,370,500,720],[1030,300,920,1150],[1360,380,1250,1510]].map(([x,y,min,max],i)=>({type:'fish',x,y,baseY:y,w:30,h:24,min,max,dir:i%2?1:-1,speed:50+index*12,dead:false,squash:0})):[];
 const bricks=water?[]:[rect(0,0,1320,60,'ceiling')];
 return {kind:water?'lagoon':'cave',width:water?1880:1320,theme:THEMES[index],floors,platforms,blocks,pipes,bricks,coins,enemies,
 solids:[...floors,...platforms,...blocks,...pipes,...bricks],moving:[],crumbles:[],flames:[],springs:[],mounts:[],items:[],
 spikes:water?[[490,64],[950,72],[1440,64]].map(([x,w])=>rect(x,458,w,22,'spike')):[],
 waters:water?[rect(215,155,1415,365,'water')]:[],currents:water?[rect(660,180,180,280,'current',{push:45+index*8}),rect(1190,170,180,280,'current',{push:-50-index*8})]:[],
 relics:water?[]:[{x:570,y:235,taken:false}],pearls:water?[{x:1120,y:205,taken:false}]:[],checkpoint:null,goal:null,
 regions:water?[[0,'蓝湾码头'],[215,'珊瑚水道 · 跳跃上浮 / ↓ 下潜'],[660,'顺流水廊 →'],[1050,'蓝湾宝珠 · 留意逆流'],[1630,'右侧水管按 ↓ 返回']]:[[0,'地下宝库 · 右侧水管按 ↓ 返回']]};
}
export function makeLevel(index=0){
 const s=layouts[index];if(!s)throw new RangeError('Unknown world');
 const floors=s.floors.map(([x,w,y])=>rect(x,y,w,HEIGHT-y+110,'ground'));
 const platforms=s.platforms.map(([x,y,w])=>rect(x,y,w,22,'platform'));
 const crumbles=s.crumble.map(i=>Object.assign(platforms[i],{kind:'crumble',triggered:false,broken:false,countdown:0,delay:.78-index*.1,restoreTimer:0}));
 const blocks=[...s.blocks.map(([x,y,r])=>block(x,y,r)),...s.hidden.map(([x,y,r])=>block(x,y,r,true))];
 const bricks=s.bricks.flatMap(([x,y,n])=>Array.from({length:n},(_,i)=>rect(x+i*34,y,34,34,'brick',{bump:0}))).filter(b=>!blocks.some(a=>overlaps(a,b)));
 const coinBrick=bricks.find(b=>b.x>1800);if(coinBrick)coinBrick.coinsLeft=8;
 if(s.tunnel)bricks.push(rect(s.tunnel[0],s.tunnel[1],s.tunnel[2],36,'ruin'));
 const stairs=[0,1,2,3].map(i=>rect(s.width-445+i*42,GROUND-(i+1)*28,42,(i+1)*28,'stone'));
 const pipes=s.pipes.map(([x,y,bonus])=>rect(x,y,64,groundAt({floors},x)-y,'pipe',{bonus:Boolean(bonus)}));
 const springs=s.springs.map(([x,y])=>rect(x,y-15,36,15,'spring',{compression:0}));
 const moving=s.moving.map(([x,y,w,rx,ry],i)=>rect(x,y,w,18,'moving',{originX:x,originY:y,rx,ry,phase:i*.8,speed:1.3+index*.325,dx:0,dy:0}));
 const spikes=s.spikes.map(([x,y,w])=>rect(x,y-22,w,22,'spike'));
 const flames=s.flames.map(([x,y,h,period,duration,offset])=>rect(x,y-h,28,h,'flame',{period,duration,offset,warmup:.65,state:'idle',phase:0}));
 const coins=[];
 for(const f of floors)for(let x=Math.max(240,f.x+100);x<f.x+f.w-100;x+=130)coins.push({x,y:f.y-32,taken:false});
 for(const p of platforms)for(let x=p.x+26;x<p.x+p.w-12;x+=42)coins.push({x,y:p.y-28,taken:false});
 for(let i=1;i<floors.length;i++){const end=floors[i-1].x+floors[i-1].w,start=floors[i].x;for(let j=1;j<4;j++)coins.push({x:end+(start-end)*j/4,y:floors[i-1].y-78-Math.sin(j*Math.PI/4)*30,taken:false});}
 const enemies=s.enemies.map(([type,x,min,max,altitude],i)=>{const y=type==='flyer'?(altitude??255):groundAt({floors},x)-26;return {type,x,y,baseY:y,w:31,h:26,min,max,dir:i%2?1:-1,speed:68+index*17+(type==='flyer'?10:0),dead:false,squash:0,shell:false,sliding:false,shellTimer:0,grace:0,vy:0};});
 for(const pipe of pipes.filter(p=>!p.bonus))enemies.push({type:'plant',x:pipe.x+19,y:pipe.y+8,w:26,h:36,pipe,baseY:pipe.y+8,phase:pipe.x*.01,rise:0,dead:false,squash:0});
 const checkpoint={x:s.checkpoint[0],y:s.checkpoint[1],active:false};
 const l={kind:'main',width:s.width,theme:THEMES[index],floors,platforms,blocks,bricks,pipes,springs,moving,crumbles,flames,spikes,coins,enemies,
 solids:[...floors,...platforms,...blocks,...bricks,...stairs,...pipes,...moving,...springs],waters:[],currents:[],pearls:[],items:[item(235,412,'growth')],
 relics:s.relics.map(([x,y])=>({x,y,taken:false})),checkpoint,goal:{x:s.width-160,y:270,w:35,h:170},regions:floors.map((f,i)=>[f.x,THEMES[index].regions[i]]),
 bonus:sideRoom(index),lagoon:sideRoom(index,true),waterGate:rect(275,432,44,8,'watergate')};
 l.mounts=[180,checkpoint.x+95].map((x,i)=>({x,y:groundAt(l,x)-32,w:44,h:32,homeX:x,homeY:groundAt(l,x)-32,vx:0,vy:0,dir:1,flee:0,id:i}));
 if(index===2){l.width+=720;floors.at(-1).w+=720;l.goal.x=l.width-160;l.boss={x:5110,y:376,w:64,h:64,min:5020,max:5350,hp:6,maxHp:6,active:false,dead:false,invincible:0,clock:0,phase:'patrol',dir:-1,vy:0,grounded:true};l.regions.push([4860,'星门守卫 · 三次跳踩或六颗火球']);}
 l.totalCoins=coins.length+l.bonus.coins.length+l.lagoon.coins.length+blocks.filter(b=>b.reward==='coin').length+8;
 return l;
}
export class Game {
 constructor(index=0){this.viewWidth=1152;this.loadLevel(index);}
 loadLevel(index){
  this.index=index;this.mainLevel=makeLevel(index);this.level=this.mainLevel;this.area='main';this.status='ready';
  Object.assign(this,{lives:3,coins:0,score:0,relics:0,pearls:0,secrets:0,nextLifeAt:100,time:240,clock:0,camera:0,coyote:0,jumpBuffer:0,respawnTimer:0,pipeCooldown:0,fireCooldown:0,mountCooldown:0,tongueCooldown:0,swimCooldown:0,finishClock:0});
  this.events=[];this.projectiles=[];this.enemyShots=[];this.tongue=null;this.finish=null;this.reason='';this.returnPipe=null;this.visitedCave=false;this.visitedLagoon=false;this.lowTimeWarned=false;
  this.player={x:95,y:400,w:28,h:40,vx:0,vy:0,grounded:true,facing:1,power:'small',star:0,invincible:0,crouched:false,boost:0,squash:0,runTime:0,support:null,mount:null,swimming:false,flutter:0,flutterUsed:false,stompChain:0,skidding:false};
 }
 start(){if(this.status==='ready')this.status='playing';}
 pause(){if(this.status==='playing')this.status='paused';else if(this.status==='paused')this.status='playing';}
 restart(){this.loadLevel(this.index);this.start();}
 nextLevel(){if(this.status!=='won'||this.index===2)return false;const carry={lives:this.lives,coins:this.coins,score:this.score,nextLifeAt:this.nextLifeAt,power:this.player.power};this.loadLevel(this.index+1);Object.assign(this,{lives:carry.lives,coins:carry.coins,score:carry.score,nextLifeAt:carry.nextLifeAt});this.player.power=carry.power;this.fitHeight(this.standingHeight());this.start();return true;}
 emit(type,data={}){this.events.push({type,...data});}
 takeEvents(){return this.events.splice(0);}
 activeSolids(){return this.level.solids.filter(solidActive);}
 standingHeight(){return (this.player.power==='small'?40:56)+(this.player.mount?24:0);}
 fitHeight(h){const p=this.player,target={...p,y:p.y+p.h-h,h};if(h>p.h&&this.activeSolids().some(s=>overlaps(target,s)))return false;p.y=target.y;p.h=h;return true;}
 waterAt(p=this.player){return this.level.waters.find(w=>p.x+p.w/2>w.x&&p.x+p.w/2<w.x+w.w&&p.y+p.h*.55>w.y&&p.y<w.y+w.h);}
 nearbyMount(){const p=this.player;return this.level.mounts.find(m=>m.flee<=0&&Math.abs(m.x+22-p.x-14)<56&&Math.abs(m.y+32-p.y-p.h)<36);}
 toggleMount(launch=true){const p=this.player;
  if(p.mount){const m=p.mount;p.mount=null;this.fitHeight(this.standingHeight());Object.assign(m,{x:p.x-8,y:p.y+p.h-32,vx:0,vy:0,dir:p.facing});p.flutter=0;p.flutterUsed=false;this.tongue=null;this.mountCooldown=.35;if(launch){p.vy=-560;p.grounded=false;p.support=null;p.boost=.12;this.coyote=this.jumpBuffer=0;}this.emit('dismount',{x:p.x+14,y:p.y+p.h});return true;}
  if(this.mountCooldown>0||p.swimming||this.area!=='main')return false;const m=this.nearbyMount();if(!m)return false;
  if(!this.fitHeight(this.standingHeight()+24)&&(p.power==='small'||!this.fitHeight(58))){this.emit('mountblocked');return false;}
  p.mount=m;p.flutterUsed=false;p.flutter=0;this.mountCooldown=.35;m.x=p.x-8;m.y=p.y+p.h-32;m.dir=p.facing;this.emit('mount',{x:m.x+22,y:m.y});return true;
 }
 collectCoins(n=1,x=this.player.x,y=this.player.y){this.coins+=n;this.score+=n*10;this.emit('coin',{x,y,amount:n});while(this.coins>=this.nextLifeAt){this.nextLifeAt+=100;this.lives++;this.emit('life',{x,y,reason:'coins'});}}
 collectItem(a){if(a.taken)return;a.taken=true;const p=this.player;if(a.type==='life'){this.lives++;this.score+=200;this.emit('life',a);}else if(a.type==='star'){p.star=10;this.score+=100;}else{p.power=a.type==='fire'?'fire':p.power==='fire'?'fire':'big';this.fitHeight(this.standingHeight());this.score+=100;}this.emit('power',{x:a.x,y:a.y,power:a.type});}
 chainReward(chain,x,y){if(chain>8){this.lives++;this.emit('life',{x,y,reason:'combo'});return 0;}const points=[100,200,400,800,1000,2000,4000,8000][Math.max(0,chain-1)];this.score+=points;return points;}
 defeat(e,cause='stomp',chain=1){if(e.dead)return;e.dead=true;e.squash=.35;const points=this.chainReward(chain,e.x+e.w/2,e.y);this.emit(cause,{x:e.x+e.w/2,y:e.y,points,chain});}
 hitBlock(b){if(b.broken)return;if(b.used){this.emit('bump',{x:b.x,y:b.y});return;}b.bump=1;
  for(const e of this.level.enemies)if(!e.dead&&e.type!=='plant'&&e.x+e.w>b.x-3&&e.x<b.x+b.w+3&&Math.abs(e.y+e.h-b.y)<9)this.defeat(e,'blockhit');
  for(const c of this.level.coins)if(!c.taken&&c.x>b.x-8&&c.x<b.x+b.w+8&&Math.abs(c.y-b.y)<35){c.taken=true;this.collectCoins(1,c.x,c.y);}
  if(b.hidden&&!b.revealed){b.revealed=true;this.secrets++;this.emit('secret',{x:b.x+17,y:b.y});}
  if(b.kind==='brick'){if(b.coinsLeft>0){b.coinsLeft--;this.collectCoins(1,b.x+17,b.y-12);if(!b.coinsLeft)b.used=true;}else if(this.player.power!=='small'){b.broken=true;this.score+=20;this.emit('break',{x:b.x+17,y:b.y+17});}else this.emit('bump',{x:b.x,y:b.y});return;}
  if(b.kind!=='block')return;b.used=true;if(b.reward==='coin')this.collectCoins(1,b.x+17,b.y-12);else this.level.items.push({...item(b.x+5,b.y-28,b.reward,b.reward==='fire'?0:b.reward==='star'?145:65),emerging:.28});this.emit('block',{x:b.x+17,y:b.y});
 }
 hurt(reason='enemy'){if(this.status!=='playing')return;const p=this.player;if(reason!=='fall'&&(p.invincible>0||p.star>0))return;this.reason=reason;
  if(reason!=='fall'&&p.mount){const m=p.mount;this.toggleMount(false);m.flee=1.8;m.dir=p.facing;p.invincible=1.8;this.emit('mountlost',{x:m.x+22,y:m.y});return;}
  if(reason!=='fall'&&p.power!=='small'){p.power='small';this.fitHeight(40);p.invincible=1.8;this.emit('shrink',{x:p.x+14,y:p.y});return;}
  this.lives--;p.stompChain=0;this.emit('hurt',{x:p.x+14,y:p.y+20});if(this.lives<=0)this.status='gameover';else{this.status='respawning';this.respawnTimer=.7;}
 }
 respawn(){this.level=this.mainLevel;this.area='main';this.projectiles=[];this.enemyShots=[];this.tongue=null;const p=this.player,f=this.level.checkpoint;Object.assign(p,{power:'small',h:40,star:0,crouched:false,boost:0,mount:null,swimming:false,flutter:0,flutterUsed:false,stompChain:0,skidding:false,x:f.active?f.x+20:95,y:(f.active?f.y:GROUND)-40,vx:0,vy:0,grounded:true,invincible:1.8,support:null});
  for(const m of this.level.mounts)Object.assign(m,{x:m.homeX,y:m.homeY,vx:0,vy:0,flee:0});this.coyote=this.jumpBuffer=this.swimCooldown=0;this.pipeCooldown=1;
  const b=this.level.boss;if(b?.active&&!b.dead){Object.assign(b,{x:5110,y:376,hp:6,invincible:0,clock:0,phase:'patrol',dir:-1,vy:0,grounded:true});if(!this.level.items.some(i=>i.arena&&!i.taken))this.level.items.push({...item(4900,414,'fire'),arena:true});}
  this.camera=Math.max(0,Math.min(this.level.width-this.viewWidth,p.x-this.viewWidth*.33));this.status='playing';this.emit('respawn');
 }
 useWaterGate(){const p=this.player,g=this.mainLevel.waterGate;if(this.area!=='main'||!p.grounded||Math.abs(p.y+p.h-GROUND)>6||this.pipeCooldown>0||Math.abs(p.x+14-g.x-22)>32)return false;if(p.mount)this.toggleMount(false);this.level=this.mainLevel.lagoon;this.area='lagoon';if(!this.visitedLagoon){this.visitedLagoon=true;this.secrets++;}this.enterArea(95,GROUND);return true;}
 enterArea(x,feet){const p=this.player;Object.assign(p,{x,y:feet-p.h,vx:0,vy:0,grounded:true,support:null,swimming:false,flutter:0});this.coyote=this.jumpBuffer=this.swimCooldown=0;this.projectiles=[];this.enemyShots=[];this.tongue=null;this.pipeCooldown=1;this.camera=Math.max(0,Math.min(this.level.width-this.viewWidth,p.x-this.viewWidth*.33));this.emit('area',{area:this.area});}
 usePipe(){const p=this.player;if(this.pipeCooldown>0||!p.grounded)return false;const pipe=this.level.pipes.find(s=>(s.bonus||s.exit)&&p.x+14>s.x+5&&p.x+14<s.x+s.w-5&&Math.abs(p.y+p.h-s.y)<4);if(!pipe)return false;if(p.mount)this.toggleMount(false);
  if(pipe.bonus){this.returnPipe=pipe;this.level=this.mainLevel.bonus;this.area='cave';if(!this.visitedCave){this.visitedCave=true;this.secrets++;}this.enterArea(95,GROUND);}else{const entrance=pipe.lagoon?this.mainLevel.waterGate:this.returnPipe;this.level=this.mainLevel;this.area='main';const x=entrance.x+entrance.w+18;this.enterArea(x,groundAt(this.level,x));}return true;
 }
 moveX(b,dx,solids){b.x+=dx;for(const s of solids)if(overlaps(b,s)){if(dx>0)b.x=s.x-b.w;else if(dx<0)b.x=s.x+s.w;b.vx=0;}}
 shoot(){const p=this.player;if(p.power!=='fire'||this.fireCooldown>0||this.projectiles.length>=3)return;this.fireCooldown=.28;this.projectiles.push({x:p.x+(p.facing>0?p.w+3:-13),y:p.y+p.h*.48,w:10,h:10,vx:p.facing*(p.swimming?280:430),vy:p.swimming?0:80,ttl:2.5,bounces:0,underwater:p.swimming});this.emit(p.swimming?'bubble':'shoot',{x:p.x+14,y:p.y+20});}
 mountAttack(){const p=this.player;if(!p.mount||this.tongueCooldown>0)return;this.tongueCooldown=.6;const x=p.facing>0?p.x+p.w:p.x-86;this.tongue={x,y:p.y+p.h-49,w:86,h:29,time:.2,dir:p.facing};this.emit('tongue',{x:p.x+14,y:this.tongue.y});
  const s=this.activeSolids().filter(s=>overlaps(this.tongue,s)).sort((a,b)=>p.facing*(a.x-b.x))[0];if(s){const edge=p.facing>0?s.x:s.x+s.w;this.tongue.w=Math.max(0,p.facing>0?edge-x:x+86-edge);if(p.facing<0)this.tongue.x=edge;}
  const e=this.level.enemies.filter(e=>!e.dead&&(e.type!=='plant'||e.rise>10)&&overlaps(this.tongue,e)).sort((a,b)=>p.facing*(a.x-b.x))[0];if(e){this.defeat(e,'swallow');this.collectCoins(1,e.x,e.y);}if(this.level.boss&&overlaps(this.tongue,this.level.boss))this.hitBoss();
 }
 hitBoss(damage=1){const b=this.level.boss;if(!b||!b.active||b.dead||b.invincible>0)return false;b.hp=Math.max(0,b.hp-damage);b.invincible=.7;this.emit('bosshit',{x:b.x+32,y:b.y});if(!b.hp){b.dead=true;this.enemyShots=[];this.score+=2000;this.emit('bosswin',{x:b.x+32,y:b.y});}return true;}
 updateBoss(dt){const b=this.level.boss;if(!b||b.dead)return;const p=this.player;if(!b.active&&p.x>4860){b.active=true;this.level.checkpoint={x:4870,y:440,active:true};this.level.items.push({...item(4900,414,'fire'),arena:true});this.emit('bossstart',{x:b.x,y:b.y});}if(!b.active)return;b.invincible=Math.max(0,b.invincible-dt);b.clock+=dt;const phase=b.clock%3.8,old=b.phase;b.phase=phase<2.1?'patrol':phase<2.8?'warning':phase<3.05?'fire':'recover';
  if(b.phase==='patrol'){b.x+=b.dir*80*dt;if(b.x<b.min){b.x=b.min;b.dir=1;}if(b.x+b.w>b.max){b.x=b.max-b.w;b.dir=-1;}}
  if(b.phase==='fire'&&old!=='fire'){const dir=p.x+14<b.x+32?-1:1;this.enemyShots.push({x:b.x+32+dir*40,y:415,w:18,h:18,vx:dir*200,ttl:3});this.emit('bossfire',{x:b.x+32,y:b.y+32});}
  if(phase<.03&&b.grounded){b.vy=-480;b.grounded=false;}b.vy+=1800*dt;b.y+=b.vy*dt;if(b.y+b.h>=440){b.y=376;b.vy=0;b.grounded=true;}if(p.x>5400-p.w){p.x=5400-p.w;p.vx=Math.min(0,p.vx);}
  for(const a of this.enemyShots){a.x+=a.vx*dt;a.ttl-=dt;if(overlaps(p,a)){this.hurt('flame');a.ttl=0;}}this.enemyShots=this.enemyShots.filter(a=>a.ttl>0);
 }
 updatePlatforms(dt){for(const s of this.level.moving){const x=s.originX+Math.sin(this.clock*s.speed+s.phase)*s.rx/2,y=s.originY+Math.sin(this.clock*(s.speed+.1)+s.phase)*s.ry;s.dx=x-s.x;s.dy=y-s.y;s.x=x;s.y=y;}
  for(const s of this.level.springs)s.compression=Math.max(0,s.compression-dt);
  for(const s of this.level.crumbles){if(s.broken){s.restoreTimer-=dt;if(s.restoreTimer<=0&&!overlaps(this.player,s)){s.broken=false;s.triggered=false;}}else if(s.triggered){s.countdown=Math.max(0,s.countdown-dt);if(!s.countdown){s.broken=true;s.restoreTimer=3;this.emit('collapse',{x:s.x+s.w/2,y:s.y});}}}
  for(const f of this.level.flames){f.phase=((this.clock+f.offset)%f.period+f.period)%f.period;const start=f.period-f.duration;f.state=f.phase>=start?'active':f.phase>=start-f.warmup?'warning':'idle';}
 }
 updateItems(dt,solids){for(const a of this.level.items){if(a.taken)continue;if(a.emerging>0){a.emerging=Math.max(0,a.emerging-dt);continue;}const oldX=a.x;this.moveX(a,a.vx*dt,solids);if(a.vx===0&&a.x!==oldX)a.vx=a.x>oldX?-65:65;a.vy=Math.min(600,a.vy+900*dt);const y=a.y;a.y+=a.vy*dt;for(const s of solids)if(overlaps(a,s)&&a.vy>=0&&y+a.h<=s.y+1){a.y=s.y-a.h;a.vy=a.type==='star'?-360:0;}if(overlaps(this.player,a))this.collectItem(a);if(a.y>620)a.taken=true;}}
 updateMounts(dt,solids){for(const m of this.level.mounts){if(m===this.player.mount){m.x=this.player.x-8;m.y=this.player.y+this.player.h-32;m.dir=this.player.facing;continue;}m.flee=Math.max(0,m.flee-dt);const f=this.level.floors.find(f=>m.x+22>=f.x&&m.x+22<f.x+f.w);if(m.flee>0&&f&&(m.x+m.dir*130*dt<f.x+2||m.x+m.w+m.dir*130*dt>f.x+f.w-2))m.dir*=-1;this.moveX(m,(m.flee>0?m.dir*130:0)*dt,solids);m.vy=Math.min(850,m.vy+1800*dt);const y=m.y;m.y+=m.vy*dt;for(const s of solids)if(overlaps(m,s)&&m.vy>=0&&y+m.h<=s.y+1){m.y=s.y-m.h;m.vy=0;}if(m.y>620)Object.assign(m,{x:m.homeX,y:m.homeY,vx:0,vy:0,flee:0});}}
 updateEnemies(dt,solids){for(const e of this.level.enemies){if(e.dead){e.squash=Math.max(0,e.squash-dt);continue;}e.grace=Math.max(0,(e.grace||0)-dt);
  if(e.type==='plant'){const nearby=Math.abs(this.player.x+14-e.pipe.x-32)<70&&this.player.y+this.player.h<=e.pipe.y+4;const target=!nearby&&Math.sin(this.clock*1.6+e.phase)>.15?46:0;e.rise=approach(e.rise,target,65*dt);e.y=e.baseY-e.rise;}
  else if(e.shell){if(e.sliding){e.vx=e.dir*440;this.moveX(e,e.vx*dt,solids);if(!e.vx)e.dir*=-1;e.vy=Math.min(800,(e.vy||0)+1800*dt);const y=e.y;e.y+=e.vy*dt;for(const s of solids)if(overlaps(e,s)&&y+e.h<=s.y+1){e.y=s.y-e.h;e.vy=0;}for(const a of this.level.enemies)if(a!==e&&!a.dead&&(a.type!=='plant'||a.rise>10)&&overlaps(e,a))this.defeat(a,'shellhit',e.combo=(e.combo||0)+1);if(this.level.boss&&overlaps(e,this.level.boss))this.hitBoss(2);if(e.y>620||e.x<0||e.x>this.level.width)e.dead=true;}else{e.shellTimer-=dt;if(e.shellTimer<=0){e.shell=false;e.y-=8;e.h=26;}}}
  else{e.x+=e.dir*e.speed*dt;if(e.x<=e.min){e.x=e.min;e.dir=1;}if(e.x+e.w>=e.max){e.x=e.max-e.w;e.dir=-1;}if(e.type==='flyer'||e.type==='fish')e.y=e.baseY+Math.sin(this.clock*2+e.min*.01)*(e.type==='fish'?20:28);}
 }}
 updateShots(dt,solids){for(const a of this.projectiles){a.ttl-=dt;a.x+=a.vx*dt;if(solids.some(s=>overlaps(a,s)))a.ttl=0;a.vy+=(a.underwater?220:1200)*dt;const y=a.y;a.y+=a.vy*dt;for(const s of solids)if(overlaps(a,s)){if(a.vy>0&&y+a.h<=s.y+1){a.y=s.y-a.h;a.vy=a.underwater?-100:-280;a.bounces++;}else a.ttl=0;}for(const e of this.level.enemies)if(!e.dead&&(e.type!=='plant'||e.rise>10)&&a.ttl>0&&overlaps(a,e)){this.defeat(e,'firehit');a.ttl=0;}if(this.level.boss&&!this.level.boss.dead&&a.ttl>0&&overlaps(a,this.level.boss)){this.hitBoss();a.ttl=0;}}this.projectiles=this.projectiles.filter(a=>a.ttl>0&&a.y<590&&a.bounces<6);}
 update(dt,input={}){
  if(!Number.isFinite(dt)||dt<=0)return;dt=Math.min(dt,1/30);const p=this.player;
  if(this.status==='won'&&this.finish){this.finishClock+=dt;if(this.finishClock<.65){p.x=this.level.goal.x-18;p.y=approach(p.y,GROUND-p.h,310*dt);}else{p.y=GROUND-p.h;p.x=Math.min(this.level.width-72,p.x+150*dt);p.runTime+=150*dt/22;}p.facing=1;p.grounded=this.finishClock>=.65;p.vx=150;p.vy=0;if(p.mount){p.mount.x=p.x-8;p.mount.y=p.y+p.h-32;}this.followCamera(dt);return;}
  if(this.status==='respawning'){this.respawnTimer-=dt;if(this.respawnTimer<=0)this.respawn();return;}if(this.status!=='playing')return;
  const l=this.level;this.clock+=dt;this.time=Math.max(0,this.time-dt);if(this.time<=60&&!this.lowTimeWarned){this.lowTimeWarned=true;this.emit('hurry');}if(!this.time){this.lives=0;this.reason='timeout';this.status='gameover';this.emit('timeout');return;}
  for(const k of ['invincible','star','boost','squash'])p[k]=Math.max(0,p[k]-dt);for(const k of ['pipeCooldown','fireCooldown','mountCooldown','tongueCooldown','swimCooldown'])this[k]=Math.max(0,this[k]-dt);if(this.tongue){this.tongue.time-=dt;if(this.tongue.time<=0)this.tongue=null;}
  this.updatePlatforms(dt);const solids=this.activeSolids();if(p.grounded&&p.support?.kind==='moving'){this.moveX(p,p.support.dx,solids.filter(a=>a!==p.support));p.y+=p.support.dy;}
  if(input.down&&(this.useWaterGate()||this.usePipe()))return;
  const swimming=Boolean(this.waterAt());if(swimming!==p.swimming){if(swimming&&p.mount)this.toggleMount(false);if(!swimming&&p.swimming&&p.vy<0){p.vy=-420;p.boost=.15;}p.swimming=swimming;this.emit('splash',{x:p.x+14,y:p.y+p.h*.55});}
  if(input.interactPressed)this.toggleMount();const desired=this.standingHeight();const crouch=input.down&&p.grounded&&!p.swimming&&p.power!=='small';this.fitHeight(crouch?34+(p.mount?24:0):desired);p.crouched=p.h<desired;
  this.coyote=p.swimming?0:p.grounded?.11:Math.max(0,this.coyote-dt);this.jumpBuffer=input.jumpPressed?.13:Math.max(0,this.jumpBuffer-dt);
  const direction=(input.right?1:0)-(input.left?1:0),speed=p.swimming?(input.sprint?185:135):p.crouched?115:p.mount?(input.sprint?375:280):input.sprint?340:255;
  const skid=p.skidding;p.skidding=Boolean(!p.swimming&&p.grounded&&direction&&direction*p.vx<-100);
  const accel=p.swimming?(direction?600:500):direction?(p.grounded?(p.skidding?2700:1650):1000):(p.grounded?2200:85);p.vx=approach(p.vx,direction*speed,accel*dt);if(p.skidding&&!skid)this.emit('skid',{x:p.x+14,y:p.y+p.h});if(direction)p.facing=direction;
  if(p.swimming){p.flutter=0;p.support=null;if(!input.down&&(input.jumpPressed||input.jumpHeld)&&!this.swimCooldown){p.vy=-175;this.swimCooldown=.28;this.jumpBuffer=0;p.grounded=false;this.emit('swim',{x:p.x+14,y:p.y+p.h*.6});}p.vy=input.down?approach(Math.max(0,p.vy),150,850*dt):Math.min(115,p.vy+320*dt);}
  else{if(this.jumpBuffer>0&&this.coyote>0){const runBoost=Math.max(0,Math.min(1,(Math.abs(p.vx)-255)/85));p.vy=-(720+runBoost*55);p.grounded=false;p.support=null;p.flutterUsed=false;this.coyote=this.jumpBuffer=0;this.emit('jump',{x:p.x+14,y:p.y+p.h});}if(!input.jumpHeld&&p.vy<-310&&!p.boost)p.vy=-310;if(p.mount&&!p.grounded&&input.jumpHeld&&p.vy>-80&&!p.flutterUsed&&!p.boost){p.flutter=.38;p.flutterUsed=true;this.emit('flutter',{x:p.x+14,y:p.y+p.h});}if(p.flutter>0){p.flutter=Math.max(0,p.flutter-dt);if(input.jumpHeld)p.vy=Math.min(p.vy,-95);else p.flutter=0;}p.vy=Math.min(1000,p.vy+1800*dt);}
  const old={x:p.x,y:p.y,grounded:p.grounded,vy:p.vy};const flow=p.swimming?l.currents.filter(a=>overlaps(p,a)).reduce((n,a)=>n+a.push,0):0;this.moveX(p,(p.vx+flow)*dt,solids);p.x=Math.max(0,Math.min(l.width-p.w,p.x));p.y+=p.vy*dt;p.grounded=false;p.support=null;
  for(const s of l.solids){if(s.broken||!overlaps(p,s))continue;if(s.hidden&&!s.revealed&&!(p.vy<0&&old.y>=s.y+s.h-1))continue;if(p.vy>=0&&old.y+p.h<=s.y+1){p.y=s.y-p.h;p.vy=0;p.grounded=true;p.support=s;p.stompChain=0;p.flutterUsed=false;p.flutter=0;if(!old.grounded&&old.vy>250){p.squash=.12;this.emit('land',{x:p.x+14,y:s.y,heavy:old.vy>700});}if(s.kind==='crumble'&&!s.triggered){s.triggered=true;s.countdown=s.delay;this.emit('crumble',{x:s.x+s.w/2,y:s.y});}if(s.kind==='spring'){p.vy=-980;p.boost=.65;p.grounded=false;p.support=null;s.compression=.35;this.coyote=0;this.emit('spring',{x:s.x+18,y:s.y});}}else if(p.vy<0&&old.y>=s.y+s.h-1){p.y=s.y+s.h;p.vy=0;this.hitBlock(s);}}
  p.runTime+=Math.abs(p.vx)*dt/22;for(const b of [...l.blocks,...l.bricks])b.bump=Math.max(0,(b.bump||0)-dt*4);
  for(const c of l.coins)if(!c.taken&&overlaps(p,rect(c.x-10,c.y-10,20,20))){c.taken=true;this.collectCoins(1,c.x,c.y);}for(const r of l.relics)if(!r.taken&&overlaps(p,rect(r.x-15,r.y-15,30,30))){r.taken=true;this.relics++;this.score+=300;this.emit('relic',{x:r.x,y:r.y});}for(const r of l.pearls)if(!r.taken&&overlaps(p,rect(r.x-15,r.y-15,30,30))){r.taken=true;this.pearls++;this.score+=400;this.emit('pearl',{x:r.x,y:r.y});}
  this.updateItems(dt,solids);if(input.attack){if(p.mount)this.mountAttack();else this.shoot();}this.updateMounts(dt,solids);this.updateEnemies(dt,solids);this.updateShots(dt,solids);this.updateBoss(dt);if(this.status!=='playing')return;
  const b=l.boss;if(b?.active&&!b.dead&&overlaps(p,b)){if(p.vy>0&&old.y+p.h<=b.y+18){p.y=b.y-p.h;p.vy=input.jumpHeld?-660:-470;p.grounded=false;p.support=null;p.boost=.14;this.hitBoss(2);}else if(p.star>0)this.hitBoss(2);else{this.hurt('enemy');if(this.status!=='playing')return;}}
  for(const e of l.enemies){if(e.dead||(e.type==='plant'&&e.rise<10)||!overlaps(p,e))continue;if(p.star>0){this.defeat(e,'starhit');continue;}
   if(!p.swimming&&p.vy>0&&old.y+p.h<=e.y+12&&!['plant','fish'].includes(e.type)){p.y=e.y-p.h;p.vy=input.jumpHeld?-610:-440;p.grounded=false;p.support=null;p.stompChain++;p.boost=.09;if(e.type==='turtle'){const points=e.shell?0:this.chainReward(p.stompChain,e.x+15,e.y);if(!e.shell){e.shell=true;e.y+=8;e.h=18;}e.sliding=false;e.shellTimer=8;this.emit('stomp',{x:e.x+15,y:e.y,points,chain:p.stompChain});}else this.defeat(e,'stomp',p.stompChain);}
   else if(e.shell&&!e.sliding){e.sliding=true;e.dir=p.x+14<e.x+e.w/2?1:-1;e.grace=.3;e.combo=0;this.emit('kick',{x:e.x+15,y:e.y});}else if(!e.grace){this.hurt('enemy');if(this.status!=='playing')return;}
  }
  for(const s of l.spikes)if(overlaps(p,rect(s.x+3,s.y+5,s.w-6,s.h-5))){this.hurt('spike');if(this.status!=='playing')return;}for(const f of l.flames)if(f.state==='active'&&overlaps(p,rect(f.x+3,f.y+5,f.w-6,f.h-5))){this.hurt('flame');if(this.status!=='playing')return;}
  if(l.checkpoint&&!l.checkpoint.active&&p.x>l.checkpoint.x&&p.y+p.h<=l.checkpoint.y+15){l.checkpoint.active=true;this.emit('checkpoint',{x:l.checkpoint.x,y:l.checkpoint.y-70});}if(p.y>620){this.hurt('fall');return;}
  if(l.goal&&(!b||b.dead)&&p.x+p.w>=l.goal.x&&p.y<440){const height=440-(p.y+p.h/2),flagBonus=height>=155?2000:height>=115?1000:height>=70?500:100;this.finish={flagBonus,timeBonus:Math.floor(this.time)*2,lifeBonus:this.lives*100};this.finishClock=0;this.score+=flagBonus+this.finish.timeBonus+this.finish.lifeBonus;p.x=l.goal.x-18;p.vx=p.vy=0;p.support=null;this.status='won';this.emit('win',{x:l.goal.x,y:l.goal.y});}this.followCamera(dt);
 }
 followCamera(dt){const p=this.player,look=Math.max(-this.viewWidth*.12,Math.min(this.viewWidth*.12,p.vx*.28));const target=Math.max(0,Math.min(Math.max(0,this.level.width-this.viewWidth),p.x-this.viewWidth*.4+look));this.camera+=(target-this.camera)*Math.min(1,dt*8);}
}
