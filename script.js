const button_theme = document.getElementById("switch_theme");

button_theme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
    if (document.body.classList.contains("dark")) {
    button_theme.classList.remove("fa-moon");
    button_theme.classList.add("fa-sun");
    logo.src = "Imagens/Logo/Logo_dark.png";
  } else {
    button_theme.classList.remove("fa-sun");
    button_theme.classList.add("fa-moon");
    logo.src = "Imagens/Logo/Logo_light.png";
  }
});


const ChevronDown = document.getElementById("chevron-down");

ChevronDown.addEventListener("click", () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  
  });
});


const button_service = document.getElementById("button_services");

button_service.addEventListener("click", () => {
  window.location.href = "#services";
});

const button_contact = document.getElementById("button_contact");

button_contact.addEventListener("click", () => {
  window.location.href = "#contact";
});

