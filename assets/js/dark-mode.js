(function() {
  const STORAGE_KEY = 'hopotta-dark-mode';
  
  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) return stored === 'true';
    return false;
  }
  
  function applyTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem(STORAGE_KEY, isDark.toString());
    updateIcon(isDark);
  }
  
  function updateIcon(isDark) {
    const icon = document.getElementById('theme-toggle-icon');
    if (!icon) return;
    
    if (isDark) {
      icon.querySelector('.sun').style.display = 'none';
      icon.querySelector('.moon').style.display = 'block';
    } else {
      icon.querySelector('.sun').style.display = 'block';
      icon.querySelector('.moon').style.display = 'none';
    }
  }
  
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') === 'dark';
    applyTheme(!current);
  }
  
  function init() {
    const isDark = getPreferredTheme();
    applyTheme(isDark);
    
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
