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

// Open Select
let btnSelect = document.querySelector(".choose");
let optionDiv = document.querySelector(".optain");
let option = document.querySelectorAll(".optain p");
let btnExam = document.querySelector(".exam-form button");
let inputNumber = document.querySelector(".exam-form > input");
let userName = document.querySelector(".user-name .deg");
let arabic = document.querySelector(".arabic .deg");
let studies = document.querySelector(".studies .deg");
let math = document.querySelector(".math .deg");
let english = document.querySelector(".english .deg");
let religion = document.querySelector(".religion .deg");
let science = document.querySelector(".science .deg");
let number = document.querySelector(".exam-form input");
let text = "";

let userFour = {
  401: {
    name: "ابراهيم الزكي البسيوني المتولي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  402: {
    name: "ابراهيم حمدي علي محمد ابراهيم",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  403: {
    name: "احمد تامر احمد محمد العسكري",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  404: {
    name: "احمد سعد ابو الفتوح عبد الفتاح",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  405: {
    name: "اسلام عتره عبدالعزيز محمد عامر",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  406: {
    name: "اسلام عتره عبدالعزيز محمد عامر",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  407: {
    name: "أحمد عمرو فاروق سعد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  408: {
    name: "المصطفي وائل شاكر شاكر",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  409: {
    name: "باسم ياسر سعد المغاوري خضر",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  410: {
    name: "تامر نبيه شعبان نبيه يوسف",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  411: {
    name: "سامي احمد سامي عبدالرازق البديوي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  412: {
    name: "شعبان محمد شعبان ابراهيم",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  413: {
    name: "عبد الرحمن محمد ابراهيم السعيد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  414: {
    name: "عزت عادل عزت المغاوري الغطاس",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  415: {
    name: "عمر ابراهيم عمر محمد مصطفي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  416: {
    name: "عمر جمال السيد محمد البسيوني",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  417: {
    name: "عوض حسن سعد الورداني",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  418: {
    name: "فهمي هيثم فهيم الدريني",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  419: {
    name: "كريم حماده الزكي زغلول",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  420: {
    name: "مالك محمد ابراهيم السعيد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  421: {
    name: "مالك محمود المتولي المتولي علي زياده",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  422: {
    name: "محمد حسين منير عوض",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  423: {
    name: "محمد خالد السيد الحماقي الذكي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  424: {
    name: "محمد عادل حسين احمد السعيد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  425: {
    name: "محمد محمد طاهر رزق محمد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
};

inputNumber.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    showExam();
  }
});

btnSelect.onclick = function () {
  optionDiv.classList.toggle("h-full");
};

option.forEach((ele) => {
  ele.addEventListener("click", function () {
    text = ele.textContent;
    optionDiv.classList.remove("h-full");
  });
});

btnExam.addEventListener("click", showExam);

function showExam() {
  if (text == "الصف الرابع") {
    if (userFour[number.value]) {
      arabic.innerHTML = userFour[number.value].subject.Arabic;
      studies.innerHTML = userFour[number.value].subject.Studies;
      math.innerHTML = userFour[number.value].subject.Math;
      english.innerHTML = userFour[number.value].subject.English;
      science.innerHTML = userFour[number.value].subject.Science;
      religion.innerHTML = userFour[number.value].subject.Religion;
      userName.innerHTML = userFour[number.value].name;
    } else {
      alert("رقم الجلوس غير صحيح");
    }
  } else if (text == "الصف الخامس") {
  } else if (text == "الصف السادس") {
  } else {
    alert("اختر الصف");
  }
}
