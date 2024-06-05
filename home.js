document.addEventListener("DOMContentLoaded", () => {
  const buttonCabeçalho = document.querySelectorAll(".opções");

  buttonCabeçalho.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.classList.add("opções-hover");
    });

    button.addEventListener("mouseout", () => {
      button.classList.remove("opções-hover");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttonMenu = document.querySelectorAll(".menu-opções");

  buttonMenu.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.classList.add("menu-opções-hover");
    });

    button.addEventListener("mouseout", () => {
      button.classList.remove("menu-opções-hover");
    });
  });
});
