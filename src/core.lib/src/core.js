const _0x47d4f=_0x5753;function _0x5753(_0x337cc7,_0x44e771){const _0x2cade5=_0x2cad();return _0x5753=function(_0x57532f,_0x1f102f){_0x57532f=_0x57532f-0x19a;let _0x1185f1=_0x2cade5[_0x57532f];return _0x1185f1;},_0x5753(_0x337cc7,_0x44e771);}(function(_0x2ccafe,_0x3744e8){const _0xfc528b=_0x5753,_0x22d023=_0x2ccafe();while(!![]){try{const _0x2f759a=parseInt(_0xfc528b(0x1a7))/0x1*(parseInt(_0xfc528b(0x1d0))/0x2)+parseInt(_0xfc528b(0x23c))/0x3*(parseInt(_0xfc528b(0x1ee))/0x4)+parseInt(_0xfc528b(0x1a0))/0x5+-parseInt(_0xfc528b(0x1f3))/0x6*(parseInt(_0xfc528b(0x23a))/0x7)+parseInt(_0xfc528b(0x25a))/0x8*(-parseInt(_0xfc528b(0x206))/0x9)+parseInt(_0xfc528b(0x209))/0xa+-parseInt(_0xfc528b(0x1ea))/0xb;if(_0x2f759a===_0x3744e8)break;else _0x22d023['push'](_0x22d023['shift']());}catch(_0x1dee83){_0x22d023['push'](_0x22d023['shift']());}}}(_0x2cad,0x3116b));import _0xf55dad from'@/core/wrapper';import{BuddyListener,GroupListener,LoginListener,MsgListener,ProfileListener,SessionListener}from'@/core/listeners';import{DependsAdapter,DispatcherAdapter,GlobalAdapter}from'@/core/adapters';import _0xa29d8e from'node:path';import _0xdc6fe4 from'node:os';function _0x2cad(){const _0x39d34c=['xpbpp','hnaAq','V1_WIN_NQ_','has','140022008','facKE','ProfileListener','stringify','catch','assign','find','./.config/QQ','MGJec','onQRCodeLoginSucceed','UYWOC','nzZPX','OYuOS','45297oJAYZr','onLoginSuccessFuncList','登录失败(onLoginFailed)','967210XKzmdk','push','onSessionInitComplete','init','passwordLogin','homedir','consoleLogLevel','groupCode','initConfig','session','QElUW','onKickedOffLine','QneEj','getNTUserDataInfoConfig','DnLLS','kWvSB','fileLog','onProfileDetailInfoChanged','NodeIKernelLoginListener','nYnCq','NodeIDispatcherAdapter','./NapCat/data','pngBase64QrcodeData','map',')\x20在线状态变更','Windows\x2010\x20Pro','\x20has\x20no\x20method\x20','MKpLi','engine','createMemberListScene','tipsTitle','dataPathGlobal','loginListener','xiFPI','NodeIDependsAdapter','then','onUserLoggedIn','oLORX','XOFWW','initSession','qrLogin','NodeIKernelMsgListener','快速登录不可用','快速登录失败\x20','UAWvf','message_sent','uid','set','data:image/png;base64,','500276tkbNSJ','fileLogLevel','3iGsYTC','packet_sent','onBuddyListChange','resolve','SaOsD','fGIyi','onQRCodeSessionFailed','clientType','rXZmf','没有可快速登录的QQ号','loginErrorInfo','yjoUv','NodeIQQNTWrapperSession','NaCNv','getGroupService','replace','addListener','Bopvg','qgWtD','length','InshG','consoleLog','NodeIKernelSessionListener','MsgListener','md5','getNextMemberList','FgsNh','floor','maQlF','zxtKT','8IFPsBY','proxyHandler','iZCdp','isQuickLogin','base64','packet_received','xPPzL','startNT','groupMemberList_MainWindow','NodeIKernelProfileListener','get','数据库初始化失败','996475tyAcLu','dvvKB','dkpKO','now','PFbeh','quickLogin','util','608VYbNpv','LocalLoginInfoList','digest','onLineDev','qQfcF','getQRCodePicture','getProfileService','uin','NodeIGlobalAdapter','getBuddyService','sceneId','tipsDesc','update','onQRCodeGetPicture','NodeQQNTWrapperUtil','clIFi','onGroupListUpdate','本账号数据/缓存目录：','undefined',')已登录,无法重复登录','-v2.db','onSelfStatusChanged','启动失败:\x20','onLoginSuccess','onMemberListChange','czzYU','addKernelProfileListener','quickLoginWithUin','result','onAddSendMsg','memberCount','EVjco','登录失败(onQRCodeSessionFailed)','dLfYa','createHash','name','infos','NodeIKernelLoginService','140022013','yGwlI','getLoginList','996WARlwk','icfUZ','initDataListener','bbrXK','MjRiu','from','addKernelMsgListener','initSession\x20failed','dataPath','last_message_time','curVersion','HVSix','onRecvSysMsg','mkdirSync','loginService','mLaVp','errMsg','read','[KickedOffLine]\x20[','isDelete','cBHmg','getQuickLoginList','forEach','message_received','bqnhj','GroupListener','4763693lKAtyp','NodeIKernelGroupListener','constructor','split','1590812wMBXKD','NodeIKernelBuddyListener','bqHig','addKernelGroupListener','Kjoev','30QuQgvL','pxzky'];_0x2cad=function(){return _0x39d34c;};return _0x2cad();}import _0x47dd27 from'node:fs';import{appid,qqVersionConfigInfo}from'@/common/utils/QQBasicInfo';import{hostname,systemVersion}from'@/common/utils/system';import{genSessionConfig}from'@/core/sessionConfig';import{dbUtil}from'@/common/utils/db';import{sleep}from'@/common/utils/helper';import _0x56fb6b from'node:crypto';import{rawFriends,friends,groupMembers,groups,selfInfo,stat}from'@/core/data';import{NTEventDispatch}from'@/common/utils/EventTask';import{enableConsoleLog,enableFileLog,log,logDebug,logError,setLogLevel,setLogSelfInfo}from'@/common/utils/log';import{napCatConfig}from'@/core/utils/config';export class NapCatCore{[_0x47d4f(0x212)];[_0x47d4f(0x1a6)];[_0x47d4f(0x225)];[_0x47d4f(0x229)];[_0x47d4f(0x1de)];[_0x47d4f(0x207)]=[];[_0x47d4f(0x25b)]={'get'(target,prop,receiver){const _0x3ed660=_0x47d4f,rYPdff={'yjoUv':function(callee,param1){return callee(param1);},'bqnhj':_0x3ed660(0x1b9)};if(typeof target[prop]===rYPdff[_0x3ed660(0x1e8)])return(...args)=>{const _0x4c54de=_0x3ed660;rYPdff[_0x4c54de(0x247)](logDebug,target[_0x4c54de(0x1ec)]['name']+_0x4c54de(0x223)+prop);};return Reflect[_0x3ed660(0x19e)](target,prop,receiver);}};constructor(){const _0x485946=_0x47d4f,_0x1c9419={'UAWvf':function(_0x19e60d,_0x339d68){return _0x19e60d(_0x339d68);},'GNZeC':function(_0x56693c,_0x52f862){return _0x56693c+_0x52f862;},'Kjoev':function(_0xbeb507,_0x2788c9){return _0xbeb507+_0x2788c9;},'EVjco':_0x485946(0x1ba),'aHxnR':function(_0x793357,_0x1789c4,_0x30af3c){return _0x793357(_0x1789c4,_0x30af3c);},'NaCNv':function(_0x57a7f0,_0x418f19){return _0x57a7f0 instanceof _0x418f19;},'dLfYa':_0x485946(0x19f),'maQlF':function(_0xf5e670,_0x1f6dc1,_0x2a0d2d){return _0xf5e670(_0x1f6dc1,_0x2a0d2d);},'facKE':_0x485946(0x21e),'xPPzL':_0x485946(0x1b8),'dkpKO':_0x485946(0x1d7),'yGwlI':_0x485946(0x1c7),'FgsNh':function(_0x2b9d90,_0x28ef30){return _0x2b9d90==_0x28ef30;},'QElUW':function(_0x33a4c9,_0x21e854,_0x57c46c){return _0x33a4c9(_0x21e854,_0x57c46c);},'bqHig':_0x485946(0x208)};this[_0x485946(0x225)]=new _0xf55dad['NodeIQQNTWrapperEngine'](),this[_0x485946(0x1a6)]=new _0xf55dad[(_0x485946(0x1b5))](),this['loginService']=new _0xf55dad[(_0x485946(0x1cc))](),this[_0x485946(0x212)]=new _0xf55dad[(_0x485946(0x248))](),this[_0x485946(0x229)]=new LoginListener(),this[_0x485946(0x229)][_0x485946(0x22d)]=_0x33f5c2=>{const _0x1d335d=_0x485946;_0x1c9419['UAWvf'](logError,_0x1c9419['GNZeC'](_0x1c9419[_0x1d335d(0x1f2)]('当前账号(',_0x33f5c2),_0x1c9419[_0x1d335d(0x1c6)]));},this[_0x485946(0x211)](),this[_0x485946(0x229)][_0x485946(0x202)]=_0x35ea10=>{const _0x520f6c=_0x485946,_0x58babf={'rXZmf':_0x1c9419[_0x520f6c(0x1a2)]};this['initSession'](_0x35ea10['uin'],_0x35ea10[_0x520f6c(0x237)])[_0x520f6c(0x22c)](_0x19c07d=>{const _0x4917d5=_0x520f6c,_0xa949d1={'MjRiu':function(_0x5adb87,_0x48c1ac,_0x1df3a0){return _0x1c9419['aHxnR'](_0x5adb87,_0x48c1ac,_0x1df3a0);},'xNsBj':function(_0x2d7934,_0x34d547){const _0x14bb7b=_0x5753;return _0x1c9419[_0x14bb7b(0x249)](_0x2d7934,_0x34d547);},'wlPOU':_0x1c9419[_0x4917d5(0x1c8)]};selfInfo[_0x4917d5(0x1ae)]=_0x35ea10[_0x4917d5(0x1ae)],selfInfo[_0x4917d5(0x237)]=_0x35ea10[_0x4917d5(0x237)],napCatConfig[_0x4917d5(0x1e1)](),_0x1c9419[_0x4917d5(0x258)](setLogLevel,napCatConfig[_0x4917d5(0x23b)],napCatConfig[_0x4917d5(0x20f)]),_0x1c9419[_0x4917d5(0x235)](enableFileLog,napCatConfig[_0x4917d5(0x219)]),enableConsoleLog(napCatConfig[_0x4917d5(0x251)]),_0x1c9419[_0x4917d5(0x235)](setLogSelfInfo,selfInfo);const _0x1e7f8a=_0xa29d8e[_0x4917d5(0x23f)](this[_0x4917d5(0x1d8)],_0x1c9419[_0x4917d5(0x1fa)]);_0x47dd27[_0x4917d5(0x1dd)](_0x1e7f8a,{'recursive':!![]}),logDebug(_0x1c9419[_0x4917d5(0x19a)],_0x1e7f8a),dbUtil[_0x4917d5(0x20c)](_0xa29d8e[_0x4917d5(0x23f)](_0x1e7f8a,'./'+_0x35ea10[_0x4917d5(0x1ae)]+_0x4917d5(0x1bb)))[_0x4917d5(0x22c)](()=>{const _0x226aea=_0x4917d5;this[_0x226aea(0x1d2)](),this['onLoginSuccessFuncList'][_0x226aea(0x220)](_0x4cd64d=>{const _0x3c228f=_0x226aea,_0x484df1={'kWvSB':function(_0x38ed67,_0x42ed34,_0x524f2f){const _0x5caaa3=_0x5753;return _0xa949d1[_0x5caaa3(0x1d4)](_0x38ed67,_0x42ed34,_0x524f2f);},'OYuOS':function(_0x3db1fe,_0x1e6749){return _0xa949d1['xNsBj'](_0x3db1fe,_0x1e6749);}};new Promise((_0x62959c,_0x311380)=>{const _0x1f0582=_0x5753,_0x3f892a=_0x484df1[_0x1f0582(0x218)](_0x4cd64d,_0x35ea10[_0x1f0582(0x1ae)],_0x35ea10[_0x1f0582(0x237)]);_0x484df1[_0x1f0582(0x205)](_0x3f892a,Promise)&&_0x3f892a[_0x1f0582(0x22c)](_0x62959c)[_0x1f0582(0x1fd)](_0x311380);})[_0x3c228f(0x22c)]();});})['catch'](_0x5939bb=>{_0xa949d1['MjRiu'](logError,_0xa949d1['wlPOU'],_0x5939bb);});})['catch'](_0x197f33=>{const _0x143218=_0x520f6c;logError(_0x58babf[_0x143218(0x244)],_0x197f33);throw new Error(_0x143218(0x1bd)+JSON[_0x143218(0x1fc)](_0x197f33));});},this[_0x485946(0x229)][_0x485946(0x242)]=(_0x329c22,_0x779f4,_0x444c4e)=>{const _0x54b876=_0x485946;logError(_0x1c9419[_0x54b876(0x1ce)],_0x444c4e),_0x1c9419[_0x54b876(0x256)](_0x329c22,0x1)&&_0x779f4==0x3&&this['loginService'][_0x54b876(0x1ac)]();},this['loginListener']['onLoginFailed']=_0x175075=>{const _0x49e34a=_0x485946;_0x1c9419[_0x49e34a(0x213)](logError,_0x1c9419[_0x49e34a(0x1f0)],_0x175075);},this['loginListener']=new Proxy(this[_0x485946(0x229)],this['proxyHandler']),this['loginService']['addKernelLoginListener'](new _0xf55dad[(_0x485946(0x21b))](this[_0x485946(0x229)]));}get[_0x47d4f(0x1d8)](){const _0x168d43=_0x47d4f;let _0x1538a7=this[_0x168d43(0x1a6)][_0x168d43(0x216)]();return!_0x1538a7&&(_0x1538a7=_0xa29d8e['resolve'](_0xdc6fe4[_0x168d43(0x20e)](),_0x168d43(0x200)),_0x47dd27[_0x168d43(0x1dd)](_0x1538a7,{'recursive':!![]})),_0x1538a7;}get[_0x47d4f(0x228)](){const _0x403606=_0x47d4f,_0x5ca379={'vVoVG':'./nt_qq/global'};return _0xa29d8e[_0x403606(0x23f)](this['dataPath'],_0x5ca379['vVoVG']);}[_0x47d4f(0x211)](){const _0x35fddd=_0x47d4f,_0x5f4c73={'XOcTk':_0x35fddd(0x222)};this[_0x35fddd(0x225)]['initWithDeskTopConfig']({'base_path_prefix':'','platform_type':0x3,'app_type':0x4,'app_version':qqVersionConfigInfo[_0x35fddd(0x1da)],'os_version':_0x5f4c73['XOcTk'],'use_xlog':!![],'qua':_0x35fddd(0x1f7)+qqVersionConfigInfo[_0x35fddd(0x1da)][_0x35fddd(0x24b)]('-','_')+'_GW_B','global_path_config':{'desktopGlobalPath':this[_0x35fddd(0x228)]},'thumb_config':{'maxSide':0x144,'minSide':0x30,'longLimit':0x6,'density':0x2}},new _0xf55dad[(_0x35fddd(0x1af))](new GlobalAdapter())),this['loginService'][_0x35fddd(0x211)]({'machineId':'','appid':appid,'platVer':systemVersion,'commonPath':this['dataPathGlobal'],'clientVer':qqVersionConfigInfo[_0x35fddd(0x1da)],'hostName':hostname});}[_0x47d4f(0x230)](_0x39a0e6,_0x35ac43){const _0x43af33={'tbhkV':function(_0x549b5e,_0x730da7){return _0x549b5e(_0x730da7);},'hnaAq':function(_0x18f056,_0x1153f5){return _0x18f056+_0x1153f5;}};return new Promise(async(_0x234746,_0x421126)=>{const _0x6a1d58=_0x5753,_0x4a2f42={'UYWOC':function(_0x24f8a0,_0xfad965){return _0x43af33['tbhkV'](_0x24f8a0,_0xfad965);},'PFbeh':function(_0x5dde32,_0x101454){return _0x5dde32(_0x101454);}},_0x157871=await genSessionConfig(_0x39a0e6,_0x35ac43,this['dataPath']),_0x3ff3ac=new SessionListener();_0x3ff3ac[_0x6a1d58(0x20b)]=_0x3954fb=>{const _0x400c03=_0x6a1d58;if(_0x3954fb===0x0)return _0x4a2f42[_0x400c03(0x203)](_0x234746,0x0);_0x4a2f42[_0x400c03(0x1a4)](_0x421126,_0x3954fb);},this[_0x6a1d58(0x212)]['init'](_0x157871,new _0xf55dad[(_0x6a1d58(0x22b))](new DependsAdapter()),new _0xf55dad[(_0x6a1d58(0x21d))](new DispatcherAdapter()),new _0xf55dad[(_0x6a1d58(0x252))](_0x3ff3ac));try{this[_0x6a1d58(0x212)][_0x6a1d58(0x19b)](0x0);}catch(_0x484bc1){try{this[_0x6a1d58(0x212)][_0x6a1d58(0x19b)]();}catch(_0x502c92){_0x421126(_0x43af33[_0x6a1d58(0x1f6)]('init\x20failed\x20',_0x502c92));}}});}['initDataListener'](){const _0x3bc66f=_0x47d4f,_0x181e7b={'czzYU':function(_0x1cc61b,_0x1cee71){return _0x1cc61b(_0x1cee71);},'xpbpp':function(_0x2b59f5,_0x339891){return _0x2b59f5+_0x339891;},'qgWtD':'账号设备(','mLaVp':_0x3bc66f(0x221),'fGIyi':_0x3bc66f(0x1e2),'zxtKT':function(_0x3f87f2,_0xc25034){return _0x3f87f2/_0xc25034;},'qQfcF':function(_0x24db7,_0x400b26){return _0x24db7/_0x400b26;},'clIFi':function(_0x4be6e0,_0x2aac38){return _0x4be6e0===_0x2aac38;},'InshG':_0x3bc66f(0x19c),'nzZPX':function(_0x5f5b3d,_0x59c0d2){return _0x5f5b3d===_0x59c0d2;}},_0x403ac8=new MsgListener();_0x403ac8[_0x3bc66f(0x1aa)]=_0x3c3f21=>{const _0x440d06=_0x3bc66f,_0xbe7d8b={'pxzky':function(_0x4c2769,_0x10d820){const _0x3ec974=_0x5753;return _0x181e7b[_0x3ec974(0x1c0)](_0x4c2769,_0x10d820);},'iZCdp':function(_0x58fcdc,_0x21ebd6){const _0x29feff=_0x5753;return _0x181e7b[_0x29feff(0x1f5)](_0x58fcdc,_0x21ebd6);},'HVSix':_0x181e7b[_0x440d06(0x24e)],'nYnCq':_0x181e7b[_0x440d06(0x1df)]};_0x3c3f21[_0x440d06(0x220)](_0x1f6c9e=>{const _0x39b0ee=_0x440d06;_0x1f6c9e[_0x39b0ee(0x243)]===0x2&&_0xbe7d8b[_0x39b0ee(0x1f4)](log,_0xbe7d8b[_0x39b0ee(0x25c)](_0xbe7d8b[_0x39b0ee(0x1db)]+_0x1f6c9e['devUid'],_0xbe7d8b[_0x39b0ee(0x21c)]));});},_0x403ac8[_0x3bc66f(0x214)]=_0x2c7738=>{const _0x386be2=_0x3bc66f;log(_0x181e7b['xpbpp'](_0x181e7b[_0x386be2(0x1f5)](_0x181e7b[_0x386be2(0x241)],_0x2c7738[_0x386be2(0x227)]),']\x20')+_0x2c7738[_0x386be2(0x1b2)]);},_0x403ac8[_0x3bc66f(0x1c4)]=_0x48b0a2=>{const _0x26f7fa=_0x3bc66f;stat[_0x26f7fa(0x23d)]+=0x1,stat[_0x26f7fa(0x236)]+=0x1,stat['last_message_time']=Math[_0x26f7fa(0x257)](_0x181e7b[_0x26f7fa(0x259)](Date[_0x26f7fa(0x1a3)](),0x3e8));},_0x403ac8['onRecvMsg']=_0x2437c4=>{const _0x3ad050=_0x3bc66f;stat[_0x3ad050(0x25f)]+=0x1,stat[_0x3ad050(0x1e7)]+=_0x2437c4[_0x3ad050(0x24f)],stat[_0x3ad050(0x1d9)]=Math['floor'](_0x181e7b[_0x3ad050(0x1ab)](Date['now'](),0x3e8));},_0x403ac8[_0x3bc66f(0x1dc)]=(..._0x438df9)=>{const _0x43d095=_0x3bc66f;stat[_0x43d095(0x25f)]+=0x1;},this[_0x3bc66f(0x24c)](_0x403ac8);const _0x3bdab1=new BuddyListener();_0x3bdab1[_0x3bc66f(0x23e)]=_0x3c5772=>{const _0x23ce7b=_0x3bc66f;rawFriends['length']=0x0,rawFriends[_0x23ce7b(0x20a)](..._0x3c5772);for(const _0x60eac5 of _0x3c5772){for(const _0x3881aa of _0x60eac5['buddyList']){const _0x5420c8=friends[_0x23ce7b(0x19e)](_0x3881aa['uid']);_0x5420c8?Object['assign'](_0x5420c8,_0x3881aa):friends['set'](_0x3881aa[_0x23ce7b(0x237)],_0x3881aa);}}},this[_0x3bc66f(0x24c)](_0x3bdab1),this[_0x3bc66f(0x212)][_0x3bc66f(0x1b0)]()['getBuddyList'](!![])['then'](_0x47a9ab=>{});const _0x3b2b5c=new ProfileListener();_0x3b2b5c[_0x3bc66f(0x21a)]=_0x36b517=>{const _0x72988a=_0x3bc66f;_0x181e7b[_0x72988a(0x1b6)](_0x36b517[_0x72988a(0x237)],selfInfo[_0x72988a(0x237)])&&Object[_0x72988a(0x1fe)](selfInfo,_0x36b517);},_0x3b2b5c[_0x3bc66f(0x1bc)]=_0x270010=>{},this[_0x3bc66f(0x24c)](_0x3b2b5c);const _0x37e0c8=new GroupListener();_0x37e0c8[_0x3bc66f(0x1b7)]=(_0x43ec65,_0xcc84c)=>{const _0x4a53f0=_0x3bc66f;_0xcc84c[_0x4a53f0(0x220)](_0x454f11=>{const _0x18cd36=_0x4a53f0,_0x583f15=groups[_0x18cd36(0x19e)](_0x454f11[_0x18cd36(0x210)]);_0x583f15&&_0x181e7b[_0x18cd36(0x1b6)](_0x454f11[_0x18cd36(0x1c5)],_0x583f15[_0x18cd36(0x1c5)])?Object[_0x18cd36(0x1fe)](_0x583f15,_0x454f11):groups['set'](_0x454f11[_0x18cd36(0x210)],_0x454f11);const _0x31ec41=this[_0x18cd36(0x212)][_0x18cd36(0x24a)]()[_0x18cd36(0x226)](_0x454f11['groupCode'],_0x181e7b[_0x18cd36(0x250)]);this['session'][_0x18cd36(0x24a)]()[_0x18cd36(0x255)](_0x31ec41,undefined,0xbb8)['then'](_0x7a9898=>{});});},_0x37e0c8[_0x3bc66f(0x1bf)]=_0x358eb8=>{const _0x1e8d95=_0x3bc66f,_0x29b375=_0x358eb8[_0x1e8d95(0x1b1)][_0x1e8d95(0x1ed)]('_')[0x0];if(groupMembers[_0x1e8d95(0x1f8)](_0x29b375)){const _0xe2c1ce=groupMembers[_0x1e8d95(0x19e)](_0x29b375);_0x358eb8[_0x1e8d95(0x1cb)][_0x1e8d95(0x1e6)]((_0x3f323c,_0x253655)=>{const _0x122b49=_0x1e8d95,_0x5b0887=_0xe2c1ce[_0x122b49(0x19e)](_0x253655);_0x5b0887?Object[_0x122b49(0x1fe)](_0x5b0887,_0x3f323c):_0xe2c1ce[_0x122b49(0x238)](_0x253655,_0x3f323c);});}else groupMembers[_0x1e8d95(0x238)](_0x29b375,_0x358eb8[_0x1e8d95(0x1cb)]);},_0x37e0c8['onMemberInfoChange']=(_0x20ffe3,_0x286ef3,_0x574746)=>{const _0x5c51fd=_0x3bc66f;_0x181e7b[_0x5c51fd(0x204)](_0x286ef3,0x0)&&_0x574746[_0x5c51fd(0x19e)](selfInfo[_0x5c51fd(0x237)])&&_0x574746['get'](selfInfo[_0x5c51fd(0x237)])?.[_0x5c51fd(0x1e3)]&&setTimeout(()=>{groups['delete'](_0x20ffe3);},0x1388);const _0x3b4177=groupMembers['get'](_0x20ffe3);_0x3b4177?_0x574746[_0x5c51fd(0x1e6)]((_0xd78c15,_0x5e4708)=>{const _0x3979af=_0x5c51fd,_0x541292=_0x3b4177[_0x3979af(0x19e)](_0x5e4708);_0x541292?Object['assign'](_0x541292,_0xd78c15):_0x3b4177['set'](_0x5e4708,_0xd78c15);}):groupMembers[_0x5c51fd(0x238)](_0x20ffe3,_0x574746);},this[_0x3bc66f(0x24c)](_0x37e0c8);}['addListener'](_0x33d586){const _0xee15ef=_0x47d4f,_0x2c4a4a={'MKpLi':'BuddyListener','icfUZ':_0xee15ef(0x1e9)};_0x33d586=new Proxy(_0x33d586,this[_0xee15ef(0x25b)]);switch(_0x33d586[_0xee15ef(0x1ec)][_0xee15ef(0x1ca)]){case _0x2c4a4a[_0xee15ef(0x224)]:{return this[_0xee15ef(0x212)][_0xee15ef(0x1b0)]()['addKernelBuddyListener'](new _0xf55dad[(_0xee15ef(0x1ef))](_0x33d586));}case _0x2c4a4a[_0xee15ef(0x1d1)]:{return this[_0xee15ef(0x212)]['getGroupService']()[_0xee15ef(0x1f1)](new _0xf55dad[(_0xee15ef(0x1eb))](_0x33d586));}case _0xee15ef(0x253):{return this[_0xee15ef(0x212)]['getMsgService']()[_0xee15ef(0x1d6)](new _0xf55dad[(_0xee15ef(0x232))](_0x33d586));}case _0xee15ef(0x1fb):{return this['session'][_0xee15ef(0x1ad)]()[_0xee15ef(0x1c1)](new _0xf55dad[(_0xee15ef(0x19d))](_0x33d586));}default:return-0x1;}}[_0x47d4f(0x1be)](_0x1b762d){const _0x1662dd=_0x47d4f;NTEventDispatch[_0x1662dd(0x20c)]({'ListenerMap':_0xf55dad,'WrapperSession':this[_0x1662dd(0x212)]}),this[_0x1662dd(0x207)][_0x1662dd(0x20a)](_0x1b762d);}async[_0x47d4f(0x1a5)](_0x27462e){const _0x3ad85c=_0x47d4f,_0x2effd1={'DnLLS':function(_0x389651,_0x5033fa){return _0x389651!==_0x5033fa;},'wdWgm':_0x3ad85c(0x245),'QneEj':function(_0x4853be,_0x14a419){return _0x4853be(_0x14a419);},'jdAWw':function(_0x22aac9,_0x5b69e2){return _0x22aac9+_0x5b69e2;},'XOFWW':_0x3ad85c(0x234)},_0xb1bf24=await this['loginService'][_0x3ad85c(0x1cf)]();if(_0x2effd1[_0x3ad85c(0x217)](_0xb1bf24['result'],0x0))throw new Error(_0x2effd1['wdWgm']);const _0x39ef4e=_0xb1bf24[_0x3ad85c(0x1a8)][_0x3ad85c(0x1ff)](_0x2837a4=>_0x2837a4[_0x3ad85c(0x1ae)]===_0x27462e);if(!_0x39ef4e||!_0x39ef4e?.[_0x3ad85c(0x25d)])throw new Error(_0x27462e+_0x3ad85c(0x233));await _0x2effd1[_0x3ad85c(0x215)](sleep,0x3e8);const _0x4de2ad=await this[_0x3ad85c(0x1de)][_0x3ad85c(0x1c2)](_0x27462e);if(!_0x4de2ad[_0x3ad85c(0x1c3)])throw new Error(_0x2effd1['jdAWw'](_0x2effd1[_0x3ad85c(0x22f)],_0x4de2ad[_0x3ad85c(0x246)][_0x3ad85c(0x1e0)]));return _0x4de2ad;}async[_0x47d4f(0x231)](_0x167213){const _0x2e2546=_0x47d4f,_0x4f7b91={'mjeUA':_0x2e2546(0x239),'MGJec':_0x2e2546(0x25e)};return new Promise((_0x198e3e,_0x5e8dcf)=>{const _0x444358=_0x2e2546,_0x2590a4={'cBHmg':_0x4f7b91['mjeUA'],'bbrXK':_0x4f7b91[_0x444358(0x201)],'xiFPI':function(_0x21c844,_0x2254b0,_0x50cb66,_0x53d0c8){return _0x21c844(_0x2254b0,_0x50cb66,_0x53d0c8);}};this[_0x444358(0x229)][_0x444358(0x1b4)]=_0x4726c7=>{const _0x33b4ad=_0x444358,_0x3e2ffa=_0x4726c7[_0x33b4ad(0x21f)]['split'](_0x2590a4[_0x33b4ad(0x1e4)])[0x1],_0x3902d7=Buffer[_0x33b4ad(0x1d5)](_0x3e2ffa,_0x2590a4[_0x33b4ad(0x1d3)]);_0x2590a4[_0x33b4ad(0x22a)](_0x167213,_0x4726c7['qrcodeUrl'],_0x4726c7[_0x33b4ad(0x21f)],_0x3902d7);},this[_0x444358(0x1de)][_0x444358(0x1ac)]();});}async[_0x47d4f(0x20d)](_0x5032a7,_0xef2d11,_0x2d0f7f,_0x23d04e,_0x45dab0){const _0x3b322f=_0x47d4f,_0x2dca23={'Bopvg':_0x3b322f(0x254),'RzdVj':'hex','SaOsD':function(_0x644108,_0x4e0a59){return _0x644108||_0x4e0a59;},'oLORX':function(_0x2a8648,_0x35ffb9){return _0x2a8648||_0x35ffb9;},'vfmsR':function(_0x591331,_0x348026){return _0x591331(_0x348026);},'dvvKB':_0x3b322f(0x1cd)},_0x5bcb4f=_0x56fb6b[_0x3b322f(0x1c9)](_0x2dca23[_0x3b322f(0x24d)])[_0x3b322f(0x1b3)](_0xef2d11)[_0x3b322f(0x1a9)](_0x2dca23['RzdVj']),_0xa6fd8b={'uin':_0x5032a7,'passwordMd5':_0x5bcb4f,'step':_0x2d0f7f&&_0x23d04e&&_0x45dab0?0x1:0x0,'newDeviceLoginSig':'','proofWaterSig':_0x2dca23[_0x3b322f(0x240)](_0x2d0f7f,''),'proofWaterRand':_0x2dca23[_0x3b322f(0x22e)](_0x23d04e,''),'proofWaterSid':_0x2dca23[_0x3b322f(0x22e)](_0x45dab0,'')};await this[_0x3b322f(0x1de)][_0x3b322f(0x1cf)](),await _0x2dca23['vfmsR'](sleep,0x3e8);const _0x556e40=await this[_0x3b322f(0x1de)][_0x3b322f(0x20d)](_0xa6fd8b);switch(_0x556e40[_0x3b322f(0x1c3)]){case'0':{break;}case _0x3b322f(0x1f9):{break;}case'4':case _0x2dca23[_0x3b322f(0x1a1)]:default:}}async[_0x47d4f(0x1e5)](){const _0x522e3d=_0x47d4f,_0x8571a0=await this[_0x522e3d(0x1de)][_0x522e3d(0x1cf)]();return _0x8571a0;}}export const napCatCore=new NapCatCore();