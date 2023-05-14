//  Scrool To Topebar
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

//  Open And Close Sidebar
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

//  Light Mode
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

//  Random Border Color
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
let tops = document.querySelector(".top .deg");
let time = document.querySelector(".time");
let rate = document.querySelector(".rate .deg");
let text = "";

//  Students Data
let userFour = {
    46396: {
    name: "أحمد عمرو فاروق سعد",
    subject: {
      Arabic: 92,
      Math: 87,
      Science: 96,
      Studies: 90,
      English: 95,
      Religion: 90,
      Computer: 84,
      Skills: 91,
    },
  },
  40077: {
    name: "عمر جمال السيد محمد البسيوني",
    subject: {
      Arabic: 80,
      Math: 57,
      Science: 83,
      Studies: 78,
      English: 55,
      Religion: 69,
      Computer: 81,
      Skills: 89,
    },
  },
  40124: {
    name: "ابراهيم الزكي البسيوني المتولي",
    subject: {
      Arabic: 71,
      Math: 60,
      Science: 74,
      Studies: 67,
      English: 50,
      Religion: 68,
      Computer: 81,
      Skills: 86,
    },
  },
  40155: {
    name: "ملك ابراهيم الذكي عبد الكريم",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  40179: {
    name: "عوض حسن سعد الورداني",
    subject: {
      Arabic: 84,
      Math: 75,
      Science: 87,
      Studies: 85,
      English: 74,
      Religion: 81,
      Computer: 89,
      Skills: 85,
    },
  },
  40185: {
    name: "ليندا سمير محمد احمد",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  40239: {
    name: "عبد الرحمن محمد ابراهيم السعيد",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  40243: {
    name: "ندى شريف الجميل عبدالخالق",
    subject: {
      Arabic: 92,
      Math: 81,
      Science: 92,
      Studies: 94,
      English: 78,
      Religion: 82,
      Computer: 82,
      Skills: 95,
    },
  },
  40503: {
    name: "ريتاج محمد الرفاعي السيد الرفاعي",
    subject: {
      Arabic: 89,
      Math: 56,
      Science: 86,
      Studies: 89,
      English: 54,
      Religion: 71,
      Computer: 80,
      Skills: 94,
    },
  },
  40631: {
    name: "جنا نبيل شوقي الورداني الحداد",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  40634: {
    name: "مايا حمدي علي محمد ابراهيم دلال",
    subject: {
      Arabic: 96,
      Math: 92,
      Science: 94,
      Studies: 97,
      English: 93,
      Religion: 94,
      Computer: 89,
      Skills: 95,
    },
  },
  40938: {
    name: "سجي ضياء الدين ابراهيم المتولي",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  40996: {
    name: "براء العربي جمعه محمد",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  41194: {
    name: "مريم رضا محمد شعبان شعبان",
    subject: {
      Arabic: 77,
      Math: 64,
      Science: 87,
      Studies: 75,
      English: 53,
      Religion: 71,
      Computer: 80,
      Skills: 94,
    },
  },
  41371: {
    name: "منه السيد المتولي ابراهيم الشناوي",
    subject: {
      Arabic: 93,
      Math: 91,
      Science: 97,
      Studies: 98,
      English: 93,
      Religion: 93,
      Computer: 90,
      Skills: 94,
    },
  },
  41405: {
    name: "محمد ولاء محمد زكي عبدالعاطي",
    subject: {
      Arabic: 80,
      Math: 78,
      Science: 87,
      Studies: 88,
      English: 71,
      Religion: 77,
      Computer: 86,
      Skills: 87,
    },
  },
  41472: {
    name: "ابراهيم حمدي علي محمد ابراهيم",
    subject: {
      Arabic: 90,
      Math: 87,
      Science: 93,
      Studies: 94,
      English: 90,
      Religion: 93,
      Computer: 89,
      Skills: 93,
    },
  },
  41506: {
    name: "ريماس طارق شورى موسى",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  41560: {
    name: "احمد سعد ابو الفتوح عبد الفتاح",
    subject: {
      Arabic: 91,
      Math: 70,
      Science: 86,
      Studies: 90,
      English: 75,
      Religion: 84,
      Computer: 79,
      Skills: 88,
    },
  },
  41644: {
    name: "حبيبه محمود احمد صبحي جمعه واصل",
    subject: {
      Arabic: 90,
      Math: 74,
      Science: 89,
      Studies: 92,
      English: 78,
      Religion: 83,
      Computer: 86,
      Skills: 90,
    },
  },
  41737: {
    name: "ملك عاطف محمد طلعت فايد",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  41852: {
    name: "ندى عبدالرازق عوض عبدالرازق",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  41996: {
    name: "ساره محمود عيد عبد العزيز",
    subject: {
      Arabic: 79,
      Math: 73,
      Science: 82,
      Studies: 81,
      English: 64,
      Religion: 67,
      Computer: 77,
      Skills: 91,
    },
  },
  42020: {
    name: "عزت عادل عزت المغاوري الغطاس",
    subject: {
      Arabic: 88,
      Math: 94,
      Science: 97,
      Studies: 92,
      English: 68,
      Religion: 83,
      Computer: 89,
      Skills: 91,
    },
  },
  42021: {
    name: "الاء حسن جابر عرفات الشربيني",
    subject: {
      Arabic: 96,
      Math: 87,
      Science: 95,
      Studies: 93,
      English: 95,
      Religion: 88,
      Computer: 87,
      Skills: 93,
    },
  },
  42030: {
    name: "يوسف عبدالقادر عزت السيد",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  42057: {
    name: "يارا ابراهيم الشربيني ابراهيم",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  42332: {
    name: "مريم منصور السعيد حسن الكناني",
    subject: {
      Arabic: 88,
      Math: 73,
      Science: 88,
      Studies: 82,
      English: 68,
      Religion: 77,
      Computer: 84,
      Skills: 92,
    },
  },
  42381: {
    name: "اسلام عتره عبدالعزيز محمد عامر",
    passed: true,
    subject: {
      Arabic: "له دور ثاني",
      Math: "له دور ثاني",
      Science: "له دور ثاني",
      Studies: "له دور ثاني",
      English: "له دور ثاني",
      Religion: "له دور ثاني",
      Computer: "له دور ثاني",
      Skills: "له دور ثاني",
    },
  },
  42460: {
    name: "اسينات وائل عزيز المحمدي",
    subject: {
      Arabic: 66,
      Math: 58,
      Science: 77,
      Studies: 73,
      English: 64,
      Religion: 64,
      Computer: 84,
      Skills: 90,
    },
  },
  42506: {
    name: "شمس محمد عبد القادر مصطفي",
    subject: {
      Arabic: 81,
      Math: 74,
      Science: 75,
      Studies: 84,
      English: 68,
      Religion: 74,
      Computer: 78,
      Skills: 92,
    },
  },
  42752: {
    name: "لين خليل محمد موفق هلال",
    subject: {
      Arabic: 90,
      Math: 78,
      Science: 81,
      Studies: 86,
      English: 74,
      Religion: 83,
      Computer: 87,
      Skills: 82,
    },
  },
  42761: {
    name: "ليان شريف جمعه ابونصير",
    subject: {
      Arabic: 88,
      Math: 84,
      Science: 94,
      Studies: 90,
      English: 69,
      Religion: 86,
      Computer: 88,
      Skills: 89,
    },
  },
  42912: {
    name: "شهد محمد المتولي المتولي زياده",
    subject: {
      Arabic: 94,
      Math: 79,
      Science: 91,
      Studies: 91,
      English: 95,
      Religion: 92,
      Computer: 85,
      Skills: 94,
    },
  },
  42980: {
    name: "ريتاج سعد الشربيني ابراهيم الشربيني",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  43023: {
    name: "محمد محمد طاهر رزق محمد",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  43253: {
    name: "باسم ياسر سعد المغاوري خضر",
    subject: {
      Arabic: 82,
      Math: 65,
      Science: 85,
      Studies: 84,
      English: 64,
      Religion: 82,
      Computer: 79,
      Skills: 86,
    },
  },
  43360: {
    name: "لوجي وائل الزكي منصور",
    subject: {
      Arabic: 68,
      Math: 53,
      Science: 78,
      Studies: 74,
      English: 60,
      Religion: 59,
      Computer: 75,
      Skills: 85,
    },
  },
  43373: {
    name: "جومانه الشربيني محمد خطاب",
    subject: {
      Arabic: 85,
      Math: 74,
      Science: 92,
      Studies: 91,
      English: 62,
      Religion: 88,
      Computer: 80,
      Skills: 93,
    },
  },
  43518: {
    name: "مالك محمود المتولي المتولي علي زياده",
    subject: {
      Arabic: 92,
      Math: 91,
      Science: 95,
      Studies: 96,
      English: 82,
      Religion: 94,
      Computer: 89,
      Skills: 94,
    },
  },
  43632: {
    name: "رؤى عادل امبابي امبابي الغطاس",
    subject: {
      Arabic: 78,
      Math: 56,
      Science: 82,
      Studies: 82,
      English: 56,
      Religion: 69,
      Computer: 76,
      Skills: 83,
    },
  },
  43648: {
    name: "عائشه عمرو عبداللطيف السيد",
    subject: {
      Arabic: 87,
      Math: 72,
      Science: 88,
      Studies: 82,
      English: 67,
      Religion: 72,
      Computer: 84,
      Skills: 90,
    },
  },
  43720: {
    name: "جنى عمرو عابدين عبدالستار احمد",
    subject: {
      Arabic: 91,
      Math: 96,
      Science: 98,
      Studies: 97,
      English: 100,
      Religion: 92,
      Computer: 88,
      Skills: 91,
    },
  },
  43749: {
    name: "ندى محمد خفاجي احمد البسيوني",
    subject: {
      Arabic: 85,
      Math: 70,
      Science: 78,
      Studies: 77,
      English: 54,
      Religion: 76,
      Computer: 83,
      Skills: 86,
    },
  },
  43750: {
    name: "منه زين العابدين العيسوى عبدالهادي",
    subject: {
      Arabic: 89,
      Math: 79,
      Science: 92,
      Studies: 90,
      English: 80,
      Religion: 72,
      Computer: 92,
      Skills: 90,
    },
  },
  43820: {
    name: "محمد عادل حسين احمد السعيد",
    subject: {
      Arabic: 92,
      Math: 92,
      Science: 94,
      Studies: 92,
      English: 80,
      Religion: 82,
      Computer: 91,
      Skills: 95,
    },
  },
  43929: {
    name: "يوسف محمد عبدالعليم يوسف",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  44001: {
    name: "سما ايهاب هاشم حسن بيومى",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  44075: {
    name: "محمد حسين منير عوض",
    subject: {
      Arabic: 92,
      Math: 87,
      Science: 97,
      Studies: 97,
      English: 84,
      Religion: 88,
      Computer: 84,
      Skills: 91,
    },
  },
  44272: {
    name: "حبيبه الزكي محمد الغريب محمد",
    subject: {
      Arabic: 80,
      Math: 61,
      Science: 82,
      Studies: 77,
      English: 76,
      Religion: 74,
      Computer: 87,
      Skills: 90,
    },
  },
  44353: {
    name: "اسلام قدري عبد القادر العشري",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  44698: {
    name: "عمر ابراهيم عمر محمد مصطفي",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  44846: {
    name: "رودينا السعيد رسمي رمضان وهدان",
    subject: {
      Arabic: 87,
      Math: 70,
      Science: 89,
      Studies: 85,
      English: 68,
      Religion: 70,
      Computer: 79,
      Skills: 92,
    },
  },
  45089: {
    name: "هبه عبدالله سعد عبوده عبداللطيف",
    subject: {
      Arabic: 87,
      Math: 73,
      Science: 88,
      Studies: 91,
      English: 69,
      Religion: 76,
      Computer: 81,
      Skills: 94,
    },
  },
  45168: {
    name: "ملك مايز زينهم الطمبكشي",
    subject: {
      Arabic: 88,
      Math: 69,
      Science: 86,
      Studies: 83,
      English: 57,
      Religion: 77,
      Computer: 75,
      Skills: 88,
    },
  },
  45421: {
    name: "بسمله علاء عبدالله احمد على",
    subject: {
      Arabic: 94,
      Math: 77,
      Science: 91,
      Studies: 95,
      English: 92,
      Religion: 87,
      Computer: 85,
      Skills: 89,
    },
  },
  45439: {
    name: "مالك محمد ابراهيم السعيد",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  45514: {
    name: "احمد تامر احمد محمد العسكري",
    subject: {
      Arabic: 86,
      Math: 87,
      Science: 87,
      Studies: 91,
      English: 82,
      Religion: 78,
      Computer: 87,
      Skills: 89,
    },
  },
  45639: {
    name: "مريم صلاح الشحات بدير",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  45640: {
    name: "جنه رجب السعيد احمد",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  45740: {
    name: "هنا ابراهيم فريد الشربيني احمد",
    subject: {
      Arabic: 80,
      Math: 71,
      Science: 77,
      Studies: 81,
      English: 54,
      Religion: 75,
      Computer: 81,
      Skills: 90,
    },
  },
  45779: {
    name: "ميار محمد فرج عبدالرازق محمد",
    subject: {
      Arabic: 92,
      Math: 80,
      Science: 90,
      Studies: 93,
      English: 82,
      Religion: 87,
      Computer: 87,
      Skills: 92,
    },
  },
  45805: {
    name: "اسماء علي عمر محمد",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  45815: {
    name: "يوسف حسين ابوالسعود صابر",
    subject: {
      Arabic: 89,
      Math: 82,
      Science: 87,
      Studies: 83,
      English: 69,
      Religion: 75,
      Computer: 85,
      Skills: 92,
    },
  },
  45876: {
    name: "تامر نبيه شعبان نبيه يوسف",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  45905: {
    name: "ساره سامح سعد حسين محمد الصرفي",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  46016: {
    name: "كريم حماده الزكي زغلول",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  46018: {
    name: "منة الله محمد عبدالعزيز محمد نمره",
    subject: {
      Arabic: 98,
      Math: 95,
      Science: 98,
      Studies: 97,
      English: 93,
      Religion: 92,
      Computer: 92,
      Skills: 96,
    },
  },
  46397: {
    name: "ساميه محمد السيد يوسف عبدالعزيز",
    subject: {
      Arabic: 83,
      Math: 63,
      Science: 80,
      Studies: 77,
      English: 64,
      Religion: 74,
      Computer: 76,
      Skills: 86,
    },
  },
  46432: {
    name: "حنين زينهم احمد بدير",
    subject: {
      Arabic: 78,
      Math: 70,
      Science: 78,
      Studies: 76,
      English: 53,
      Religion: 62,
      Computer: 78,
      Skills: 86,
    },
  },
  46469: {
    name: "منصور محمد ابراهيم محمد",
    subject: {
      Arabic: 73,
      Math: 66,
      Science: 82,
      Studies: 74,
      English: 60,
      Religion: 73,
      Computer: 80,
      Skills: 89,
    },
  },
  46490: {
    name: "ياسمين محمد محمد زاكي ابراهيم",
    subject: {
      Arabic: 84,
      Math: 73,
      Science: 86,
      Studies: 91,
      English: 71,
      Religion: 74,
      Computer: 86,
      Skills: 90,
    },
  },
  46546: {
    name: "يوسف محمد ابوالسادات منصور",
    subject: {
      Arabic: 78,
      Math: 68,
      Science: 85,
      Studies: 70,
      English: 57,
      Religion: 78,
      Computer: 75,
      Skills: 88,
    },
  },
  46561: {
    name: "شعبان محمد شعبان ابراهيم",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  46811: {
    name: "بسمله ممتاز الشحات محمد احمد",
    subject: {
      Arabic: 76,
      Math: 62,
      Science: 87,
      Studies: 76,
      English: 54,
      Religion: 72,
      Computer: 79,
      Skills: 90,
    },
  },
  46815: {
    name: "هادي اسعد سعد ابراهيم فوده",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  46856: {
    name: "مريم هاشم الزكي الشراكي",
    subject: {
      Arabic: 87,
      Math: 68,
      Science: 92,
      Studies: 96,
      English: 61,
      Religion: 76,
      Computer: 80,
      Skills: 92,
    },
  },
  46922: {
    name: "فهمي هيثم فهيم الدريني",
    subject: {
      Arabic: 78,
      Math: 73,
      Science: 82,
      Studies: 80,
      English: 61,
      Religion: 73,
      Computer: 89,
      Skills: 85,
    },
  },
  46986: {
    name: "محمود مكرم ابو خليل محمد",
    subject: {
      Arabic: 63,
      Math: 56,
      Science: 74,
      Studies: 64,
      English: 50,
      Religion: 63,
      Computer: 78,
      Skills: 81,
    },
  },
  47032: {
    name: "ليان ابراهيم عطاالله عبدالخالق",
    subject: {
      Arabic: 86,
      Math: 68,
      Science: 87,
      Studies: 85,
      English: 63,
      Religion: 85,
      Computer: 87,
      Skills: 92,
    },
  },
  47166: {
    name: "جني نادر نبيل حلمي",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  47193: {
    name: "محمد خالد السيد الحماقي الذكي",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  47368: {
    name: "سما محمد محمد الظريف على حسين",
    subject: {
      Arabic: 68,
      Math: 54,
      Science: 74,
      Studies: 74,
      English: 55,
      Religion: 61,
      Computer: 78,
      Skills: 83,
    },
  },
  47618: {
    name: "المصطفي وائل شاكر شاكر",
    passed: true,
    subject: {
      Arabic: "له دور ثاني",
      Math: "له دور ثاني",
      Science: "له دور ثاني",
      Studies: "له دور ثاني",
      English: "له دور ثاني",
      Religion: "له دور ثاني",
      Computer: "له دور ثاني",
      Skills: "له دور ثاني",
    },
  },
  47712: {
    name: "منه احمد فراج امين",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  47724: {
    name: "منه محمد شعبان المتولي رجب",
    subject: {
      Arabic: 80,
      Math: 66,
      Science: 83,
      Studies: 84,
      English: 61,
      Religion: 76,
      Computer: 83,
      Skills: 89,
    },
  },
  47757: {
    name: "حنين ابراهيم السيد سمبو",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  47790: {
    name: "سامي احمد سامي عبدالرازق البديوي",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  47813: {
    name: "يوسف محمود عبد الحميد مصطفي شعبان",
    subject: {
      Arabic: 77,
      Math: 60,
      Science: 75,
      Studies: 79,
      English: 64,
      Religion: 72,
      Computer: 81,
      Skills: 91,
    },
  },
  47849: {
    name: "محمد نادر محي محمد نافع",
    subject: {
      Arabic: 91,
      Math: 84,
      Science: 96,
      Studies: 91,
      English: 85,
      Religion: 88,
      Computer: 86,
      Skills: 92,
    },
  },
  47862: {
    name: "حنين محمد بهجت عبدالوهاب صيام",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  47922: {
    name: "مايا عماد الزكي الدمرداش",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
};
let userFive = {
  50051: {
    name: "عبد الرحمن محمد محمد خطاب",
    subject: {
      Arabic: 73,
      Math: 53,
      Science: 91,
      Studies: 84,
      English: 65,
      Religion: 80,
      Computer: 95,
      Skills: 91,
    },
  },
  50124: {
    name: "ابراهيم درويش محمود محمد",
    subject: {
      Arabic: 93,
      Math: 80,
      Science: 97,
      Studies: 87,
      English: 92,
      Religion: 92,
      Computer: 96,
      Skills: 99,
    },
  },
  50329: {
    name: "عبد الغفار شريف عبد الغفار منصور",
    subject: {
      Arabic: 94,
      Math: 91,
      Science: 98,
      Studies: 96,
      English: 96,
      Religion: 95,
      Computer: 95,
      Skills: 98,
    },
  },
  50343: {
    name: "منه ابراهيم ابراهيم آدم",
    subject: {
      Arabic: 97,
      Math: 94,
      Science: 99,
      Studies: 97,
      English: 95,
      Religion: 97,
      Computer: 92,
      Skills: 98,
    },
  },
  50480: {
    name: "زين الشام سعيد الاحمر",
    subject: {
      Arabic: 93,
      Math: 80,
      Science: 93,
      Studies: 94,
      English: 93,
      Religion: 98,
      Computer: 99,
      Skills: 97,
    },
  },
  50490: {
    name: "زياد مصطفي السيد احمد يسن",
    subject: {
      Arabic: 98,
      Math: 98,
      Science: 100,
      Studies: 100,
      English: 100,
      Religion: 100,
      Computer: 100,
      Skills: 99,
    },
  },
  50700: {
    name: "محمد شريف عبد الغفار منصور",
    subject: {
      Arabic: 90,
      Math: 77,
      Science: 97,
      Studies: 90,
      English: 83,
      Religion: 84,
      Computer: 81,
      Skills: 96,
    },
  },
  50797: {
    name: "ريم نجاح شوقي الورداني",
    subject: {
      Arabic: 99,
      Math: 100,
      Science: 100,
      Studies: 100,
      English: 100,
      Religion: 100,
      Computer: 100,
      Skills: 99,
    },
  },
  50870: {
    name: "مكرم رضا محمد عبد الرازق",
    subject: {
      Arabic: 82,
      Math: 68,
      Science: 87,
      Studies: 84,
      English: 87,
      Religion: 77,
      Computer: 85,
      Skills: 92,
    },
  },
  50881: {
    name: "يوسف ياسر عزمي احمد",
    subject: {
      Arabic: 79,
      Math: 72,
      Science: 93,
      Studies: 86,
      English: 70,
      Religion: 74,
      Computer: 84,
      Skills: 95,
    },
  },
  50926: {
    name: "روضه محب السيد معوض",
    subject: {
      Arabic: 86,
      Math: 92,
      Science: 97,
      Studies: 94,
      English: 94,
      Religion: 92,
      Computer: 98,
      Skills: 99,
    },
  },
  51180: {
    name: "ملك يوسف عبد العليم يوسف",
    subject: {
      Arabic: 91,
      Math: 79,
      Science: 95,
      Studies: 89,
      English: 89,
      Religion: 90,
      Computer: 88,
      Skills: 96,
    },
  },
  51457: {
    name: "جينا محمد رضا محمد السيد",
    subject: {
      Arabic: 72,
      Math: 64,
      Science: 93,
      Studies: 79,
      English: 79,
      Religion: 72,
      Computer: 91,
      Skills: 85,
    },
  },
  51484: {
    name: "محمد رزق عبد الرازق رزق",
    subject: {
      Arabic: 96,
      Math: 92,
      Science: 98,
      Studies: 94,
      English: 90,
      Religion: 95,
      Computer: 92,
      Skills: 94,
    },
  },
  51520: {
    name: "فاطمه محمد عبد القادر مصطفي",
    subject: {
      Arabic: 90,
      Math: 83,
      Science: 94,
      Studies: 91,
      English: 89,
      Religion: 90,
      Computer: 91,
      Skills: 98,
    },
  },
  51538: {
    name: "جمانه عبد العزيز محمد عبد السلام",
    subject: {
      Arabic: 73,
      Math: 64,
      Science: 86,
      Studies: 82,
      English: 80,
      Religion: 81,
      Computer: 91,
      Skills: 90,
    },
  },
  51594: {
    name: "ميار محمود عطيه عبد العزيز",
    subject: {
      Arabic: 96,
      Math: 94,
      Science: 100,
      Studies: 93,
      English: 100,
      Religion: 95,
      Computer: 89,
      Skills: 97,
    },
  },
  51644: {
    name: "محمود حسن نجيب حسن مراد",
    subject: {
      Arabic: 96,
      Math: 91,
      Science: 97,
      Studies: 92,
      English: 96,
      Religion: 95,
      Computer: 93,
      Skills: 96,
    },
  },
  51840: {
    name: "حبيبه عبوده عبد الله احمد",
    subject: {
      Arabic: 83,
      Math: 83,
      Science: 99,
      Studies: 93,
      English: 83,
      Religion: 85,
      Computer: 96,
      Skills: 97,
    },
  },
  51866: {
    name: "ليلي اشرف عزت ابراهيم",
    subject: {
      Arabic: 98,
      Math: 99,
      Science: 100,
      Studies: 99,
      English: 99,
      Religion: 99,
      Computer: 97,
      Skills: 100,
    },
  },
  51876: {
    name: "يوسف محمد ابو خليل احمد",
    subject: {
      Arabic: 94,
      Math: 77,
      Science: 97,
      Studies: 94,
      English: 86,
      Religion: 81,
      Computer: 84,
      Skills: 91,
    },
  },
  52025: {
    name: "ميرفت ابو الفتوح محمد ابو الفتوح",
    subject: {
      Arabic: 85,
      Math: 63,
      Science: 92,
      Studies: 75,
      English: 58,
      Religion: 79,
      Computer: 86,
      Skills: 96,
    },
  },
  52029: {
    name: "محمد احمد سليمان جمعه",
    passed: true,
    subject: {
      Arabic: "له دور ثاني",
      Math: 52,
      Science: 71,
      Studies: 53,
      English: "له دور ثاني",
      Religion: 55,
      Computer: 77,
      Skills: 78,
    },
  },
  52040: {
    name: "محمد عماد عزمي احمد سيد",
    subject: {
      Arabic: 52,
      Math: 54,
      Science: 77,
      Studies: 66,
      English: 61,
      Religion: 67,
      Computer: 76,
      Skills: 85,
    },
  },
  52103: {
    name: "رمضان السيد بدير عبد الخبير",
    subject: {
      Arabic: 86,
      Math: 73,
      Science: 100,
      Studies: 90,
      English: 94,
      Religion: 93,
      Computer: 96,
      Skills: 98,
    },
  },
  52173: {
    name: "يوسف محمود احمد عبد التواب",
    subject: {
      Arabic: 83,
      Math: 74,
      Science: 91,
      Studies: 88,
      English: 77,
      Religion: 86,
      Computer: 78,
      Skills: 94,
    },
  },
  52193: {
    name: "رامي سمير ابراهيم ابراهيم حسن",
    subject: {
      Arabic: 67,
      Math: 54,
      Science: 80,
      Studies: 71,
      English: 60,
      Religion: 75,
      Computer: 82,
      Skills: 93,
    },
  },
  52216: {
    name: "نور محمد احمد محمد ابراهيم",
    subject: {
      Arabic: 97,
      Math: 93,
      Science: 98,
      Studies: 93,
      English: 89,
      Religion: 81,
      Computer: 97,
      Skills: 99,
    },
  },
  52448: {
    name: "جني وليد صبحي عبد المعطي",
    subject: {
      Arabic: 88,
      Math: 71,
      Science: 98,
      Studies: 91,
      English: 79,
      Religion: 81,
      Computer: 97,
      Skills: 89,
    },
  },
  52672: {
    name: "رهف وائل الذكي منصور",
    subject: {
      Arabic: 74,
      Math: 61,
      Science: 85,
      Studies: 85,
      English: 78,
      Religion: 76,
      Computer: 91,
      Skills: 90,
    },
  },
  52719: {
    name: "ابراهيم محمود أبو خليل محمد",
    subject: {
      Arabic: 80,
      Math: 68,
      Science: 94,
      Studies: 84,
      English: 77,
      Religion: 87,
      Computer: 97,
      Skills: 99,
    },
  },
  52735: {
    name: "ميار علي علي عبد الغني",
    subject: {
      Arabic: 93,
      Math: 86,
      Science: 98,
      Studies: 93,
      English: 94,
      Religion: 87,
      Computer: 82,
      Skills: 94,
    },
  },
  52756: {
    name: "صلاح محمد صلاح محمد",
    subject: {
      Arabic: 55,
      Math: 53,
      Science: 77,
      Studies: 73,
      English: 53,
      Religion: 66,
      Computer: 84,
      Skills: 89,
    },
  },
  53035: {
    name: "نورا حازم ابراهيم ابراهيم",
    subject: {
      Arabic: 92,
      Math: 77,
      Science: 96,
      Studies: 84,
      English: 86,
      Religion: 90,
      Computer: 94,
      Skills: 95,
    },
  },
  53215: {
    name: "يوسف صلاح ابراهيم العرابي",
    subject: {
      Arabic: 90,
      Math: 77,
      Science: 99,
      Studies: 93,
      English: 71,
      Religion: 92,
      Computer: 87,
      Skills: 93,
    },
  },
  53289: {
    name: "المتولي السعيد المتولي ابراهيم",
    subject: {
      Arabic: 81,
      Math: 82,
      Science: 94,
      Studies: 97,
      English: 72,
      Religion: 90,
      Computer: 96,
      Skills: 97,
    },
  },
  53351: {
    name: "عمر محمد احمد محمد السيد",
    subject: {
      Arabic: 58,
      Math: 52,
      Science: 83,
      Studies: 73,
      English: 72,
      Religion: 77,
      Computer: 89,
      Skills: 90,
    },
  },
  53603: {
    name: "يوسف خالد حموده السيد العرابي",
    subject: {
      Arabic: 57,
      Math: 58,
      Science: 81,
      Studies: 79,
      English: 57,
      Religion: 73,
      Computer: 77,
      Skills: 87,
    },
  },
  53658: {
    name: "يوسف علي نجاح صبحي احمد",
    subject: {
      Arabic: 87,
      Math: 75,
      Science: 97,
      Studies: 90,
      English: 82,
      Religion: 91,
      Computer: 82,
      Skills: 90,
    },
  },
  53804: {
    name: "اسيل احمد عبد العزيز عبد المحسن",
    subject: {
      Arabic: 88,
      Math: 87,
      Science: 100,
      Studies: 96,
      English: 93,
      Religion: 91,
      Computer: 98,
      Skills: 99,
    },
  },
  53813: {
    name: "مريم احمد محمد عبيده المتولي",
    subject: {
      Arabic: 90,
      Math: 91,
      Science: 96,
      Studies: 89,
      English: 87,
      Religion: 88,
      Computer: 87,
      Skills: 94,
    },
  },
  53921: {
    name: "جنا محمد سامي عبد الرازق",
    subject: {
      Arabic: 98,
      Math: 98,
      Science: 100,
      Studies: 96,
      English: 99,
      Religion: 95,
      Computer: 100,
      Skills: 99,
    },
  },
  54011: {
    name: "دعاء رمضان موسي ابراهيم",
    subject: {
      Arabic: 98,
      Math: 92,
      Science: 99,
      Studies: 97,
      English: 100,
      Religion: 98,
      Computer: 100,
      Skills: 99,
    },
  },
  54113: {
    name: "حبيبه ابراهيم احمد عبد العزيز",
    subject: {
      Arabic: 96,
      Math: 93,
      Science: 92,
      Studies: 79,
      English: 96,
      Religion: 95,
      Computer: 96,
      Skills: 97,
    },
  },
  54294: {
    name: "رحمه احمد ابراهيم السعيد",
    subject: {
      Arabic: 94,
      Math: 78,
      Science: 98,
      Studies: 91,
      English: 90,
      Religion: 93,
      Computer: 99,
      Skills: 94,
    },
  },
  54451: {
    name: "ريتاج ابراهيم عوض السعيد",
    subject: {
      Arabic: 85,
      Math: 76,
      Science: 95,
      Studies: 87,
      English: 84,
      Religion: 86,
      Computer: 95,
      Skills: 95,
    },
  },
  54767: {
    name: "هيثم خالد فرج الدريني",
    subject: {
      Arabic: 80,
      Math: 66,
      Science: 87,
      Studies: 80,
      English: 66,
      Religion: 64,
      Computer: 88,
      Skills: 94,
    },
  },
  55327: {
    name: "ملك فيصل السعيد نجاح",
    subject: {
      Arabic: 81,
      Math: 79,
      Science: 89,
      Studies: 83,
      English: 75,
      Religion: 77,
      Computer: 93,
      Skills: 97,
    },
  },
  55413: {
    name: "احمد بهجات عبد الونيس محمد",
    subject: {
      Arabic: 99,
      Math: 99,
      Science: 100,
      Studies: 95,
      English: 100,
      Religion: 100,
      Computer: 99,
      Skills: 99,
    },
  },
  55439: {
    name: "اياد احمد عاطف البيومي",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  55523: {
    name: "مها العراقي رفعت محمد",
    subject: {
      Arabic: 76,
      Math: 74,
      Science: 86,
      Studies: 83,
      English: 75,
      Religion: 73,
      Computer: 86,
      Skills: 93,
    },
  },
  55580: {
    name: "محمد عبد الله محمد عبد المنعم",
    subject: {
      Arabic: 70,
      Math: 70,
      Science: 86,
      Studies: 75,
      English: 64,
      Religion: 74,
      Computer: 80,
      Skills: 93,
    },
  },
  55727: {
    name: "عمار حازم ابراهيم  ابراهيم حسن",
    subject: {
      Arabic: 92,
      Math: 87,
      Science: 99,
      Studies: 94,
      English: 90,
      Religion: 93,
      Computer: 97,
      Skills: 98,
    },
  },
  55966: {
    name: "يوسف سالم رجب سالم الديب",
    subject: {
      Arabic: 79,
      Math: 72,
      Science: 91,
      Studies: 91,
      English: 75,
      Religion: 90,
      Computer: 84,
      Skills: 87,
    },
  },
  56245: {
    name: "رؤي مجدي منصور توفيق",
    subject: {
      Arabic: 99,
      Math: 96,
      Science: 100,
      Studies: 98,
      English: 100,
      Religion: 99,
      Computer: 100,
      Skills: 100,
    },
  },
  56349: {
    name: "كريم عاطف محمد طلعت فايد",
    passed: true,
    subject: {
      Arabic: 60,
      Math: 51,
      Science: 79,
      Studies: 77,
      English: "له دور ثاني",
      Religion: 60,
      Computer: 74,
      Skills: 77,
    },
  },
  56634: {
    name: "ياسمين عمار عمر عبد المطلب",
    subject: {
      Arabic: 98,
      Math: 96,
      Science: 98,
      Studies: 96,
      English: 99,
      Religion: 94,
      Computer: 92,
      Skills: 96,
    },
  },
  56648: {
    name: "علياء محمود عبد السلام محمد",
    subject: {
      Arabic: 82,
      Math: 64,
      Science: 88,
      Studies: 84,
      English: 70,
      Religion: 84,
      Computer: 88,
      Skills: 94,
    },
  },
  56767: {
    name: "ريتاج محمود المتولي المتولي",
    subject: {
      Arabic: 58,
      Math: 51,
      Science: 75,
      Studies: 70,
      English: 55,
      Religion: 58,
      Computer: 77,
      Skills: 82,
    },
  },
  56811: {
    name: "محمد ثروت حموده سعد المحمدي",
    subject: {
      Arabic: 84,
      Math: 81,
      Science: 97,
      Studies: 87,
      English: 83,
      Religion: 92,
      Computer: 87,
      Skills: 92,
    },
  },
  57060: {
    name: "محمد السيد السيد السعيد احمد",
    subject: {
      Arabic: 90,
      Math: 77,
      Science: 93,
      Studies: 87,
      English: 89,
      Religion: 91,
      Computer: 92,
      Skills: 89,
    },
  },
  57096: {
    name: "اميرمنصور عبد الهادي محمد",
    subject: {
      Arabic: 98,
      Math: 89,
      Science: 94,
      Studies: 95,
      English: 100,
      Religion: 98,
      Computer: 99,
      Skills: 98,
    },
  },
  57109: {
    name: "سما عماد رجب محمد",
    subject: {
      Arabic: 93,
      Math: 89,
      Science: 95,
      Studies: 95,
      English: 97,
      Religion: 96,
      Computer: 88,
      Skills: 98,
    },
  },
  57120: {
    name: "ولاء محمد السيد يوسف",
    subject: {
      Arabic: 85,
      Math: 79,
      Science: 91,
      Studies: 78,
      English: 87,
      Religion: 88,
      Computer: 84,
      Skills: 96,
    },
  },
  57194: {
    name: "حمدي ابراهيم محمد ابراهيم",
    subject: {
      Arabic: 76,
      Math: 67,
      Science: 86,
      Studies: 64,
      English: 72,
      Religion: 82,
      Computer: 91,
      Skills: 94,
    },
  },
  57232: {
    name: "جنا عبد الله فرج السباعي",
    passed: true,
    subject: {
      Arabic: 50,
      Math: "له دور ثاني",
      Science: 68,
      Studies: 65,
      English: "له دور ثاني",
      Religion: 61,
      Computer: 83,
      Skills: 72,
    },
  },
  57286: {
    name: "رحمه علي السيد الحماقي",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  57401: {
    name: "مريم ابراهيم ابراهيم ادم",
    subject: {
      Arabic: 94,
      Math: 89,
      Science: 97,
      Studies: 97,
      English: 88,
      Religion: 95,
      Computer: 95,
      Skills: 99,
    },
  },
  57535: {
    name: "محي محمد محي محمد نافع",
    subject: {
      Arabic: 95,
      Math: 80,
      Science: 98,
      Studies: 93,
      English: 92,
      Religion: 98,
      Computer: 90,
      Skills: 96,
    },
  },
  57765: {
    name: "منه جوده سعيد الورداني الحداد",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  57828: {
    name: "حنين ابراهيم علي عمر",
    subject: {
      Arabic: 95,
      Math: 82,
      Science: 99,
      Studies: 95,
      English: 96,
      Religion: 97,
      Computer: 100,
      Skills: 99,
    },
  },
  57890: {
    name: "محمد صبحي علي محمد العطار",
    subject: {
      Arabic: 94,
      Math: 95,
      Science: 91,
      Studies: 88,
      English: 87,
      Religion: 92,
      Computer: 83,
      Skills: 93,
    },
  },
  57931: {
    name: "رودينه فتحي السعيد السعيد",
    subject: {
      Arabic: 83,
      Math: 62,
      Science: 92,
      Studies: 89,
      English: 78,
      Religion: 84,
      Computer: 88,
      Skills: 92,
    },
  },
};
let userSix = {
  60124: {
    name: "ابراهيم الشحات محمد ابو الفتوح",
    passed: true,
    subject: {
      Arabic: "له دور ثاني",
      Math: "له دور ثاني",
      Science: 27,
      Studies: 27,
      English: 22,
      Religion: 31,
      Computer: 0,
      Skills: 0,
    },
  },
  60459: {
    name: "بسمله محمد محمد زاكي ابراهيم",
    subject: {
      Arabic: 67,
      Math: 64,
      Science: 34,
      Studies: 35,
      English: 38,
      Religion: 38,
      Computer: 0,
      Skills: 0,
    },
  },
  60621: {
    name: "ياسمين سعد مصطفي السيد",
    subject: {
      Arabic: 55,
      Math: 44,
      Science: 31,
      Studies: 35,
      English: 22,
      Religion: 36,
      Computer: 0,
      Skills: 0,
    },
  },
  60677: {
    name: "مروه علي عبد الغني عبد الهادي",
    subject: {
      Arabic: 96,
      Math: 80,
      Science: 39,
      Studies: 40,
      English: 40,
      Religion: 40,
      Computer: 0,
      Skills: 0,
    },
  },
  60681: {
    name: "احمد السيد عبد الرازق ابراهيم",
    subject: {
      Arabic: 79,
      Math: 54,
      Science: 36,
      Studies: 35,
      English: 34,
      Religion: 38,
      Computer: 0,
      Skills: 0,
    },
  },
  60944: {
    name: "ملك محمد شعبان المتولي",
    subject: {
      Arabic: 76,
      Math: 68,
      Science: 34,
      Studies: 37,
      English: 28,
      Religion: 34,
      Computer: 0,
      Skills: 0,
    },
  },
  61091: {
    name: "عائشة السيد احمد المتولي",
    subject: {
      Arabic: 93,
      Math: 77,
      Science: 39,
      Studies: 40,
      English: 40,
      Religion: 39,
      Computer: 0,
      Skills: 0,
    },
  },
  61176: {
    name: "اسراء جابر السيد المغاوري",
    subject: {
      Arabic: 81,
      Math: 42,
      Science: 30,
      Studies: 32,
      English: 36,
      Religion: 39,
      Computer: 0,
      Skills: 0,
    },
  },
  61289: {
    name: "بسمله عبد المعطي صبري عبد الرازق",
    subject: {
      Arabic: 87,
      Math: 58,
      Science: 33,
      Studies: 34,
      English: 37,
      Religion: 38,
      Computer: 0,
      Skills: 0,
    },
  },
  61307: {
    name: "فارس ابراهيم احمد محمد",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  61348: {
    name: "السيد محمد شعبان عوض",
    subject: {
      Arabic: 95,
      Math: 79,
      Science: 39,
      Studies: 39,
      English: 38,
      Religion: 40,
      Computer: 0,
      Skills: 0,
    },
  },
  61484: {
    name: "ملك محمد يحيى محمود",
    passed: true,
    subject: {
      Arabic: "له دور ثاني",
      Math: 44,
      Science: 26,
      Studies: 30,
      English: "له دور ثاني",
      Religion: 28,
      Computer: 0,
      Skills: 0,
    },
  },
  61525: {
    name: "عادل علاء رشاد ابو الحمد",
    subject: {
      Arabic: 96,
      Math: 78,
      Science: 39,
      Studies: 39,
      English: 39,
      Religion: 40,
      Computer: 0,
      Skills: 0,
    },
  },
  61616: {
    name: "رزق علي علي رزق ابراهيم",
    subject: {
      Arabic: 87,
      Math: 60,
      Science: 37,
      Studies: 34,
      English: 37,
      Religion: 40,
      Computer: 0,
      Skills: 0,
    },
  },
  61727: {
    name: "زياد محمد ثروت زكي ابراهيم",
    subject: {
      Arabic: 61,
      Math: 51,
      Science: 33,
      Studies: 30,
      English: 28,
      Religion: 34,
      Computer: 0,
      Skills: 0,
    },
  },
  61868: {
    name: "حبيبه محمود محمد محمود",
    subject: {
      Arabic: 77,
      Math: 52,
      Science: 34,
      Studies: 31,
      English: 27,
      Religion: 40,
      Computer: 0,
      Skills: 0,
    },
  },
  61993: {
    name: "ايهاب طارق محمد ابراهيم",
    subject: {
      Arabic: 94,
      Math: 74,
      Science: 36,
      Studies: 37,
      English: 39,
      Religion: 40,
      Computer: 0,
      Skills: 0,
    },
  },
  61996: {
    name: "محمد حماده عبد الهادي علي",
    subject: {
      Arabic: 84,
      Math: 71,
      Science: 36,
      Studies: 34,
      English: 36,
      Religion: 36,
      Computer: 0,
      Skills: 0,
    },
  },
  62081: {
    name: "مريم محمد شعبان ابراهيم احمد شحاته",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  62133: {
    name: "محمد رضا لطفي احمد غطاس",
    subject: {
      Arabic: 95,
      Math: 80,
      Science: 38,
      Studies: 38,
      English: 40,
      Religion: 40,
      Computer: 0,
      Skills: 0,
    },
  },
  62158: {
    name: "مريم نصر احمد ابراهيم",
    subject: {
      Arabic: 96,
      Math: 76,
      Science: 39,
      Studies: 40,
      English: 40,
      Religion: 39,
      Computer: 0,
      Skills: 0,
    },
  },
  62287: {
    name: "عوني عبد الرازق عوض عبد الرازق",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  62340: {
    name: "بسملة فريد محمد ابو الخير",
    subject: {
      Arabic: 77,
      Math: 60,
      Science: 34,
      Studies: 33,
      English: 28,
      Religion: 37,
      Computer: 0,
      Skills: 0,
    },
  },
  62404: {
    name: "صلاح ياسر شوقي السعيد",
    subject: {
      Arabic: 89,
      Math: 68,
      Science: 34,
      Studies: 36,
      English: 31,
      Religion: 40,
      Computer: 0,
      Skills: 0,
    },
  },
  62551: {
    name: "يوسف احمد محمد عبيده",
    subject: {
      Arabic: 91,
      Math: 80,
      Science: 39,
      Studies: 39,
      English: 40,
      Religion: 39,
      Computer: 0,
      Skills: 0,
    },
  },
  62611: {
    name: "محمد علي محمد علي",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  62699: {
    name: "فرح زينهم سعد المنجي",
    subject: {
      Arabic: 65,
      Math: 44,
      Science: 32,
      Studies: 32,
      English: 25,
      Religion: 37,
      Computer: 0,
      Skills: 0,
    },
  },
  62814: {
    name: "اسراء محمد عادل محمد",
    subject: {
      Arabic: 89,
      Math: 70,
      Science: 35,
      Studies: 35,
      English: 34,
      Religion: 39,
      Computer: 0,
      Skills: 0,
    },
  },
  63062: {
    name: "نورا طارق عادل السيد",
    subject: {
      Arabic: 98,
      Math: 77,
      Science: 38,
      Studies: 39,
      English: 39,
      Religion: 40,
      Computer: 0,
      Skills: 0,
    },
  },
  63116: {
    name: "حنين ابراهيم فريد الشربيني",
    subject: {
      Arabic: 83,
      Math: 54,
      Science: 36,
      Studies: 36,
      English: 34,
      Religion: 40,
      Computer: 0,
      Skills: 0,
    },
  },
  63208: {
    name: "محمد عزت سعد محمد ابو سريه",
    passed: true,
    subject: {
      Arabic: "له دور ثاني",
      Math: "له دور ثاني",
      Science: 23,
      Studies: "له دور ثاني",
      English: "له دور ثاني",
      Religion: 23,
      Computer: 0,
      Skills: 0,
    },
  },
  63412: {
    name: "نادر محمود احمد محمود",
    passed: true,
    subject: {
      Arabic: 53,
      Math: "له دور ثاني",
      Science: 21,
      Studies: 21,
      English: "له دور ثاني",
      Religion: 30,
      Computer: 0,
      Skills: 0,
    },
  },
  63608: {
    name: "يوسف ابراهيم ابراهيم ادم",
    subject: {
      Arabic: 91,
      Math: 80,
      Science: 39,
      Studies: 38,
      English: 38,
      Religion: 39,
      Computer: 0,
      Skills: 0,
    },
  },
  64245: {
    name: "احمد السيد بدير عبد الخبير",
    subject: {
      Arabic: 90,
      Math: 74,
      Science: 37,
      Studies: 38,
      English: 38,
      Religion: 39,
      Computer: 0,
      Skills: 0,
    },
  },
  64472: {
    name: "ملك ابراهيم عوض هلال العفيفي",
    subject: {
      Arabic: 91,
      Math: 69,
      Science: 38,
      Studies: 38,
      English: 36,
      Religion: 39,
      Computer: 0,
      Skills: 0,
    },
  },
  64594: {
    name: "ندى ياسر عزمي احمد",
    subject: {
      Arabic: 95,
      Math: 73,
      Science: 37,
      Studies: 40,
      English: 37,
      Religion: 40,
      Computer: 0,
      Skills: 0,
    },
  },
  64768: {
    name: "اماني صلاح عبد العزيز محمد",
    subject: {
      Arabic: 87,
      Math: 49,
      Science: 34,
      Studies: 35,
      English: 37,
      Religion: 37,
      Computer: 0,
      Skills: 0,
    },
  },
  64857: {
    name: "يوسف محمد عبد الله احمد غطاس",
    subject: {
      Arabic: 90,
      Math: 75,
      Science: 37,
      Studies: 37,
      English: 35,
      Religion: 37,
      Computer: 0,
      Skills: 0,
    },
  },
  65042: {
    name: "مصطفي اسامه النادي عبد الهادي",
    subject: {
      Arabic: 87,
      Math: 80,
      Science: 38,
      Studies: 37,
      English: 39,
      Religion: 39,
      Computer: 0,
      Skills: 0,
    },
  },
  65099: {
    name: "بسمله مكرم ابو خليل محمد",
    subject: {
      Arabic: 84,
      Math: 60,
      Science: 34,
      Studies: 35,
      English: 35,
      Religion: 38,
      Computer: 0,
      Skills: 0,
    },
  },
  65111: {
    name: "مني السيد المتولي ابراهيم",
    subject: {
      Arabic: 96,
      Math: 80,
      Science: 39,
      Studies: 40,
      English: 40,
      Religion: 40,
      Computer: 0,
      Skills: 0,
    },
  },
  65182: {
    name: "ادهم محمود محمود عطا محمود",
    subject: {
      Arabic: 84,
      Math: 62,
      Science: 34,
      Studies: 38,
      English: 35,
      Religion: 40,
      Computer: 0,
      Skills: 0,
    },
  },
  65254: {
    name: "محمد عصام عبد الرازق محمد",
    subject: {
      Arabic: 61,
      Math: 43,
      Science: 31,
      Studies: 26,
      English: 23,
      Religion: 32,
      Computer: 0,
      Skills: 0,
    },
  },
  65384: {
    name: "محمد اشرف رمضان سالم",
    subject: {
      Arabic: 84,
      Math: 56,
      Science: 36,
      Studies: 30,
      English: 34,
      Religion: 39,
      Computer: 0,
      Skills: 0,
    },
  },
  65464: {
    name: "علياء محمود فريد الشربيني",
    subject: {
      Arabic: 73,
      Math: 50,
      Science: 30,
      Studies: 34,
      English: 26,
      Religion: 36,
      Computer: 0,
      Skills: 0,
    },
  },
  65712: {
    name: "ندي منصور محمد محمد",
    subject: {
      Arabic: 78,
      Math: 54,
      Science: 35,
      Studies: 37,
      English: 35,
      Religion: 37,
      Computer: 0,
      Skills: 0,
    },
  },
  65745: {
    name: "نور عبد القادر زكريا عبد القادر",
    subject: {
      Arabic: 67,
      Math: 46,
      Science: 33,
      Studies: 29,
      English: 26,
      Religion: 39,
      Computer: 0,
      Skills: 0,
    },
  },
  65835: {
    name: "جنه محمود علي رجب زلمه",
    subject: {
      Arabic: 89,
      Math: 63,
      Science: 38,
      Studies: 38,
      English: 37,
      Religion: 39,
      Computer: 0,
      Skills: 0,
    },
  },
  65846: {
    name: "محمد حسن جابر عرفات",
    subject: {
      Arabic: 90,
      Math: 72,
      Science: 37,
      Studies: 34,
      English: 36,
      Religion: 38,
      Computer: 0,
      Skills: 0,
    },
  },
  65874: {
    name: "ملك محمد منصور عباس",
    subject: {
      Arabic: 61,
      Math: 60,
      Science: 30,
      Studies: 34,
      English: 26,
      Religion: 32,
      Computer: 0,
      Skills: 0,
    },
  },
  66047: {
    name: "ساره محمد نجيب حسن",
    subject: {
      Arabic: 91,
      Math: 63,
      Science: 35,
      Studies: 38,
      English: 35,
      Religion: 39,
      Computer: 0,
      Skills: 0,
    },
  },
  66059: {
    name: "جودي احمد عبيدة المتولي",
    subject: {
      Arabic: 92,
      Math: 72,
      Science: 38,
      Studies: 38,
      English: 38,
      Religion: 38,
      Computer: 0,
      Skills: 0,
    },
  },
  66187: {
    name: "محمد صلاح عبد الله يوسف جويلي",
    subject: {
      Arabic: 0,
      Math: 0,
      Science: 0,
      Studies: 0,
      English: 0,
      Religion: 0,
      Computer: 0,
      Skills: 0,
    },
  },
  66258: {
    name: "اسلام فرج عطيه قاسم",
    subject: {
      Arabic: 85,
      Math: 65,
      Science: 35,
      Studies: 35,
      English: 29,
      Religion: 39,
      Computer: 0,
      Skills: 0,
    },
  },
  66292: {
    name: "مكرم رضا عبد العليم يوسف",
    subject: {
      Arabic: 74,
      Math: 61,
      Science: 30,
      Studies: 34,
      English: 27,
      Religion: 36,
      Computer: 0,
      Skills: 0,
    },
  },
  66320: {
    name: "مى ابو الفتوح محمد ابو الفتوح",
    subject: {
      Arabic: 74,
      Math: 63,
      Science: 34,
      Studies: 36,
      English: 24,
      Religion: 33,
      Computer: 0,
      Skills: 0,
    },
  },
  66489: {
    name: "يوسف محمد ممدوح محمد",
    subject: {
      Arabic: 76,
      Math: 52,
      Science: 34,
      Studies: 30,
      English: 29,
      Religion: 37,
      Computer: 0,
      Skills: 0,
    },
  },
  66571: {
    name: "جني ابراهيم عوض السعيد",
    subject: {
      Arabic: 85,
      Math: 72,
      Science: 37,
      Studies: 37,
      English: 39,
      Religion: 40,
      Computer: 0,
      Skills: 0,
    },
  },
  66728: {
    name: "فتحي احمد ابو الفتوح عبد الفتاح",
    subject: {
      Arabic: 68,
      Math: 46,
      Science: 30,
      Studies: 30,
      English: 26,
      Religion: 36,
      Computer: 0,
      Skills: 0,
    },
  },
  66753: {
    name: "ياسين محمد رمضان عبد الغني",
    subject: {
      Arabic: 69,
      Math: 48,
      Science: 34,
      Studies: 32,
      English: 25,
      Religion: 38,
      Computer: 0,
      Skills: 0,
    },
  },
  67014: {
    name: "جودي محمد ابو السادات منصور",
    subject: {
      Arabic: 95,
      Math: 78,
      Science: 38,
      Studies: 39,
      English: 38,
      Religion: 40,
      Computer: 0,
      Skills: 0,
    },
  },
  67306: {
    name: "جانا محمد حسام سعد المحمدي",
    subject: {
      Arabic: 94,
      Math: 76,
      Science: 39,
      Studies: 37,
      English: 40,
      Religion: 40,
      Computer: 0,
      Skills: 0,
    },
  },
  67331: {
    name: "رحمه السيد عبد النبي السيد",
    subject: {
      Arabic: 91,
      Math: 74,
      Science: 36,
      Studies: 39,
      English: 40,
      Religion: 40,
      Computer: 0,
      Skills: 0,
    },
  },
  67396: {
    name: "ملك محسن فهمي سيبويه",
    subject: {
      Arabic: 93,
      Math: 77,
      Science: 38,
      Studies: 38,
      English: 37,
      Religion: 39,
      Computer: 0,
      Skills: 0,
    },
  },
  67530: {
    name: "عبد الرحمن شريف شفيق عبد الكريم",
    subject: {
      Arabic: 92,
      Math: 79,
      Science: 36,
      Studies: 37,
      English: 39,
      Religion: 40,
      Computer: 0,
      Skills: 0,
    },
  },
  67553: {
    name: "محمود ابراهيم شاهبور محمد",
    subject: {
      Arabic: 78,
      Math: 68,
      Science: 37,
      Studies: 36,
      English: 38,
      Religion: 39,
      Computer: 0,
      Skills: 0,
    },
  },
  67606: {
    name: "احمد حسام عطية المتولي",
    subject: {
      Arabic: 91,
      Math: 64,
      Science: 37,
      Studies: 38,
      English: 38,
      Religion: 40,
      Computer: 0,
      Skills: 0,
    },
  },
  67684: {
    name: "جومانا ماجد السيد ابو خليل",
    subject: {
      Arabic: 79,
      Math: 58,
      Science: 36,
      Studies: 37,
      English: 35,
      Religion: 39,
      Computer: 0,
      Skills: 0,
    },
  },
  67691: {
    name: "ابراهيم محمد المتولي المتولي",
    subject: {
      Arabic: 88,
      Math: 80,
      Science: 37,
      Studies: 40,
      English: 40,
      Religion: 40,
      Computer: 0,
      Skills: 0,
    },
  },
  67883: {
    name: "السيد محمد فرج عبد الرازق",
    subject: {
      Arabic: 93,
      Math: 71,
      Science: 37,
      Studies: 35,
      English: 35,
      Religion: 40,
      Computer: 0,
      Skills: 0,
    },
  },
  67926: {
    name: "ايمان بدير فتحي السعيد النجار",
    subject: {
      Arabic: 80,
      Math: 65,
      Science: 35,
      Studies: 33,
      English: 30,
      Religion: 38,
      Computer: 0,
      Skills: 0,
    },
  },
};

number.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    showExam();
    console.log(event.code);
  }
});

btnSelect.onclick = function () {
  optionDiv.classList.toggle("h-full");
};

//  Open Select
option.forEach((ele) => {
  ele.addEventListener("click", function () {
    text = ele.textContent;
    optionDiv.classList.remove("h-full");
    classroom.textContent = text;
  });
});

btnExam.addEventListener("click", showExam);

let num = 0;

if (localStorage.getItem("num") >= 5) {
  num = localStorage.getItem("num");
  time.innerHTML = localStorage.getItem("time");
  btnExam.style.display = "none";
  number.style.display = "none";
  setTimeout(() => {
    num = 0;
    localStorage.setItem("num", num);
    btnExam.style.display = "block";
    number.style.display = "block";
  }, time.innerHTML * 1000);
  function countdown() {
    time.innerHTML -= 1;
    localStorage.setItem("time", time.innerHTML);
    if (time.innerHTML === "0") {
      clearInterval(counter);
      time.innerHTML = 120;
    }
  }

  let counter = setInterval(countdown, 1000);
}
function showExam() {
  if (num <= 4) {
    if (text == "الصف الرابع") {
      if (userFour[number.value]) {
        // if (userFour[number.value].passes) {
        //   // let arr = [];
        //   // let a = [
        //   //   "Arabic",
        //   //   "Math",
        //   //   "Science",
        //   //   "Studies",
        //   //   "English",
        //   //   "Religion",
        //   //   "Computer",
        //   //   "Skills",
        //   // ];
        //   // for (let i = 0; i < a.length; i++) {
        //   //   for ()
        //   // }
        // } else {
        arabic.innerHTML = userFour[number.value].subject.Arabic;
        studies.innerHTML = userFour[number.value].subject.Studies;
        math.innerHTML = userFour[number.value].subject.Math;
        english.innerHTML = userFour[number.value].subject.English;
        science.innerHTML = userFour[number.value].subject.Science;
        religion.innerHTML = userFour[number.value].subject.Religion;
        compter.innerHTML = userFour[number.value].subject.Computer;
        skills.innerHTML = userFour[number.value].subject.Skills;
        computerBox.style.display = "flex";
        skillsBox.style.display = "flex";

        userName.innerHTML = userFour[number.value].name;
        tops.innerHTML = userFour[number.value].rank;

        if (userFour[number.value].passed) {
          total.innerHTML = "له دور ثاني";
          rate.innerHTML = "له دور ثاني";
        } else {
          total.innerHTML = userFour[number.value].subject.total;
          userFour[number.value].subject.total >= 680
            ? (rate.innerHTML = "فاق التوقعات")
            : total.innerHTML >= 520
            ? (rate.innerHTML = "امتلك المعارف و المهارات")
            : total.innerHTML >= 400
            ? (rate.innerHTML = "في حاجة إلي دعم")
            : (rate.innerHTML = "لم يتقن المعارف");
        }
      } else if (number.value == "") {
        alert("ادخل الكود");
      } else {
        num++;
        localStorage.setItem("num", num);
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

        if (userFive[number.value].passed) {
          total.innerHTML = "له دور ثاني";
          rate.innerHTML = "له دور ثاني";
          tops.innerHTML = "له دور ثاني";
        } else {
          tops.innerHTML = userFive[number.value].rank;
          total.innerHTML = userFive[number.value].subject.total;
          userFive[number.value].subject.total >= 680
            ? (rate.innerHTML = "فاق التوقعات")
            : total.innerHTML >= 520
            ? (rate.innerHTML = "امتلك المعارف و المهارات")
            : total.innerHTML >= 400
            ? (rate.innerHTML = "في حاجة إلي دعم")
            : (rate.innerHTML = "لم يتقن المعارف");
        }
      } else if (number.value == "") {
        alert("ادخل الكود");
      } else {
        num++;
        localStorage.setItem("num", num);
        alert("الكود غير صحيح");
      }
    } else if (text == "الصف السادس") {
      if (userSix[number.value]) {
        arabic.innerHTML = userSix[number.value].subject.Arabic;
        studies.innerHTML = userSix[number.value].subject.Studies;
        math.innerHTML = userSix[number.value].subject.Math;
        english.innerHTML = userSix[number.value].subject.English;
        science.innerHTML = userSix[number.value].subject.Science;
        religion.innerHTML = userSix[number.value].subject.Religion;
        userName.innerHTML = userSix[number.value].name;
        computerBox.style.display = "none";
        skillsBox.style.display = "none";

        if (userSix[number.value].passed) {
          total.innerHTML = "له دور ثاني";
          rate.innerHTML = "له دور ثاني";
          tops.innerHTML = "له دور ثاني";
        } else {
          tops.innerHTML = userSix[number.value].rank;
          total.innerHTML = userSix[number.value].subject.total;
          userSix[number.value].subject.total >= 289
            ? (rate.innerHTML = "ممتاز")
            : userSix[number.value].subject.total >= 255
            ? (rate.innerHTML = "جيد جدا")
            : userSix[number.value].subject.total >= 221
            ? (rate.innerHTML = "جيد")
            : userSix[number.value].subject.total >= 170
            ? (rate.innerHTML = "مقبول")
            : (rate.innerHTML = "دون مستوى");
        }
      } else if (number.value == "") {
        alert("ادخل الكود");
      } else {
        num++;
        localStorage.setItem("num", num);
        alert("الكود غير صحيح");
      }
    } else {
      alert("اختر الصف");
    }
  } else {
    btnExam.style.display = "none";
    number.style.display = "none";
    setTimeout(() => {
      num = 0;
      localStorage.setItem("num", num);
      btnExam.style.display = "block";
      number.style.display = "block";
    }, 120000);
    function countdown() {
      time.innerHTML -= 1;
      localStorage.setItem("time", time.innerHTML);
      if (time.innerHTML === "0") {
        clearInterval(counter);
        time.innerHTML = 120;
      }
    }

    let counter = setInterval(countdown, 1000);
    alert("انتظر 2 دقائق");
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
let arr = [];

for (let prop in userSix) {
  userSix[prop].subject.total =
    userSix[prop].subject.Arabic +
    userSix[prop].subject.English +
    userSix[prop].subject.Math +
    userSix[prop].subject.Science +
    userSix[prop].subject.Studies;
  arr.push(userSix[prop].subject.total);
  arr = arr.sort((a, b) => b - a);
}

for (let i = 0; i < arr.length; i++) {
  for (let test in userSix) {
    if (userSix[test].subject.total == arr[i]) {
      userSix[test].rank = i + 1;
    }
  }
}
let arr2 = [];

for (let prop in userFour) {
  userFour[prop].subject.total =
    userFour[prop].subject.Arabic +
    userFour[prop].subject.English +
    userFour[prop].subject.Math +
    userFour[prop].subject.Science +
    userFour[prop].subject.Studies +
    userFour[prop].subject.Computer +
    userFour[prop].subject.Skills +
    userFour[prop].subject.Religion;
  arr2.push(userFour[prop].subject.total);
  arr2 = arr2.sort((a, b) => b - a);
}

for (let i = 0; i < arr2.length; i++) {
  for (let test in userFour) {
    if (userFour[test].subject.total == arr2[i]) {
      userFour[test].rank = i + 1;
    }
  }
}
let arr3 = [];

for (let prop in userFive) {
  userFive[prop].subject.total =
    userFive[prop].subject.Arabic +
    userFive[prop].subject.English +
    userFive[prop].subject.Math +
    userFive[prop].subject.Science +
    userFive[prop].subject.Studies +
    userFive[prop].subject.Computer +
    userFive[prop].subject.Skills +
    userFive[prop].subject.Religion;
  arr3.push(userFive[prop].subject.total);
  arr3 = arr3.sort((a, b) => b - a);
}

for (let i = 0; i < arr3.length; i++) {
  for (let test in userFive) {
    if (userFive[test].subject.total == arr3[i]) {
      userFive[test].rank = i + 1;
    }
  }
}
