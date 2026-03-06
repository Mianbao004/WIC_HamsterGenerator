const radios = document.querySelectorAll('input[name="theme"]');

const savedTheme = localStorage.getItem("theme");

if(savedTheme){
  const radio = document.getElementById(savedTheme);
  if(radio) radio.checked = true;
}

radios.forEach(radio => {

  radio.addEventListener("change", () => {

    const theme = radio.id;

    localStorage.setItem("theme", theme);

    document.body.classList.remove(
      "theme-day",
      "theme-night",
      "theme-pink"
    );

    document.body.classList.add(`theme-${theme}`);

  });

});
