const form = document.getElementById("form");
const container = document.getElementById("container");
const message = document.getElementById("message");
const dismissBtn = document.getElementById("dismiss");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const value = email.value.trim();

  emailError.style.display = "none";
  email.style.border = "1px solid hsl(0, 0%, 58%)";

  if (!value || !validateEmail(value)) {
    emailError.style.display = "block";
    email.style.border = "2px solid hsl(4, 100%, 67%)";
    return;
  }

  container.style.display = "none";
  message.style.display = "block";
});

dismissBtn.addEventListener("click", function () {
  message.style.display = "none";
  container.style.display = "flex";

  email.value = "";
  emailError.style.display = "none";
});