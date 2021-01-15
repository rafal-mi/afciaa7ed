import { mathJax } from './mathjax.js';

function loadContent(url) {
  // 27/exe-27_28.html
  fetch(url)
  .then(response => response.text())
  .then(html => {
    let element = document.getElementById("app");
    element.innerHTML = html;

  }).then(() => mathJax());
}

window.loadContent = loadContent;

loadContent('27/exe-27_28.html');


