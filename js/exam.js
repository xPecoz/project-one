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
  426: {
    name: "محمد نادر محي محمد نافع",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  427: {
    name: "محمد ولاء محمد زكي عبدالعاطي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  428: {
    name: "محمود مكرم ابو خليل محمد ",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  429: {
    name: "منصور محمد ابراهيم محمد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  430: {
    name: "هادي اسعد سعد ابراهيم فوده",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  431: {
    name: "يوسف حسين ابوالسعود صابر",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  432: {
    name: "يوسف عبدالقادر عزت السيد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  433: {
    name: "يوسف محمد ابوالسادات منصور",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  434: {
    name: "يوسف محمد عبدالعليم يوسف",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  435: {
    name: "يوسف محمود عبد الحميد مصطفي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  436: {
    name: "اسماء علي عمر محمد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  437: {
    name: "اسينات وائل عزيز المحمدي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  438: {
    name: "الاء حسن جابر عرفات الشربيني",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  439: {
    name: "براء العربي جمعه محمد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  440: {
    name: "بسمله علاء عبدالله احمد على",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  441: {
    name: "بسمله ممتاز الشحات محمد احمد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  442: {
    name: "جنا نبيل شوقي الورداني الحداد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  443: {
    name: "جنه رجب السعيد احمد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  444: {
    name: "جنى عمرو عابدين عبدالستار احمد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  445: {
    name: "جني نادر نبيل حلمي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  446: {
    name: "جومانه الشربيني محمد خطاب",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  447: {
    name: "حبيبه الزكي محمد الغريب محمد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  448: {
    name: "حبيبه محمود احمد صبحي جمعه واصل",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  449: {
    name: "حنين ابراهيم السيد سمبو",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  450: {
    name: "حنين زينهم احمد بدير ",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  451: {
    name: "حنين محمد بهجت عبدالوهاب صيام",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  451: {
    name: "حنين محمد بهجت عبدالوهاب صيام",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  452: {
    name: "رودينا السعيد رسمي رمضان وهدان",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  453: {
    name: "رؤى عادل امبابي امبابي الغطاس",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  454: {
    name: "ريتاج سعد الشربيني ابراهيم الشربيني",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  455: {
    name: "ريتاج محمد الرفاعي السيد الرفاعي ",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  456: {
    name: "ريماس طارق شورى موسى",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  457: {
    name: "ساره سامح سعد حسين محمد الصرفي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  458: {
    name: "ساره محمود عيد عبد العزيز",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  459: {
    name: "ساميه محمد السيد يوسف عبدالعزيز",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  460: {
    name: "سجي ضياء الدين ابراهيم المتولي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  461: {
    name: "سما ايهاب هاشم حسن بيومى",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  462: {
    name: "سما محمد محمد الظريف على حسين",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  463: {
    name: "شمس محمد عبد القادر مصطفي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  464: {
    name: "شهد محمد المتولي المتولي زياده",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  465: {
    name: "عائشه عمرو عبداللطيف السيد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  466: {
    name: "لوجي وائل الزكي منصور",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
    },
  },
  467: {
    name: "ليان ابراهيم عطاالله عبدالخالق",
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

if (localStorage.getItem("four")) {
  number.value = localStorage.getItem("four");
  text = "الصف الرابع";
  arabic.innerHTML = userFour[localStorage.getItem("four")].subject.Arabic;
  studies.innerHTML = userFour[localStorage.getItem("four")].subject.Studies;
  math.innerHTML = userFour[localStorage.getItem("four")].subject.Math;
  english.innerHTML = userFour[localStorage.getItem("four")].subject.English;
  science.innerHTML = userFour[localStorage.getItem("four")].subject.Science;
  religion.innerHTML = userFour[localStorage.getItem("four")].subject.Religion;
  userName.innerHTML = userFour[localStorage.getItem("four")].name;
}
number.addEventListener("keydown", (event) => {
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
      localStorage.setItem("four", number.value);
      arabic.innerHTML = userFour[number.value].subject.Arabic;
      studies.innerHTML = userFour[number.value].subject.Studies;
      math.innerHTML = userFour[number.value].subject.Math;
      english.innerHTML = userFour[number.value].subject.English;
      science.innerHTML = userFour[number.value].subject.Science;
      religion.innerHTML = userFour[number.value].subject.Religion;
      userName.innerHTML = userFour[number.value].name;
    } else if (number.value == "") {
      alert("أدخل رقم جلوس");
    } else {
      alert("رقم الجلوس غير صحيح");
    }
  } else if (text == "الصف الخامس") {
  } else if (text == "الصف السادس") {
  } else {
    alert("اختر الصف");
  }
}
