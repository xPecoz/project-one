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

// Send Message
let select = document.getElementById("select");
let selectClass = document.getElementById("class");
select.value = "تجويد القرآن";
selectClass.value = "1/1";

function SendMail() {
  let msgSend = document.querySelector(".modal");
  let submit = document.querySelector(".title-3");
  let closeBtn = document.querySelector(".close-btn");

  let params = {
    from_name: document.getElementById("fullName").value,
    class: selectClass.value,
    learn: select.value,
  };

  if (params.from_name && params.class && params.learn) {
    emailjs.send("service_vpguixj", "template_lyljr0n", params).then((rel) => {
      msgSend.classList.add("active-5");
    });
  }

  closeBtn.addEventListener("click", close);
  submit.addEventListener("click", close);

  function close() {
    msgSend.classList.remove("active-5");
  }
}

document.onkeydown = (e) => {
  let num = 0;
  let ctrl;
  e.ctrlKey !== false ? (ctrl = true) : "";
  e.keyCode == 85 ? (num = 85) : "";
  if (num == 85 && ctrl == true) {
    e.preventDefault();
  }
};
