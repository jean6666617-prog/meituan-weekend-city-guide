const activities = [
  { title: "西岸美术馆年度大展", type: "展览", tags: ["室内", "本周末"], price: 100, time: "周六 10:00", place: "徐汇滨江", emoji: "🖼️", color: "#efb27f", match: 96, desc: "三大展览一次看够，沿江散步也很舒服。" },
  { title: "上生·新所黑胶市集", type: "市集", tags: ["免费", "可淘货"], price: 0, time: "周六 13:00", place: "延安西路", emoji: "🎧", color: "#a99be9", match: 93, desc: "独立音乐、咖啡和古着，适合慢慢闲逛。" },
  { title: "城市天台日落音乐会", type: "演出", tags: ["日落", "氛围感"], price: 128, time: "周六 17:30", place: "静安大悦城", emoji: "🎸", color: "#f07a6d", match: 91, desc: "迎着晚风听 Live，把城市晚霞装进口袋。" },
  { title: "佘山 6km 轻徒步", type: "户外", tags: ["新手友好", "地铁直达"], price: 35, time: "周日 09:30", place: "松江佘山", emoji: "⛰️", color: "#8ec6a0", match: 89, desc: "低强度吸氧路线，山顶视野很值得。" },
  { title: "复古胶片摄影散步", type: "户外", tags: ["小众", "出片"], price: 58, time: "周日 15:00", place: "衡复风貌区", emoji: "📷", color: "#f2ce69", match: 87, desc: "跟着摄影师发现梧桐区被忽略的小细节。" },
  { title: "沉浸式悬疑戏剧《雾》", type: "演出", tags: ["室内", "互动"], price: 238, time: "周日 19:30", place: "亚洲大厦", emoji: "🎭", color: "#789eaa", match: 84, desc: "没有固定座位，你也是故事的一部分。" },
  { title: "当代插画新锐展", type: "展览", tags: ["学生票", "室内"], price: 60, time: "周日 11:00", place: "愚园路", emoji: "🧑‍🎨", color: "#86c8be", match: 88, desc: "汇集 30 位青年创作者，还有限定印章。" },
  { title: "安福路手作面包节", type: "市集", tags: ["免费", "吃吃喝喝"], price: 80, time: "周六 11:30", place: "安福路", emoji: "🥐", color: "#eda66f", match: 86, desc: "面包香气占领街角，记得带上帆布袋。" }
];

let activeInterest = "全部";
let budget = 150;
let people = 2;
let offset = 0;
const grid = document.querySelector("#activityGrid");
const emptyState = document.querySelector("#emptyState");
const summary = document.querySelector("#recommendationSummary");
const toast = document.querySelector("#toast");

function renderActivities() {
  const matches = activities.filter(item => (activeInterest === "全部" || item.type === activeInterest) && item.price <= budget);
  const rotated = [...matches.slice(offset), ...matches.slice(0, offset)].slice(0, 6);
  grid.innerHTML = rotated.map(item => `
    <article class="activity-card">
      <div class="activity-visual" style="background:${item.color}">
        <span class="match-badge">${item.match}% 匹配</span>
        <button class="favorite" type="button" aria-label="收藏 ${item.title}">♡</button>
        <span class="visual-emoji">${item.emoji}</span>
      </div>
      <div class="activity-content">
        <div class="activity-tags"><span>${item.type}</span>${item.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
        <h3>${item.title}</h3><p>${item.desc}</p>
        <div class="activity-footer"><div><strong>${item.price ? `¥${item.price}` : "免费"}</strong><span> / 人</span></div><span>${item.time} · ${item.place}</span></div>
      </div>
    </article>`).join("");
  emptyState.hidden = rotated.length !== 0;
  summary.textContent = `结合你的偏好、¥${budget} 预算和 ${people} 人出行，找到了 ${matches.length} 个好去处`;
  bindFavorites();
}

function bindFavorites() {
  document.querySelectorAll(".favorite").forEach(button => button.addEventListener("click", () => {
    button.classList.toggle("liked");
    button.textContent = button.classList.contains("liked") ? "♥" : "♡";
    showToast(button.classList.contains("liked") ? "已收藏，周末别错过" : "已取消收藏");
  }));
}

function showToast(message) {
  toast.querySelector("span").textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.querySelectorAll(".chip").forEach(chip => chip.addEventListener("click", () => {
  document.querySelectorAll(".chip").forEach(c => c.classList.remove("selected"));
  chip.classList.add("selected");
  activeInterest = chip.dataset.interest;
}));

document.querySelector("#budget").addEventListener("input", event => {
  budget = Number(event.target.value);
  document.querySelector("#budgetLabel").textContent = `¥${budget}${budget === 500 ? "+" : ""}`;
});
document.querySelector("#minusPeople").addEventListener("click", () => { people = Math.max(1, people - 1); document.querySelector("#peopleCount").textContent = people; });
document.querySelector("#addPeople").addEventListener("click", () => { people = Math.min(8, people + 1); document.querySelector("#peopleCount").textContent = people; });
document.querySelector("#recommendButton").addEventListener("click", () => { offset = 0; renderActivities(); document.querySelector(".recommend-section").scrollIntoView({ behavior: "smooth" }); showToast("已生成你的专属周末清单"); });
document.querySelector("#refreshButton").addEventListener("click", event => { offset = (offset + 3) % Math.max(activities.length, 1); renderActivities(); event.currentTarget.querySelector("svg")?.animate([{transform:"rotate(0)"},{transform:"rotate(360deg)"}],{duration:500}); });

document.querySelectorAll(".join-button").forEach(button => button.addEventListener("click", () => { button.textContent = "已加入 ✓"; button.disabled = true; showToast("组队成功，记得准时集合"); }));
document.querySelectorAll(".like-button").forEach(button => button.addEventListener("click", () => {
  const count = button.querySelector("span");
  button.classList.toggle("liked");
  count.textContent = Number(count.textContent) + (button.classList.contains("liked") ? 1 : -1);
  button.childNodes[0].textContent = button.classList.contains("liked") ? "♥ " : "♡ ";
}));

const dialog = document.querySelector("#teamDialog");
document.querySelector("#createTeamButton").addEventListener("click", () => dialog.showModal());
document.querySelector("#shareButton").addEventListener("click", () => { dialog.showModal(); dialog.querySelector("h2").textContent = "分享你的周末攻略"; dialog.querySelector("p").textContent = "把宝藏路线分享给更多同学。"; document.querySelector("#teamTitle").placeholder = "给你的攻略起个标题"; document.querySelector("#submitTeam").textContent = "发布攻略"; });
document.querySelector("#submitTeam").addEventListener("click", event => {
  if (!document.querySelector("#teamTitle").value) { event.preventDefault(); showToast("先写一个标题吧"); return; }
  showToast(event.currentTarget.textContent.includes("攻略") ? "攻略发布成功" : "组队已发布");
});
document.querySelector("#cityButton").addEventListener("click", () => showToast("当前已定位上海，更多城市即将开放"));

lucide.createIcons();
renderActivities();
