import { mathJax } from './mathjax.js';

fetch("27/exe-27_29.html")
  .then(response => response.text())
  .then(html => {
    let element = document.getElementById("app");
    element.innerHTML = html;

  }).then(() => mathJax());

setTimeout(() => {
  //mathJax();
}, 300);
