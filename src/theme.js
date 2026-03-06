document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const radios = document.querySelectorAll('input[name="theme"]');

  function updateTheme(mode) {
    body.classList.remove("theme-day", "theme-night", "theme-pink");
    body.classList.add("theme-" + mode);
    localStorage.setItem("theme", mode);
    const radio = document.getElementById(mode);
    if (radio) radio.checked = true;
  }

  const saved = localStorage.getItem("theme") || "day";
  updateTheme(saved);

  radios.forEach(radio => {
    radio.addEventListener("change", (e) => {
      updateTheme(e.target.value);
    });
  });
});
