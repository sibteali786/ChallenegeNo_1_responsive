const navBtn = document.getElementById("nav-btn");
const navBar = document.getElementById("b");

navBtn.addEventListener("click", () => {
  navBar.classList.toggle("showNav");
});
