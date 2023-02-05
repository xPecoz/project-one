let myRequest = new XMLHttpRequest();
myRequest.open("GET", "../js/json.json");
myRequest.send();

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    password = JSON.parse(this.responseText);
  }
};

let inputPass = document.querySelector(".pass");
let four = document.querySelector(".four");
let fourBox = document.querySelector(".four_box");
let five = document.querySelector(".five");
let fiveBox = document.querySelector(".five_box");
let six = document.querySelector(".six");
let sixBox = document.querySelector(".six_box");

window.onload = () => {
  inputPass.focus();
};

inputPass.oninput = () => {
  for (let i = 0; i < password.length; i++) {
    if (inputPass.value == password[i]) {
      document.querySelectorAll(".blur").forEach((ele) => {
        ele.classList.remove("blur");
      });
      inputPass.remove();
    }
  }
  if (inputPass.value[0] == "4") {
    four.style.display = "block";
    fourBox.style.display = "grid";

    five.style.display = "none";
    fiveBox.style.display = "none";

    six.style.display = "none";
    sixBox.style.display = "none";
  } else if (inputPass.value[0] == "5") {
    four.style.display = "none";
    fourBox.style.display = "none";

    five.style.display = "block";
    fiveBox.style.display = "grid";

    six.style.display = "none";
    sixBox.style.display = "none";
  } else if (inputPass.value[0] == "6") {
    four.style.display = "none";
    fourBox.style.display = "none";

    five.style.display = "none";
    fiveBox.style.display = "none";

    six.style.display = "block";
    sixBox.style.display = "grid";
  }
};

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

document.onkeydown = (e) => {
  let num = 0;
  let ctrl;
  e.ctrlKey !== false ? (ctrl = true) : "";
  e.keyCode == 85 ? (num = 85) : "";
  if (num == 85 && ctrl == true) {
    e.preventDefault();
  }
};
