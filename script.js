     1|     1|     1|(function() {
     2|     2|     2|  'use strict';
     3|     3|     3|
     4|     4|     4|  // ==================== Tool Data ====================
     5|     5|     5|  const tools = [
     6|     6|     6|    {
     7|     7|     7|      id: 1,
     8|     8|     8|      name: 'AI营销文案生成器',
     9|     9|     9|      desc: '6大平台营销文案，一键生成，助力高效营销',
    10|    10|    10|      url: 'https://tyr1105.github.io/ai-tools-box/',
    11|    11|    11|      category: 'ai',
    12|    12|    12|      catName: 'AI工具',
    13|    13|    13|      icon: '✍️',
    14|    14|    14|      keywords: ['ai', '营销', '文案', '生成器', 'marketing', 'copywriting']
    15|    15|    15|    },
    16|    16|    16|    {
    17|    17|    17|      id: 2,
    18|    18|    18|      name: 'AI社交媒体文案',
    19|    19|    19|      desc: '小红书/抖音/微博/B站文案模板，轻松打造爆款内容',
    20|    20|    20|      url: 'https://tyr1105.github.io/writeboom/',
    21|    21|    21|      category: 'ai',
    22|    22|    22|      catName: 'AI工具',
    23|    23|    23|      icon: '📱',
    24|    24|    24|      keywords: ['ai', '社交', '媒体', '小红书', '抖音', '微博', 'B站', '文案']
    25|    25|    25|    },
    26|    26|    26|    {
    27|    27|    27|      id: 3,
    28|    28|    28|      name: 'AI Excel公式助手',
    29|    29|    29|      desc: '用中文描述需求，AI自动生成Excel公式',
    30|    30|    30|      url: 'https://github.com/tyr1105/formula-ai',
    31|    31|    31|      category: 'ai',
    32|    32|    32|      catName: 'AI工具',
    33|    33|    33|      icon: '📊',
    34|    34|    34|      keywords: ['ai', 'excel', '公式', 'formula', '表格'],
    35|    35|    35|      badge: '即将上线',
    36|    36|    36|      proBadge: true
    37|    37|    37|    },
    38|    38|    38|    {
    39|    39|    39|      id: 4,
    40|    40|    40|      name: 'PDF工具箱',
    41|    41|    41|      desc: '合并/拆分/删除/重排PDF页面，完全免费',
    42|    42|    42|      url: 'https://tyr1105.github.io/pdfkit/',
    43|    43|    43|      category: 'doc',
    44|    44|    44|      catName: '文档工具',
    45|    45|    45|      icon: '📄',
    46|    46|    46|      keywords: ['pdf', '合并', '拆分', '删除', '重排', '页面', 'document']
    47|    47|    47|    },
    48|    48|    48|    {
    49|    49|    49|      id: 5,
    50|    50|    50|      name: '在线发票生成器',
    51|    51|    51|      desc: '5种模板，15种货币，一键导出专业PDF发票',
    52|    52|    52|      url: 'https://tyr1105.github.io/quickbill/',
    53|    53|    53|      category: 'doc',
    54|    54|    54|      catName: '文档工具',
    55|    55|    55|      icon: '🧾',
    56|    56|    56|      keywords: ['发票', 'invoice', '账单', '模板', '货币', 'pdf']
    57|    57|    57|    },
    58|    58|    58|    {
    59|    59|    59|      id: 6,
    60|    60|    60|      name: '简历制作器',
    61|    61|    61|      desc: '精美模板，在线编辑，一键导出PDF简历',
    62|    62|    62|      url: 'https://tyr1105.github.io/resumecraft/',
    63|    63|    63|      category: 'doc',
    64|    64|    64|      catName: '文档工具',
    65|    65|    65|      icon: '📝',
    66|    66|    66|      keywords: ['简历', 'resume', 'cv', '模板', '编辑', 'pdf']
    67|    67|    67|    },
    68|    68|    68|    {
    69|    69|    69|      id: 7,
    70|    70|    70|      name: '图片工具箱',
    71|    71|    71|      desc: '压缩/转换/裁剪/水印/Base64，图片处理一站搞定',
    72|    72|    72|      url: 'https://tyr1105.github.io/pictool/',
    73|    73|    73|      category: 'design',
    74|    74|    74|      catName: '设计工具',
    75|    75|    75|      icon: '🖼️',
    76|    76|    76|      keywords: ['图片', '压缩', '转换', '裁剪', '水印', 'base64', 'image']
    77|    77|    77|    },
    78|    78|    78|    {
    79|    79|    79|      id: 8,
    80|    80|    80|      name: '小红书封面制作',
    81|    81|    81|      desc: '20+精美模板，3:4黄金比例，SEO优化封面',
    82|    82|    82|      url: 'https://tyr1105.github.io/redcover/',
    83|    83|    83|      category: 'design',
    84|    84|    84|      catName: '设计工具',
    85|    85|    85|      icon: '📕',
    86|    86|    86|      keywords: ['小红书', '封面', '制作', '模板', 'cover', '设计']
    87|    87|    87|    },
    88|    88|    88|    {
    89|    89|    89|      id: 9,
    90|    90|    90|      name: '截图美化工具',
    91|    91|    91|      desc: '渐变背景/阴影/水印，让截图更加专业美观',
    92|    92|    92|      url: 'https://tyr1105.github.io/shotpro/',
    93|    93|    93|      category: 'design',
    94|    94|    94|      catName: '设计工具',
    95|    95|    95|      icon: '📸',
    96|    96|    96|      keywords: ['截图', '美化', '渐变', '阴影', '水印', 'screenshot']
    97|    97|    97|    },
    98|    98|    98|    {
    99|    99|    99|      id: 10,
   100|   100|   100|      name: '二维码生成器',
   101|   101|   101|      desc: '自定义颜色/样式，一键下载高质量二维码',
   102|   102|   102|      url: 'https://tyr1105.github.io/qrgen/',
   103|   103|   103|      category: 'design',
   104|   104|   104|      catName: '设计工具',
   105|   105|   105|      icon: '🔲',
   106|   106|   106|      keywords: ['二维码', 'qrcode', '生成', '自定义', '颜色']
   107|   107|   107|    },
   108|   108|   108|    {
   109|   109|   109|      id: 11,
   110|   110|   110|      name: '开发者工具箱',
   111|   111|   111|      desc: 'JSON/Base64/URL编码/时间戳/正则/Hash/UUID',
   112|   112|   112|      url: 'https://tyr1105.github.io/devkit-tools/',
   113|   113|   113|      category: 'dev',
   114|   114|   114|      catName: '开发工具',
   115|   115|   115|      icon: '⚙️',
   116|   116|   116|      keywords: ['开发者', 'json', 'base64', 'url', '编码', '时间戳', '正则', 'hash', 'uuid', 'dev']
   117|   117|   117|    },
   118|   118|   118|    {
   119|   119|   119|      id: 12,
   120|   120|   120|      name: '在线图表制作',
   121|   121|   121|      desc: '粘贴数据一键生成精美图表，支持7种图表+6种配色+高清PNG导出',
   122|   122|   122|      url: 'https://tyr1105.github.io/chartsnap/',
   123|   123|   123|      category: 'design',
   124|   124|   124|      catName: '设计工具',
   125|   125|   125|      icon: '📊',
   126|   126|   126|      keywords: ['图表', 'chart', '柱状图', '折线图', '饼图', '数据可视化', '图表制作']
   127|   127|   127|    },
   128|   128|   128|    {
   129|   129|   129|      id: 13,
   130|   130|   130|      name: 'DevToolBox开发者工具',
   131|   131|   131|      desc: '13+免费开发者工具集合，JSON/正则/Cron/Hash/JWT/Markdown等',
   132|   132|   132|      url: 'https://tyr1105.github.io/devtoolbox/',
   133|   133|   133|      category: 'dev',
   134|   134|   134|      catName: '开发工具',
   135|   135|   135|      icon: '🧑‍💻',
   136|   136|   136|      keywords: ['devtoolbox', '开发者', 'json', 'regex', 'cron', 'jwt', 'markdown', 'hash']
   137|   137|   137|    },
   138|   138|   138|    {
   139|   139|   139|      id: 14,
   140|   140|   140|      name: '水印大师',
   141|   141|   141|      desc: '批量图片水印工具，支持文字水印、平铺水印、自定义位置',
   142|   142|   142|      url: 'https://tyr1105.github.io/watermark-pro/',
   143|   143|   143|      category: 'design',
   144|   144|   144|      catName: '设计工具',
   145|   145|   145|      icon: '💧',
   146|   146|   146|      keywords: ['水印', 'watermark', '批量', '文字', '图片']
   147|   147|   147|    },
   148|   148|   148|    {
   149|   149|   149|      id: 15,
   150|   150|   150|      name: '在线录屏工具',
   151|   151|   151|      desc: '一键录制屏幕生成GIF/WebM，无需安装，浏览器端处理',
   152|   152|   152|      url: 'https://tyr1105.github.io/recsnap/',
   153|   153|   153|      category: 'dev',
   154|   154|   154|      catName: '开发工具',
   155|   155|   155|      icon: '🎬',
   156|   156|   156|      keywords: ['录屏', 'screen', 'record', 'gif', 'webm', '录制', '屏幕', 'recsnap']
   157|   157|   157|    },
   158|   158|   158|    {
   159|   159|   159|      id: 17,
   160|   160|   160|      name: '配色大师',
   161|   161|   161|      desc: '智能配色方案生成器，多种和谐模式，UI预览，一键导出CSS/Tailwind',
   162|   162|   162|      url: 'https://tyr1105.github.io/colorpilot/',
   163|   163|   163|      category: 'design',
   164|   164|   164|      catName: '设计工具',
   165|   165|   165|      icon: '🎨',
   166|   166|   166|      keywords: ['配色', 'color', 'palette', '色彩', '调色板', 'tailwind', 'css', '设计']
   167|   167|   167|    },
   168|   168|   168|    {
   169|   169|   169|      id: 17,
   170|   170|   170|      name: 'Favicon生成器',
   171|   171|   171|      desc: '上传图片一键生成所有favicon尺寸，含manifest.json和HTML代码',
   172|   172|   172|      url: 'https://tyr1105.github.io/favicon-gen/',
   173|   173|   173|      category: 'dev',
   174|   174|   174|      catName: '开发工具',
   175|   175|   175|      icon: '⭐',
   176|   176|   176|      keywords: ['favicon', '图标', '生成器', 'manifest', 'app icon', '网站图标']
   177|   177|   177|    },
   178|   178|   178|    {
   179|   179|   179|      id: 18,
   180|   180|   180|      name: 'DevUtils开发者工具',
   181|   181|   181|      desc: '8个常用开发工具：JSON格式化、Base64、JWT、正则、UUID、URL编码',
   182|   182|   182|      url: 'https://tyr1105.github.io/devutils/',
   183|   183|   183|      category: 'dev',
   184|   184|   184|      catName: '开发工具',
   185|   185|   185|      icon: '🛠️',
   186|   186|   186|      keywords: ['devutils', '开发者', 'json', 'base64', 'jwt', 'uuid', '工具集']
   187|   187|   187|    },
   188|   188|   188|    {
   189|   189|   189|      id: 19,
   190|   190|   190|      name: 'App截图Mockup生成器',
   191|   191|   191|      desc: '在线App截图Mockup生成，多设备多配色',
   192|   192|   192|      url: 'https://tyr1105.github.io/shotpro-app/',
   193|   193|   193|      category: 'design',
   194|   194|   194|      catName: '设计工具',
   195|   195|   195|      icon: '📱',
   196|   196|   196|      keywords: ['mockup', 'app', '截图', '设备', 'phone', 'store']
   197|   197|   197|    },
   198|   198|   198|    {
   199|   199|   199|      id: 20,
   200|   200|   200|      name: '周报生成器',
   201|   201|   201|      desc: '一键生成专业周报，5种风格模板，告别加班写周报',
   202|   202|   202|      url: 'https://tyr1105.github.io/weekly-report-gen/',
   203|   203|   203|      category: 'doc',
   204|   204|   204|      catName: '文档工具',
   205|   205|   205|      icon: '📋',
   206|   206|   206|      keywords: ['周报', '日报', '工作汇报', '报告生成', 'weekly report', '模板']
   207|   207|   207|    },
   208|   208|   208|    {
   209|   209|   209|      id: 21,
   210|   210|   210|      name: 'AI财经助手Chrome扩展',
   211|   211|   211|      desc: '一键AI分析财经新闻，智能摘要+情绪分析，支持9大财经网站',
   212|   212|   212|      url: 'https://github.com/tyr1105/ai-finance-buddy',
   213|   213|   213|      category: 'ai',
   214|   214|   214|      catName: 'AI工具',
   215|   215|   215|      icon: '💹',
   216|   216|   216|      keywords: ['ai', '财经', '股票', '新闻分析', 'chrome扩展', 'finance'],
   217|   217|   217|      badge: '新上架'
   218|   218|   218|    },
   219|   219|   219|    {
   220|   220|   220|      id: 22,
   221|   221|   221|      name: 'AI智能抠图',
   222|   222|   222|      desc: 'AI一键去除图片背景，100%浏览器本地处理保护隐私，支持自定义背景色',
   223|   223|   223|      url: 'https://tyr1105.github.io/bg-remove/',
   224|   224|   224|      category: 'ai',
   225|   225|   225|      catName: 'AI工具',
   226|   226|   226|      icon: '✂️',
   227|   227|   227|      keywords: ['ai', '抠图', '背景去除', 'background', 'remove', 'transparent', 'cutout'],
   228|   228|   228|      badge: 'NEW'
   229|   229|   229|    },
   230|   230|   230|    {
   231|   231|   231|      id: 23,
   232|   232|   232|      name: '证件照制作器',
   233|   233|   233|      desc: '智能背景移除，一键换底色（白/蓝/红），支持一寸二寸护照签证等标准尺寸，A4排版打印',
   234|   234|   234|      url: 'https://tyr1105.github.io/idphoto-maker/',
   235|   235|   235|      category: 'design',
   236|   236|   236|      catName: '设计工具',
   237|   237|   237|      icon: '📷',
   238|   238|   238|      keywords: ['证件照', 'id photo', '一寸', '二寸', '护照', '签证', '换底色', '白底', '蓝底', '红底', '背景移除'],
   239|   239|   239|      badge: '新上线'
   240|   240|   240|    }
   241|   241|   241|  ];
   242|   242|   242|
   243|   243|   243|  // ==================== State ====================
   244|   244|   244|  let currentCategory = 'all';
   245|   245|   245|  let searchQuery = '';
   246|   246|   246|
   247|   247|   247|  // ==================== DOM ====================
   248|   248|   248|  const grid = document.getElementById('tools-grid');
   249|   249|   249|  const searchInput = document.getElementById('search-input');
   250|   250|   250|  const catBtns = document.querySelectorAll('.cat-btn');
   251|   251|   251|  const themeToggle = document.getElementById('theme-toggle');
   252|   252|   252|  const backToTop = document.getElementById('back-to-top');
   253|   253|   253|  const toolsCountEl = document.getElementById('tools-count');
   254|   254|   254|
   255|   255|   255|  // ==================== Render ====================
   256|   256|   256|  function renderTools() {
   257|   257|   257|    const filtered = tools.filter(tool => {
   258|   258|   258|      const matchCat = currentCategory === 'all' || tool.category === currentCategory;
   259|   259|   259|      const q = searchQuery.toLowerCase();
   260|   260|   260|      const matchSearch = !q ||
   261|   261|   261|        tool.name.toLowerCase().includes(q) ||
   262|   262|   262|        tool.desc.toLowerCase().includes(q) ||
   263|   263|   263|        tool.keywords.some(k => k.toLowerCase().includes(q)) ||
   264|   264|   264|        tool.catName.toLowerCase().includes(q);
   265|   265|   265|      return matchCat && matchSearch;
   266|   266|   266|    });
   267|   267|   267|
   268|   268|   268|    grid.innerHTML = '';
   269|   269|   269|
   270|   270|   270|    if (filtered.length === 0) {
   271|   271|   271|      grid.innerHTML = `
   272|   272|   272|        <div class="empty-state" style="grid-column: 1 / -1;">
   273|   273|   273|          <div class="empty-icon">🔍</div>
   274|   274|   274|          <h3>没有找到相关工具</h3>
   275|   275|   275|          <p>试试其他关键词或切换分类吧</p>
   276|   276|   276|        </div>`;
   277|   277|   277|      toolsCountEl.textContent = '共 0 个工具';
   278|   278|   278|      return;
   279|   279|   279|    }
   280|   280|   280|
   281|   281|   281|    toolsCountEl.textContent = `共 ${filtered.length} 个工具`;
   282|   282|   282|
   283|   283|   283|    filtered.forEach((tool, index) => {
   284|   284|   284|      const card = document.createElement('a');
   285|   285|   285|      card.href = tool.url;
   286|   286|   286|      card.target = '_blank';
   287|   287|   287|      card.rel = 'noopener noreferrer';
   288|   288|   288|      card.className = 'tool-card';
   289|   289|   289|      card.dataset.category = tool.category;
   290|   290|   290|      card.style.animationDelay = `${index * 0.04}s`;
   291|   291|   291|
   292|   292|   292|      card.innerHTML = `
   293|   293|   293|        ${tool.badge ? `<span class="tool-badge">${tool.badge}</span>` : ''}
   294|   294|   294|        ${tool.proBadge ? '<span class="tool-pro-badge">Pro</span>' : ''}
   295|   295|   295|        <div class="tool-card-header">
   296|   296|   296|          <div class="tool-icon ${tool.category}">${tool.icon}</div>
   297|   297|   297|          <div class="tool-info">
   298|   298|   298|            <div class="tool-name">${highlightSearch(tool.name)}</div>
   299|   299|   299|            <div class="tool-desc">${highlightSearch(tool.desc)}</div>
   300|   300|   300|          </div>
   301|   301|   301|        </div>
   302|   302|   302|        <div class="tool-card-footer">
   303|   303|   303|          <span class="tool-tag ${tool.category}">${tool.catName}</span>
   304|   304|   304|          <span class="tool-btn">
   305|   305|   305|            使用 <span class="arrow">→</span>
   306|   306|   306|          </span>
   307|   307|   307|        </div>`;
   308|   308|   308|
   309|   309|   309|      grid.appendChild(card);
   310|   310|   310|    });
   311|   311|   311|  }
   312|   312|   312|
   313|   313|   313|  function highlightSearch(text) {
   314|   314|   314|    if (!searchQuery) return text;
   315|   315|   315|    const q = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
   316|   316|   316|    return text.replace(new RegExp(`(${q})`, 'gi'), '<mark style="background:#fef08a;color:inherit;border-radius:2px;padding:0 2px;">$1</mark>');
   317|   317|   317|  }
   318|   318|   318|
   319|   319|   319|  // ==================== Category Filter ====================
   320|   320|   320|  catBtns.forEach(btn => {
   321|   321|   321|    btn.addEventListener('click', () => {
   322|   322|   322|      catBtns.forEach(b => b.classList.remove('active'));
   323|   323|   323|      btn.classList.add('active');
   324|   324|   324|      currentCategory = btn.dataset.category;
   325|   325|   325|      renderTools();
   326|   326|   326|    });
   327|   327|   327|  });
   328|   328|   328|
   329|   329|   329|  // ==================== Search ====================
   330|   330|   330|  let searchTimer;
   331|   331|   331|  searchInput.addEventListener('input', (e) => {
   332|   332|   332|    clearTimeout(searchTimer);
   333|   333|   333|    searchTimer = setTimeout(() => {
   334|   334|   334|      searchQuery = e.target.value.trim();
   335|   335|   335|      renderTools();
   336|   336|   336|    }, 150);
   337|   337|   337|  });
   338|   338|   338|
   339|   339|   339|  // ==================== Theme ====================
   340|   340|   340|  function getPreferredTheme() {
   341|   341|   341|    const stored = localStorage.getItem('theme');
   342|   342|   342|    if (stored) return stored;
   343|   343|   343|    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
   344|   344|   344|  }
   345|   345|   345|
   346|   346|   346|  function setTheme(theme) {
   347|   347|   347|    document.documentElement.setAttribute('data-theme', theme);
   348|   348|   348|    localStorage.setItem('theme', theme);
   349|   349|   349|    updateThemeIcon(theme);
   350|   350|   350|  }
   351|   351|   351|
   352|   352|   352|  function updateThemeIcon(theme) {
   353|   353|   353|    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
   354|   354|   354|    themeToggle.setAttribute('aria-label', theme === 'dark' ? '切换到亮色模式' : '切换到暗色模式');
   355|   355|   355|  }
   356|   356|   356|
   357|   357|   357|  themeToggle.addEventListener('click', () => {
   358|   358|   358|    const current = document.documentElement.getAttribute('data-theme');
   359|   359|   359|    setTheme(current === 'dark' ? 'light' : 'dark');
   360|   360|   360|  });
   361|   361|   361|
   362|   362|   362|  // Init theme
   363|   363|   363|  setTheme(getPreferredTheme());
   364|   364|   364|
   365|   365|   365|  // Listen for system theme changes
   366|   366|   366|  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
   367|   367|   367|    if (!localStorage.getItem('theme')) {
   368|   368|   368|      setTheme(e.matches ? 'dark' : 'light');
   369|   369|   369|    }
   370|   370|   370|  });
   371|   371|   371|
   372|   372|   372|  // ==================== Back to Top ====================
   373|   373|   373|  window.addEventListener('scroll', () => {
   374|   374|   374|    if (window.scrollY > 400) {
   375|   375|   375|      backToTop.classList.add('visible');
   376|   376|   376|    } else {
   377|   377|   377|      backToTop.classList.remove('visible');
   378|   378|   378|    }
   379|   379|   379|  }, { passive: true });
   380|   380|   380|
   381|   381|   381|  backToTop.addEventListener('click', () => {
   382|   382|   382|    window.scrollTo({ top: 0, behavior: 'smooth' });
   383|   383|   383|  });
   384|   384|   384|
   385|   385|   385|  // ==================== Keyboard Navigation ====================
   386|   386|   386|  document.addEventListener('keydown', (e) => {
   387|   387|   387|    // Focus search with Ctrl+K or /
   388|   388|   388|    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement !== searchInput)) {
   389|   389|   389|      e.preventDefault();
   390|   390|   390|      searchInput.focus();
   391|   391|   391|    }
   392|   392|   392|    // Escape to clear search
   393|   393|   393|    if (e.key === 'Escape' && document.activeElement === searchInput) {
   394|   394|   394|      searchInput.value = '';
   395|   395|   395|      searchQuery = '';
   396|   396|   396|      searchInput.blur();
   397|   397|   397|      renderTools();
   398|   398|   398|    }
   399|   399|   399|  });
   400|   400|   400|
   401|   401|   401|  // ==================== Service Worker Hint ====================
   402|   402|   402|  // Could register a service worker for offline support in the future
   403|   403|   403|
   404|   404|   404|  // ==================== Init ====================
   405|   405|   405|  renderTools();
   406|   406|   406|
   407|   407|   407|  // ==================== Pro Banner ====================
   408|   408|   408|  var proBannerClose = document.getElementById('pro-banner-close');
   409|   409|   409|  var proBanner = document.getElementById('pro-banner');
   410|   410|   410|  var proEmailForm = document.getElementById('pro-email-form');
   411|   411|   411|
   412|   412|   412|  if (proBannerClose && proBanner) {
   413|   413|   413|    proBannerClose.addEventListener('click', function() {
   414|   414|   414|      proBanner.style.display = 'none';
   415|   415|   415|      localStorage.setItem('pro-banner-closed', 'true');
   416|   416|   416|    });
   417|   417|   417|
   418|   418|   418|    if (localStorage.getItem('pro-banner-closed') === 'true') {
   419|   419|   419|      proBanner.style.display = 'none';
   420|   420|   420|    }
   421|   421|   421|  }
   422|   422|   422|
   423|   423|   423|  if (proEmailForm) {
   424|   424|   424|    proEmailForm.addEventListener('submit', function(e) {
   425|   425|   425|      e.preventDefault();
   426|   426|   426|      var emailInput = proEmailForm.querySelector('.pro-banner-input');
   427|   427|   427|      var btn = proEmailForm.querySelector('.pro-banner-btn');
   428|   428|   428|      if (emailInput.value) {
   429|   429|   429|        btn.textContent = '✅ 已订阅!';
   430|   430|   430|        emailInput.value = '';
   431|   431|   431|        setTimeout(function() { btn.textContent = '立即订阅'; }, 3000);
   432|   432|   432|      }
   433|   433|   433|    });
   434|   434|   434|  }
   435|   435|   435|
   436|   436|   436|})();
   437|   437|   437|