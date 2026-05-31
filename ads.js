/**
 * 万能工具箱 - 广告集成脚本
 * 使用方法：
 * 1. 在 Google AdSense 获取发布商ID后，替换下方的 ca-pub-XXXXXXXXXXXXXXXX
 * 2. 在每个工具页面中引入此脚本：<script src="/ads.js"></script>
 * 3. 确保页面中有 class="ad-slot" 的容器
 * 
 * 注意：先申请 Google AdSense 账号（需要用户操作）：
 * - 访问 https://www.google.com/adsense/
 * - 用谷歌账号登录
 * - 添加网站 tyr1105.github.io
 * - 等待审核（通常1-2周）
 * - 审核通过后获取发布商ID
 */

// === 配置区 ===
const AD_CONFIG = {
  publisherId: 'ca-pub-XXXXXXXXXXXXXXXX', // 替换为实际ID
  enabled: false, // 设为 true 启用广告
  slots: {
    top: 'XXXXXXXXXX',    // 顶部横幅广告位
    sidebar: 'XXXXXXXXXX', // 侧边栏广告位
    bottom: 'XXXXXXXXXX',  // 底部广告位
    inArticle: 'XXXXXXXXXX' // 文中广告位
  }
};

// === 初始化广告 ===
function initAds() {
  if (!AD_CONFIG.enabled) return;

  // 加载 AdSense 脚本
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CONFIG.publisherId}`;
  script.crossOrigin = 'anonymous';
  document.head.appendChild(script);

  // 在每个 .ad-slot 容器中插入广告
  document.querySelectorAll('.ad-slot').forEach(slot => {
    const adType = slot.dataset.adType || 'auto';
    const slotId = AD_CONFIG.slots[adType] || AD_CONFIG.slots.top;
    
    const ins = document.createElement('ins');
    ins.className = 'adsbygoogle';
    ins.style.display = 'block';
    ins.dataset.adClient = AD_CONFIG.publisherId;
    ins.dataset.adSlot = slotId;
    ins.dataset.adFormat = 'auto';
    ins.dataset.fullWidthResponsive = 'true';
    
    slot.appendChild(ins);
    (adsbygoogle = window.adsbygoogle || []).push({});
  });
}

// 页面加载后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAds);
} else {
  initAds();
}
