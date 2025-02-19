document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;
  const sunIcon = themeToggle.children[0]; 
  const moonIcon = themeToggle.children[1]; 

  if (localStorage.getItem("theme") === "dark") {
    htmlElement.classList.add("dark");
  } else {
    htmlElement.classList.remove("dark");
  }

  themeToggle.addEventListener("click", (event) => {
    if (event.target.closest("span") === sunIcon) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else if (event.target.closest("span") === moonIcon) {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});