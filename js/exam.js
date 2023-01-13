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

// Exam

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

// Students Data
let userFour = {
  40000: {
    name: "ابراهيم الزكي البسيوني المتولي",
    subject: {
      Arabic: 10,
      Math: 91,
      Science: 97,
      Studies: 15,
      English: 51,
      Religion: 37,
      Computer: 77,
      Skills: 15,
    },
  },
  40043: {
    name: "ابراهيم حمدي علي محمد ابراهيم",
    subject: {
      Arabic: 30,
      Math: 62,
      Science: 64,
      Studies: 59,
      English: 95,
      Religion: 55,
      Computer: 49,
      Skills: 25,
    },
  },
  40086: {
    name: "احمد تامر احمد محمد العسكري",
    subject: {
      Arabic: 60,
      Math: 73,
      Science: 31,
      Studies: 91,
      English: 73,
      Religion: 99,
      Computer: 97,
      Skills: 35,
    },
  },
  40129: {
    name: "احمد سعد ابو الفتوح عبد الفتاح",
    subject: {
      Arabic: 40,
      Math: 54,
      Science: 28,
      Studies: 37,
      English: 18,
      Religion: 77,
      Computer: 13,
      Skills: 45,
    },
  },
  40172: {
    name: "اسلام عتره عبدالعزيز محمد عامر",
    subject: {
      Arabic: 50,
      Math: 67,
      Science: 61,
      Studies: 48,
      English: 25,
      Religion: 46,
      Computer: 23,
      Skills: 55,
    },
  },
  40215: {
    name: "اسلام قدري عبد القادر العشري",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  40258: {
    name: "أحمد عمرو فاروق سعد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  40301: {
    name: "المصطفي وائل شاكر شاكر",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  40344: {
    name: "باسم ياسر سعد المغاوري خضر",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  40387: {
    name: "تامر نبيه شعبان نبيه يوسف",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  40430: {
    name: "سامي احمد سامي عبدالرازق البديوي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  40473: {
    name: "شعبان محمد شعبان ابراهيم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  40516: {
    name: "عبد الرحمن محمد ابراهيم السعيد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  40559: {
    name: "عزت عادل عزت المغاوري الغطاس",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  40602: {
    name: "عمر ابراهيم عمر محمد مصطفي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  40645: {
    name: "عمر جمال السيد محمد البسيوني",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  40688: {
    name: "عوض حسن سعد الورداني",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  40731: {
    name: "فهمي هيثم فهيم الدريني",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  40774: {
    name: "كريم حماده الزكي زغلول",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  40817: {
    name: "مالك محمد ابراهيم السعيد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  40851: {
    name: "مالك محمود المتولي المتولي علي زياده",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  40885: {
    name: "محمد حسين منير عوض",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  40919: {
    name: "محمد خالد السيد الحماقي الذكي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  40953: {
    name: "محمد عادل حسين احمد السعيد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  40987: {
    name: "محمد محمد طاهر رزق محمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41021: {
    name: "محمد نادر محي محمد نافع",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41055: {
    name: "محمد ولاء محمد زكي عبدالعاطي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41089: {
    name: "محمود مكرم ابو خليل محمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41123: {
    name: "منصور محمد ابراهيم محمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41157: {
    name: "هادي اسعد سعد ابراهيم فوده",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41191: {
    name: "يوسف حسين ابوالسعود صابر",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41225: {
    name: "يوسف عبدالقادر عزت السيد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41259: {
    name: "يوسف محمد ابوالسادات منصور",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41293: {
    name: "يوسف محمد عبدالعليم يوسف",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41327: {
    name: "يوسف محمود عبد الحميد مصطفي شعبان",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41361: {
    name: "اسماء علي عمر محمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41395: {
    name: "اسينات وائل عزيز المحمدي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41429: {
    name: "الاء حسن جابر عرفات الشربيني",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41463: {
    name: "براء العربي جمعه محمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41497: {
    name: "بسمله علاء عبدالله احمد على",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41520: {
    name: "بسمله ممتاز الشحات محمد احمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41543: {
    name: "جنا نبيل شوقي الورداني الحداد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41566: {
    name: "جنه رجب السعيد احمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41589: {
    name: "جنى عمرو عابدين عبدالستار احمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41612: {
    name: "جني نادر نبيل حلمي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41635: {
    name: "جومانه الشربيني محمد خطاب",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41658: {
    name: "حبيبه الزكي محمد الغريب محمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41681: {
    name: "حبيبه محمود احمد صبحي جمعه واصل",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41704: {
    name: "حنين ابراهيم السيد سمبو",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41727: {
    name: "حنين زينهم احمد بدير",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41750: {
    name: "حنين محمد بهجت عبدالوهاب صيام",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41773: {
    name: "رودينا السعيد رسمي رمضان وهدان",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41796: {
    name: "رؤى عادل امبابي امبابي الغطاس",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41819: {
    name: "ريتاج سعد الشربيني ابراهيم الشربيني",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41842: {
    name: "ريتاج محمد الرفاعي السيد الرفاعي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41865: {
    name: "ريماس طارق شورى موسى",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41888: {
    name: "ساره سامح سعد حسين محمد الصرفي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41911: {
    name: "ساره محمود عيد عبد العزيز",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41934: {
    name: "ساميه محمد السيد يوسف عبدالعزيز",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  41957: {
    name: "سجي ضياء الدين ابراهيم المتولي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  42011: {
    name: "سما ايهاب هاشم حسن بيومى",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  42065: {
    name: "سما محمد محمد الظريف على حسين",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  42119: {
    name: "شمس محمد عبد القادر مصطفي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  42173: {
    name: "شهد محمد المتولي المتولي زياده",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  42227: {
    name: "عائشه عمرو عبداللطيف السيد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  42281: {
    name: "لوجي وائل الزكي منصور",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  42335: {
    name: "ليان ابراهيم عطاالله عبدالخالق",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  42389: {
    name: "ليان شريف جمعه ابونصير",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  42443: {
    name: "لين خليل محمد موفق هلال",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  42497: {
    name: "ليندا سمير محمد احمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  42551: {
    name: "مايا حمدي علي محمد ابراهيم دلال",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  42605: {
    name: "مايا عماد الزكي الدمرداش",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  42659: {
    name: "مريم رضا محمد شعبان شعبان",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  42713: {
    name: "مريم صلاح الشحات بدير",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  42767: {
    name: "مريم منصور السعيد حسن الكناني",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  42821: {
    name: "مريم هاشم الزكي الشراكي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  42875: {
    name: "ملك ابراهيم الذكي عبد الكريم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  42929: {
    name: "ملك عاطف محمد طلعت فايد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  42983: {
    name: "ملك مايز زينهم الطمبكشي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  43037: {
    name: "منة الله محمد عبدالعزيز محمد نمره",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  43073: {
    name: "منه احمد فراج امين",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  43109: {
    name: "منه السيد المتولي ابراهيم الشناوي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  43145: {
    name: "منه زين العابدين العيسوى عبدالهادي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  43181: {
    name: "منه محمد شعبان المتولي رجب",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  43217: {
    name: "ميار محمد فرج عبدالرازق محمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  43253: {
    name: "ندى شريف الجميل عبدالخالق",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  43289: {
    name: "ندى عبدالرازق عوض عبدالرازق",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  43325: {
    name: "ندى محمد خفاجي احمد البسيوني",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  43361: {
    name: "هبه عبدالله سعد عبوده عبداللطيف",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  43397: {
    name: "هنا ابراهيم فريد الشربيني احمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  43433: {
    name: "يارا ابراهيم الشربيني ابراهيم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  43469: {
    name: "ياسمين محمد محمد زاكي ابراهيم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
};
let userFive = {
  50000: {
    name: "ابراهيم درويش محمود محمد",
    subject: {
      Arabic: 10,
      Math: 91,
      Science: 97,
      Studies: 15,
      English: 51,
      Religion: 37,
      Computer: 77,
      Skills: 15,
    },
  },
  50056: {
    name: "ابراهيم محمود أبو خليل محمد",
    subject: {
      Arabic: 30,
      Math: 62,
      Science: 64,
      Studies: 59,
      English: 95,
      Religion: 55,
      Computer: 49,
      Skills: 25,
    },
  },
  50112: {
    name: "احمد بهجات عبد الونيس محمد",
    subject: {
      Arabic: 60,
      Math: 73,
      Science: 31,
      Studies: 91,
      English: 73,
      Religion: 99,
      Computer: 97,
      Skills: 35,
    },
  },
  50168: {
    name: "المتولي السعيد المتولي ابراهيم",
    subject: {
      Arabic: 40,
      Math: 54,
      Science: 28,
      Studies: 37,
      English: 18,
      Religion: 77,
      Computer: 13,
      Skills: 45,
    },
  },
  50224: {
    name: "اميرمنصور عبد الهادي محمد",
    subject: {
      Arabic: 50,
      Math: 67,
      Science: 61,
      Studies: 48,
      English: 25,
      Religion: 46,
      Computer: 23,
      Skills: 55,
    },
  },
  50280: {
    name: "اياد احمد عاطف البيومي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  50336: {
    name: "حمدي ابراهيم محمد ابراهيم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  50392: {
    name: "رامي سمير ابراهيم ابراهيم حسن",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  50448: {
    name: "رمضان السيد بدير عبد الخبير",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  50504: {
    name: "زياد مصطفي السيد احمد يسن",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  50560: {
    name: "زين الشام سعيد الاحمر",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  50616: {
    name: "صلاح محمد صلاح محمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  50672: {
    name: "عبد الرحمن محمد محمد خطاب",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  50728: {
    name: "عبد الغفار شريف عبد الغفار منصور",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  50784: {
    name: "عمار حازم ابراهيم  ابراهيم حسن",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  50840: {
    name: "عمر محمد احمد محمد السيد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  50896: {
    name: "كريم عاطف محمد طلعت فايد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  50952: {
    name: "محمد احمد سليمان جمعه",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51008: {
    name: "محمد السيد السيد السعيد احمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51064: {
    name: "محمد ثروت حموده سعد المحمدي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51109: {
    name: "محمد رزق عبد الرازق رزق",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51154: {
    name: "محمد شريف عبد الغفار منصور",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51199: {
    name: "محمد صبحي علي محمد العطار",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51244: {
    name: "محمد عبد الله محمد عبد المنعم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51289: {
    name: "محمد عماد عزمي احمد سيد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51334: {
    name: "محمود حسن نجيب حسن مراد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51379: {
    name: "محي محمد محي محمد نافع",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51424: {
    name: "مكرم رضا محمد عبد الرازق",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51469: {
    name: "نور محمد احمد محمد ابراهيم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51514: {
    name: "هيثم خالد فرج الدريني",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51559: {
    name: "يوسف خالد حموده السيد العرابي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51604: {
    name: "يوسف سالم رجب سالم الديب",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51649: {
    name: "يوسف صلاح ابراهيم العرابي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51694: {
    name: "يوسف علي نجاح صبحي احمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51739: {
    name: "يوسف محمد ابو خليل احمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51784: {
    name: "يوسف محمود احمد عبد التواب",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51829: {
    name: "يوسف ياسر عزمي احمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51874: {
    name: "اسيل احمد عبد العزيز عبد المحسن",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51919: {
    name: "جمانه عبد العزيز محمد عبد السلام",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51964: {
    name: "جنا عبد الله فرج السباعي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  51998: {
    name: "جنا محمد سامي عبد الرازق",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52032: {
    name: "جني وليد صبحي عبد المعطي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52066: {
    name: "جينا محمد رضا محمد السيد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52100: {
    name: "حبيبه ابراهيم احمد عبد العزيز",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52134: {
    name: "حبيبه عبوده عبد الله احمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52168: {
    name: "حنين ابراهيم علي عمر",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52202: {
    name: "دعاء رمضان موسي ابراهيم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52236: {
    name: "رحمه احمد ابراهيم السعيد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52270: {
    name: "رحمه علي السيد الحماقي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52304: {
    name: "رهف وائل الذكي منصور",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52338: {
    name: "رودينه فتحي السعيد السعيد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52372: {
    name: "روضه محب السيد معوض",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52406: {
    name: "رؤي مجدي منصور توفيق",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52440: {
    name: "ريتاج ابراهيم عوض السعيد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52474: {
    name: "ريتاج محمود المتولي المتولي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52508: {
    name: "ريم نجاح شوقي الورداني",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52542: {
    name: "سما عماد رجب محمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52576: {
    name: "علياء محمود عبد السلام محمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52610: {
    name: "فاطمه محمد عبد القادر مصطفي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52644: {
    name: "ليلي اشرف عزت ابراهيم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52667: {
    name: "مريم ابراهيم ابراهيم ادم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52690: {
    name: "مريم احمد محمد عبيده المتولي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52713: {
    name: "ملك فيصل السعيد نجاح",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52736: {
    name: "ملك يوسف عبد العليم يوسف",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52759: {
    name: "منه ابراهيم ابراهيم آدم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52782: {
    name: "منه جوده سعيد الورداني الحداد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52805: {
    name: "مها العراقي رفعت محمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52828: {
    name: "ميار علي علي عبد الغني",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52851: {
    name: "ميار محمود عطيه عبد العزيز",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52874: {
    name: "ميرفت ابو الفتوح محمد ابو الفتوح",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52897: {
    name: "نورا حازم ابراهيم ابراهيم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52920: {
    name: "ولاء محمد السيد يوسف",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  52943: {
    name: "ياسمين عمار عمر عبد المطلب",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
};
let userSix = {
  60000: {
    name: "ابراهيم الشحات محمد ابو الفتوح",
    subject: {
      Arabic: 10,
      Math: 91,
      Science: 97,
      Studies: 15,
      English: 51,
      Religion: 37,
      Computer: 77,
      Skills: 15,
    },
  },
  60043: {
    name: "ابراهيم محمد المتولي المتولي",
    subject: {
      Arabic: 30,
      Math: 62,
      Science: 64,
      Studies: 59,
      English: 95,
      Religion: 55,
      Computer: 49,
      Skills: 25,
    },
  },
  60086: {
    name: "احمد السيد بدير عبد الخبير",
    subject: {
      Arabic: 60,
      Math: 73,
      Science: 31,
      Studies: 91,
      English: 73,
      Religion: 99,
      Computer: 97,
      Skills: 35,
    },
  },
  60129: {
    name: "احمد السيد عبد الرازق ابراهيم",
    subject: {
      Arabic: 40,
      Math: 54,
      Science: 28,
      Studies: 37,
      English: 18,
      Religion: 77,
      Computer: 13,
      Skills: 45,
    },
  },
  60172: {
    name: "احمد حسام عطية المتولي",
    subject: {
      Arabic: 50,
      Math: 67,
      Science: 61,
      Studies: 48,
      English: 25,
      Religion: 46,
      Computer: 23,
      Skills: 55,
    },
  },
  60215: {
    name: "ادهم محمود محمود عطا محمود",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  60258: {
    name: "اسلام فرج عطيه قاسم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  60301: {
    name: "السيد محمد شعبان عوض",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  60344: {
    name: "السيد محمد فرج عبد الرازق",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  60387: {
    name: "ايهاب طارق محمد ابراهيم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  60430: {
    name: "رزق علي علي رزق ابراهيم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  60473: {
    name: "زياد محمد ثروت زكي ابراهيم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  60516: {
    name: "صلاح ياسر شوقي السعيد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  60559: {
    name: "عادل علاء رشاد ابو الحمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  60602: {
    name: "عبد الرحمن شريف شفيق عبد الكريم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  60645: {
    name: "عوني عبد الرازق عوض عبد الرازق",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  60688: {
    name: "فارس ابراهيم احمد محمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  60731: {
    name: "فتحي احمد ابو الفتوح عبد الفتاح",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  60774: {
    name: "محمد اشرف رمضان سالم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  60817: {
    name: "محمد حسن جابر عرفات",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  60851: {
    name: "محمد حماده عبد الهادي علي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  60885: {
    name: "محمد رضا لطفي احمد غطاس",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  60919: {
    name: "محمد صلاح عبد الله يوسف جويلي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  60953: {
    name: "محمد عزت سعد محمد ابو سريه",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  60987: {
    name: "محمد عصام عبد الرازق محمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61021: {
    name: "محمد علي محمد علي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61055: {
    name: "محمود ابراهيم شاهبور محمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61089: {
    name: "مصطفي اسامه النادي عبد الهادي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61123: {
    name: "مكرم رضا عبد العليم يوسف",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61157: {
    name: "نادر محمود احمد محمود",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61191: {
    name: "نور عبد القادر زكريا عبد القادر",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61225: {
    name: "ياسين محمد رمضان عبد الغني",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61259: {
    name: "يوسف ابراهيم ابراهيم ادم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61293: {
    name: "يوسف احمد محمد عبيده",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61327: {
    name: "يوسف محمد عبد الله احمد غطاس",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61361: {
    name: "يوسف محمد ممدوح محمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61395: {
    name: "اماني صلاح عبد العزيز محمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61429: {
    name: "اسراء جابر السيد المغاوري",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61463: {
    name: "اسراء محمد عادل محمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61497: {
    name: "ايمان بدير فتحي السعيد النجار",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61520: {
    name: "بسملة فريد محمد ابو الخير",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61543: {
    name: "بسمله عبد المعطي صبري عبد الرازق",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61566: {
    name: "بسمله محمد محمد زاكي ابراهيم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61589: {
    name: "بسمله مكرم ابو خليل محمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61612: {
    name: "جانا محمد حسام سعد المحمدي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61635: {
    name: "جنه محمود علي رجب زلمه",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61658: {
    name: "جني ابراهيم عوض السعيد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61681: {
    name: "جودي احمد عبيدة المتولي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61704: {
    name: "جودي محمد ابو السادات منصور",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61727: {
    name: "جومانا ماجد السيد ابو خليل",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61750: {
    name: "حبيبه محمود محمد محمود",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61773: {
    name: "حنين ابراهيم فريد الشربيني",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61796: {
    name: "رحمه السيد عبد النبي السيد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61819: {
    name: "ساره محمد نجيب حسن",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61842: {
    name: "عائشة السيد احمد المتولي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61865: {
    name: "علياء محمود فريد الشربيني",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61888: {
    name: "فرح زينهم سعد المنجي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61911: {
    name: "مروه علي عبد الغني عبد الهادي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61934: {
    name: "مريم محمد شعبان ابراهيم احمد شحاته",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61957: {
    name: "مريم نصر احمد ابراهيم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61975: {
    name: "ملك ابراهيم عوض هلال العفيفي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  61993: {
    name: "ملك محسن فهمي سيبويه",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  62011: {
    name: "ملك محمد شعبان المتولي",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  62029: {
    name: "ملك محمد منصور عباس",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  62047: {
    name: "ملك محمد يحيى محمود",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  62065: {
    name: "مني السيد المتولي ابراهيم",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  62083: {
    name: "مى ابو الفتوح محمد ابو الفتوح",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  62101: {
    name: "ندى ياسر عزمي احمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  62119: {
    name: "ندي منصور محمد محمد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  62137: {
    name: "نورا طارق عادل السيد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
    },
  },
  62155: {
    name: "ياسمين سعد مصطفي السيد",
    subject: {
      Arabic: null,
      Math: null,
      Science: null,
      Studies: null,
      English: null,
      Religion: null,
      Computer: null,
      Skills: null,
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

// Open Select
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
      arabic.innerHTML =
        (parseInt(userFour[number.value].subject.Arabic) / 100) * 100;
      studies.innerHTML =
        (parseInt(userFour[number.value].subject.Studies) / 100) * 100;
      math.innerHTML =
        (parseInt(userFour[number.value].subject.Math) / 100) * 100;
      english.innerHTML =
        (parseInt(userFour[number.value].subject.English) / 100) * 100;
      science.innerHTML =
        (parseInt(userFour[number.value].subject.Science) / 100) * 100;
      religion.innerHTML =
        (parseInt(userFour[number.value].subject.Religion) / 100) * 100;
      compter.innerHTML =
        (parseInt(userFour[number.value].subject.Computer) / 100) * 100;
      skills.innerHTML =
        (parseInt(userFour[number.value].subject.Skills) / 100) * 100;
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
      arabic.innerHTML =
        (parseInt(userFive[number.value].subject.Arabic) / 100) * 100;
      studies.innerHTML =
        (parseInt(userFive[number.value].subject.Studies) / 100) * 100;
      math.innerHTML =
        (parseInt(userFive[number.value].subject.Math) / 100) * 100;
      english.innerHTML =
        (parseInt(userFive[number.value].subject.English) / 100) * 100;
      science.innerHTML =
        (parseInt(userFive[number.value].subject.Science) / 100) * 100;
      religion.innerHTML =
        (parseInt(userFive[number.value].subject.Religion) / 100) * 100;
      compter.innerHTML =
        (parseInt(userFive[number.value].subject.Computer) / 100) * 100;
      skills.innerHTML =
        (parseInt(userFive[number.value].subject.Skills) / 100) * 100;
      userName.innerHTML = userFive[number.value].name;
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
    } else if (number.value == "") {
      alert("ادخل الكود");
    } else {
      alert("الكود غير صحيح");
    }
  } else if (text == "الصف السادس") {
    if (userSix[number.value]) {
      arabic.innerHTML =
        (parseInt(userSix[number.value].subject.Arabic) / 100) * 100;
      studies.innerHTML =
        (parseInt(userSix[number.value].subject.Studies) / 100) * 100;
      math.innerHTML =
        (parseInt(userSix[number.value].subject.Math) / 100) * 100;
      english.innerHTML =
        (parseInt(userSix[number.value].subject.English) / 100) * 100;
      science.innerHTML =
        (parseInt(userSix[number.value].subject.Science) / 100) * 100;
      religion.innerHTML =
        (parseInt(userSix[number.value].subject.Religion) / 100) * 100;
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

// Add Data And Remove Data
// let chosClass = document.querySelector(".add-Data .select");
// let chosOptainDiv = document.querySelector(".add-Data .optain");
// let chosOptain = document.querySelectorAll(".add-Data .select .optain p");
// let inputFourFive = document.querySelector(".gradesFourFive");
// let inputSex = document.querySelector(".gradesSex");
// let inputName = document.querySelectorAll(
//   ".add-Data > input, .add-Data button"
// );
// let className = document.querySelector(".class-2");
// let addName = document.querySelector(".add-Data > input:first-of-type");
// let addCode = document.querySelector(`[placeholder=" كود الطالب"]`);
// let addArabic = document.querySelector(".grades .arabic");
// let addStudies = document.querySelector(".grades .social");
// let addMath = document.querySelector(".grades .math");
// let addEnglish = document.querySelector(".grades .english");
// let addScience = document.querySelector(".grades .science");
// let addReligion = document.querySelector(".grades .religion");
// let addComputer = document.querySelector(".grades .computer");
// let addSkills = document.querySelector(".grades .skills");
// let buttonAdd = document.querySelector(".add-Data button");

// chosClass.addEventListener("click", () => {
//   chosOptainDiv.classList.toggle("h-full");
// });

// chosOptain.forEach((ele) => {
//   ele.addEventListener("click", (e) => {
//     className.textContent = e.currentTarget.textContent;
//     inputName.forEach((ele) => {
//       ele.classList.remove("hid");
//     });
//     if (
//       className.textContent == "الصف الرابع" ||
//       className.textContent == "الصف الخامس"
//     ) {
//       inputFourFive.classList.remove("hid");
//       inputSex.classList.add("hid");
//     } else if (className.textContent == "الصف السادس") {
//       inputFourFive.classList.add("hid");
//       inputSex.classList.remove("hid");
//     }
//   });
// });

// buttonAdd.addEventListener("click", () => {
//   if (addName.value && addCode.value) {
//     if (className.textContent == "الصف الرابع") {
//       userFour[addCode.value] = {
//         name: addName.value,
//         subject: {
//           Arabic: addArabic.value,
//           Studies: addStudies.value,
//           Math: addMath.value,
//           English: addEnglish.value,
//           Religion: addReligion.value,
//           Science: addScience.value,
//           Computer: addComputer.value,
//           Skills: addSkills.value,
//         },
//       };
//       localStorage.setItem("userFour", JSON.stringify(userFour));
//       userFour = JSON.parse(localStorage.getItem("userFour"));
//       alert("تم الإضافة");
//     } else if (className.textContent == "الصف الخامس") {
//     } else if (className.textContent == "الصف السادس") {
//     }
//   } else {
//     alert("قم بكتابة الإسم و الكود");
//   }
// });
