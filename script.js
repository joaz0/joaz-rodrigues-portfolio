const button = document.getElementById("switch_theme");
const ChevronDown = document.getElementById("chevron-down");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
    if (document.body.classList.contains("dark")) {
    button.classList.remove("fa-moon");
    button.classList.add("fa-sun");
    logo.src = "Imagens/Logo/Logo_dark.png";
  } else {
    button.classList.remove("fa-sun");
    button.classList.add("fa-moon");
    logo.src = "Imagens/Logo/Logo_light.png";
  }
});

ChevronDown.addEventListener("click", () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});