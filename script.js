     1|(function() {
     2|  'use strict';
     3|
     4|  // ==================== Tool Data ====================
     5|  const tools = [
     6|    {
     7|      id: 1,
     8|      name: 'AI营销文案生成器',
     9|      desc: '6大平台营销文案，一键生成，助力高效营销',
    10|      url: 'https://tyr1105.github.io/ai-tools-box/',
    11|      category: 'ai',
    12|      catName: 'AI工具',
    13|      icon: '✍️',
    14|      keywords: ['ai', '营销', '文案', '生成器', 'marketing', 'copywriting']
    15|    },
    16|    {
    17|      id: 2,
    18|      name: 'AI社交媒体文案',
    19|      desc: '小红书/抖音/微博/B站文案模板，轻松打造爆款内容',
    20|      url: 'https://tyr1105.github.io/writeboom/',
    21|      category: 'ai',
    22|      catName: 'AI工具',
    23|      icon: '📱',
    24|      keywords: ['ai', '社交', '媒体', '小红书', '抖音', '微博', 'B站', '文案']
    25|    },
    26|    {
    27|      id: 3,
    28|      name: 'AI Excel公式助手',
    29|      desc: '用中文描述需求，AI自动生成Excel公式',
    30|      url: 'https://github.com/tyr1105/formula-ai',
    31|      category: 'ai',
    32|      catName: 'AI工具',
    33|      icon: '📊',
    34|      keywords: ['ai', 'excel', '公式', 'formula', '表格'],
    35|      badge: '即将上线',
    36|      proBadge: true
    37|    },
    38|    {
    39|      id: 4,
    40|      name: 'PDF工具箱',
    41|      desc: '合并/拆分/删除/重排PDF页面，完全免费',
    42|      url: 'https://tyr1105.github.io/pdfkit/',
    43|      category: 'doc',
    44|      catName: '文档工具',
    45|      icon: '📄',
    46|      keywords: ['pdf', '合并', '拆分', '删除', '重排', '页面', 'document']
    47|    },
    48|    {
    49|      id: 5,
    50|      name: '在线发票生成器',
    51|      desc: '5种模板，15种货币，一键导出专业PDF发票',
    52|      url: 'https://tyr1105.github.io/quickbill/',
    53|      category: 'doc',
    54|      catName: '文档工具',
    55|      icon: '🧾',
    56|      keywords: ['发票', 'invoice', '账单', '模板', '货币', 'pdf']
    57|    },
    58|    {
    59|      id: 6,
    60|      name: '简历制作器',
    61|      desc: '精美模板，在线编辑，一键导出PDF简历',
    62|      url: 'https://tyr1105.github.io/resumecraft/',
    63|      category: 'doc',
    64|      catName: '文档工具',
    65|      icon: '📝',
    66|      keywords: ['简历', 'resume', 'cv', '模板', '编辑', 'pdf']
    67|    },
    68|    {
    69|      id: 7,
    70|      name: '图片工具箱',
    71|      desc: '压缩/转换/裁剪/水印/Base64，图片处理一站搞定',
    72|      url: 'https://tyr1105.github.io/pictool/',
    73|      category: 'design',
    74|      catName: '设计工具',
    75|      icon: '🖼️',
    76|      keywords: ['图片', '压缩', '转换', '裁剪', '水印', 'base64', 'image']
    77|    },
    78|    {
    79|      id: 8,
    80|      name: '小红书封面制作',
    81|      desc: '20+精美模板，3:4黄金比例，SEO优化封面',
    82|      url: 'https://tyr1105.github.io/redcover/',
    83|      category: 'design',
    84|      catName: '设计工具',
    85|      icon: '📕',
    86|      keywords: ['小红书', '封面', '制作', '模板', 'cover', '设计']
    87|    },
    88|    {
    89|      id: 9,
    90|      name: '截图美化工具',
    91|      desc: '渐变背景/阴影/水印，让截图更加专业美观',
    92|      url: 'https://tyr1105.github.io/shotpro/',
    93|      category: 'design',
    94|      catName: '设计工具',
    95|      icon: '📸',
    96|      keywords: ['截图', '美化', '渐变', '阴影', '水印', 'screenshot']
    97|    },
    98|    {
    99|      id: 10,
   100|      name: '二维码生成器',
   101|      desc: '自定义颜色/样式，一键下载高质量二维码',
   102|      url: 'https://tyr1105.github.io/qrgen/',
   103|      category: 'design',
   104|      catName: '设计工具',
   105|      icon: '🔲',
   106|      keywords: ['二维码', 'qrcode', '生成', '自定义', '颜色']
   107|    },
   108|    {
   109|      id: 11,
   110|      name: '开发者工具箱',
   111|      desc: 'JSON/Base64/URL编码/时间戳/正则/Hash/UUID',
   112|      url: 'https://tyr1105.github.io/devkit-tools/',
   113|      category: 'dev',
   114|      catName: '开发工具',
   115|      icon: '⚙️',
   116|      keywords: ['开发者', 'json', 'base64', 'url', '编码', '时间戳', '正则', 'hash', 'uuid', 'dev']
   117|    },
   118|    {
   119|      id: 12,
   120|      name: '在线图表制作',
   121|      desc: '粘贴数据一键生成精美图表，支持7种图表+6种配色+高清PNG导出',
   122|      url: 'https://tyr1105.github.io/chartsnap/',
   123|      category: 'design',
   124|      catName: '设计工具',
   125|      icon: '📊',
   126|      keywords: ['图表', 'chart', '柱状图', '折线图', '饼图', '数据可视化', '图表制作']
   127|    },
   128|    {
   129|      id: 13,
   130|      name: 'DevToolBox开发者工具',
   131|      desc: '13+免费开发者工具集合，JSON/正则/Cron/Hash/JWT/Markdown等',
   132|      url: 'https://tyr1105.github.io/devtoolbox/',
   133|      category: 'dev',
   134|      catName: '开发工具',
   135|      icon: '🧑‍💻',
   136|      keywords: ['devtoolbox', '开发者', 'json', 'regex', 'cron', 'jwt', 'markdown', 'hash']
   137|    },
   138|    {
   139|      id: 14,
   140|      name: '水印大师',
   141|      desc: '批量图片水印工具，支持文字水印、平铺水印、自定义位置',
   142|      url: 'https://tyr1105.github.io/watermark-pro/',
   143|      category: 'design',
   144|      catName: '设计工具',
   145|      icon: '💧',
   146|      keywords: ['水印', 'watermark', '批量', '文字', '图片']
   147|    },
   148|    {
   149|      id: 15,
   150|      name: '在线录屏工具',
   151|      desc: '一键录制屏幕生成GIF/WebM，无需安装，浏览器端处理',
   152|      url: 'https://tyr1105.github.io/recsnap/',
   153|      category: 'dev',
   154|      catName: '开发工具',
   155|      icon: '🎬',
   156|      keywords: ['录屏', 'screen', 'record', 'gif', 'webm', '录制', '屏幕', 'recsnap']
   157|    },
   158|    {
   159|      id: 17,
   160|      name: '配色大师',
   161|      desc: '智能配色方案生成器，多种和谐模式，UI预览，一键导出CSS/Tailwind',
   162|      url: 'https://tyr1105.github.io/colorpilot/',
   163|      category: 'design',
   164|      catName: '设计工具',
   165|      icon: '🎨',
   166|      keywords: ['配色', 'color', 'palette', '色彩', '调色板', 'tailwind', 'css', '设计']
   167|    },
   168|    {
   169|      id: 17,
   170|      name: 'Favicon生成器',
   171|      desc: '上传图片一键生成所有favicon尺寸，含manifest.json和HTML代码',
   172|      url: 'https://tyr1105.github.io/favicon-gen/',
   173|      category: 'dev',
   174|      catName: '开发工具',
   175|      icon: '⭐',
   176|      keywords: ['favicon', '图标', '生成器', 'manifest', 'app icon', '网站图标']
   177|    },
   178|    {
   179|      id: 18,
   180|      name: 'DevUtils开发者工具',
   181|      desc: '8个常用开发工具：JSON格式化、Base64、JWT、正则、UUID、URL编码',
   182|      url: 'https://tyr1105.github.io/devutils/',
   183|      category: 'dev',
   184|      catName: '开发工具',
   185|      icon: '🛠️',
   186|      keywords: ['devutils', '开发者', 'json', 'base64', 'jwt', 'uuid', '工具集']
   187|    },
   188|    {
   189|      id: 19,
   190|      name: 'App截图Mockup生成器',
   191|      desc: '在线App截图Mockup生成，多设备多配色',
   192|      url: 'https://tyr1105.github.io/shotpro-app/',
   193|      category: 'design',
   194|      catName: '设计工具',
   195|      icon: '📱',
   196|      keywords: ['mockup', 'app', '截图', '设备', 'phone', 'store']
   197|    },
   198|    {
   199|      id: 20,
   200|      name: '周报生成器',
   201|      desc: '一键生成专业周报，5种风格模板，告别加班写周报',
   202|      url: 'https://tyr1105.github.io/weekly-report-gen/',
   203|      category: 'doc',
   204|      catName: '文档工具',
   205|      icon: '📋',
   206|      keywords: ['周报', '日报', '工作汇报', '报告生成', 'weekly report', '模板']
   207|    },
   208|    {
   209|      id: 21,
   210|      name: 'AI财经助手Chrome扩展',
   211|      desc: '一键AI分析财经新闻，智能摘要+情绪分析，支持9大财经网站',
   212|      url: 'https://github.com/tyr1105/ai-finance-buddy',
   213|      category: 'ai',
   214|      catName: 'AI工具',
   215|      icon: '💹',
   216|      keywords: ['ai', '财经', '股票', '新闻分析', 'chrome扩展', 'finance'],
   217|      badge: '新上架'
   218|    },
   219|    {
   220|      id: 22,
   221|      name: 'AI智能抠图',
   222|      desc: 'AI一键去除图片背景，100%浏览器本地处理保护隐私，支持自定义背景色',
   223|      url: 'https://tyr1105.github.io/bg-remove/',
   224|      category: 'ai',
   225|      catName: 'AI工具',
   226|      icon: '✂️',
   227|      keywords: ['ai', '抠图', '背景去除', 'background', 'remove', 'transparent', 'cutout'],
   228|      badge: 'NEW'
   229|    },
   230|    {
   231|      id: 23,
   232|      name: '证件照制作器',
   233|      desc: '智能背景移除，一键换底色（白/蓝/红），支持一寸二寸护照签证等标准尺寸，A4排版打印',
   234|      url: 'https://tyr1105.github.io/idphoto-maker/',
   235|      category: 'design',
   236|      catName: '设计工具',
   237|      icon: '📷',
   238|      keywords: ['证件照', 'id photo', '一寸', '二寸', '护照', '签证', '换底色', '白底', '蓝底', '红底', '背景移除'],
   239|      badge: '新上线'
   240|    }
   241|  ];
   242|
   243|  // ==================== State ====================
   244|  let currentCategory = 'all';
   245|  let searchQuery = '';
   246|
   247|  // ==================== DOM ====================
   248|  const grid = document.getElementById('tools-grid');
   249|  const searchInput = document.getElementById('search-input');
   250|  const catBtns = document.querySelectorAll('.cat-btn');
   251|  const themeToggle = document.getElementById('theme-toggle');
   252|  const backToTop = document.getElementById('back-to-top');
   253|  const toolsCountEl = document.getElementById('tools-count');
   254|
   255|  // ==================== Render ====================
   256|  function renderTools() {
   257|    const filtered = tools.filter(tool => {
   258|      const matchCat = currentCategory === 'all' || tool.category === currentCategory;
   259|      const q = searchQuery.toLowerCase();
   260|      const matchSearch = !q ||
   261|        tool.name.toLowerCase().includes(q) ||
   262|        tool.desc.toLowerCase().includes(q) ||
   263|        tool.keywords.some(k => k.toLowerCase().includes(q)) ||
   264|        tool.catName.toLowerCase().includes(q);
   265|      return matchCat && matchSearch;
   266|    });
   267|
   268|    grid.innerHTML = '';
   269|
   270|    if (filtered.length === 0) {
   271|      grid.innerHTML = `
   272|        <div class="empty-state" style="grid-column: 1 / -1;">
   273|          <div class="empty-icon">🔍</div>
   274|          <h3>没有找到相关工具</h3>
   275|          <p>试试其他关键词或切换分类吧</p>
   276|        </div>`;
   277|      toolsCountEl.textContent = '共 0 个工具';
   278|      return;
   279|    }
   280|
   281|    toolsCountEl.textContent = `共 ${filtered.length} 个工具`;
   282|
   283|    filtered.forEach((tool, index) => {
   284|      const card = document.createElement('a');
   285|      card.href = tool.url;
   286|      card.target = '_blank';
   287|      card.rel = 'noopener noreferrer';
   288|      card.className = 'tool-card';
   289|      card.dataset.category = tool.category;
   290|      card.style.animationDelay = `${index * 0.04}s`;
   291|
   292|      card.innerHTML = `
   293|        ${tool.badge ? `<span class="tool-badge">${tool.badge}</span>` : ''}
   294|        ${tool.proBadge ? '<span class="tool-pro-badge">Pro</span>' : ''}
   295|        <div class="tool-card-header">
   296|          <div class="tool-icon ${tool.category}">${tool.icon}</div>
   297|          <div class="tool-info">
   298|            <div class="tool-name">${highlightSearch(tool.name)}</div>
   299|            <div class="tool-desc">${highlightSearch(tool.desc)}</div>
   300|          </div>
   301|        </div>
   302|        <div class="tool-card-footer">
   303|          <span class="tool-tag ${tool.category}">${tool.catName}</span>
   304|          <span class="tool-btn">
   305|            使用 <span class="arrow">→</span>
   306|          </span>
   307|        </div>`;
   308|
   309|      grid.appendChild(card);
   310|    });
   311|  }
   312|
   313|  function highlightSearch(text) {
   314|    if (!searchQuery) return text;
   315|    const q = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
   316|    return text.replace(new RegExp(`(${q})`, 'gi'), '<mark style="background:#fef08a;color:inherit;border-radius:2px;padding:0 2px;">$1</mark>');
   317|  }
   318|
   319|  // ==================== Category Filter ====================
   320|  catBtns.forEach(btn => {
   321|    btn.addEventListener('click', () => {
   322|      catBtns.forEach(b => b.classList.remove('active'));
   323|      btn.classList.add('active');
   324|      currentCategory = btn.dataset.category;
   325|      renderTools();
   326|    });
   327|  });
   328|
   329|  // ==================== Search ====================
   330|  let searchTimer;
   331|  searchInput.addEventListener('input', (e) => {
   332|    clearTimeout(searchTimer);
   333|    searchTimer = setTimeout(() => {
   334|      searchQuery = e.target.value.trim();
   335|      renderTools();
   336|    }, 150);
   337|  });
   338|
   339|  // ==================== Theme ====================
   340|  function getPreferredTheme() {
   341|    const stored = localStorage.getItem('theme');
   342|    if (stored) return stored;
   343|    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
   344|  }
   345|
   346|  function setTheme(theme) {
   347|    document.documentElement.setAttribute('data-theme', theme);
   348|    localStorage.setItem('theme', theme);
   349|    updateThemeIcon(theme);
   350|  }
   351|
   352|  function updateThemeIcon(theme) {
   353|    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
   354|    themeToggle.setAttribute('aria-label', theme === 'dark' ? '切换到亮色模式' : '切换到暗色模式');
   355|  }
   356|
   357|  themeToggle.addEventListener('click', () => {
   358|    const current = document.documentElement.getAttribute('data-theme');
   359|    setTheme(current === 'dark' ? 'light' : 'dark');
   360|  });
   361|
   362|  // Init theme
   363|  setTheme(getPreferredTheme());
   364|
   365|  // Listen for system theme changes
   366|  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
   367|    if (!localStorage.getItem('theme')) {
   368|      setTheme(e.matches ? 'dark' : 'light');
   369|    }
   370|  });
   371|
   372|  // ==================== Back to Top ====================
   373|  window.addEventListener('scroll', () => {
   374|    if (window.scrollY > 400) {
   375|      backToTop.classList.add('visible');
   376|    } else {
   377|      backToTop.classList.remove('visible');
   378|    }
   379|  }, { passive: true });
   380|
   381|  backToTop.addEventListener('click', () => {
   382|    window.scrollTo({ top: 0, behavior: 'smooth' });
   383|  });
   384|
   385|  // ==================== Keyboard Navigation ====================
   386|  document.addEventListener('keydown', (e) => {
   387|    // Focus search with Ctrl+K or /
   388|    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement !== searchInput)) {
   389|      e.preventDefault();
   390|      searchInput.focus();
   391|    }
   392|    // Escape to clear search
   393|    if (e.key === 'Escape' && document.activeElement === searchInput) {
   394|      searchInput.value = '';
   395|      searchQuery = '';
   396|      searchInput.blur();
   397|      renderTools();
   398|    }
   399|  });
   400|
   401|  // ==================== Service Worker Hint ====================
   402|  // Could register a service worker for offline support in the future
   403|
   404|  // ==================== Init ====================
   405|  renderTools();
   406|
   407|  // ==================== Pro Banner ====================
   408|  var proBannerClose = document.getElementById('pro-banner-close');
   409|  var proBanner = document.getElementById('pro-banner');
   410|  var proEmailForm = document.getElementById('pro-email-form');
   411|
   412|  if (proBannerClose && proBanner) {
   413|    proBannerClose.addEventListener('click', function() {
   414|      proBanner.style.display = 'none';
   415|      localStorage.setItem('pro-banner-closed', 'true');
   416|    });
   417|
   418|    if (localStorage.getItem('pro-banner-closed') === 'true') {
   419|      proBanner.style.display = 'none';
   420|    }
   421|  }
   422|
   423|  if (proEmailForm) {
   424|    proEmailForm.addEventListener('submit', function(e) {
   425|      e.preventDefault();
   426|      var emailInput = proEmailForm.querySelector('.pro-banner-input');
   427|      var btn = proEmailForm.querySelector('.pro-banner-btn');
   428|      if (emailInput.value) {
   429|        btn.textContent = '✅ 已订阅!';
   430|        emailInput.value = '';
   431|        setTimeout(function() { btn.textContent = '立即订阅'; }, 3000);
   432|      }
   433|    });
   434|  }
   435|
   436|})();
   437|