const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const password1Value = password1.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    showError(username, "Username can not be blank");
  } else if (!isUsernameValid(usernameValue)) {
    showError(username, "Username is not valid");
  } else {
    showSuccess(username);
  }
  if (emailValue === "") {
    showError(email, "Email Id can not be blank");
  } else if (!isEmailValid(emailValue)) {
    showError(email, "Email is not Valid");
  } else {
    showSuccess(email);
  }

  if (password1Value === "") {
    showError(password1, "Password can not be blank");
  } else {
    showSuccess(password1);
  }

  if (password2Value === "") {
    showError(password2, "Password can not be blank");
  } else if (password2Value != password1Value) {
    showError(password2, "Passwords not matched");
  } else {
    showSuccess(password2);
  }
}

function showError(input, msg) {
  const formContent = input.parentNode;
  formContent.className = "form-content error";
  const small = formContent.querySelector("small");
  small.innerHTML = msg;
}

function showSuccess(input) {
  const formContent = input.parentNode;
  formContent.className = "form-content success";
}

function isEmailValid(email1) {
  return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email1);
}

function isUsernameValid(username1) {
  return /^[a-zA-Z0-9]{3,30}$/.test(username1);
}
