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
let select = document.querySelector(".comp");
let comp_2 = document.getElementById("write_comp");
let run = document.querySelector(".run");
let den = document.querySelector(".den");
let comp = "";
comp = select.value;

select.oninput = () => {
  comp = select.value;
  if (comp == "اكتب الموهبة") {
    comp_2.style.display = "block";
    run.style.display = "none";
    den.style.display = "none";
    comp = comp_2.value;
  } else if (comp == "رياضي") {
    run.style.display = "block";
    comp_2.style.display = "none";
    den.style.display = "none";
    comp = run.value;
  } else if (comp == "دينى") {
    den.style.display = "block";
    run.style.display = "none";
    comp_2.style.display = "none";
    comp = den.value;
  }
};

comp_2.onclick = () => {
  comp = comp_2.value;
};
run.onclick = () => {
  comp = run.value;
};
den.onclick = () => {
  comp = den.value;
};

comp_2.oninput = () => {
  comp = comp_2.value;
};
run.oninput = () => {
  comp = run.value;
};
den.oninput = () => {
  comp = den.value;
};

function SendMail() {
  let msgSend = document.querySelector(".modal");
  let submit = document.querySelector(".title-3");
  let closeBtn = document.querySelector(".close-btn");

  let params = {
    from_name: document.getElementById("fullName").value,
    class: document.getElementById("class").value,
    competition: comp,
  };

  if (
    params.from_name &&
    params.class &&
    params.competition !== "دينى" &&
    params.competition !== "رياضي" &&
    params.competition
  ) {
    emailjs.send("service_dkbeiop", "template_v97w75m", params);
    msgSend.classList.add("active-5");
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
