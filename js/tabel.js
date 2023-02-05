let myRequest = new XMLHttpRequest();
let password = [];
myRequest.open("GET", "../js/json.json");
myRequest.send();

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    password = JSON.parse(this.responseText);
  }
};

let inputPass = document.querySelector(".pass");

let allClass = document.querySelectorAll(".boxs");
let allH2 = document.querySelectorAll("h2");
let one = document.querySelectorAll(".one")[1];
let oneH2 = document.querySelectorAll(".one")[0];
let two = document.querySelectorAll(".two")[1];
let twoH2 = document.querySelectorAll(".two")[0];
let three = document.querySelectorAll(".three")[1];
let threeH2 = document.querySelectorAll(".three")[0];
let four = document.querySelectorAll(".four")[1];
let fourH2 = document.querySelectorAll(".four")[0];
let five = document.querySelectorAll(".five")[1];
let fiveH2 = document.querySelectorAll(".five")[0];
let six = document.querySelectorAll(".six")[1];
let sixH2 = document.querySelectorAll(".six")[0];

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

  if (inputPass.value[0] == "1") {
    allClass.forEach((ele) => {
      ele.style.display = "none";
    });
    allH2.forEach((ele) => {
      ele.style.display = "none";
    });

    one.style.display = "grid";
    oneH2.style.display = "block";
  } else if (inputPass.value[0] == "2") {
    allClass.forEach((ele) => {
      ele.style.display = "none";
    });
    allH2.forEach((ele) => {
      ele.style.display = "none";
    });

    two.style.display = "grid";
    twoH2.style.display = "block";
  } else if (inputPass.value[0] == "3") {
    allClass.forEach((ele) => {
      ele.style.display = "none";
    });
    allH2.forEach((ele) => {
      ele.style.display = "none";
    });

    three.style.display = "grid";
    threeH2.style.display = "block";
  } else if (inputPass.value[0] == "4") {
    allClass.forEach((ele) => {
      ele.style.display = "none";
    });
    allH2.forEach((ele) => {
      ele.style.display = "none";
    });

    four.style.display = "grid";
    fourH2.style.display = "block";
  } else if (inputPass.value[0] == "5") {
    allClass.forEach((ele) => {
      ele.style.display = "none";
    });
    allH2.forEach((ele) => {
      ele.style.display = "none";
    });

    five.style.display = "grid";
    fiveH2.style.display = "block";
  } else if (inputPass.value[0] == "6") {
    allClass.forEach((ele) => {
      ele.style.display = "none";
    });
    allH2.forEach((ele) => {
      ele.style.display = "none";
    });

    six.style.display = "grid";
    sixH2.style.display = "block";
  }
};
