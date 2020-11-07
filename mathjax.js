const delay = 300;

const mathJax = () => {
  if (!window.MathJax) {
    console.log(`No MathJax, will reassume in next timeout`);
    setTimeout(() => {
      mathJax();
    }, delay);
    return;
  }
  if (typeof window.MathJax.typesetPromise !== "function") {
    console.log(`typesetPromise not a function, will reassume in next timeout`);
    setTimeout(() => {
      mathJax();
    }, delay);
    return;
  }
  console.log(`Assuming in this timeout`);

  window.MathJax.typesetPromise();
};

export { mathJax };
