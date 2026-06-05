const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const socialmedia = document.querySelector(".socials");
const projects = document.querySelector(".projects-toggle");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  socialmedia.classList.toggle("active");
}

projects.addEventListener("click", () => {
  projects.classList.toggle("active");
});
