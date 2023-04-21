const nameJs = document.getElementById("name");
const emailJs = document.getElementById("email");
const dndJs = document.getElementById("dnd");
const yesJs = document.getElementById("Yes");
const noJs = document.getElementById("No");
const favJs = document.getElementById("fav");
const output = document.getElementById("Output");
const jsBtn = document.getElementById("button");

let nameValue;
let emailValue;
let dndValue;
let yesValue;
let noValue;
let favValue;

nameJs.addEventListener("input", function () {
  nameValue = this.value;
});

emailJs.addEventListener("input", function () {
  emailValue = this.value;
});

dndJs.addEventListener("input", function () {
  dndValue = this.value;
});

jsBtn.addEventListener("click", function () {
  output.textContent =
    "Your name is " +
    nameValue +
    " " +
    "Your email is " +
    emailValue +
    " " +
    "your power level is " +
    " " +
    dndValue;
});
