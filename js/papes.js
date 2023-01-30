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

// Random Border Color
let character = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let mainH2 = document.querySelectorAll(".main-page h2");

setInterval(() => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += character[Math.floor(Math.random() * character.length)];
  }
  mainH2.forEach((ele) => {
    ele.style.borderColor = `${color} transparent`;
  });
}, 1000);

// Send Email
function SendMail() {
  let msgSend = document.querySelector(".modal");
  let submit = document.querySelector(".title-3");
  let closeBtn = document.querySelector(".close-btn");

  let params = {
    from_name: document.getElementById("fullName").value,
    phone_number: document.getElementById("phone_number").value,
    phone_number_two: document.getElementById("phone_number_two").value,
    number: document.getElementById("number").value,
  };
  if (
    isNaN(+params.from_name) &&
    String(params.phone_number).length == 11 &&
    String(params.phone_number_two).length == 7 &&
    String(params.number).length == 14
  ) {
    emailjs.send("service_lyfihxb", "template_ctgf13s", params);
    msgSend.classList.toggle("active-5");
  }

  closeBtn.addEventListener("click", close);
  submit.addEventListener("click", close);

  function close() {
    msgSend.classList.remove("active-5");
  }
}

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
