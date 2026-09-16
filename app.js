const animals = [
  {id:"cat",name:"橘猫",personality:"慢热观察型",description:"先看看，不着急加入热闹。",rec:"为你留了一些可以慢慢看的地方",image:"assets/animals/cat.png",animationClass:"anim-cat",favoriteFood:"小鱼",foodIcon:"fish",accentColor:"#e98535",softColor:"#fff0dc"},
  {id:"shiba",name:"柴犬",personality:"好奇行动型",description:"城市新鲜事，闻到就出发。",rec:"发现了几件值得立刻出门的新鲜事",image:"assets/animals/shiba.png",animationClass:"anim-shiba",favoriteFood:"骨头和肉干",foodIcon:"bone",accentColor:"#df7046",softColor:"#ffebe2"},
  {id:"kangaroo",name:"袋鼠",personality:"活力带队型",description:"附近新鲜事，我带你找到！",rec:"本地雷达刚捕捉到这些好去处",image:"assets/animals/kangaroo.png",animationClass:"anim-kangaroo",favoriteFood:"青草和树叶",foodIcon:"leaf",accentColor:"#e2a900",softColor:"#fff3ba"},
  {id:"capybara",name:"水豚",personality:"安静治愈型",description:"不赶时间，舒服最重要。",rec:"今天适合把节奏调慢一点",image:"assets/animals/capybara.png",animationClass:"anim-capybara",favoriteFood:"西瓜",foodIcon:"circle-dot",accentColor:"#53a979",softColor:"#e5f6ec"},
  {id:"rabbit",name:"白兔",personality:"轻社交型",description:"一点点认识，就很刚好。",rec:"这些活动适合自然地认识同频朋友",image:"assets/animals/rabbit.png",animationClass:"anim-rabbit",favoriteFood:"胡萝卜",foodIcon:"carrot",accentColor:"#f07658",softColor:"#ffe7df"},
  {id:"fox",name:"狐狸",personality:"小众探索型",description:"转进小巷，故事才刚开始。",rec:"绕开人潮，去看看城市的隐藏面",image:"assets/animals/fox.png",animationClass:"anim-fox",favoriteFood:"莓果",foodIcon:"cherry",accentColor:"#d75b52",softColor:"#ffe4e1"},
  {id:"penguin",name:"企鹅",personality:"秩序搭子型",description:"路线清楚，准时出发。",rec:"时间地点都替你安排明白了",image:"assets/animals/penguin.png",animationClass:"anim-penguin",favoriteFood:"小鱼",foodIcon:"fish",accentColor:"#3976c8",softColor:"#e3efff"},
  {id:"panda",name:"熊猫",personality:"随缘吃逛型",description:"先吃一口，再决定下一站。",rec:"好吃与好逛可以一次拥有",image:"assets/animals/panda.png",animationClass:"anim-panda",favoriteFood:"竹叶",foodIcon:"sprout",accentColor:"#4c8c62",softColor:"#e6f3e9"},
  {id:"otter",name:"海獭",personality:"松弛陪伴型",description:"两三个人，舒服待着就好。",rec:"适合小范围轻松同行的活动在这里",image:"assets/animals/otter.png",animationClass:"anim-otter",favoriteFood:"贝壳和海胆",foodIcon:"shell",accentColor:"#3f76e8",softColor:"#e3eeff"},
  {id:"alpaca",name:"羊驼",personality:"氛围体验型",description:"灯光、音乐、照片，都要有。",rec:"为你挑了几场氛围感满分的体验",image:"assets/animals/alpaca.png",animationClass:"anim-alpaca",favoriteFood:"青草和小花",foodIcon:"flower-2",accentColor:"#a05ec8",softColor:"#f2e6fa"}
];

const activityBase = [
  {name:"西岸艺术慢逛计划",type:"看展",time:"周六 10:30",place:"西岸美术馆",price:60,match:97,pressure:"低压力",solo:true,people:"1—2 人",feature:"不设固定路线，戴上耳机慢慢看完整场展。",img:"assets/activities/westbund-art.jpg",alt:"观众在西岸现代美术馆观看大型当代艺术装置",position:"center",theme:"#3f76e8",modes:["solo","soft"],weather:["晴天","雨天"]},
  {name:"梧桐区日落散步",type:"户外",time:"周六 16:40",place:"武康路集合",price:0,match:95,pressure:"轻互动",solo:true,people:"1—4 人",feature:"沿着光线走，不赶景点；想聊天就聊，不聊也自在。",img:"assets/activities/wukang-sunset.jpg",alt:"两位年轻人在上海梧桐树和老洋房之间迎着日落散步",position:"center 58%",theme:"#f2aa27",modes:["solo","soft"],weather:["晴天"]},
  {name:"城市天台日落音乐会",type:"演出",time:"周六 18:00",place:"静安大悦城",price:128,match:94,pressure:"自由社交",solo:true,people:"1—6 人",feature:"设有独处聆听区和搭子互动区，社交电量自由选择。",img:"assets/activities/rooftop-concert.jpg",alt:"上海城市天台晚霞中的乐队现场演出与观众",position:"center 48%",theme:"#ff705f",modes:["solo","soft","party"],weather:["晴天"]},
  {name:"上生新所黑胶市集",type:"市集",time:"周日 13:00",place:"上生·新所",price:50,match:92,pressure:"自然交流",solo:true,people:"1—4 人",feature:"黑胶、咖啡与旧物摊位，不用破冰也能自然聊起来。",img:"assets/activities/vinyl-market.jpg",alt:"年轻人在红砖创意市集中翻看黑胶唱片并喝咖啡",position:"center 45%",theme:"#ef4f55",modes:["solo","soft","party"],weather:["晴天","雨天"]},
  {name:"苏州河夜骑",type:"城市夜游",time:"周六 19:30",place:"昌平路桥",price:35,match:90,pressure:"团队协作",solo:false,people:"3—8 人",feature:"领队控速，全程 12km；沿河夜景和三个拍照停靠点。",img:"assets/activities/suzhou-creek-night-ride.jpg",alt:"三位骑行者戴着头盔沿苏州河城市灯光夜骑",position:"center 50%",theme:"#315fc9",modes:["soft","party"],weather:["晴天"]},
  {name:"小型陶艺体验局",type:"手作",time:"周日 14:00",place:"愚园路",price:168,match:91,pressure:"低压力",solo:true,people:"1—4 人",feature:"四人小班，各做各的也不尴尬，完成后可自由离开。",img:"assets/activities/pottery-workshop.jpg",alt:"四人小班在温暖陶艺工作室使用拉坯机制作陶器",position:"center 54%",theme:"#c96e4c",modes:["solo","soft"],weather:["晴天","雨天"]},
  {name:"世纪公园松弛野餐",type:"户外",time:"周日 15:00",place:"世纪公园",price:45,match:90,pressure:"轻互动",solo:true,people:"1—4 人",feature:"草坪留足个人空间，读书、晒太阳或分享水果都很自在。",img:"assets/activities/park-picnic.jpg",alt:"三位年轻人在城市公园草坪的野餐垫上阅读和分享水果",position:"center 58%",theme:"#65b984",modes:["solo","soft"],weather:["晴天"]},
  {name:"深夜觅食地图",type:"美食",time:"周六 22:30",place:"黄河路",price:98,match:93,pressure:"自由社交",solo:true,people:"1—6 人",feature:"从热汤面到街边烧烤，按食量自由加入下一站。",img:"assets/activities/late-night-food.jpg",alt:"上海夜色中的街头餐厅、热汤面和烧烤夜宵",position:"center 50%",theme:"#f05f46",modes:["solo","soft","party"],weather:["晴天","雨天"]}
];

const activityDetails={
  "西岸艺术慢逛计划":{id:"westbund-art",subtitle:"戴着耳机各自看展，想交流时再去休息区碰面。",description:"从当代艺术展厅一路慢慢看到江边，没有必须跟上的讲解，也没有必须参与的破冰。",timeLong:"周六 10:30—14:00",distance:"距离你 4.2km",metro:"地铁11号线云锦路站",meeting:"美术馆南门售票处",weatherDetail:"晴，26℃",status:"报名中",audience:"I人友好",socialFeatures:["可以独自参加","不强制聊天","各自看展，出口集合","无主持人带领","活动结束后自由安排"],reason:"室内展览节奏可控，对想保留个人空间的人很友好。",schedule:[["10:30","美术馆入口集合"],["10:40","简单认识同行伙伴"],["11:00","自由观展"],["12:20","休息区自由交流"],["13:00","滨江慢走"],["14:00","活动结束，自由安排"]],teams:[{id:"westbund-quiet",animal:"penguin",name:"安静看展小队",current:3,total:4,tags:["不强行热场","各看各的","出口集合"],time:"周六 10:20"},{id:"westbund-photo",animal:"cat",name:"西岸慢慢看",current:2,total:4,tags:["先看后聊","可中途离队"],time:"周六 10:30"}]},
  "梧桐区日落散步":{id:"wukang-sunset",subtitle:"顺着梧桐树影慢慢走，聊天和安静都不尴尬。",description:"从武康路出发，穿过老洋房和街角小店，在落日最好的一段光里结束。",timeLong:"周六 16:40—19:00",distance:"距离你 3.1km",metro:"地铁10号线上海图书馆站",meeting:"武康大楼北侧",weatherDetail:"晴转多云，25℃",status:"本周热门",audience:"I / E 都友好",socialFeatures:["可以独自参加","可以安静同行","主要想拍照","路线发起人带领","可随时结束自由安排"],reason:"开放路线让每个人都能自己调整聊天和拍照节奏。",schedule:[["16:40","武康大楼碰面"],["16:50","路线与边界说明"],["17:10","梧桐街区慢走"],["18:00","老洋房外观拍照"],["18:35","日落观景点"],["19:00","自由续摊或散场"]],teams:[{id:"wukang-photo",animal:"fox",name:"梧桐区光影小队",current:2,total:4,tags:["主要拍照","不催行程"],time:"周六 16:30"}]},
  "城市天台日落音乐会":{id:"rooftop-concert",subtitle:"想蹦可以靠前，想发呆也有安静看晚霞的区域。",description:"日落、城市天际线和现场乐队同时出现的周末特别场，入场可选安静区或互动区。",timeLong:"周六 18:00—21:00",distance:"距离你 2.8km",metro:"地铁8号线曲阜路站",meeting:"静安大悦城北座天台入口",weatherDetail:"晴，24℃",status:"即将满员",audience:"I / E 分区友好",socialFeatures:["可以独自听歌","互动区有主持人破冰","可随时切换区域","不强制参与互动","散场后自由安排"],reason:"同一个现场有不同社交强度，既能走进人群，也能只和音乐待在一起。",schedule:[["18:00","天台入场与分区"],["18:20","日落 DJ 暖场"],["18:50","乐队第一轮演出"],["19:35","自由休息与拍照"],["20:00","主舞台 Live"],["21:00","散场，自由续摊"]],teams:[{id:"concert-front",animal:"alpaca",name:"天台前排氛围组",current:5,total:7,tags:["一起蹦跳","互相拍照"],time:"周六 17:40"},{id:"concert-chill",animal:"otter",name:"晚霞安静聆听区",current:3,total:4,tags:["安静听歌","不强行热场"],time:"周六 17:50"}]},
  "上生新所黑胶市集":{id:"vinyl-market",subtitle:"在黑胶、咖啡和旧物摊位之间，让兴趣自然打开话题。",description:"红砖建筑里的周末市集，有乐队专辑、复古设计和限定咖啡，没有固定路线。",timeLong:"周日 13:00—17:00",distance:"距离你 5.0km",metro:"地铁10号线上海图书馆站",meeting:"海军俱乐部门口",weatherDetail:"多云，25℃",status:"报名中",audience:"轻社交友好",socialFeatures:["适合独自闲逛","不需要主动破冰","可按喜好分开看摊","无主持人带领","可自由加入吃饭"],reason:"共同兴趣就是最自然的开场白，即使不聊天也有足够内容可看。",schedule:[["13:00","市集主入口见面"],["13:15","黑胶摊位自由淘片"],["14:20","咖啡快闪休息"],["15:00","创意旧物区"],["16:20","分享今日收获"],["17:00","自由散场"]],teams:[{id:"vinyl-dig",animal:"otter",name:"黑胶慢淘小队",current:2,total:4,tags:["不赶时间","可各自淘片"],time:"周日 12:50"}]},
  "苏州河夜骑":{id:"suzhou-night-ride",subtitle:"沿河控速骑行，在城市灯光里完成一次十二公里出逃。",description:"有领队和收尾队员的友好夜骑，全程三个观景停靠点，对器材和速度都会提前说明。",timeLong:"周六 19:30—21:30",distance:"距离你 2.4km",metro:"地铁7号线昌平路站",meeting:"昌平路桥南侧广场",weatherDetail:"晴，22℃",status:"即将满员",audience:"E人与运动搭子友好",socialFeatures:["需要跟随队伍行进","骑行中无需聊天","有领队和安全员","不建议中途单独离队","结束后可自由安排"],reason:"共同完成路线比刻意聊天更容易建立默契，适合想要行动感的周末。",schedule:[["19:30","检查车辆与头盔"],["19:45","安全说明与分组"],["20:00","沿苏州河向东骑行"],["20:35","灯光观景停靠"],["21:10","返程与拉伸"],["21:30","活动结束"]],teams:[{id:"ride-steady",animal:"penguin",name:"苏河稳速夜骑队",current:6,total:8,tags:["准时集合","领队控速"],time:"周六 19:15"}]},
  "小型陶艺体验局":{id:"pottery-workshop",subtitle:"四人小班各做各的，手里有陶土时，安静也很自然。",description:"老师会完成拉坯示范，之后每个人都有自己的工作台和充足的创作时间。",timeLong:"周日 14:00—16:30",distance:"距离你 3.7km",metro:"地铁11号线江苏路站",meeting:"愚园路工作室二楼",weatherDetail:"室内，风雨无忧",status:"仅剩2席",audience:"I人友好",socialFeatures:["可以独自报名","操作时不强制聊天","有老师清晰带领","每人独立工作台","结束后可自由离开"],reason:"有明确任务的小班比纯聊天更轻松，同时保留了一点刚好的陪伴。",schedule:[["14:00","工作室签到"],["14:10","材料与拉坯示范"],["14:35","第一轮独立制作"],["15:20","休息与自由交流"],["15:35","修坯与上色"],["16:30","选择釉色后结束"]],teams:[{id:"pottery-soft",animal:"rabbit",name:"陶艺舒服小局",current:3,total:4,tags:["安静手作","休息时再聊"],time:"周日 13:45"}]},
  "世纪公园松弛野餐":{id:"park-picnic",subtitle:"草坪上留足个人空间，读书、晒太阳或分享水果都可以。",description:"小范围野餐不安排破冰游戏，只提供野餐垫、水果和一块可以放松的草地。",timeLong:"周日 15:00—18:00",distance:"距离你 7.6km",metro:"地铁2号线世纪公园站",meeting:"世纪公园7号门",weatherDetail:"晴，27℃",status:"报名中",audience:"松弛社交友好",socialFeatures:["可以自己来","不设强制互动","可以戴耳机阅读","有发起人准备公共用品","可提前自由离开"],reason:"室外空间足够宽松，可以自己待着，也可以在想聊时自然加入。",schedule:[["15:00","公园门口集合"],["15:15","找到草坪与铺设"],["15:30","自由阅读、晒太阳"],["16:20","水果与轻松交流"],["17:10","公园散步"],["18:00","收拾结束"]],teams:[{id:"picnic-chill",animal:"capybara",name:"草坪发呆小分队",current:2,total:4,tags:["可以安静同行","自带一本书"],time:"周日 14:50"}]},
  "深夜觅食地图":{id:"late-night-food",subtitle:"从热汤面到街边烧烤，按食量和电量自由加入下一站。",description:"把黄河路几家晚营业小店连成路线，每站分食小份，不必一定跟完全程。",timeLong:"周六 22:30—00:30",distance:"距离你 1.9km",metro:"地铁1号线新闸路站",meeting:"黄河路凤阳路口",weatherDetail:"夜间多云，21℃",status:"本周热门",audience:"E人与美食搭子友好",socialFeatures:["可以独自加入某一站","分食时自然聊天","有路线发起人","可中途自由离队","各站独立结算"],reason:"美食会自然提供话题，路线又允许随时加入或结束，社交压力更可控。",schedule:[["22:30","路口集合"],["22:40","第一站本帮面馆"],["23:15","街角烧烤摊"],["23:45","夜间甜品店"],["00:10","自由选择加餐"],["00:30","路线结束"]],teams:[{id:"food-map",animal:"panda",name:"黄河路小胃口队",current:4,total:6,tags:["分享小份","可中途离队"],time:"周六 22:20"}]}
};
const activities=activityBase.map(item=>{const detail=activityDetails[item.name];return {...item,...detail,title:item.name,category:item.type,location:item.place,socialPressure:item.pressure,images:[{src:item.img,alt:item.alt,position:item.position,label:"现场"},{src:item.img,alt:`${item.name}的细节视角`,position:item.position.includes(" ")?item.position:"center 38%",label:"细节"}],matchScore:item.match,recommendedGroupSize:item.people,tags:[item.type,item.pressure,detail.audience],reasons:[detail.reason]}});

const crews = {
  solo:[
    {name:"西岸各看各的搭子",animal:"cat",joined:2,need:1,time:"周六 10:20",mood:"见面打招呼，展厅内自由行动",tags:["允许安静同行","结束后自由安排"]},
    {name:"梧桐区摄影散步",animal:"fox",joined:2,need:2,time:"周六 16:30",mood:"主要拍照，按自己的节奏走",tags:["不强行热场","可随时离队"]}
  ],
  soft:[
    {name:"小型陶艺舒服小局",animal:"rabbit",joined:3,need:1,time:"周日 13:45",mood:"做手作时安静，休息时轻松聊",tags:["可以安静同行","活动后可吃饭"]},
    {name:"上生新所黑胶闲逛",animal:"otter",joined:2,need:2,time:"周日 12:50",mood:"两三人慢慢逛，不赶行程",tags:["不强行热场","希望准时集合"]}
  ],
  party:[
    {name:"天台音乐会前排小队",animal:"alpaca",joined:5,need:2,time:"周六 17:40",mood:"热闹但尊重边界，一起拍照蹦跳",tags:["多人新朋友局","可以一起吃饭"]},
    {name:"夜幕桌游破冰局",animal:"shiba",joined:6,need:2,time:"周六 18:45",mood:"主持人带场，互动感拉满",tags:["高互动","不接受临时放鸽子"]}
  ]
};

const manualChoices=["不强行热场","可以安静同行","第一次见面想参加多人局","主要想拍照","希望准时集合","活动结束后自由安排","可以一起吃饭","不接受临时放鸽子"];
const stampCatalog=[
  {id:"art",icon:"palette",name:"艺术慢游",color:"#315fc9"},
  {id:"nature",icon:"trees",name:"城市吸氧",color:"#3f9365"},
  {id:"coffee",icon:"coffee",name:"咖啡地图",color:"#9a633f"},
  {id:"music",icon:"music-2",name:"现场音乐",color:"#d94f55"},
  {id:"street",icon:"camera",name:"街头影像",color:"#8d55b4"},
  {id:"food",icon:"utensils",name:"深夜觅食",color:"#e15d3e"},
  {id:"sport",icon:"bike",name:"周末运动",color:"#237c88"},
  {id:"niche",icon:"map",name:"小众探索",color:"#c17b16"}
];
const activityStampMap={
  "西岸艺术慢逛计划":"art","梧桐区日落散步":"street","城市天台日落音乐会":"music","上生新所黑胶市集":"coffee",
  "苏州河夜骑":"sport","小型陶艺体验局":"niche","世纪公园松弛野餐":"nature","深夜觅食地图":"food"
};
const levelCatalog=[
  {level:1,name:"刚刚出门",min:0},
  {level:2,name:"城市散步者",min:2},
  {level:3,name:"周末探索员",min:5},
  {level:4,name:"同频召集人",min:9},
  {level:5,name:"城市生活家",min:14}
];
const modeCopy={solo:{label:"独处充电清单",reason:"可独自参加 · 不强制互动",crew:"适合安静同行的小队",stage:"今天想一个人自在探索，不被打扰。"},soft:{label:"轻轻同行清单",reason:"2—4 人 · 安静相处也自在",crew:"低压力、可安静同行的小队",stage:"今天想要两三个人，舒服待着就好。"},party:{label:"热闹组局清单",reason:"多人互动 · 新朋友友好",crew:"正在热闹集结的小队",stage:"今天电量满格，去热闹现场认识新朋友。"}};

function safeArray(key,fallback){try{const value=JSON.parse(localStorage.getItem(key)||"");return Array.isArray(value)?value:fallback}catch{return fallback}}
function formatDate(date=new Date()){return new Intl.DateTimeFormat("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}).format(date).replaceAll("/",".")}
function makePassportNumber(){return `SHA-${String(Date.now()).slice(-6)}`}
const defaultBuddyRecords=[
  {id:"seed-otter",animal:"otter",nickname:"海獭小陶",activity:"苏州河慢走",date:"2026.09.12",tags:["安静同行","不强行热场"],count:2,memory:"没说很多话，但一起看完了整场日落。"},
  {id:"seed-cat",animal:"cat",nickname:"橘猫慢慢",activity:"西岸艺术慢逛",date:"2026.09.06",tags:["各看各的","结束后自由安排"],count:1,memory:"在喜欢的画前停了很久，谁也没有催谁。"},
  {id:"seed-penguin",animal:"penguin",nickname:"企鹅准时到",activity:"苏州河夜骑",date:"2026.08.30",tags:["准时集合","路线明确"],count:1,memory:"风很大，但沿河的灯一直很亮。"},
  {id:"seed-rabbit",animal:"rabbit",nickname:"白兔小枝",activity:"小型陶艺体验局",date:"2026.08.23",tags:["轻松聊天","可以一起吃饭"],count:1,memory:"捏了两只不太圆的杯子，笑得很开心。"}
];
function createDefaultPassport(){
  const legacyEscapes=Number(localStorage.getItem("weekend-escapes")||7);
  const legacyFootprints=Number(localStorage.getItem("weekend-footprints")||12);
  return {version:2,level:3,escapeCount:Number.isFinite(legacyEscapes)?legacyEscapes:7,footprints:Number.isFinite(legacyFootprints)?legacyFootprints:12,buddyCount:4,completedActivities:[],unlockedStamps:[
    {id:"art",firstUnlocked:"2026.08.16",count:2,activities:["西岸艺术慢逛计划"],lastActivity:"西岸艺术慢逛计划",lastPlace:"西岸美术馆"},
    {id:"street",firstUnlocked:"2026.08.23",count:1,activities:["梧桐区日落散步"],lastActivity:"梧桐区日落散步",lastPlace:"武康路"},
    {id:"sport",firstUnlocked:"2026.08.30",count:1,activities:["苏州河夜骑"],lastActivity:"苏州河夜骑",lastPlace:"昌平路桥"}
  ],buddyRecords:defaultBuddyRecords.map(record=>({...record,tags:[...record.tags]})),joinedCrews:[],recentCheckin:null,currentPage:"identity",issueDate:"2026.09.01",passportNumber:makePassportNumber()}
}
function loadPassportState(){
  const fallback=createDefaultPassport();
  try{
    const parsed=JSON.parse(localStorage.getItem("weekend-passport-v2")||"null");
    const valid=parsed&&typeof parsed==="object"&&Array.isArray(parsed.completedActivities)&&parsed.completedActivities.every(item=>typeof item==="string")&&Array.isArray(parsed.unlockedStamps)&&parsed.unlockedStamps.every(item=>item&&stampCatalog.some(meta=>meta.id===item.id)&&Number.isFinite(Number(item.count))&&Array.isArray(item.activities))&&Array.isArray(parsed.buddyRecords)&&parsed.buddyRecords.every(item=>item&&typeof item.nickname==="string"&&typeof item.animal==="string"&&Array.isArray(item.tags));
    if(!valid){localStorage.setItem("weekend-passport-v2",JSON.stringify(fallback));return fallback}
    const clean={...fallback,...parsed};clean.escapeCount=Number.isFinite(Number(clean.escapeCount))?Math.max(0,Number(clean.escapeCount)):fallback.escapeCount;clean.footprints=Number.isFinite(Number(clean.footprints))?Math.max(0,Number(clean.footprints)):fallback.footprints;clean.joinedCrews=Array.isArray(clean.joinedCrews)?clean.joinedCrews:[];clean.currentPage=["identity","stamps","buddies"].includes(clean.currentPage)?clean.currentPage:"identity";return clean;
  }catch{try{localStorage.setItem("weekend-passport-v2",JSON.stringify(fallback))}catch{}return fallback}
}
let passportState=loadPassportState();
const state={
  mode:localStorage.getItem("weekend-mode")||"solo",
  animal:localStorage.getItem("weekend-animal")||"kangaroo",
  type:"随便看看",budget:150,people:1,weather:"晴天",
  saved:new Set(safeArray("weekend-saved",[])),
  manual:new Set(safeArray("weekend-manual",["不强行热场","可以安静同行"]))
};

const $=selector=>document.querySelector(selector);
const $$=selector=>[...document.querySelectorAll(selector)];
const toast=$("#toast");
let toastTimer;

function showToast(message){toast.querySelector("span").textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),2300)}
function refreshIcons(){if(window.lucide)lucide.createIcons()}
function getAnimal(id){return animals.find(animal=>animal.id===id)||animals[2]}

function renderAnimals(){
  $("#animalSelector").innerHTML=animals.map(animal=>`<button class="animal-option ${animal.id===state.animal?"selected":""}" data-animal="${animal.id}" data-avatar="${animal.id}" type="button" role="option" aria-selected="${animal.id===state.animal}" aria-label="${animal.name}：${animal.personality}"><span class="picker-avatar"><img src="${animal.image}" alt="" /></span><strong>${animal.name}</strong><small>${animal.personality}</small><i data-lucide="check" class="picker-check"></i></button>`).join("");
  applyAnimalUI(getAnimal(state.animal),false);
  $$(".animal-option").forEach(button=>button.addEventListener("click",()=>selectAnimal(button.dataset.animal)));
  refreshIcons();
}
function applyAnimalUI(animal,animate){
  const stage=$("#partnerStage");const main=$("#mainAnimal");
  const apply=()=>{
    main.className="partner-animal";main.src=animal.image;main.alt=`${animal.name}城市伙伴`;void main.offsetWidth;main.classList.add(animal.animationClass);
    $("#currentPartnerAvatar").src=animal.image;$("#currentPartnerAvatar").alt=`${animal.name}伙伴头像`;$("#currentPartnerAvatar").parentElement.dataset.avatar=animal.id;
    $("#drawerCurrentAvatar").src=animal.image;$("#drawerCurrentAvatar").alt=`当前选中的${animal.name}伙伴`;$("#drawerCurrentAvatar").parentElement.dataset.avatar=animal.id;
    $("#currentPartnerLabel").textContent=`${animal.name} · ${animal.personality}`;$("#drawerCurrentDescription").textContent=animal.description;$("#partnerToggle").setAttribute("aria-label",`选择伙伴，当前为${animal.name}`);$("#animalName").textContent=animal.name;$("#animalPersonality").textContent=animal.personality;$("#animalLine").textContent=animal.description;$("#favoriteFood").textContent=animal.favoriteFood;
    $("#headerAvatar").src=animal.image;$("#headerAvatar").alt=`${animal.name}头像`;$("#profileButton").dataset.avatar=animal.id;$("#profileButton").setAttribute("aria-label",`当前动物伙伴：${animal.name}`);
    $("#passportAvatar").src=animal.image;$("#passportAvatar").alt=`护照中的${animal.name}头像`;$("#passportAvatarFrame").dataset.avatar=animal.id;
    $("#passportCoverAvatar").src=animal.image;$("#passportCoverAvatar").alt=`${animal.name}护照徽章`;$("#passportCoverAvatar").parentElement.dataset.avatar=animal.id;$("#recommendAnimal").textContent=animal.name;
    stage.style.setProperty("--partner-accent",animal.accentColor);stage.style.setProperty("--partner-soft",animal.softColor);
  };
  if(!animate){apply();return}
  stage.classList.add("is-leaving");setTimeout(()=>{apply();stage.classList.remove("is-leaving")},150);
}
function selectAnimal(id){
  const animal=getAnimal(id);state.animal=id;localStorage.setItem("weekend-animal",id);
  $$(".animal-option").forEach(button=>{const selected=button.dataset.animal===id;button.classList.toggle("selected",selected);button.setAttribute("aria-selected",String(selected))});
  applyAnimalUI(animal,true);renderRecommendations();renderCrews();renderPassport();showToast(`已切换为${animal.name}伙伴`);clearTimeout(partnerAutoCloseTimer);partnerAutoCloseTimer=setTimeout(()=>closePartnerPanel(true),300);
}

let partnerPanelOpen=false;let partnerPanelTimer;let partnerAutoCloseTimer;let partnerPreviousFocus;
function openPartnerPanel(){
  clearTimeout(partnerPanelTimer);clearTimeout(partnerAutoCloseTimer);const panel=$("#partnerPanel");partnerPreviousFocus=document.activeElement;partnerPanelOpen=true;panel.hidden=false;$("#drawerEdgeToggle").hidden=false;$("#partnerBackdrop").hidden=false;document.body.classList.add("partner-open");$("#partnerToggle").setAttribute("aria-expanded","true");requestAnimationFrame(()=>{panel.classList.add("open");$("#drawerEdgeToggle").classList.add("open")});setTimeout(()=>panel.focus({preventScroll:true}),80);
}
function closePartnerPanel(returnFocus=false){
  if(!partnerPanelOpen)return;clearTimeout(partnerAutoCloseTimer);const panel=$("#partnerPanel");partnerPanelOpen=false;panel.classList.remove("open");$("#drawerEdgeToggle").classList.remove("open");document.body.classList.remove("partner-open");$("#partnerToggle").setAttribute("aria-expanded","false");partnerPanelTimer=setTimeout(()=>{panel.hidden=true;$("#drawerEdgeToggle").hidden=true;$("#partnerBackdrop").hidden=true},300);if(returnFocus)(partnerPreviousFocus?.isConnected?partnerPreviousFocus:$("#partnerToggle")).focus({preventScroll:true});
}
function togglePartnerPanel(){partnerPanelOpen?closePartnerPanel(true):openPartnerPanel()}
function trapPartnerFocus(event){
  if(!partnerPanelOpen||event.key!=="Tab")return;const panel=$("#partnerPanel");const focusable=$$("#partnerPanel button:not([disabled]),#partnerPanel [href],#partnerPanel [tabindex]:not([tabindex='-1'])").filter(element=>!element.hidden);if(!focusable.length)return;const first=focusable[0];const last=focusable[focusable.length-1];if(!panel.contains(document.activeElement)){event.preventDefault();first.focus();return}if(event.shiftKey&&(document.activeElement===first||document.activeElement===panel)){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
}

function renderTypes(){const types=["随便看看","看展","户外","市集","演出","手作","美食","城市夜游"];$("#typeFilters").innerHTML=types.map(type=>`<button class="type-chip ${state.type===type?"active":""}" data-type="${type}" type="button">${type}</button>`).join("");$$(".type-chip").forEach(button=>button.addEventListener("click",()=>{state.type=button.dataset.type;renderTypes()}))}

function selectMode(mode,notify=true){
  state.mode=mode;
  if(mode==="solo")state.people=1;
  if(mode==="soft"&&(state.people<2||state.people>4))state.people=2;
  if(mode==="party"&&state.people<5)state.people=5;
  localStorage.setItem("weekend-mode",mode);
  $$(".battery-card").forEach(card=>{const active=card.dataset.mode===mode;card.classList.toggle("active",active);card.setAttribute("aria-checked",String(active))});
  $("#peopleValue").textContent=state.people;$("#recommendMode").textContent=modeCopy[mode].label;$("#crewHeading").textContent=modeCopy[mode].crew;$("#stageEnergyLine").textContent=modeCopy[mode].stage;
  renderRecommendations();renderCrews();
  if(notify)showToast(`社交电量切换为「${modeCopy[mode].label.replace("清单","")}」`);
}

function filteredActivities(){return activities.filter(item=>{const range=item.people.match(/\d+/g).map(Number);const min=range[0];const max=range[1]??range[0];return item.modes.includes(state.mode)&&(state.type==="随便看看"||item.type===state.type)&&item.price<=state.budget&&item.weather.includes(state.weather)&&state.people>=min&&state.people<=max})}
function renderRecommendations(){
  const list=filteredActivities();const animal=getAnimal(state.animal);const grid=$("#activityGrid");
  $("#recommendCount").textContent=`${list.length} 个活动刚刚好`;$("#recommendReason").textContent=`${animal.rec} · ${state.weather}优先 · ${modeCopy[state.mode].reason}`;
  grid.dataset.foodTheme=animal.id;grid.style.setProperty("--food-color",animal.accentColor);grid.style.setProperty("--food-bg",animal.softColor);grid.style.setProperty("--food-shadow",`${animal.accentColor}2f`);
  grid.innerHTML=list.map((item,index)=>`<article class="activity-card" data-activity-id="${item.id}" tabindex="0" role="button" aria-label="查看${item.name}详情" style="--theme:${item.theme};--image-position:${item.position}"><span class="food-motif motif-a" aria-hidden="true"><i data-lucide="${animal.foodIcon}"></i></span><span class="food-motif motif-b" aria-hidden="true"><i data-lucide="${animal.foodIcon}"></i></span><div class="activity-image"><img src="${item.img}" alt="${item.alt}" width="1400" height="933" loading="lazy" /><span class="match-badge">${Math.max(80,item.match-(state.budget<item.price?8:0))}% 匹配</span><button class="save-button ${state.saved.has(item.name)?"saved":""}" data-save="${item.name}" type="button" aria-label="${state.saved.has(item.name)?"取消收藏":"收藏"}${item.name}"><i data-lucide="heart"></i></button><span class="activity-index">0${index+1}</span><span class="activity-open-hint"><i data-lucide="maximize-2"></i> 查看详情</span></div><div class="activity-body"><div class="tag-row"><span>${item.type}</span><span class="pressure">社交压力：${item.pressure}</span>${item.solo?'<span class="solo-ok">适合独自参加</span>':""}</div><h3>${item.name}</h3><p>${item.feature}</p><div class="activity-info"><span><i data-lucide="calendar-days"></i>${item.time}</span><span><i data-lucide="map-pin"></i>${item.place}</span><span><i data-lucide="users"></i>${item.people}</span><strong>${item.price?`¥${item.price}`:"免费"}</strong></div><div class="activity-actions"><button data-activity-view="${item.id}" type="button">查看详情 <i data-lucide="arrow-up-right"></i></button><button data-find-crew="${item.name}" type="button">找搭子</button></div></div></article>`).join("");
  $("#emptyState").hidden=list.length>0;$("#activityGrid").hidden=list.length===0;
  $$("[data-save]").forEach(button=>button.addEventListener("click",event=>{event.stopPropagation();toggleSave(button.dataset.save)}));
  $$(".activity-image img").forEach(image=>image.addEventListener("error",()=>{const frame=image.closest(".activity-image");frame.dataset.fallback=`${image.alt}暂时无法加载`;frame.classList.add("image-error")}));
  $$("[data-activity-view]").forEach(button=>button.addEventListener("click",event=>{event.stopPropagation();openActivityDetail(button.dataset.activityView,button.closest(".activity-card"))}));
  $$("[data-find-crew]").forEach(button=>button.addEventListener("click",event=>{event.stopPropagation();$("#crews").scrollIntoView({behavior:"smooth"});showToast(`正在寻找「${button.dataset.findCrew}」的同频搭子`)}));
  $$("[data-activity-id]").forEach(card=>{card.setAttribute("role","group");card.addEventListener("click",()=>openActivityDetail(card.dataset.activityId,card));card.addEventListener("keydown",event=>{if((event.key==="Enter"||event.key===" ")&&!event.target.closest("button")){event.preventDefault();openActivityDetail(card.dataset.activityId,card)}})});
  $("#recommendAnimal").textContent=animal.name;refreshIcons();
}
function toggleSave(name){state.saved.has(name)?state.saved.delete(name):state.saved.add(name);localStorage.setItem("weekend-saved",JSON.stringify([...state.saved]));renderRecommendations();syncDetailSaveButtons();showToast(state.saved.has(name)?"已收藏到周末清单":"已取消收藏")}

function renderManual(){$("#manualOptions").innerHTML=manualChoices.map(choice=>`<button class="manual-chip ${state.manual.has(choice)?"active":""}" data-manual="${choice}" type="button">${state.manual.has(choice)?"✓ ":""}${choice}</button>`).join("");$("#manualCount").textContent=`已选择 ${state.manual.size} 项`;$$("[data-manual]").forEach(button=>button.addEventListener("click",()=>{state.manual.has(button.dataset.manual)?state.manual.delete(button.dataset.manual):state.manual.add(button.dataset.manual);localStorage.setItem("weekend-manual",JSON.stringify([...state.manual]));renderManual()}))}
function renderCrews(){
  const list=crews[state.mode];const themeAnimal=getAnimal(state.animal);const container=$("#crewCards");
  container.dataset.foodTheme=themeAnimal.id;container.style.setProperty("--food-color",themeAnimal.accentColor);container.style.setProperty("--food-bg",themeAnimal.softColor);container.style.setProperty("--food-shadow",`${themeAnimal.accentColor}2f`);
  container.innerHTML=list.map((crew,index)=>{const animal=getAnimal(crew.animal);const crewId=`${state.mode}-${index}`;const joined=passportState.joinedCrews.includes(crewId);return `<article class="crew-card"><span class="food-motif motif-a" aria-hidden="true"><i data-lucide="${themeAnimal.foodIcon}"></i></span><span class="food-motif motif-b" aria-hidden="true"><i data-lucide="${themeAnimal.foodIcon}"></i></span><div class="crew-animal" data-avatar="${animal.id}"><img src="${animal.image}" alt="发起人${animal.name}头像" /></div><div class="crew-main"><h3>${crew.name}</h3><p>${crew.mood}</p><div class="crew-tags">${crew.tags.map(tag=>`<span>${tag}</span>`).join("")}</div><div class="crew-meta"><span>${crew.time}</span><span>已加入 ${crew.joined+(joined?1:0)} 人</span><strong>${joined?"已收录至图鉴":`还差 ${crew.need} 人`}</strong></div></div><button class="join-button ${joined?"joined":""}" data-join="${index}" data-crew-id="${crewId}" type="button" ${joined?"disabled":""}>${joined?"已加入 ✓":"加入"}</button></article>`}).join("");
  $$("[data-join]").forEach(button=>button.addEventListener("click",()=>joinCrew(button)));refreshIcons();
}

function savePassportState(){
  const current=[...levelCatalog].reverse().find(item=>passportState.escapeCount>=item.min)||levelCatalog[0];passportState.level=current.level;passportState.buddyCount=passportState.buddyRecords.length;
  localStorage.setItem("weekend-passport-v2",JSON.stringify(passportState));
}
function joinCrew(button){
  const index=Number(button.dataset.join);const crew=crews[state.mode][index];const crewId=button.dataset.crewId;if(!crew||passportState.joinedCrews.includes(crewId))return;
  const host=getAnimal(crew.animal);passportState.joinedCrews.push(crewId);passportState.buddyRecords.unshift({id:`crew-${crewId}`,animal:crew.animal,nickname:`${host.name}搭子`,activity:crew.name,date:formatDate(),tags:crew.tags.slice(0,2),count:1,memory:`这次同行很自在，${crew.mood}。`});savePassportState();renderCrews();renderPassport();showToast("加入成功，新搭子已收录进护照图鉴")
}
function getLevelInfo(){
  const index=Math.max(0,levelCatalog.findLastIndex(item=>passportState.escapeCount>=item.min));const current=levelCatalog[index];const next=levelCatalog[index+1];return {current,next,remaining:next?Math.max(0,next.min-passportState.escapeCount):0}
}
function initPassportActivitySelect(){
  const select=$("#passportActivitySelect");select.innerHTML=activities.map(item=>`<option value="${item.name}">${item.name} · ${item.place}</option>`).join("");
  const saved=activities.some(item=>item.name===passportState.selectedActivity)?passportState.selectedActivity:activities[0].name;passportState.selectedActivity=saved;select.value=saved;select.onchange=()=>{passportState.selectedActivity=select.value;savePassportState();updateCheckinControls()};updateCheckinControls();
}
function updateCheckinControls(){
  const select=$("#passportActivitySelect");const button=$("#checkinButton");if(!select||!button)return;const completed=passportState.completedActivities.includes(select.value);button.disabled=completed||isStamping;button.innerHTML=completed?'<i data-lucide="badge-check"></i> 该活动已打卡':'<i data-lucide="stamp"></i> 盖下本周印章';$("#checkinHint").textContent=completed?"这段旅程已写进护照，可选择另一个活动。":"每个活动仅能完成一次打卡";refreshIcons()
}
function setPassportPage(page,persist=true){
  if(!["identity","stamps","buddies"].includes(page))page="identity";passportState.currentPage=page;
  $$("[data-passport-page]").forEach(button=>{const active=button.dataset.passportPage===page;button.classList.toggle("active",active);button.setAttribute("aria-selected",String(active));button.tabIndex=active?0:-1});
  $$(".passport-view").forEach(view=>{const active=view.dataset.view===page;view.classList.toggle("active",active);view.hidden=!active});
  $("#stampPopover").hidden=true;if(persist)savePassportState();refreshIcons()
}
function renderLevelRoute(){
  const {current}=getLevelInfo();$("#levelRoute").innerHTML=levelCatalog.map(item=>`<span class="route-stop ${item.level<current.level?"passed":item.level===current.level?"current":""}"><i>${item.level<=current.level?"✓":item.level}</i><small>${item.name}</small></span>`).join("")
}
function renderStamps(justUnlocked=""){
  const lookup=new Map(passportState.unlockedStamps.map(stamp=>[stamp.id,stamp]));
  $("#stampGrid").innerHTML=stampCatalog.map((meta,index)=>{const stamp=lookup.get(meta.id);if(!stamp)return `<div class="city-stamp locked" style="--stamp:${meta.color};--r:${index%2?"4deg":"-5deg"}" aria-label="${meta.name}尚未解锁"><i data-lucide="lock-keyhole"></i><strong>${meta.name}</strong><small>尚未到达</small></div>`;return `<button class="city-stamp unlocked ${justUnlocked===meta.id?"just-inked":""}" style="--stamp:${meta.color};--r:${index%2?"4deg":"-5deg"}" data-stamp-id="${meta.id}" type="button" aria-label="查看${meta.name}印章详情"><i data-lucide="${meta.icon}"></i><strong>${meta.name}</strong><small>${stamp.firstUnlocked}</small>${stamp.count>1?`<b>×${stamp.count}</b>`:""}</button>`}).join("");
  $$("[data-stamp-id]").forEach(button=>button.addEventListener("click",()=>showStampDetail(button.dataset.stampId,button)));refreshIcons()
}
function showStampDetail(id){
  const stamp=passportState.unlockedStamps.find(item=>item.id===id);const meta=stampCatalog.find(item=>item.id===id);if(!stamp||!meta)return;$("#stampDetailTitle").textContent=meta.name;$("#stampDetailDate").textContent=stamp.firstUnlocked;$("#stampDetailCount").textContent=`${stamp.count} 次`;$("#stampDetailActivity").textContent=stamp.activities.join("、");$("#stampDetailPlace").textContent=stamp.lastPlace;const popover=$("#stampPopover");popover.hidden=false;popover.style.setProperty("--detail-color",meta.color);requestAnimationFrame(()=>popover.classList.add("show"));$("#stampDetailClose").focus({preventScroll:true})
}
function renderBuddyVisas(){
  $("#buddyVisas").innerHTML=passportState.buddyRecords.map((buddy,index)=>{const animal=getAnimal(buddy.animal);return `<article class="buddy-visa visa-${index%3}" style="--visa-accent:${animal.accentColor};--visa-soft:${animal.softColor}"><div class="visa-avatar" data-avatar="${animal.id}"><img src="${animal.image}" alt="${buddy.nickname}的${animal.name}头像" /></div><div class="visa-copy"><div><strong>${buddy.nickname}</strong><span>${buddy.date}</span></div><p>一起完成：${buddy.activity}</p><div>${buddy.tags.map(tag=>`<small>${tag}</small>`).join("")}<b>同行 ${buddy.count} 次</b></div><blockquote>“${buddy.memory}”</blockquote></div></article>`}).join("")
}
function renderPassport(justUnlocked=""){
  const animal=getAnimal(state.animal);const {current,next,remaining}=getLevelInfo();passportState.level=current.level;passportState.buddyCount=passportState.buddyRecords.length;
  $("#passportAnimalName").textContent=animal.name;$("#passportPersonality").textContent=animal.personality;$("#passportFavorite").textContent=animal.favoriteFood;$("#passportSignature").textContent=`“${animal.description}”`;$("#passportIssueDate").textContent=passportState.issueDate;$("#passportNumber").textContent=passportState.passportNumber;$("#coverPassportNumber").textContent=`NO. ${passportState.passportNumber}`;
  $("#levelValue").textContent=String(current.level).padStart(2,"0");$("#levelName").textContent=current.name;$("#levelMessage").textContent=next?`再完成 ${remaining} 次出逃，即可升级为“${next.name}”。`:`已经是“${current.name}”，继续收藏城市新鲜事。`;
  $("#escapeCount").textContent=passportState.escapeCount;$("#footprintCount").textContent=passportState.footprints;$("#buddyCount").textContent=passportState.buddyCount;$("#buddyVisaCount").textContent=passportState.buddyCount;
  $("#mobileLevelValue").textContent=String(current.level).padStart(2,"0");$("#mobileLevelName").textContent=current.name;$("#mobileLevelMessage").textContent=next?`再完成 ${remaining} 次出逃，升级为“${next.name}”。`:`已解锁最高城市等级。`;$("#mobileEscapeCount").textContent=passportState.escapeCount;$("#mobileFootprintCount").textContent=passportState.footprints;
  $("#unlockedStampCount").textContent=passportState.unlockedStamps.length;$("#totalStampCount").textContent=passportState.unlockedStamps.reduce((sum,stamp)=>sum+stamp.count,0);
  const recent=passportState.recentCheckin;$("#recentCheckin").innerHTML=recent?`<i data-lucide="map-pin"></i><div><small>最近到达 · ${recent.date}</small><strong>${recent.activity}</strong><span>${recent.place} · SHA</span></div>`:'<i data-lucide="map-pin"></i><div><small>最近到达</small><strong>等待第一次打卡</strong><span>上海 · SHA</span></div>';
  renderLevelRoute();renderStamps(justUnlocked);renderBuddyVisas();setPassportPage(passportState.currentPage,false);updateCheckinControls();refreshIcons()
}

let passportOpening=false;let isStamping=false;
function openPassport(){
  const experience=$("#passportExperience");if(experience.dataset.open==="true"||passportOpening)return;const cover=$("#passportCover");passportOpening=true;cover.disabled=true;experience.classList.add("opening");experience.dataset.open="true";setTimeout(()=>{passportOpening=false;experience.classList.remove("opening");cover.setAttribute("aria-hidden","true");cover.tabIndex=-1;$("#passportBook").classList.add("ready");$("[data-passport-page].active").focus({preventScroll:true})},820)
}
function completeCheckin(){
  const select=$("#passportActivitySelect");const activity=activities.find(item=>item.name===select.value);if(!activity||isStamping)return;if(passportState.completedActivities.includes(activity.name)){showToast("这个活动已经打卡过了");updateCheckinControls();return}
  if($("#passportExperience").dataset.open!=="true")openPassport();setPassportPage("stamps");isStamping=true;updateCheckinControls();const book=$("#passportBook");const button=$("#checkinButton");button.classList.add("is-pressed");book.classList.add("is-stamping");
  const stampId=activityStampMap[activity.name]||"niche";setTimeout(()=>{const existing=passportState.unlockedStamps.find(stamp=>stamp.id===stampId);if(existing){existing.count+=1;existing.lastActivity=activity.name;existing.lastPlace=activity.place;if(!existing.activities.includes(activity.name))existing.activities.push(activity.name)}else{passportState.unlockedStamps.push({id:stampId,firstUnlocked:formatDate(),count:1,activities:[activity.name],lastActivity:activity.name,lastPlace:activity.place})}passportState.completedActivities.push(activity.name);passportState.escapeCount+=1;passportState.footprints+=1;passportState.recentCheckin={activity:activity.name,place:activity.place,date:formatDate()};savePassportState();renderPassport(stampId);book.classList.add("count-bump")},360);
  setTimeout(()=>{isStamping=false;button.classList.remove("is-pressed");book.classList.remove("is-stamping","count-bump");updateCheckinControls();showToast(`打卡成功！「${stampCatalog.find(item=>item.id===stampId).name}」已更新，获得 1 枚脚印`)},860)
}

const activityDetailModal=$("#activityDetailModal");
let activityDetailOpen=false;let activityDetailTimer;let activityDetailPreviousFocus;let activeActivityId="";let detailPrimaryMode="party";
function getActivityById(id){return activities.find(activity=>activity.id===id)}
function getActivityMatch(activity){return Math.max(80,activity.matchScore-(state.budget<activity.price?8:0))}
function getEnergyDetailCopy(){return state.mode==="solo"?"一个人参加也能获得完整体验。":state.mode==="soft"?"有人陪伴，但不需要持续聊天。":"主持人会帮助大家自然认识新朋友。"}
function buildActivityReason(activity){
  const animal=getAnimal(state.animal);const modeName=modeCopy[state.mode].label.replace("清单","");const budgetText=activity.price<=state.budget?`人均${activity.price?"¥"+activity.price:"免费"}，符合你${state.budget}元以内的预算。`:`活动人均¥${activity.price}，略高于当前预算，但体验匹配度仍然很高。`;const peopleText=state.people===1?"你当前按一人出发做准备。":`你设置了${state.people}人同行，可以直接匹配小队。`;const weatherText=activity.weather.includes(state.weather)?`也符合你的“${state.weather}优先”偏好。`:`建议出发前再确认天气变化。`;return `你选择了“${modeName}”，${animal.name}伙伴的“${animal.personality}”更适合${activity.category}类的节奏。${activity.reason}${peopleText}${budgetText}${weatherText}`
}
function syncDetailSaveButtons(){
  if(!activeActivityId)return;const activity=getActivityById(activeActivityId);if(!activity)return;const saved=state.saved.has(activity.name);[$("#detailHeadingSave"),$("#detailFooterSave")].forEach(button=>{button.classList.toggle("saved",saved);button.setAttribute("aria-label",`${saved?"取消收藏":"收藏"}${activity.name}`);button.setAttribute("aria-pressed",String(saved))})
}
function setDetailImage(index){
  const activity=getActivityById(activeActivityId);const image=activity?.images[index];if(!image)return;const frame=$("#detailMainImageFrame");const main=$("#detailMainImage");frame.classList.remove("image-error");main.src=image.src;main.alt=image.alt;main.style.objectPosition=image.position;$$("[data-detail-image]").forEach(button=>{const active=Number(button.dataset.detailImage)===index;button.classList.toggle("active",active);button.setAttribute("aria-pressed",String(active))})
}
function renderDetailTeams(activity){
  $("#detailTeams").innerHTML=activity.teams.map(team=>{const animal=getAnimal(team.animal);const key=`detail-${team.id}`;const joined=passportState.joinedCrews.includes(key);const current=Math.min(team.total,team.current+(joined?1:0));return `<article class="detail-team-card"><span class="detail-team-avatar" data-avatar="${animal.id}"><img src="${animal.image}" alt="${animal.name}发起人头像" /></span><div><div class="detail-team-title"><strong>${team.name}</strong><span>${current}/${team.total}人</span></div><p>${joined?"已加入这支队伍":`还差 ${team.total-current} 人`} · ${team.time}</p><div>${team.tags.map(tag=>`<small>${tag}</small>`).join("")}</div></div><button class="detail-team-join ${joined?"joined":""}" data-detail-team="${team.id}" type="button" ${joined?"disabled":""}>${joined?"已加入 ✓":"加入队伍"}</button></article>`}).join("");
  $$("[data-detail-team]").forEach(button=>button.addEventListener("click",()=>joinDetailTeam(activity.id,button.dataset.detailTeam)));const firstAvailable=activity.teams.find(team=>!passportState.joinedCrews.includes(`detail-${team.id}`));$("#detailJoinButton").disabled=!firstAvailable;$("#detailJoinButton").innerHTML=firstAvailable?'立即加入 <i data-lucide="arrow-up-right"></i>':'已加入全部队伍 <i data-lucide="badge-check"></i>';refreshIcons()
}
function renderActivityDetail(activity){
  activeActivityId=activity.id;const match=getActivityMatch(activity);$("#activityDetailTitle").textContent=activity.title;$("#activityDetailDescription").textContent=activity.subtitle;$("#detailCategory").textContent=activity.category;$("#detailTopCategory").textContent=`${activity.category} · ${activity.audience}`;$("#detailMatch").textContent=`${match}% 合拍`;$("#detailStatus").textContent=activity.status;$("#detailStatus").dataset.status=activity.status;$("#detailAudience").textContent=activity.audience;$("#detailPressureBadge").textContent=`社交压力：${activity.pressure}`;$("#detailMeeting").textContent=activity.meeting;$("#detailLocationLine").textContent=`${activity.location} · ${activity.distance} · ${activity.metro}`;$("#detailDescriptionLong").textContent=activity.description;$("#detailSocialPressure").textContent=activity.pressure;$("#detailGroupSize").textContent=activity.recommendedGroupSize;$("#detailSocialFeatures").innerHTML=activity.socialFeatures.map(item=>`<li><i data-lucide="check"></i>${item}</li>`).join("");$("#detailEnergyNote").textContent=getEnergyDetailCopy();$("#detailReason").textContent=buildActivityReason(activity);
  $("#detailFacts").innerHTML=`<span><i data-lucide="calendar-clock"></i><small>时间</small><strong>${activity.timeLong}</strong></span><span><i data-lucide="map-pin"></i><small>地点</small><strong>${activity.location}</strong></span><span><i data-lucide="wallet-cards"></i><small>价格</small><strong>${activity.price?`人均 ¥${activity.price}`:"免费"}</strong></span><span><i data-lucide="cloud-sun"></i><small>天气</small><strong>${activity.weatherDetail}</strong></span>`;
  $("#detailSchedule").innerHTML=activity.schedule.map(([time,text],index)=>`<li class="${index===2?"featured":""}"><time>${time}</time><span>${text}</span></li>`).join("");$("#detailThumbnails").innerHTML=activity.images.map((image,index)=>`<button class="${index===0?"active":""}" data-detail-image="${index}" type="button" aria-label="查看${image.label}图片" aria-pressed="${index===0}"><img src="${image.src}" alt="" style="object-position:${image.position}" /><span>${image.label}</span></button>`).join("");$$("[data-detail-image]").forEach(button=>button.addEventListener("click",()=>setDetailImage(Number(button.dataset.detailImage))));setDetailImage(0);renderDetailTeams(activity);syncDetailSaveButtons();
  const actions=[$("#detailSoloButton"),$("#detailFindButton"),$("#detailJoinButton")];actions.forEach(button=>button.classList.remove("primary-choice"));const primary=state.mode==="solo"?$("#detailSoloButton"):state.mode==="soft"?$("#detailFindButton"):$("#detailJoinButton");primary.classList.add("primary-choice");detailPrimaryMode=state.mode;refreshIcons()
}
function openActivityDetail(id,trigger=null){
  const activity=getActivityById(id);if(!activity||modal.classList.contains("open"))return;clearTimeout(activityDetailTimer);if(partnerPanelOpen)closePartnerPanel(false);activityDetailPreviousFocus=trigger||document.activeElement;renderActivityDetail(activity);activityDetailOpen=true;activityDetailModal.setAttribute("aria-hidden","false");document.body.classList.add("activity-detail-open");requestAnimationFrame(()=>activityDetailModal.classList.add("open"));setTimeout(()=>$(".activity-detail-card").focus({preventScroll:true}),80)
}
function closeActivityDetail(returnFocus=true){
  if(!activityDetailOpen)return;activityDetailOpen=false;activityDetailModal.classList.remove("open");document.body.classList.remove("activity-detail-open");activityDetailTimer=setTimeout(()=>activityDetailModal.setAttribute("aria-hidden","true"),300);if(returnFocus){const fallback=$(`[data-activity-id="${activeActivityId}"]`);(activityDetailPreviousFocus?.isConnected?activityDetailPreviousFocus:fallback)?.focus({preventScroll:true})}
}
function joinDetailTeam(activityId,teamId){
  const activity=getActivityById(activityId);const team=activity?.teams.find(item=>item.id===teamId);const key=`detail-${teamId}`;if(!activity||!team||passportState.joinedCrews.includes(key))return;const host=getAnimal(team.animal);passportState.joinedCrews.push(key);passportState.buddyRecords.unshift({id:key,animal:team.animal,nickname:`${host.name}发起人`,activity:activity.title,date:formatDate(),tags:team.tags.slice(0,2),count:1,memory:`在「${activity.title}」里遇见了刚刚好的陪伴。`});savePassportState();renderDetailTeams(activity);renderPassport();showToast(`已加入「${team.name}」，搭子图鉴已更新`)
}
function chooseSoloActivity(){
  const activity=getActivityById(activeActivityId);if(!activity)return;passportState.selectedActivity=activity.name;$("#passportActivitySelect").value=activity.name;savePassportState();updateCheckinControls();showToast(`已安排独自参加「${activity.name}」，完成后可去护照打卡`)
}
function trapFocusIn(container,event){
  const focusable=[...container.querySelectorAll('button:not([disabled]),[href],select:not([disabled]),input:not([disabled]),[tabindex]:not([tabindex="-1"])')].filter(element=>!element.hidden&&element.getClientRects().length);if(!focusable.length)return;const first=focusable[0];const last=focusable[focusable.length-1];if(document.activeElement===container){event.preventDefault();(event.shiftKey?last:first).focus();return}if(!container.contains(document.activeElement)){event.preventDefault();first.focus();return}if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
}

const modal=$("#hotModal");let previousFocus;
function openHotModal(){if(activityDetailOpen)return;if(partnerPanelOpen)closePartnerPanel(false);previousFocus=document.activeElement;modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.classList.add("hot-open");setTimeout(()=>modal.querySelector(".hot-dialog").focus(),80)}
function closeHotModal(returnFocus=true){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.classList.remove("hot-open");if(returnFocus)previousFocus?.focus({preventScroll:true})}
function scrollToSection(id){closeHotModal(false);setTimeout(()=>document.querySelector(id).scrollIntoView({behavior:"smooth"}),180)}

$$(".battery-card").forEach(card=>card.addEventListener("click",()=>selectMode(card.dataset.mode)));
$("#partnerToggle").addEventListener("click",togglePartnerPanel);$("#drawerEdgeToggle").addEventListener("click",()=>closePartnerPanel(true));$("#profileButton").addEventListener("click",togglePartnerPanel);$("#partnerClose").addEventListener("click",()=>closePartnerPanel(true));$("#partnerBackdrop").addEventListener("click",()=>closePartnerPanel(true));
document.addEventListener("pointerdown",event=>{if(partnerPanelOpen&&!$("#partnerControlWrap").contains(event.target)&&!$("#partnerPanel").contains(event.target)&&!$("#drawerEdgeToggle").contains(event.target)&&!$("#partnerBackdrop").contains(event.target)&&event.target!==$("#profileButton")&&!$("#profileButton").contains(event.target))closePartnerPanel(true)});
$("#animalSelector").addEventListener("keydown",event=>{const option=event.target.closest(".animal-option");if(!option)return;const options=$$(".animal-option");const index=options.indexOf(option);const columns=2;let next=index;if(event.key==="ArrowRight")next=Math.min(options.length-1,index+1);if(event.key==="ArrowLeft")next=Math.max(0,index-1);if(event.key==="ArrowDown")next=Math.min(options.length-1,index+columns);if(event.key==="ArrowUp")next=Math.max(0,index-columns);if(next!==index){event.preventDefault();options[next].focus()}});
$("#budgetRange").addEventListener("input",event=>{state.budget=Number(event.target.value);$("#budgetValue").textContent=state.budget===500?"¥500+":`¥${state.budget}`});
$("#weatherSelect").addEventListener("change",event=>{state.weather=event.target.value;showToast(state.weather==="雨天"?"已切换为雨天室内方案":"已切换为晴天出行方案")});
$("#peopleMinus").addEventListener("click",()=>{state.people=Math.max(1,state.people-1);$("#peopleValue").textContent=state.people});
$("#peoplePlus").addEventListener("click",()=>{state.people=Math.min(8,state.people+1);$("#peopleValue").textContent=state.people});
$("#recommendButton").addEventListener("click",()=>{renderRecommendations();$("#recommendations").scrollIntoView({behavior:"smooth"});showToast("已按你的今日状态重新推荐")});
$("#checkinButton").addEventListener("click",completeCheckin);
$("#passportCover").addEventListener("click",openPassport);
$$("[data-passport-page]").forEach(button=>button.addEventListener("click",()=>setPassportPage(button.dataset.passportPage)));
$(".passport-tabs").addEventListener("keydown",event=>{if(!["ArrowLeft","ArrowRight"].includes(event.key))return;event.preventDefault();const tabs=$$("[data-passport-page]");const current=tabs.indexOf(document.activeElement);const direction=event.key==="ArrowRight"?1:-1;const next=tabs[(current+direction+tabs.length)%tabs.length];next.focus();setPassportPage(next.dataset.passportPage)});
$("#stampDetailClose").addEventListener("click",()=>{const popover=$("#stampPopover");popover.classList.remove("show");setTimeout(()=>popover.hidden=true,160)});
$("#passportReset").addEventListener("click",()=>{if(!window.confirm("重置护照的演示成长数据？动物选择不会被改变。"))return;localStorage.removeItem("weekend-passport-v2");passportState=createDefaultPassport();savePassportState();initPassportActivitySelect();renderPassport();setPassportPage("identity");showToast("护照演示数据已重置")});
$("#activityDetailClose").addEventListener("click",()=>closeActivityDetail(true));$$('[data-close-activity-detail]').forEach(element=>element.addEventListener("click",()=>closeActivityDetail(true)));$("#detailBackButton").addEventListener("click",()=>closeActivityDetail(true));
$("#detailHeadingSave").addEventListener("click",()=>{const activity=getActivityById(activeActivityId);if(activity)toggleSave(activity.name)});$("#detailFooterSave").addEventListener("click",()=>{const activity=getActivityById(activeActivityId);if(activity)toggleSave(activity.name)});
$("#detailSoloButton").addEventListener("click",chooseSoloActivity);$("#detailFindButton").addEventListener("click",()=>$("#detailTeamsSection").scrollIntoView({behavior:"smooth",block:"center"}));$("#detailJoinButton").addEventListener("click",()=>{const activity=getActivityById(activeActivityId);const team=activity?.teams.find(item=>!passportState.joinedCrews.includes(`detail-${item.id}`));if(team)joinDetailTeam(activity.id,team.id)});
$("#detailMainImage").addEventListener("error",()=>{$("#detailMainImageFrame").classList.add("image-error")});
$("#createCrewButton").addEventListener("click",()=>$("#createCrewDialog").showModal());
$("#publishCrewButton").addEventListener("click",event=>{if(!$("#crewTitleInput").value.trim()){event.preventDefault();showToast("先给小队起个名字吧");return}showToast("小队已发布，等待同频伙伴")});
$("#shareGuideButton").addEventListener("click",()=>$("#guideDialog").showModal());
$("#publishGuideButton").addEventListener("click",event=>{if(!$("#guideTitleInput").value.trim()||!$("#guideTipInput").value.trim()){event.preventDefault();showToast("写下标题和一条实用经验再发布吧");return}showToast("攻略发布成功，已收进出逃手记")});
$$('.like-button').forEach(button=>button.addEventListener("click",()=>{const liked=button.classList.toggle("liked");const count=button.querySelector("span");count.textContent=Number(count.textContent)+(liked?1:-1);showToast(liked?"已把这篇攻略收进喜欢":"已取消点赞")}));
$$('[data-close-modal]').forEach(button=>button.addEventListener("click",()=>closeHotModal(true)));
$("#modalDetailButton").addEventListener("click",()=>{const returnTarget=previousFocus;closeHotModal(false);setTimeout(()=>openActivityDetail("rooftop-concert",returnTarget),240)});
$("#modalCrewButton").addEventListener("click",()=>scrollToSection("#crews"));$("#modalBrowseButton").addEventListener("click",()=>scrollToSection("#recommendations"));
document.addEventListener("keydown",event=>{if(activityDetailOpen&&event.key==="Tab"){trapFocusIn($(".activity-detail-card"),event);return}if(partnerPanelOpen&&event.key==="Tab"){trapPartnerFocus(event);return}if(event.key!=="Escape")return;if(activityDetailOpen){closeActivityDetail(true);return}if(!$("#stampPopover").hidden){$("#stampPopover").classList.remove("show");$("#stampPopover").hidden=true;return}if(partnerPanelOpen){closePartnerPanel(true);return}if(modal.classList.contains("open"))closeHotModal()});

initPassportActivitySelect();renderAnimals();renderTypes();renderManual();renderPassport();selectMode(state.mode,false);refreshIcons();
setTimeout(openHotModal,420);
