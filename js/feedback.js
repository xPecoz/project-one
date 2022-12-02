// let user = {
//   0: {
//     name: "الإسم : علي",
//     subject: {
//       arbic: "العربي : %90",
//       math: "الرياضيات : %90",
//       english: "إنجليزي : %90",
//       science: "علوم : %90",
//       social: "الدراسات : %90",
//     },
//   },
// };

// let input = document.querySelector("input");
// let btn = document.querySelector("button");
// let userName = document.querySelector(".name");
// let arbic = document.querySelector(".arabic");
// let math = document.querySelector(".math");
// let sinc = document.querySelector(".sience");
// let english = document.querySelector(".E");
// let social = document.querySelector(".social");

// if (localStorage.getItem("number")) {
//   input.value = localStorage.getItem("number");
//   userName.innerHTML = user[localStorage.getItem("number")].name;
//   arbic.innerHTML = user[localStorage.getItem("number")].subject.arbic;
//   math.innerHTML = user[localStorage.getItem("number")].subject.math;
// }

// btn.onclick = function () {
//   localStorage.setItem("number", input.value);
//   userName.innerHTML = user[input.value].name;
//   arbic.innerHTML = user[input.value].subject.arbic;
//   math.innerHTML = user[input.value].subject.math;
// };
// Scrool To Top
let btnScrol = document.querySelector(".up");

btnScrol.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};

window.addEventListener("scroll", () => {
  this.scrollY >= 600
    ? btnScrol.classList.add("show")
    : btnScrol.classList.remove("show");
});

// Open And Close Sidebar
let sidebar = document.querySelector(".sidebar");
let content = document.querySelector(".content");
let btnSid = document.querySelector(".toggle");

btnSid.onclick = function () {
  sidebar.classList.toggle("close");
  content.classList.toggle("ml-250");
  document.querySelectorAll(".sidebar li .icon").forEach((ele) => {
    ele.classList.toggle("w-44");
  });
};

// Light Mode
let btnDark = document.querySelector(".head i");

if (localStorage.getItem("dark")) {
  document.body.classList.add("dark-theme");
  btnDark.classList.add("uil-sun");
} else {
  document.body.classList.remove("dark-theme");
  btnDark.classList.remove("uil-sun");
}

btnDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  btnDark.classList.toggle("uil-sun");
  document.body.classList.contains("dark-theme")
    ? localStorage.setItem("dark", true)
    : localStorage.removeItem("dark");
});

// Log in And Sign In
let btnPort = document.querySelector(".head img");
let subMenu = document.querySelector(".sub-menu-wrap");

btnPort.addEventListener("click", () => {
  subMenu.classList.toggle("open-menu");
});

// Send Message
function SendMail() {
  let params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
    number: document.getElementById("phone_id").value,
  };
  emailjs
    .send("service_vpguixj", "template_j210nld", params)
    .then(function (res) {
      alert("Success!" + res.status);
    });
}
