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

const activities = [
  {name:"西岸艺术慢逛计划",type:"看展",time:"周六 10:30",place:"西岸美术馆",price:60,match:97,pressure:"低压力",solo:true,people:"1—2 人",feature:"不设固定路线，戴上耳机慢慢看完整场展。",img:"assets/activities/westbund-art.jpg",alt:"观众在西岸现代美术馆观看大型当代艺术装置",position:"center",theme:"#3f76e8",modes:["solo","soft"],weather:["晴天","雨天"]},
  {name:"梧桐区日落散步",type:"户外",time:"周六 16:40",place:"武康路集合",price:0,match:95,pressure:"轻互动",solo:true,people:"1—4 人",feature:"沿着光线走，不赶景点；想聊天就聊，不聊也自在。",img:"assets/activities/wukang-sunset.jpg",alt:"两位年轻人在上海梧桐树和老洋房之间迎着日落散步",position:"center 58%",theme:"#f2aa27",modes:["solo","soft"],weather:["晴天"]},
  {name:"城市天台日落音乐会",type:"演出",time:"周六 18:00",place:"静安大悦城",price:128,match:94,pressure:"自由社交",solo:true,people:"1—6 人",feature:"设有独处聆听区和搭子互动区，社交电量自由选择。",img:"assets/activities/rooftop-concert.jpg",alt:"上海城市天台晚霞中的乐队现场演出与观众",position:"center 48%",theme:"#ff705f",modes:["solo","soft","party"],weather:["晴天"]},
  {name:"上生新所黑胶市集",type:"市集",time:"周日 13:00",place:"上生·新所",price:50,match:92,pressure:"自然交流",solo:true,people:"1—4 人",feature:"黑胶、咖啡与旧物摊位，不用破冰也能自然聊起来。",img:"assets/activities/vinyl-market.jpg",alt:"年轻人在红砖创意市集中翻看黑胶唱片并喝咖啡",position:"center 45%",theme:"#ef4f55",modes:["solo","soft","party"],weather:["晴天","雨天"]},
  {name:"苏州河夜骑",type:"城市夜游",time:"周六 19:30",place:"昌平路桥",price:35,match:90,pressure:"团队协作",solo:false,people:"3—8 人",feature:"领队控速，全程 12km；沿河夜景和三个拍照停靠点。",img:"assets/activities/suzhou-creek-night-ride.jpg",alt:"三位骑行者戴着头盔沿苏州河城市灯光夜骑",position:"center 50%",theme:"#315fc9",modes:["soft","party"],weather:["晴天"]},
  {name:"小型陶艺体验局",type:"手作",time:"周日 14:00",place:"愚园路",price:168,match:91,pressure:"低压力",solo:true,people:"1—4 人",feature:"四人小班，各做各的也不尴尬，完成后可自由离开。",img:"assets/activities/pottery-workshop.jpg",alt:"四人小班在温暖陶艺工作室使用拉坯机制作陶器",position:"center 54%",theme:"#c96e4c",modes:["solo","soft"],weather:["晴天","雨天"]},
  {name:"世纪公园松弛野餐",type:"户外",time:"周日 15:00",place:"世纪公园",price:45,match:90,pressure:"轻互动",solo:true,people:"1—4 人",feature:"草坪留足个人空间，读书、晒太阳或分享水果都很自在。",img:"assets/activities/park-picnic.jpg",alt:"三位年轻人在城市公园草坪的野餐垫上阅读和分享水果",position:"center 58%",theme:"#65b984",modes:["solo","soft"],weather:["晴天"]},
  {name:"深夜觅食地图",type:"美食",time:"周六 22:30",place:"黄河路",price:98,match:93,pressure:"自由社交",solo:true,people:"1—6 人",feature:"从热汤面到街边烧烤，按食量自由加入下一站。",img:"assets/activities/late-night-food.jpg",alt:"上海夜色中的街头餐厅、热汤面和烧烤夜宵",position:"center 50%",theme:"#f05f46",modes:["solo","soft","party"],weather:["晴天","雨天"]}
];

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
  grid.innerHTML=list.map((item,index)=>`<article class="activity-card" tabindex="0" style="--theme:${item.theme};--image-position:${item.position}"><span class="food-motif motif-a" aria-hidden="true"><i data-lucide="${animal.foodIcon}"></i></span><span class="food-motif motif-b" aria-hidden="true"><i data-lucide="${animal.foodIcon}"></i></span><div class="activity-image"><img src="${item.img}" alt="${item.alt}" width="1400" height="933" loading="lazy" /><span class="match-badge">${Math.max(80,item.match-(state.budget<item.price?8:0))}% 匹配</span><button class="save-button ${state.saved.has(item.name)?"saved":""}" data-save="${item.name}" type="button" aria-label="${state.saved.has(item.name)?"取消收藏":"收藏"}${item.name}"><i data-lucide="heart"></i></button><span class="activity-index">0${index+1}</span></div><div class="activity-body"><div class="tag-row"><span>${item.type}</span><span class="pressure">社交压力：${item.pressure}</span>${item.solo?'<span class="solo-ok">适合独自参加</span>':""}</div><h3>${item.name}</h3><p>${item.feature}</p><div class="activity-info"><span><i data-lucide="calendar-days"></i>${item.time}</span><span><i data-lucide="map-pin"></i>${item.place}</span><span><i data-lucide="users"></i>${item.people}</span><strong>${item.price?`¥${item.price}`:"免费"}</strong></div><div class="activity-actions"><button data-activity-view="${item.name}" type="button">查看活动 <i data-lucide="arrow-up-right"></i></button><button data-find-crew="${item.name}" type="button">找搭子</button></div></div></article>`).join("");
  $("#emptyState").hidden=list.length>0;$("#activityGrid").hidden=list.length===0;
  $$("[data-save]").forEach(button=>button.addEventListener("click",()=>toggleSave(button.dataset.save)));
  $$(".activity-image img").forEach(image=>image.addEventListener("error",()=>{const frame=image.closest(".activity-image");frame.dataset.fallback=`${image.alt}暂时无法加载`;frame.classList.add("image-error")}));
  $$("[data-activity-view]").forEach(button=>button.addEventListener("click",()=>{const name=button.dataset.activityView;const select=$("#passportActivitySelect");if(select){select.value=name;passportState.selectedActivity=name;savePassportState();updateCheckinControls()}showToast(`已将「${name}」设为本周待打卡活动`)}));
  $$("[data-find-crew]").forEach(button=>button.addEventListener("click",()=>{$("#crews").scrollIntoView({behavior:"smooth"});showToast(`正在寻找「${button.dataset.findCrew}」的同频搭子`)}));
  $("#recommendAnimal").textContent=animal.name;refreshIcons();
}
function toggleSave(name){state.saved.has(name)?state.saved.delete(name):state.saved.add(name);localStorage.setItem("weekend-saved",JSON.stringify([...state.saved]));renderRecommendations();showToast(state.saved.has(name)?"已收藏到周末清单":"已取消收藏")}

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

const modal=$("#hotModal");let previousFocus;
function openHotModal(){previousFocus=document.activeElement;modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";setTimeout(()=>modal.querySelector(".hot-dialog").focus(),80)}
function closeHotModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";previousFocus?.focus()}
function scrollToSection(id){closeHotModal();setTimeout(()=>document.querySelector(id).scrollIntoView({behavior:"smooth"}),180)}

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
$("#createCrewButton").addEventListener("click",()=>$("#createCrewDialog").showModal());
$("#publishCrewButton").addEventListener("click",event=>{if(!$("#crewTitleInput").value.trim()){event.preventDefault();showToast("先给小队起个名字吧");return}showToast("小队已发布，等待同频伙伴")});
$("#shareGuideButton").addEventListener("click",()=>$("#guideDialog").showModal());
$("#publishGuideButton").addEventListener("click",event=>{if(!$("#guideTitleInput").value.trim()||!$("#guideTipInput").value.trim()){event.preventDefault();showToast("写下标题和一条实用经验再发布吧");return}showToast("攻略发布成功，已收进出逃手记")});
$$('.like-button').forEach(button=>button.addEventListener("click",()=>{const liked=button.classList.toggle("liked");const count=button.querySelector("span");count.textContent=Number(count.textContent)+(liked?1:-1);showToast(liked?"已把这篇攻略收进喜欢":"已取消点赞")}));
$$('[data-close-modal]').forEach(button=>button.addEventListener("click",closeHotModal));
$("#modalCrewButton").addEventListener("click",()=>scrollToSection("#crews"));$("#modalBrowseButton").addEventListener("click",()=>scrollToSection("#recommendations"));
document.addEventListener("keydown",event=>{if(partnerPanelOpen&&event.key==="Tab"){trapPartnerFocus(event);return}if(event.key!=="Escape")return;if(!$("#stampPopover").hidden){$("#stampPopover").classList.remove("show");$("#stampPopover").hidden=true;return}if(partnerPanelOpen){closePartnerPanel(true);return}if(modal.classList.contains("open"))closeHotModal()});

initPassportActivitySelect();renderAnimals();renderTypes();renderManual();renderPassport();selectMode(state.mode,false);refreshIcons();
setTimeout(openHotModal,420);
