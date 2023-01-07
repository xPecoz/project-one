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
let compter = document.querySelector(".computer .deg");
let skills = document.querySelector(".skills .deg");
let science = document.querySelector(".science .deg");
let number = document.querySelector(".exam-form input");
let examBox = document.querySelector(".exam-2");
let computerBox = document.querySelector(".computer");
let skillsBox = document.querySelector(".skills");
let total = document.querySelector(".total .deg");
let classroom = document.querySelector(".class");
let text = "";

let userFour = {
  40000: {
    name: "ابراهيم الزكي البسيوني المتولي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40043: {
    name: "ابراهيم حمدي علي محمد ابراهيم",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40086: {
    name: "احمد تامر احمد محمد العسكري",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40129: {
    name: "احمد سعد ابو الفتوح عبد الفتاح",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40172: {
    name: "اسلام عتره عبدالعزيز محمد عامر",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40215: {
    name: "اسلام عتره عبدالعزيز محمد عامر",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40258: {
    name: "أحمد عمرو فاروق سعد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40301: {
    name: "المصطفي وائل شاكر شاكر",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40344: {
    name: "باسم ياسر سعد المغاوري خضر",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40387: {
    name: "تامر نبيه شعبان نبيه يوسف",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40430: {
    name: "سامي احمد سامي عبدالرازق البديوي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40473: {
    name: "شعبان محمد شعبان ابراهيم",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40516: {
    name: "عبد الرحمن محمد ابراهيم السعيد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40559: {
    name: "عزت عادل عزت المغاوري الغطاس",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40602: {
    name: "عمر ابراهيم عمر محمد مصطفي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40645: {
    name: "عمر جمال السيد محمد البسيوني",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40688: {
    name: "عوض حسن سعد الورداني",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40731: {
    name: "فهمي هيثم فهيم الدريني",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40774: {
    name: "كريم حماده الزكي زغلول",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40817: {
    name: "مالك محمد ابراهيم السعيد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40851: {
    name: "مالك محمود المتولي المتولي علي زياده",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40885: {
    name: "محمد حسين منير عوض",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40919: {
    name: "محمد خالد السيد الحماقي الذكي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40953: {
    name: "محمد عادل حسين احمد السعيد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  40987: {
    name: "محمد محمد طاهر رزق محمد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41021: {
    name: "محمد نادر محي محمد نافع",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41055: {
    name: "محمد ولاء محمد زكي عبدالعاطي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41089: {
    name: "محمود مكرم ابو خليل محمد ",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41123: {
    name: "منصور محمد ابراهيم محمد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41157: {
    name: "هادي اسعد سعد ابراهيم فوده",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41191: {
    name: "يوسف حسين ابوالسعود صابر",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41225: {
    name: "يوسف عبدالقادر عزت السيد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41259: {
    name: "يوسف محمد ابوالسادات منصور",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41293: {
    name: "يوسف محمد عبدالعليم يوسف",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41327: {
    name: "يوسف محمود عبد الحميد مصطفي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41361: {
    name: "اسماء علي عمر محمد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41395: {
    name: "اسينات وائل عزيز المحمدي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41429: {
    name: "الاء حسن جابر عرفات الشربيني",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41463: {
    name: "براء العربي جمعه محمد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41497: {
    name: "بسمله علاء عبدالله احمد على",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41520: {
    name: "بسمله ممتاز الشحات محمد احمد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41543: {
    name: "جنا نبيل شوقي الورداني الحداد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41566: {
    name: "جنه رجب السعيد احمد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41589: {
    name: "جنى عمرو عابدين عبدالستار احمد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41612: {
    name: "جني نادر نبيل حلمي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41635: {
    name: "جومانه الشربيني محمد خطاب",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41658: {
    name: "حبيبه الزكي محمد الغريب محمد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41681: {
    name: "حبيبه محمود احمد صبحي جمعه واصل",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41704: {
    name: "حنين ابراهيم السيد سمبو",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41727: {
    name: "حنين زينهم احمد بدير ",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41750: {
    name: "حنين محمد بهجت عبدالوهاب صيام",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41773: {
    name: "رودينا السعيد رسمي رمضان وهدان",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41796: {
    name: "رؤى عادل امبابي امبابي الغطاس",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41819: {
    name: "ريتاج سعد الشربيني ابراهيم الشربيني",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41842: {
    name: "ريتاج محمد الرفاعي السيد الرفاعي ",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41865: {
    name: "ريماس طارق شورى موسى",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41888: {
    name: "ساره سامح سعد حسين محمد الصرفي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41911: {
    name: "ساره محمود عيد عبد العزيز",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41934: {
    name: "ساميه محمد السيد يوسف عبدالعزيز",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  41957: {
    name: "سجي ضياء الدين ابراهيم المتولي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  42011: {
    name: "سما ايهاب هاشم حسن بيومى",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  42065: {
    name: "سما محمد محمد الظريف على حسين",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  42119: {
    name: "شمس محمد عبد القادر مصطفي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  42173: {
    name: "شهد محمد المتولي المتولي زياده",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  42227: {
    name: "عائشه عمرو عبداللطيف السيد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  42281: {
    name: "لوجي وائل الزكي منصور",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  42335: {
    name: "ليان ابراهيم عطاالله عبدالخالق",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  42389: {
    name: "ليان شريف جمعه ابونصير",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  42443: {
    name: "لين خليل محمد موفق هلال",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  42497: {
    name: "ليندا سمير محمد احمد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  42551: {
    name: "مايا حمدي علي محمد ابراهيم دلال",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  42605: {
    name: "مايا عماد الزكي الدمرداش",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  42659: {
    name: "مريم رضا محمد شعبان شعبان",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  42713: {
    name: "مريم صلاح الشحات بدير",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  42767: {
    name: "مريم منصور السعيد حسن الكناني",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  42821: {
    name: "مريم هاشم الزكي الشراكي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  42875: {
    name: "ملك ابراهيم الذكي عبد الكريم",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  42929: {
    name: "ملك عاطف محمد طلعت فايد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  42983: {
    name: "ملك مايز زينهم الطمبكشي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  43037: {
    name: "منة الله محمد عبدالعزيز محمد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  43073: {
    name: "منه احمد فراج امين",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  43109: {
    name: "منه السيد المتولي ابراهيم الشناوي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  43145: {
    name: "منه زين العابدين العيسوى عبدالهادي",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  43181: {
    name: "منه محمد شعبان المتولي رجب",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  43217: {
    name: "ميار محمد فرج عبدالرازق محمد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  43253: {
    name: "ندى شريف الجميل عبدالخالق",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  43289: {
    name: "ندى عبدالرازق عوض عبدالرازق",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  43325: {
    name: "ندى محمد خفاجي احمد البسيوني",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  43361: {
    name: "هبه عبدالله سعد عبوده عبداللطيف",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  43397: {
    name: "هنا ابراهيم فريد الشربيني احمد",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  43433: {
    name: "يارا ابراهيم الشربيني ابراهيم",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
  43469: {
    name: "ياسمين محمد محمد زاكي ابراهيم",
    subject: {
      Arabic: "90%",
      Studies: "100%",
      Math: "95%",
      English: "99%",
      Religion: "97%",
      Science: "98%",
      Computer: "93%",
      Skills: "100%",
    },
  },
};
let userFive = {};
let userSix = {
  60000: {
    name: "ابراهيم الشحات محمد ابو الفتوح",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60043: {
    name: "ابراهيم محمد المتولي المتولي",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60086: {
    name: "احمد السيد بدير عبد الخبير",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60129: {
    name: "احمد السيد عبد الرازق ابراهيم",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60172: {
    name: "احمد حسام عطية المتولي",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60215: {
    name: "ادهم محمود محمود عطا محمود",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60258: {
    name: "اسلام فرج عطيه قاسم",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60301: {
    name: "السيد محمد شعبان عوض",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60344: {
    name: "السيد محمد فرج عبد الرازق",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60387: {
    name: "ايهاب طارق محمد ابراهيم",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60430: {
    name: "رزق علي علي رزق ابراهيم",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60473: {
    name: "زياد محمد ثروت زكي ابراهيم",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60516: {
    name: "صلاح ياسر شوقي السعيد",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60559: {
    name: "عادل علاء رشاد ابو الحمد",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60602: {
    name: "عبد الرحمن شريف شفيق عبد الكريم",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60645: {
    name: "عوني عبد الرازق عوض عبد الرازق",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60688: {
    name: "فارس ابراهيم احمد محمد",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60731: {
    name: "فتحي احمد ابو الفتوح عبد الفتاح",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60774: {
    name: "محمد اشرف رمضان سالم",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60817: {
    name: "محمد حسن جابر عرفات",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60851: {
    name: "محمد حماده عبد الهادي علي",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60885: {
    name: "محمد رضا لطفي احمد غطاس",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60919: {
    name: "محمد صلاح عبد الله يوسف جويلي",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60953: {
    name: "محمد عزت سعد محمد ابو سريه",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  60987: {
    name: "محمد عصام عبد الرازق محمد",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61021: {
    name: "محمد علي محمد علي",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61055: {
    name: "محمود ابراهيم شاهبور محمد",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61089: {
    name: "مصطفي اسامه النادي عبد الهادي",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61123: {
    name: "مكرم رضا عبد العليم يوسف",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61157: {
    name: "نادر محمود احمد محمود",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61191: {
    name: "نور عبد القادر زكريا عبد القادر",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61225: {
    name: "ياسين محمد رمضان عبد الغني",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61259: {
    name: "يوسف ابراهيم ابراهيم ادم",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61293: {
    name: "يوسف احمد محمد عبيده",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61327: {
    name: "يوسف محمد عبد الله احمد غطاس",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61361: {
    name: "يوسف محمد ممدوح محمد",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61395: {
    name: "اماني صلاح عبد العزيز محمد",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61429: {
    name: "اسراء جابر السيد المغاوري",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61463: {
    name: "اسراء محمد عادل محمد",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61497: {
    name: "اسراء محمد عادل محمد",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61520: {
    name: "بسملة فريد محمد ابو الخير",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61543: {
    name: "بسمله عبد المعطي صبري عبد الرازق",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61566: {
    name: "بسمله محمد محمد زاكي ابراهيم",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61589: {
    name: "بسمله مكرم ابو خليل محمد",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61612: {
    name: "جانا محمد حسام سعد المحمدي",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61635: {
    name: "جنه محمود علي رجب زلمه",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61658: {
    name: "جني ابراهيم عوض السعيد",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61681: {
    name: "جودي احمد عبيدة المتولي",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61704: {
    name: "جودي محمد ابو السادات منصور",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61727: {
    name: "جومانا ماجد السيد ابو خليل",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61750: {
    name: "حبيبه محمود محمد محمود",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61773: {
    name: "حنين ابراهيم فريد الشربيني",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61796: {
    name: "رحمه السيد عبد النبي السيد",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61819: {
    name: "ساره محمد نجيب حسن",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61842: {
    name: "عائشة السيد احمد المتولي",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61865: {
    name: "علياء محمود فريد الشربيني",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61888: {
    name: "فرح زينهم سعد المنجي",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61911: {
    name: "مروه علي عبد الغني عبد الهادي",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61934: {
    name: "مريم محمد شعبان ابراهيم احمد",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61957: {
    name: "مريم نصر احمد ابراهيم",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61975: {
    name: "ملك ابراهيم عوض هلال العفيفي",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  61993: {
    name: "ملك محسن فهمي سيبويه",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  62011: {
    name: "ملك محمد شعبان المتولي",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  62029: {
    name: "ملك محمد منصور عباس",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  62047: {
    name: "ملك محمد يحيى محمود",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  62065: {
    name: "مني السيد المتولي ابراهيم",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  62083: {
    name: "مى ابو الفتوح محمد ابو الفتوح",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  62101: {
    name: "ندى ياسر عزمي احمد",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  62119: {
    name: "ندي منصور محمد محمد",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  62137: {
    name: "نورا طارق عادل السيد",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
  62155: {
    name: "ياسمين سعد مصطفي السيد",
    subject: {
      Arabic: "80%",
      Studies: "90%",
      Math: "80%",
      English: "70%",
      Religion: "80%",
      Science: "60%",
    },
  },
};

// if (localStorage.getItem("four") !== "") {
//   number.value = localStorage.getItem("four");
//   arabic.innerHTML = userFour[localStorage.getItem("four")].subject.Arabic;
//   studies.innerHTML = userFour[localStorage.getItem("four")].subject.Studies;
//   math.innerHTML = userFour[localStorage.getItem("four")].subject.Math;
//   english.innerHTML = userFour[localStorage.getItem("four")].subject.English;
//   science.innerHTML = userFour[localStorage.getItem("four")].subject.Science;
//   religion.innerHTML = userFour[localStorage.getItem("four")].subject.Religion;
//   userName.innerHTML = userFour[localStorage.getItem("four")].name;
// } else if (localStorage.getItem("five") !== "") {
//   number.value = localStorage.getItem("five");
//   text = "الصف الخامس";
//   arabic.innerHTML = userFour[localStorage.getItem("five")].subject.Arabic;
//   studies.innerHTML = userFour[localStorage.getItem("five")].subject.Studies;
//   math.innerHTML = userFour[localStorage.getItem("five")].subject.Math;
//   english.innerHTML = userFour[localStorage.getItem("five")].subject.English;
//   science.innerHTML = userFour[localStorage.getItem("five")].subject.Science;
//   religion.innerHTML = userFour[localStorage.getItem("five")].subject.Religion;
//   userName.innerHTML = userFour[localStorage.getItem("five")].name;
// } else if (localStorage.getItem("six") ) {
//   number.value = localStorage.getItem("six");
//   text = "الصف السادس";
//   arabic.innerHTML = userFour[localStorage.getItem("six")].subject.Arabic;
//   studies.innerHTML = userFour[localStorage.getItem("six")].subject.Studies;
//   math.innerHTML = userFour[localStorage.getItem("six")].subject.Math;
//   english.innerHTML = userFour[localStorage.getItem("six")].subject.English;
//   science.innerHTML = userFour[localStorage.getItem("six")].subject.Science;
//   religion.innerHTML = userFour[localStorage.getItem("six")].subject.Religion;
//   userName.innerHTML = userFour[localStorage.getItem("six")].name;
// }

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
    classroom.textContent = text;
  });
});

btnExam.addEventListener("click", showExam);

function showExam() {
  if (text == "الصف الرابع") {
    if (userFour[number.value]) {
      arabic.innerHTML = parseInt(userFour[number.value].subject.Arabic);
      studies.innerHTML = parseInt(userFour[number.value].subject.Studies);
      math.innerHTML = parseInt(userFour[number.value].subject.Math);
      english.innerHTML = parseInt(userFour[number.value].subject.English);
      science.innerHTML = parseInt(userFour[number.value].subject.Science);
      religion.innerHTML = parseInt(userFour[number.value].subject.Religion);
      compter.innerHTML = parseInt(userFour[number.value].subject.Computer);
      skills.innerHTML = parseInt(userFour[number.value].subject.Skills);
      computerBox.style.display = "flex";
      skillsBox.style.display = "flex";
      total.innerHTML = `${
        parseInt(arabic.innerHTML) +
        parseInt(studies.innerHTML) +
        parseInt(math.innerHTML) +
        parseInt(english.innerHTML) +
        parseInt(science.innerHTML) +
        parseInt(religion.innerHTML) +
        parseInt(skills.innerHTML) +
        parseInt(compter.innerHTML)
      }`;
      7;
      userName.innerHTML = userFour[number.value].name;
    } else if (number.value == "") {
      alert("ادخل الكود");
    } else {
      alert("الكود غير صحيح");
    }
  } else if (text == "الصف الخامس") {
    if (userFive[number.value]) {
      arabic.innerHTML = userFive[number.value].subject.Arabic;
      studies.innerHTML = userFive[number.value].subject.Studies;
      math.innerHTML = userFive[number.value].subject.Math;
      english.innerHTML = userFive[number.value].subject.English;
      science.innerHTML = userFive[number.value].subject.Science;
      religion.innerHTML = userFive[number.value].subject.Religion;
      compter.innerHTML = userFive[number.value].subject.Computer;
      skills.innerHTML = userFive[number.value].subject.Skills;
      userName.innerHTML = userFive[number.value].name;
      computerBox.style.display = "flex";
      skillsBox.style.display = "flex";
    } else if (number.value == "") {
      alert("ادخل الكود");
    } else {
      alert("الكود غير صحيح");
    }
  } else if (text == "الصف السادس") {
    if (userSix[number.value]) {
      arabic.innerHTML = parseInt(userSix[number.value].subject.Arabic);
      studies.innerHTML = parseInt(userSix[number.value].subject.Studies);
      math.innerHTML = parseInt(userSix[number.value].subject.Math);
      english.innerHTML = parseInt(userSix[number.value].subject.English);
      science.innerHTML = parseInt(userSix[number.value].subject.Science);
      religion.innerHTML = parseInt(userSix[number.value].subject.Religion);
      userName.innerHTML = userSix[number.value].name;
      computerBox.style.display = "none";
      skillsBox.style.display = "none";
      total.innerHTML = `${
        parseInt(arabic.innerHTML) +
        parseInt(studies.innerHTML) +
        parseInt(math.innerHTML) +
        parseInt(english.innerHTML) +
        parseInt(science.innerHTML)
      }`;
    } else if (number.value == "") {
      alert("ادخل الكود");
    } else {
      alert("الكود غير صحيح");
    }
  } else {
    alert("اختر الصف");
  }
}
