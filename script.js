const wrapper = document.querySelector(".contentInner");

window.addEventListener("DOMContentLoaded", (event) => {
  wrapper.classList.add("visible");
});

setTimeout(() => {
  wrapper.classList.add("visible");
}, 2000);
