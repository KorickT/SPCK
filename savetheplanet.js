const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  bgImageEl.style.opacity = 1 - window.pageYOffset / 900;
  bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}

let register = document.getElementById("register");
register.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("abc");
  let email = document.getElementById("email");
  let pw = document.getElementById("password");
  let username = document.getElementById("username");
  const user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  localStorage.setItem("users", JSON.stringify(user));
  location.replace("savetheplanet.html");
});

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
