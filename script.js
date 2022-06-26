// botão
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

// menu responsivo
let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial"

  menuSection.classList.toggle("on", show)
  show = !show;
})
