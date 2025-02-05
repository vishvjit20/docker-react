const body = document.querySelector("body");
const btn = document.getElementById("btn-click");
let debounceCount = 0;

const myDebounce = (cb, delay) => {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

btn.addEventListener("click", () => {
  btnClick();
});

const div = document.createElement("div");
div.innerText = `Debounce Count : ${debounceCount}`;

function btnClick() {
  // debounceCount++;
  myDebounce(() => {
    debounceCount++;
    div.innerText = `Debounce Count : ${debounceCount}`;
  }, 500)();
  console.log(debounceCount);
  // div.innerText = `Debounce Count : ${debounceCount}`;
}

body.appendChild(div);
