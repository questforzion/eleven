const hello = (name) => {
  this.name = name;
  console.log(`hello ${name}`);
};

const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-mbl");
let show = false;

btn.addEventListener("click", (e) => {
  if (!show) {
    nav.classList.add("open");
    show = true
  } else {
    nav.classList.remove("open");
    show = false
  }
});

hello("jo");
