(function() {
  const STORAGE_KEY = 'hopotta-dark-mode';
  const ANIMATION_DURATION = 600; // 总动画时长 0.6 秒
  
  let isAnimating = false;
  
  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) return stored === 'true';
    return false;
  }
  
  function applyTheme(isDark, skipAnimation = false) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem(STORAGE_KEY, isDark.toString());
    
    if (skipAnimation) {
      updateIconState(isDark);
    } else {
      animateIconChange(isDark);
    }
  }
  
  /**
   * 直接更新图标状态（不执行动画）
   */
  function updateIconState(isDark) {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    
    toggle.classList.remove('sun-mode', 'moon-mode', 'animating');
    toggle.classList.add(isDark ? 'moon-mode' : 'sun-mode');
  }
  
  /**
   * 带动画地切换图标
   * 动画流程 (太阳→月亮):
   * 1. 0-300ms: 太阳光芒逐渐消失
   * 2. 0-600ms: 太阳中心圆逐渐缩小消失
   * 3. 300-600ms: 月亮逐渐显现
   */
  function animateIconChange(toDark) {
    if (isAnimating) return;
    
    const toggle = document.getElementById('theme-toggle');
    const sunCircle = toggle.querySelector('.sun-circle');
    const sunRays = toggle.querySelector('.sun-rays');
    const moon = toggle.querySelector('.moon');
    
    if (!sunCircle || !sunRays || !moon) return;
    
    isAnimating = true;
    toggle.classList.add('animating');
    
    const startTime = Date.now();
    
    function updateProgress() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / ANIMATION_DURATION) * 100, 100);
      
      if (toDark) {
        // 太阳 → 月亮
        updateSunToMoon(progress, sunCircle, sunRays, moon);
      } else {
        // 月亮 → 太阳
        updateMoonToSun(progress, sunCircle, sunRays, moon);
      }
      
      if (progress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        // 动画完成
        isAnimating = false;
        toggle.classList.remove('animating');
        updateIconState(toDark);
      }
    }
    
    requestAnimationFrame(updateProgress);
  }
  
  /**
   * 更新太阳→月亮的动画状态
   */
  function updateSunToMoon(progress, sunCircle, sunRays, moon) {
    // 0-50%: 光芒逐渐消失
    if (progress < 50) {
      sunRays.style.opacity = 1 - (progress / 50);
    } else {
      sunRays.style.opacity = 0;
    }
    
    // 0-60%: 中心圆逐渐缩小
    if (progress < 60) {
      const scale = 1 - (progress / 60) * 0.8;
      sunCircle.style.transform = `scale(${Math.max(scale, 0.2)})`;
      sunCircle.style.opacity = 1 - (progress / 60);
    } else {
      sunCircle.style.transform = 'scale(0)';
      sunCircle.style.opacity = 0;
    }
    
    // 40-100%: 月亮逐渐显现
    if (progress >= 40) {
      moon.style.opacity = (progress - 40) / 60;
    }
  }
  
  /**
   * 更新月亮→太阳的动画状态（反向）
   */
  function updateMoonToSun(progress, sunCircle, sunRays, moon) {
    // 0-60%: 月亮逐渐消失
    if (progress < 60) {
      moon.style.opacity = 1 - (progress / 60);
    } else {
      moon.style.opacity = 0;
    }
    
    // 40-100%: 中心圆逐渐放大
    if (progress >= 40 && progress < 100) {
      const scale = 0.2 + ((progress - 40) / 60) * 0.8;
      sunCircle.style.transform = `scale(${scale})`;
      sunCircle.style.opacity = (progress - 40) / 60;
    } else if (progress >= 100) {
      sunCircle.style.transform = 'scale(1)';
      sunCircle.style.opacity = 1;
    }
    
    // 50-100%: 光芒逐渐出现
    if (progress >= 50) {
      sunRays.style.opacity = (progress - 50) / 50;
    }
  }
  
  function toggleTheme() {
    if (isAnimating) return;
    
    const current = document.documentElement.getAttribute('data-theme') === 'dark';
    applyTheme(!current);
  }
  
  function init() {
    const isDark = getPreferredTheme();
    applyTheme(isDark, true); // 初始化时不播放动画
    
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', toggleTheme);
    }
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  window.toggleTheme = toggleTheme;
  window.initDarkMode = init;
})();
