const html = document.documentElement;
const modeToggle = document.getElementById("mode-toggle");

const checkMode = localStorage.getItem("mode");

if (checkMode) {
  html.classList.add(checkMode);
  if (html.classList.contains("dark")) {
    modeToggle.textContent = "light";
  } else {
    modeToggle.textContent = "dark";
  }
  console.log();
}

modeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    modeToggle.textContent = "light";

    localStorage.setItem("mode", "dark");
  } else if (html.classList.contains("dark")) {
    modeToggle.innerHTML = `<span class="fa-solid fa-sun"></span>`;
  } else {
    modeToggle.textContent = "dark";
    modeToggle.innerHTML = `<span class="fa-solid fa-moon"></span>`;
    localStorage.setItem("mode", "light");
  }

  console.log(html);
});
