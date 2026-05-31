(function() {
'use strict';

// ==================== Tool Data ====================
const tools = [
{
id: 1,
name: 'AI营销文案生成器',
desc: '6大平台营销文案，一键生成，助力高效营销',
url: 'https://tyr1105.github.io/ai-tools-box/',
category: 'ai',
catName: 'AI工具',
icon: '✍️',
keywords: ['ai', '营销', '文案', '生成器', 'marketing', 'copywriting']
},
{
id: 2,
name: 'AI社交媒体文案',
desc: '小红书/抖音/微博/B站文案模板，轻松打造爆款内容',
url: 'https://tyr1105.github.io/writeboom/',
category: 'ai',
catName: 'AI工具',
icon: '📱',
keywords: ['ai', '社交', '媒体', '小红书', '抖音', '微博', 'B站', '文案']
},
{
id: 3,
name: 'AI Excel公式助手',
desc: '用中文描述需求，AI自动生成Excel公式',
url: 'https://github.com/tyr1105/formula-ai',
category: 'ai',
catName: 'AI工具',
icon: '📊',
keywords: ['ai', 'excel', '公式', 'formula', '表格'],
badge: '即将上线',
proBadge: true
},
{
id: 4,
name: 'PDF工具箱',
desc: '合并/拆分/删除/重排PDF页面，完全免费',
url: 'https://tyr1105.github.io/pdfkit/',
category: 'doc',
catName: '文档工具',
icon: '📄',
keywords: ['pdf', '合并', '拆分', '删除', '重排', '页面', 'document']
},
{
id: 5,
name: '在线发票生成器',
desc: '5种模板，15种货币，一键导出专业PDF发票',
url: 'https://tyr1105.github.io/quickbill/',
category: 'doc',
catName: '文档工具',
icon: '🧾',
keywords: ['发票', 'invoice', '账单', '模板', '货币', 'pdf']
},
{
id: 6,
name: '简历制作器',
desc: '精美模板，在线编辑，一键导出PDF简历',
url: 'https://tyr1105.github.io/resumecraft/',
category: 'doc',
catName: '文档工具',
icon: '📝',
keywords: ['简历', 'resume', 'cv', '模板', '编辑', 'pdf']
},
{
id: 7,
name: '图片工具箱',
desc: '压缩/转换/裁剪/水印/Base64，图片处理一站搞定',
url: 'https://tyr1105.github.io/pictool/',
category: 'design',
catName: '设计工具',
icon: '🖼️',
keywords: ['图片', '压缩', '转换', '裁剪', '水印', 'base64', 'image']
},
{
id: 8,
name: '小红书封面制作',
desc: '20+精美模板，3:4黄金比例，SEO优化封面',
url: 'https://tyr1105.github.io/redcover/',
category: 'design',
catName: '设计工具',
icon: '📕',
keywords: ['小红书', '封面', '制作', '模板', 'cover', '设计']
},
{
id: 9,
name: '截图美化工具',
desc: '渐变背景/阴影/水印，让截图更加专业美观',
url: 'https://tyr1105.github.io/shotpro/',
category: 'design',
catName: '设计工具',
icon: '📸',
keywords: ['截图', '美化', '渐变', '阴影', '水印', 'screenshot']
},
{
id: 10,
name: '二维码生成器',
desc: '自定义颜色/样式，一键下载高质量二维码',
url: 'https://tyr1105.github.io/qrgen/',
category: 'design',
catName: '设计工具',
icon: '🔲',
keywords: ['二维码', 'qrcode', '生成', '自定义', '颜色']
},
{
id: 11,
name: '开发者工具箱',
desc: 'JSON/Base64/URL编码/时间戳/正则/Hash/UUID',
url: 'https://tyr1105.github.io/devkit-tools/',
category: 'dev',
catName: '开发工具',
icon: '⚙️',
keywords: ['开发者', 'json', 'base64', 'url', '编码', '时间戳', '正则', 'hash', 'uuid', 'dev']
},
{
id: 12,
name: '在线图表制作',
desc: '粘贴数据一键生成精美图表，支持7种图表+6种配色+高清PNG导出',
url: 'https://tyr1105.github.io/chartsnap/',
category: 'design',
catName: '设计工具',
icon: '📊',
keywords: ['图表', 'chart', '柱状图', '折线图', '饼图', '数据可视化', '图表制作']
},
{
id: 13,
name: 'DevToolBox开发者工具',
desc: '13+免费开发者工具集合，JSON/正则/Cron/Hash/JWT/Markdown等',
url: 'https://tyr1105.github.io/devtoolbox/',
category: 'dev',
catName: '开发工具',
icon: '🧑‍💻',
keywords: ['devtoolbox', '开发者', 'json', 'regex', 'cron', 'jwt', 'markdown', 'hash']
},
{
id: 14,
name: '水印大师',
desc: '批量图片水印工具，支持文字水印、平铺水印、自定义位置',
url: 'https://tyr1105.github.io/watermark-pro/',
category: 'design',
catName: '设计工具',
icon: '💧',
keywords: ['水印', 'watermark', '批量', '文字', '图片']
},
{
id: 15,
name: '在线录屏工具',
desc: '一键录制屏幕生成GIF/WebM，无需安装，浏览器端处理',
url: 'https://tyr1105.github.io/recsnap/',
category: 'dev',
catName: '开发工具',
icon: '🎬',
keywords: ['录屏', 'screen', 'record', 'gif', 'webm', '录制', '屏幕', 'recsnap']
},
{
id: 17,
name: '配色大师',
desc: '智能配色方案生成器，多种和谐模式，UI预览，一键导出CSS/Tailwind',
url: 'https://tyr1105.github.io/colorpilot/',
category: 'design',
catName: '设计工具',
icon: '🎨',
keywords: ['配色', 'color', 'palette', '色彩', '调色板', 'tailwind', 'css', '设计']
},
{
id: 17,
name: 'Favicon生成器',
desc: '上传图片一键生成所有favicon尺寸，含manifest.json和HTML代码',
url: 'https://tyr1105.github.io/favicon-gen/',
category: 'dev',
catName: '开发工具',
icon: '⭐',
keywords: ['favicon', '图标', '生成器', 'manifest', 'app icon', '网站图标']
},
{
id: 18,
name: 'DevUtils开发者工具',
desc: '8个常用开发工具：JSON格式化、Base64、JWT、正则、UUID、URL编码',
url: 'https://tyr1105.github.io/devutils/',
category: 'dev',
catName: '开发工具',
icon: '🛠️',
keywords: ['devutils', '开发者', 'json', 'base64', 'jwt', 'uuid', '工具集']
},
{
id: 19,
name: 'App截图Mockup生成器',
desc: '在线App截图Mockup生成，多设备多配色',
url: 'https://tyr1105.github.io/shotpro-app/',
category: 'design',
catName: '设计工具',
icon: '📱',
keywords: ['mockup', 'app', '截图', '设备', 'phone', 'store']
},
{
id: 20,
name: '周报生成器',
desc: '一键生成专业周报，5种风格模板，告别加班写周报',
url: 'https://tyr1105.github.io/weekly-report-gen/',
category: 'doc',
catName: '文档工具',
icon: '📋',
keywords: ['周报', '日报', '工作汇报', '报告生成', 'weekly report', '模板']
},
{
id: 21,
name: 'AI财经助手Chrome扩展',
desc: '一键AI分析财经新闻，智能摘要+情绪分析，支持9大财经网站',
url: 'https://github.com/tyr1105/ai-finance-buddy',
category: 'ai',
catName: 'AI工具',
icon: '💹',
keywords: ['ai', '财经', '股票', '新闻分析', 'chrome扩展', 'finance'],
badge: '新上架'
},
{
id: 22,
name: 'AI智能抠图',
desc: 'AI一键去除图片背景，100%浏览器本地处理保护隐私，支持自定义背景色',
url: 'https://tyr1105.github.io/bg-remove/',
category: 'ai',
catName: 'AI工具',
icon: '✂️',
keywords: ['ai', '抠图', '背景去除', 'background', 'remove', 'transparent', 'cutout'],
badge: 'NEW'
},
{
id: 23,
name: '证件照制作器',
desc: '智能背景移除，一键换底色（白/蓝/红），支持一寸二寸护照签证等标准尺寸，A4排版打印',
url: 'https://tyr1105.github.io/idphoto-maker/',
category: 'design',
catName: '设计工具',
icon: '📷',
keywords: ['证件照', 'id photo', '一寸', '二寸', '护照', '签证', '换底色', '白底', '蓝底', '红底', '背景移除'],
badge: '新上线'
    },
    {
      id: 24,
      name: 'AI求职信生成器',
      desc: 'AI智能生成专业求职信，根据简历和职位描述量身定制，支持多种风格和语气',
      url: 'https://tyr1105.github.io/covercraft/',
      category: 'ai',
      catName: 'AI工具',
      icon: '🤝',
      keywords: ['ai', 'cover letter', 'resume', 'job', 'interview'],
      badge: 'NEW'
    }
];

// ==================== State ====================
let currentCategory = 'all';
let searchQuery = '';

// ==================== DOM ====================
const grid = document.getElementById('tools-grid');
const searchInput = document.getElementById('search-input');
const catBtns = document.querySelectorAll('.cat-btn');
const themeToggle = document.getElementById('theme-toggle');
const backToTop = document.getElementById('back-to-top');
const toolsCountEl = document.getElementById('tools-count');

// ==================== Render ====================
function renderTools() {
const filtered = tools.filter(tool => {
const matchCat = currentCategory === 'all' || tool.category === currentCategory;
const q = searchQuery.toLowerCase();
const matchSearch = !q ||
tool.name.toLowerCase().includes(q) ||
tool.desc.toLowerCase().includes(q) ||
tool.keywords.some(k => k.toLowerCase().includes(q)) ||
tool.catName.toLowerCase().includes(q);
return matchCat && matchSearch;
});

grid.innerHTML = '';

if (filtered.length === 0) {
grid.innerHTML = `
<div class="empty-state" style="grid-column: 1 / -1;">
<div class="empty-icon">🔍</div>
<h3>没有找到相关工具</h3>
<p>试试其他关键词或切换分类吧</p>
</div>`;
toolsCountEl.textContent = '共 0 个工具';
return;
}

toolsCountEl.textContent = `共 ${filtered.length} 个工具`;

filtered.forEach((tool, index) => {
const card = document.createElement('a');
card.href = tool.url;
card.target = '_blank';
card.rel = 'noopener noreferrer';
card.className = 'tool-card';
card.dataset.category = tool.category;
card.style.animationDelay = `${index * 0.04}s`;

card.innerHTML = `
${tool.badge ? `<span class="tool-badge">${tool.badge}</span>` : ''}
${tool.proBadge ? '<span class="tool-pro-badge">Pro</span>' : ''}
<div class="tool-card-header">
<div class="tool-icon ${tool.category}">${tool.icon}</div>
<div class="tool-info">
<div class="tool-name">${highlightSearch(tool.name)}</div>
<div class="tool-desc">${highlightSearch(tool.desc)}</div>
</div>
</div>
<div class="tool-card-footer">
<span class="tool-tag ${tool.category}">${tool.catName}</span>
<span class="tool-btn">
使用 <span class="arrow">→</span>
</span>
</div>`;

grid.appendChild(card);
});
}

function highlightSearch(text) {
if (!searchQuery) return text;
const q = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
return text.replace(new RegExp(`(${q})`, 'gi'), '<mark style="background:#fef08a;color:inherit;border-radius:2px;padding:0 2px;">$1</mark>');
}

// ==================== Category Filter ====================
catBtns.forEach(btn => {
btn.addEventListener('click', () => {
catBtns.forEach(b => b.classList.remove('active'));
btn.classList.add('active');
currentCategory = btn.dataset.category;
renderTools();
});
});

// ==================== Search ====================
let searchTimer;
searchInput.addEventListener('input', (e) => {
clearTimeout(searchTimer);
searchTimer = setTimeout(() => {
searchQuery = e.target.value.trim();
renderTools();
}, 150);
});

// ==================== Theme ====================
function getPreferredTheme() {
const stored = localStorage.getItem('theme');
if (stored) return stored;
return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme) {
document.documentElement.setAttribute('data-theme', theme);
localStorage.setItem('theme', theme);
updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
themeToggle.setAttribute('aria-label', theme === 'dark' ? '切换到亮色模式' : '切换到暗色模式');
}

themeToggle.addEventListener('click', () => {
const current = document.documentElement.getAttribute('data-theme');
setTheme(current === 'dark' ? 'light' : 'dark');
});

// Init theme
setTheme(getPreferredTheme());

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
if (!localStorage.getItem('theme')) {
setTheme(e.matches ? 'dark' : 'light');
}
});

// ==================== Back to Top ====================
window.addEventListener('scroll', () => {
if (window.scrollY > 400) {
backToTop.classList.add('visible');
} else {
backToTop.classList.remove('visible');
}
}, { passive: true });

backToTop.addEventListener('click', () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==================== Keyboard Navigation ====================
document.addEventListener('keydown', (e) => {
// Focus search with Ctrl+K or /
if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement !== searchInput)) {
e.preventDefault();
searchInput.focus();
}
// Escape to clear search
if (e.key === 'Escape' && document.activeElement === searchInput) {
searchInput.value = '';
searchQuery = '';
searchInput.blur();
renderTools();
}
});

// ==================== Service Worker Hint ====================
// Could register a service worker for offline support in the future

// ==================== Init ====================
renderTools();

// ==================== Pro Banner ====================
var proBannerClose = document.getElementById('pro-banner-close');
var proBanner = document.getElementById('pro-banner');
var proEmailForm = document.getElementById('pro-email-form');

if (proBannerClose && proBanner) {
proBannerClose.addEventListener('click', function() {
proBanner.style.display = 'none';
localStorage.setItem('pro-banner-closed', 'true');
});

if (localStorage.getItem('pro-banner-closed') === 'true') {
proBanner.style.display = 'none';
}
}

if (proEmailForm) {
proEmailForm.addEventListener('submit', function(e) {
e.preventDefault();
var emailInput = proEmailForm.querySelector('.pro-banner-input');
var btn = proEmailForm.querySelector('.pro-banner-btn');
if (emailInput.value) {
btn.textContent = '✅ 已订阅!';
emailInput.value = '';
setTimeout(function() { btn.textContent = '立即订阅'; }, 3000);
}
});
}

})();
