const body = document.getElementById("body");
const bulb = document.getElementById("bulb");
const toggleButton = document.getElementById("toggleButton");
const statusText = document.getElementById("status");

toggleButton.addEventListener("click", () => {
  bulb.classList.toggle("off");

  body.classList.toggle("dark-mode");

  if (bulb.classList.contains("off")) {
    toggleButton.textContent = "Turn On";
    statusText.textContent = "Status: Off";
  } else {
    toggleButton.textContent = "Turn Off";
    statusText.textContent = "Status: On";
  }
});
