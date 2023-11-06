const submitBtn = document.querySelector(".input-btn");
const input = document.querySelector("input");
const form = document.querySelector("form");
const errorIcon = document.querySelector(".error-icon");
const errorMsg = document.querySelector(".error-msg");

form.addEventListener("submit", validate);
submitBtn.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
  let inputValue = input.value.trim();

  // Checks if the email is valid
  if (!validateEmail(inputValue)) {
    errorIcon.style.display = "block";
    errorMsg.style.display = "block";
    input.classList.add("input-error");
  } else {
    errorIcon.style.display = "none";
    errorMsg.style.display = "none";
    input.classList.remove("input-error");
  }
}

const validateEmail = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};
