// Tab switching
document.querySelectorAll('.tab').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    document.getElementById('p-' + b.dataset.t).classList.add('active');
  });
});

const $ = id => document.getElementById(id);

// ===== 1. 字数统计 =====
function countWords() {
  const text = $('wc-text').value;
  const chars = text.length;
  const nospace = text.replace(/\s/g, '').length;
  const cn = (text.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g) || []).length;
  const en = text.replace(/[\u4e00-\u9fff\u3400-\u4dbf]/g, '').trim().split(/\s+/).filter(w => w.length > 0).length;
  const paras = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length || (chars > 0 ? 1 : 0);
  const sentences = (text.match(/[。！？.!?]+/g) || []).length || (chars > 0 ? 1 : 0);
  const lines = text ? text.split('\n').length : 0;
  const readTime = Math.max(1, Math.ceil((cn + en) / 400));

  $('wc-chars').textContent = chars.toLocaleString();
  $('wc-nospace').textContent = nospace.toLocaleString();
  $('wc-cn').textContent = cn.toLocaleString();
  $('wc-en').textContent = en.toLocaleString();
  $('wc-paras').textContent = paras;
  $('wc-sentences').textContent = sentences;
  $('wc-lines').textContent = lines;
  $('wc-time').textContent = readTime;
}

// ===== 2. 词频分析 =====
function analyzeFreq() {
  const text = $('freq-text').value;
  const minLen = parseInt($('freq-min').value) || 2;
  const top = parseInt($('freq-top').value) || 30;

  // Extract Chinese words (bigrams) and English words
  const cnChars = text.match(/[\u4e00-\u9fff\u3400-\u4dbf]+/g) || [];
  const enWords = text.match(/[a-zA-Z]+/g) || [];

  const freq = {};

  // Chinese bigrams
  cnChars.forEach(word => {
    for (let i = 0; i <= word.length - minLen; i++) {
      for (let len = minLen; len <= Math.min(4, word.length - i); len++) {
        const gram = word.substr(i, len);
        freq[gram] = (freq[gram] || 0) + 1;
      }
    }
  });

  // English words
  enWords.forEach(w => {
    if (w.length >= minLen) {
      const lw = w.toLowerCase();
      freq[lw] = (freq[lw] || 0) + 1;
    }
  });

  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, top);
  const max = sorted.length > 0 ? sorted[0][1] : 1;

  let html = `<p style="margin-bottom:12px;color:var(--text2)">共找到 ${Object.keys(freq).length} 个不同词语，显示前 ${sorted.length} 个：</p>`;
  sorted.forEach(([word, count]) => {
    const pct = Math.max(5, count / max * 100);
    html += `<div class="freq-bar"><span style="min-width:80px;text-align:right;font-weight:600">${word}</span><div class="bar" style="width:${pct}%">${count}</div></div>`;
  });

  $('freq-result').innerHTML = html;
}

// ===== 3. 文本对比 =====
function textDiff() {
  const a = $('diff-a').value.split('\n');
  const b = $('diff-b').value.split('\n');
  const maxLen = Math.max(a.length, b.length);
  let html = '<div style="font-family:monospace;font-size:14px;line-height:1.8;background:var(--card);padding:16px;border-radius:var(--radius);border:1px solid var(--border)">';

  for (let i = 0; i < maxLen; i++) {
    const la = a[i] || '';
    const lb = b[i] || '';
    if (la === lb) {
      html += `<div style="padding:2px 8px"> ${escapeHtml(la)}</div>`;
    } else {
      if (la) html += `<div class="diff-del" style="padding:2px 8px">- ${escapeHtml(la)}</div>`;
      if (lb) html += `<div class="diff-add" style="padding:2px 8px">+ ${escapeHtml(lb)}</div>`;
    }
  }
  html += '</div>';
  $('diff-result').innerHTML = html;
}

function escapeHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ===== 4. 大小写转换 =====
function convertCase(type) {
  const text = $('case-text').value;
  let result = '';
  switch(type) {
    case 'upper': result = text.toUpperCase(); break;
    case 'lower': result = text.toLowerCase(); break;
    case 'title': result = text.replace(/\b\w/g, c => c.toUpperCase()); break;
    case 'sentence': result = text.toLowerCase().replace(/(^\s*\w|[.!?]\s+\w)/g, c => c.toUpperCase()); break;
    case 'camel': result = text.toLowerCase().replace(/[-_\s]+(.)/g, (_, c) => c.toUpperCase()); break;
    case 'snake': result = text.replace(/\s+/g, '_').replace(/([a-z])([A-Z])/g, '$1_$2').replace(/-/g, '_').toLowerCase(); break;
    case 'kebab': result = text.replace(/\s+/g, '-').replace(/([a-z])([A-Z])/g, '$1-$2').replace(/_/g, '-').toLowerCase(); break;
    case 'toggle': result = text.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join(''); break;
  }
  $('case-out').value = result;
}

// ===== 5. 去重 =====
function dedup(mode) {
  const lines = $('dedup-text').value.split('\n');
  const seen = new Set();
  const result = [];
  const dupes = [];

  lines.forEach(line => {
    let key = line;
    if (mode === 'trim') key = line.trim();
    if (mode === 'case') key = line.toLowerCase().trim();

    if (!seen.has(key)) {
      seen.add(key);
      result.push(line);
    } else {
      dupes.push(line);
    }
  });

  $('dedup-out').value = result.join('\n');
  $('dedup-stats').innerHTML = `原始 <strong>${lines.length}</strong> 行 → 去重后 <strong>${result.length}</strong> 行（移除 ${dupes.length} 个重复项）`;
}

// ===== 6. 排序 =====
function sortLines(mode) {
  let lines = $('sort-text').value.split('\n').filter(l => l.trim());
  switch(mode) {
    case 'az': lines.sort((a, b) => a.localeCompare(b, 'zh-CN')); break;
    case 'za': lines.sort((a, b) => b.localeCompare(a, 'zh-CN')); break;
    case 'len': lines.sort((a, b) => a.length - b.length); break;
    case 'num': lines.sort((a, b) => (parseFloat(a.match(/-?\d+\.?\d*/)?.[0]) || 0) - (parseFloat(b.match(/-?\d+\.?\d*/)?.[0]) || 0)); break;
    case 'rand': for (let i = lines.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [lines[i], lines[j]] = [lines[j], lines[i]]; } break;
    case 'rev': lines.reverse(); break;
  }
  $('sort-out').value = lines.join('\n');
}

// ===== 7. 提取 =====
function extract(type) {
  const text = $('ext-text').value;
  let matches = [];
  const patterns = {
    email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
    url: /https?:\/\/[^\s<>"']+/g,
    phone: /1[3-9]\d{9}/g,
    number: /-?\d+\.?\d*/g,
    ip: /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g,
    chinese: /[\u4e00-\u9fff\u3400-\u4dbf]+/g
  };
  matches = [...new Set((text.match(patterns[type]) || []))];
  $('ext-out').value = matches.join('\n');
  $('ext-stats').innerHTML = `找到 <strong>${matches.length}</strong> 个匹配项`;
}

// ===== 8. 查找替换 =====
function findReplace() {
  const text = $('rep-text').value;
  const find = $('rep-find').value;
  const replace = $('rep-replace').value;
  const useRegex = $('rep-regex').checked;
  const caseSensitive = $('rep-case').checked;

  if (!find) return;

  let result;
  if (useRegex) {
    try {
      const flags = caseSensitive ? 'g' : 'gi';
      const re = new RegExp(find, flags);
      result = text.replace(re, replace);
    } catch(e) {
      result = '正则表达式错误: ' + e.message;
    }
  } else {
    if (caseSensitive) {
      result = text.split(find).join(replace);
    } else {
      const re = new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      result = text.replace(re, replace);
    }
  }
  $('rep-out').value = result;
}
