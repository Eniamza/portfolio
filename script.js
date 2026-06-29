

function toggleTheme() {
  var root = document.documentElement;
  var btn = document.getElementById('theme-btn');

  if (root.classList.contains('light-mode')) {
    root.classList.remove('light-mode');
    btn.textContent = '[ LIGHT ]';
  } else {
    root.classList.add('light-mode');
    btn.textContent = '[ DARK ]';
  }
}

function setDarkMode() {
  document.documentElement.classList.remove('light-mode');
  var btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = '[ LIGHT ]';
}

function setLightMode() {
  document.documentElement.classList.add('light-mode');
  var btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = '[ DARK ]';
}

function displayPageInfo() {
  var infoEl = document.getElementById('page-info');
  if (infoEl) {
    var loc = window.location.href;
    var modified = document.lastModified;
    infoEl.innerHTML = 'Page Location: ' + loc + '<br>Last Modified: ' + modified;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  displayPageInfo();
});
