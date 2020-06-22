var fBtn = document.querySelector(".feedback");
var fPopup = document.querySelector(".modal-wrapper")
var fClose = fPopup.querySelector(".modal-button");
var loginForm = fPopup.querySelector(".feedback-form");
var fLogin = fPopup.querySelector(".login-icon-user");
var fPassword = fPopup.querySelector(".login-icon-password");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

fBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  fPopup.classList.add("modal-show")

  if (storage) {
    fLogin.value = storage;
    fPassword.focus();
  } else {
    fLogin.focus();
  }
});

fClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  fPopup.classList.remove("modal-error");
  fPopup.classList.remove("modal-show");
});

loginForm.addEventListener("submit", function (evt) {
  if (!fLogin.value || !fPassword.value) {
    evt.preventDefault();
    fPopup.classList.remove("modal-error");
    fPopup.offsetWidth = fPopup.offsetWidth;
    fPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", fLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (fPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      fPopup.classList.remove("modal-error");
      fPopup.classList.remove("modal-show");
    }
  }
});
