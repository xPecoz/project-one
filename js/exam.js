// Scrool To Topebar
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
let tops = document.querySelector(".top .deg");
let time = document.querySelector(".time");
let rate = document.querySelector(".rate .deg");
let text = "";

// Students Data
let userFour = {
  40000: {
    name: "ابراهيم الزكي البسيوني المتولي",
    subject: {
      Arabic: 68,
      Math: 69,
      Science: 71,
      Studies: 71,
      English: 50,
      Religion: 59,
      Computer: 73,
      Skills: 85,
    },
  },
  40043: {
    name: "ابراهيم حمدي علي محمد ابراهيم",
    subject: {
      Arabic: 91,
      Math: 88,
      Science: 94,
      Studies: 95,
      English: 85,
      Religion: 93,
      Computer: 86,
      Skills: 95,
    },
  },
  40086: {
    name: "احمد تامر احمد محمد العسكري",
    subject: {
      Arabic: 87,
      Math: 87,
      Science: 75,
      Studies: 88,
      English: 71,
      Religion: 76,
      Computer: 88,
      Skills: 90,
    },
  },
  40129: {
    name: "احمد سعد ابو الفتوح عبد الفتاح",
    subject: {
      Arabic: 90,
      Math: 72,
      Science: 84,
      Studies: 84,
      English: 71,
      Religion: 82,
      Computer: 74,
      Skills: 90,
    },
  },
  // 40172: {
  //   name: "اسلام عتره عبدالعزيز محمد عامر",
  //   subject: {
  //     Arabic: 15,
  //     Math: 12,
  //     Science: 14,
  //     Studies: 10,
  //     English: 8,
  //     Religion: 8,
  //     Computer: 20,
  //     Skills: 16,
  //   },
  // },
  // 40215: {
  //   name: "اسلام قدري عبد القادر العشري",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  40258: {
    name: "أحمد عمرو فاروق سعد",
    subject: {
      Arabic: 90,
      Math: 94,
      Science: 92,
      Studies: 88,
      English: 95,
      Religion: 90,
      Computer: 80,
      Skills: 89,
    },
  },
  // 40301: {
  //   name: "المصطفي وائل شاكر شاكر",
  //   subject: {
  //     Arabic: 57,
  //     Math: 59,
  //     Science: 56,
  //     Studies: 48,
  //     English: 55,
  //     Religion: 51,
  //     Computer: 60,
  //     Skills: 56,
  //   },
  // },
  40344: {
    name: "باسم ياسر سعد المغاوري خضر",
    subject: {
      Arabic: 78,
      Math: 65,
      Science: 87,
      Studies: 86,
      English: 59,
      Religion: 84,
      Computer: 75,
      Skills: 85,
    },
  },
  // 40387: {
  //   name: "تامر نبيه شعبان نبيه يوسف",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  // 40430: {
  //   name: "سامي احمد سامي عبدالرازق البديوي",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  // 40473: {
  //   name: "شعبان محمد شعبان ابراهيم",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  // 40516: {
  //   name: "عبد الرحمن محمد ابراهيم السعيد",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  40559: {
    name: "عزت عادل عزت المغاوري الغطاس",
    subject: {
      Arabic: 87,
      Math: 99,
      Science: 98,
      Studies: 86,
      English: 64,
      Religion: 83,
      Computer: 87,
      Skills: 93,
    },
  },
  // 40602: {
  //   name: "عمر ابراهيم عمر محمد مصطفي",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  40645: {
    name: "عمر جمال السيد محمد البسيوني",
    subject: {
      Arabic: 83,
      Math: 61,
      Science: 82,
      Studies: 78,
      English: 52,
      Religion: 70,
      Computer: 77,
      Skills: 92,
    },
  },
  40688: {
    name: "عوض حسن سعد الورداني",
    subject: {
      Arabic: 85,
      Math: 82,
      Science: 83,
      Studies: 82,
      English: 66,
      Religion: 85,
      Computer: 87,
      Skills: 85,
    },
  },
  40731: {
    name: "فهمي هيثم فهيم الدريني",
    subject: {
      Arabic: 76,
      Math: 79,
      Science: 75,
      Studies: 73,
      English: 65,
      Religion: 69,
      Computer: 89,
      Skills: 82,
    },
  },
  // 40774: {
  //   name: "كريم حماده الزكي زغلول",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  // 40817: {
  //   name: "مالك محمد ابراهيم السعيد",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  40851: {
    name: "مالك محمود المتولي المتولي علي زياده",
    subject: {
      Arabic: 90,
      Math: 95,
      Science: 97,
      Studies: 97,
      English: 83,
      Religion: 97,
      Computer: 86,
      Skills: 97,
    },
  },
  40885: {
    name: "محمد حسين منير عوض",
    subject: {
      Arabic: 93,
      Math: 81,
      Science: 95,
      Studies: 96,
      English: 80,
      Religion: 87,
      Computer: 87,
      Skills: 95,
    },
  },
  // 40919: {
  //   name: "محمد خالد السيد الحماقي الذكي",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  40953: {
    name: "محمد عادل حسين احمد السعيد",
    subject: {
      Arabic: 94,
      Math: 96,
      Science: 90,
      Studies: 92,
      English: 69,
      Religion: 80,
      Computer: 90,
      Skills: 97,
    },
  },
  // 40987: {
  //   name: "محمد محمد طاهر رزق محمد",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  41021: {
    name: "محمد نادر محي محمد نافع",
    subject: {
      Arabic: 88,
      Math: 85,
      Science: 94,
      Studies: 88,
      English: 79,
      Religion: 89,
      Computer: 85,
      Skills: 93,
    },
  },
  41055: {
    name: "محمد ولاء محمد زكي عبدالعاطي",
    subject: {
      Arabic: 79,
      Math: 78,
      Science: 81,
      Studies: 86,
      English: 56,
      Religion: 71,
      Computer: 86,
      Skills: 88,
    },
  },
  41089: {
    name: "محمود مكرم ابو خليل محمد",
    subject: {
      Arabic: 61,
      Math: 52,
      Science: 71,
      Studies: 59,
      English: 50,
      Religion: 63,
      Computer: 75,
      Skills: 78,
    },
  },
  // 41123: {
  //   name: "منصور محمد ابراهيم محمد",
  //   subject: {
  //     Arabic: 73,
  //     Math: 66,
  //     Science: 78,
  //     Studies: 70,
  //     English: 50,
  //     Religion: 63,
  //     Computer: 79,
  //     Skills: 90,
  //   },
  // },
  // 41157: {
  //   name: "هادي اسعد سعد ابراهيم فوده",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  41191: {
    name: "يوسف حسين ابوالسعود صابر",
    subject: {
      Arabic: 89,
      Math: 90,
      Science: 80,
      Studies: 86,
      English: 72,
      Religion: 68,
      Computer: 80,
      Skills: 92,
    },
  },
  // 41225: {
  //   name: "يوسف عبدالقادر عزت السيد",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  41259: {
    name: "يوسف محمد ابوالسادات منصور",
    subject: {
      Arabic: 76,
      Math: 74,
      Science: 83,
      Studies: 70,
      English: 51,
      Religion: 74,
      Computer: 79,
      Skills: 84,
    },
  },
  // 41293: {
  //   name: "يوسف محمد عبدالعليم يوسف",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  // 41327: {
  //   name: "يوسف محمود عبد الحميد مصطفي شعبان",
  //   subject: {
  //     Arabic: 78,
  //     Math: 59,
  //     Science: 76,
  //     Studies: 72,
  //     English: 68,
  //     Religion: 75,
  //     Computer: 75,
  //     Skills: 92,
  //   },
  // },
  // 41361: {
  //   name: "اسماء علي عمر محمد",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  41395: {
    name: "اسينات وائل عزيز المحمدي",
    subject: {
      Arabic: 67,
      Math: 63,
      Science: 70,
      Studies: 71,
      English: 54,
      Religion: 58,
      Computer: 82,
      Skills: 87,
    },
  },
  41429: {
    name: "الاء حسن جابر عرفات الشربيني",
    subject: {
      Arabic: 97,
      Math: 89,
      Science: 94,
      Studies: 90,
      English: 95,
      Religion: 84,
      Computer: 87,
      Skills: 93,
    },
  },
  // 41463: {
  //   name: "براء العربي جمعه محمد",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  41497: {
    name: "بسمله علاء عبدالله احمد على",
    subject: {
      Arabic: 92,
      Math: 80,
      Science: 89,
      Studies: 92,
      English: 90,
      Religion: 83,
      Computer: 83,
      Skills: 87,
    },
  },
  41520: {
    name: "بسمله ممتاز الشحات محمد احمد",
    subject: {
      Arabic: 72,
      Math: 61,
      Science: 81,
      Studies: 80,
      English: 54,
      Religion: 64,
      Computer: 74,
      Skills: 90,
    },
  },
  // 41543: {
  //   name: "جنا نبيل شوقي الورداني الحداد",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  // 41566: {
  //   name: "جنه رجب السعيد احمد",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  41589: {
    name: "جنى عمرو عابدين عبدالستار احمد",
    subject: {
      Arabic: 92,
      Math: 94,
      Science: 96,
      Studies: 95,
      English: 99,
      Religion: 92,
      Computer: 88,
      Skills: 89,
    },
  },
  // 41612: {
  //   name: "جني نادر نبيل حلمي",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  41635: {
    name: "جومانه الشربيني محمد خطاب",
    subject: {
      Arabic: 83,
      Math: 68,
      Science: 87,
      Studies: 88,
      English: 50,
      Religion: 84,
      Computer: 71,
      Skills: 93,
    },
  },
  // 41658: {
  //   name: "حبيبه الزكي محمد الغريب محمد",
  //   subject: {
  //     Arabic: 83,
  //     Math: 57,
  //     Science: 86,
  //     Studies: 76,
  //     English: 85,
  //     Religion: 78,
  //     Computer: 84,
  //     Skills: 90,
  //   },
  // },
  41681: {
    name: "حبيبه محمود احمد صبحي جمعه واصل",
    subject: {
      Arabic: 89,
      Math: 78,
      Science: 93,
      Studies: 96,
      English: 77,
      Religion: 84,
      Computer: 87,
      Skills: 90,
    },
  },
  // 41704: {
  //   name: "حنين ابراهيم السيد سمبو",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  41727: {
    name: "حنين زينهم احمد بدير",
    subject: {
      Arabic: 71,
      Math: 76,
      Science: 74,
      Studies: 78,
      English: 55,
      Religion: 50,
      Computer: 71,
      Skills: 79,
    },
  },
  // 41750: {
  //   name: "حنين محمد بهجت عبدالوهاب صيام",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  41773: {
    name: "رودينا السعيد رسمي رمضان وهدان",
    subject: {
      Arabic: 87,
      Math: 65,
      Science: 89,
      Studies: 91,
      English: 71,
      Religion: 66,
      Computer: 83,
      Skills: 92,
    },
  },
  41796: {
    name: "رؤى عادل امبابي امبابي الغطاس",
    subject: {
      Arabic: 73,
      Math: 55,
      Science: 76,
      Studies: 81,
      English: 53,
      Religion: 63,
      Computer: 70,
      Skills: 80,
    },
  },
  // 41819: {
  //   name: "ريتاج سعد الشربيني ابراهيم الشربيني",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  41842: {
    name: "ريتاج محمد الرفاعي السيد الرفاعي",
    subject: {
      Arabic: 85,
      Math: 51,
      Science: 84,
      Studies: 94,
      English: 54,
      Religion: 64,
      Computer: 73,
      Skills: 93,
    },
  },
  // 41865: {
  //   name: "ريماس طارق شورى موسى",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  // 41888: {
  //   name: "ساره سامح سعد حسين محمد الصرفي",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  41911: {
    name: "ساره محمود عيد عبد العزيز",
    subject: {
      Arabic: 72,
      Math: 68,
      Science: 82,
      Studies: 77,
      English: 59.5,
      Religion: 55,
      Computer: 64,
      Skills: 91,
    },
  },
  41934: {
    name: "ساميه محمد السيد يوسف عبدالعزيز",
    subject: {
      Arabic: 84,
      Math: 53,
      Science: 78,
      Studies: 70,
      English: 52,
      Religion: 66,
      Computer: 70,
      Skills: 82,
    },
  },
  // 41957: {
  //   name: "سجي ضياء الدين ابراهيم المتولي",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  // 42011: {
  //   name: "سما ايهاب هاشم حسن بيومى",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  42065: {
    name: "سما محمد محمد الظريف على حسين",
    subject: {
      Arabic: 64,
      Math: 53,
      Science: 75,
      Studies: 68,
      English: 52,
      Religion: 52,
      Computer: 79,
      Skills: 75,
    },
  },
  42119: {
    name: "شمس محمد عبد القادر مصطفي",
    subject: {
      Arabic: 77,
      Math: 68,
      Science: 78,
      Studies: 82,
      English: 74,
      Religion: 58,
      Computer: 75,
      Skills: 96,
    },
  },
  42173: {
    name: "شهد محمد المتولي المتولي زياده",
    subject: {
      Arabic: 95,
      Math: 75,
      Science: 90,
      Studies: 92,
      English: 94.5,
      Religion: 94,
      Computer: 83,
      Skills: 97,
    },
  },
  42227: {
    name: "عائشه عمرو عبداللطيف السيد",
    subject: {
      Arabic: 86,
      Math: 68,
      Science: 93,
      Studies: 79,
      English: 64,
      Religion: 69,
      Computer: 81,
      Skills: 93,
    },
  },
  42281: {
    name: "لوجي وائل الزكي منصور",
    subject: {
      Arabic: 60,
      Math: 54,
      Science: 80,
      Studies: 70,
      English: 55,
      Religion: 56,
      Computer: 70,
      Skills: 82,
    },
  },
  42335: {
    name: "ليان ابراهيم عطاالله عبدالخالق",
    subject: {
      Arabic: 87,
      Math: 74,
      Science: 89,
      Studies: 81,
      English: 63,
      Religion: 83,
      Computer: 83,
      Skills: 95,
    },
  },
  42389: {
    name: "ليان شريف جمعه ابونصير",
    subject: {
      Arabic: 95,
      Math: 85,
      Science: 93,
      Studies: 87,
      English: 59,
      Religion: 86,
      Computer: 87,
      Skills: 89,
    },
  },
  42443: {
    name: "لين خليل محمد موفق هلال",
    subject: {
      Arabic: 93,
      Math: 81,
      Science: 87,
      Studies: 84,
      English: 70,
      Religion: 86,
      Computer: 86,
      Skills: 75,
    },
  },
  // 42497: {
  //   name: "ليندا سمير محمد احمد",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  42551: {
    name: "مايا حمدي علي محمد ابراهيم دلال",
    subject: {
      Arabic: 95,
      Math: 96,
      Science: 96,
      Studies: 98,
      English: 90,
      Religion: 96,
      Computer: 90,
      Skills: 97,
    },
  },
  // 42605: {
  //   name: "مايا عماد الزكي الدمرداش",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  // 42659: {
  //   name: "مريم رضا محمد شعبان شعبان",
  //   subject: {
  //     Arabic: 75,
  //     Math: 52,
  //     Science: 82,
  //     Studies: 70,
  //     English: 50,
  //     Religion: 65,
  //     Computer: 79,
  //     Skills: 94,
  //   },
  // },
  // 42713: {
  //   name: "مريم صلاح الشحات بدير",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  42767: {
    name: "مريم منصور السعيد حسن الكناني",
    subject: {
      Arabic: 85,
      Math: 72,
      Science: 87,
      Studies: 74,
      English: 57,
      Religion: 69,
      Computer: 81,
      Skills: 90,
    },
  },
  42821: {
    name: "مريم هاشم الزكي الشراكي",
    subject: {
      Arabic: 91,
      Math: 67,
      Science: 93,
      Studies: 95,
      English: 56,
      Religion: 78,
      Computer: 79,
      Skills: 93,
    },
  },
  // 42875: {
  //   name: "ملك ابراهيم الذكي عبد الكريم",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  // 42929: {
  //   name: "ملك عاطف محمد طلعت فايد",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  42983: {
    name: "ملك مايز زينهم الطمبكشي",
    subject: {
      Arabic: 83,
      Math: 62,
      Science: 81,
      Studies: 78,
      English: 52,
      Religion: 72,
      Computer: 67,
      Skills: 81,
    },
  },
  43037: {
    name: "منة الله محمد عبدالعزيز محمد نمره",
    subject: {
      Arabic: 98,
      Math: 97,
      Science: 100,
      Studies: 97,
      English: 89,
      Religion: 92,
      Computer: 93,
      Skills: 97,
    },
  },
  // 43073: {
  //   name: "منه احمد فراج امين",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  43109: {
    name: "منه السيد المتولي ابراهيم الشناوي",
    subject: {
      Arabic: 94,
      Math: 95,
      Science: 97,
      Studies: 99,
      English: 95,
      Religion: 96,
      Computer: 92,
      Skills: 94,
    },
  },
  43145: {
    name: "منه زين العابدين العيسوى عبدالهادي",
    subject: {
      Arabic: 85,
      Math: 81,
      Science: 86,
      Studies: 82,
      English: 76,
      Religion: 68,
      Computer: 90,
      Skills: 92,
    },
  },
  43181: {
    name: "منه محمد شعبان المتولي رجب",
    subject: {
      Arabic: 74,
      Math: 65,
      Science: 79,
      Studies: 77,
      English: 51,
      Religion: 67,
      Computer: 76,
      Skills: 88,
    },
  },
  43217: {
    name: "ميار محمد فرج عبدالرازق محمد",
    subject: {
      Arabic: 91,
      Math: 80,
      Science: 91,
      Studies: 93,
      English: 76,
      Religion: 85,
      Computer: 89,
      Skills: 93,
    },
  },
  43253: {
    name: "ندى شريف الجميل عبدالخالق",
    subject: {
      Arabic: 93,
      Math: 76,
      Science: 93,
      Studies: 95,
      English: 67,
      Religion: 76,
      Computer: 78,
      Skills: 96,
    },
  },
  // 43289: {
  //   name: "ندى عبدالرازق عوض عبدالرازق",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  43325: {
    name: "ندى محمد خفاجي احمد البسيوني",
    subject: {
      Arabic: 85,
      Math: 65,
      Science: 75,
      Studies: 76,
      English: 50,
      Religion: 70,
      Computer: 82,
      Skills: 82,
    },
  },
  // 43361: {
  //   name: "هبه عبدالله سعد عبوده عبداللطيف",
  //   subject: {
  //     Arabic: 90,
  //     Math: 62,
  //     Science: 89,
  //     Studies: 87,
  //     English: 66,
  //     Religion: 76,
  //     Computer: 82,
  //     Skills: 93,
  //   },
  // },
  // 43397: {
  //   name: "هنا ابراهيم فريد الشربيني احمد",
  //   subject: {
  //     Arabic: 80,
  //     Math: 65,
  //     Science: 82,
  //     Studies: 75,
  //     English: 50,
  //     Religion: 72,
  //     Computer: 87,
  //     Skills: 87,
  //   },
  // },
  // 43433: {
  //   name: "يارا ابراهيم الشربيني ابراهيم",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  43469: {
    name: "ياسمين محمد محمد زاكي ابراهيم",
    subject: {
      Arabic: 86,
      Math: 64,
      Science: 88,
      Studies: 87,
      English: 66,
      Religion: 70,
      Computer: 89,
      Skills: 90,
    },
  },
};
let userFive = {
  50000: {
    name: "ابراهيم درويش محمود محمد",
    subject: {
      Arabic: 93,
      Math: 79,
      Science: 99,
      Studies: 84,
      English: 91,
      Religion: 91,
      Computer: 93,
      Skills: 99,
    },
  },
  // 50056: {
  //   name: "ابراهيم محمود أبو خليل محمد",
  //   subject: {
  //     Arabic: 83,
  //     Math: 68,
  //     Science: 95,
  //     Studies: 81,
  //     English: 83,
  //     Religion: 91,
  //     Computer: 93,
  //     Skills: 99,
  //   },
  // },
  50112: {
    name: "احمد بهجات عبد الونيس محمد",
    subject: {
      Arabic: 98,
      Math: 100,
      Science: 100,
      Studies: 92,
      English: 100,
      Religion: 100,
      Computer: 97,
      Skills: 98,
    },
  },
  50168: {
    name: "المتولي السعيد المتولي ابراهيم",
    subject: {
      Arabic: 86,
      Math: 83,
      Science: 95,
      Studies: 94,
      English: 82,
      Religion: 96,
      Computer: 95,
      Skills: 98,
    },
  },
  50224: {
    name: "امير منصور عبد الهادي محمد",
    subject: {
      Arabic: 98,
      Math: 84,
      Science: 98,
      Studies: 92,
      English: 99,
      Religion: 99,
      Computer: 98,
      Skills: 98,
    },
  },
  // 50280: {
  //   name: "اياد احمد عاطف البيومي",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  50336: {
    name: "حمدي ابراهيم محمد ابراهيم",
    subject: {
      Arabic: 75,
      Math: 75,
      Science: 91,
      Studies: 53,
      English: 82,
      Religion: 92,
      Computer: 95,
      Skills: 93,
    },
  },
  50392: {
    name: "رامي سمير ابراهيم ابراهيم حسن",
    subject: {
      Arabic: 70,
      Math: 50,
      Science: 77,
      Studies: 71,
      English: 70,
      Religion: 80,
      Computer: 79,
      Skills: 92,
    },
  },
  50448: {
    name: "رمضان السيد بدير عبد الخبير",
    subject: {
      Arabic: 92,
      Math: 72,
      Science: 99,
      Studies: 90,
      English: 98,
      Religion: 93,
      Computer: 95,
      Skills: 99,
    },
  },
  50504: {
    name: "زياد مصطفي السيد احمد يسن",
    subject: {
      Arabic: 98,
      Math: 99,
      Science: 100,
      Studies: 100,
      English: 100,
      Religion: 100,
      Computer: 100,
      Skills: 98,
    },
  },
  50560: {
    name: "زين الشام سعيد الاحمر",
    subject: {
      Arabic: 96,
      Math: 92,
      Science: 100,
      Studies: 95,
      English: 94,
      Religion: 98,
      Computer: 98,
      Skills: 94,
    },
  },
  50616: {
    name: "صلاح محمد صلاح محمد",
    subject: {
      Arabic: 57,
      Math: 50,
      Science: 73,
      Studies: 75,
      English: 60,
      Religion: 73,
      Computer: 87,
      Skills: 82,
    },
  },
  50672: {
    name: "عبد الرحمن محمد محمد خطاب",
    subject: {
      Arabic: 76,
      Math: 51,
      Science: 90,
      Studies: 80,
      English: 72,
      Religion: 84,
      Computer: 94,
      Skills: 90,
    },
  },
  50728: {
    name: "عبد الغفار شريف عبد الغفار منصور",
    subject: {
      Arabic: 92,
      Math: 94,
      Science: 100,
      Studies: 94,
      English: 93,
      Religion: 92,
      Computer: 95,
      Skills: 98,
    },
  },
  // 50784: {
  //   name: "عمار حازم ابراهيم  ابراهيم حسن",
  //   subject: {
  //     Arabic: 93,
  //     Math: 87,
  //     Science: 100,
  //     Studies: 90.5,
  //     English: 92,
  //     Religion: 93,
  //     Computer: 94,
  //     Skills: 98,
  //   },
  // },
  // 50840: {
  //   name: "عمر محمد احمد محمد السيد",
  //   subject: {
  //     Arabic: 61,
  //     Math: 54,
  //     Science: 82,
  //     Studies: 72,
  //     English: 78,
  //     Religion: 76,
  //     Computer: 83,
  //     Skills: 94,
  //   },
  // },
  // 50896: {
  //   name: "كريم عاطف محمد طلعت فايد",
  //   subject: {
  //     Arabic: 62,
  //     Math: 52,
  //     Science: 76,
  //     Studies: 77,
  //     English: 39,
  //     Religion: 61,
  //     Computer: 70,
  //     Skills: 59,
  //   },
  // },
  // 50952: {
  //   name: "محمد احمد سليمان جمعه",
  //   subject: {
  //     Arabic: 35,
  //     Math: 50,
  //     Science: 62,
  //     Studies: 59,
  //     English: 32,
  //     Religion: 57,
  //     Computer: 64,
  //     Skills: 66,
  //   },
  // },
  51008: {
    name: "محمد السيد السيد السعيد احمد",
    subject: {
      Arabic: 95,
      Math: 81,
      Science: 93,
      Studies: 81,
      English: 90,
      Religion: 96,
      Computer: 90,
      Skills: 87,
    },
  },
  51064: {
    name: "محمد ثروت حموده سعد المحمدي",
    subject: {
      Arabic: 83,
      Math: 83,
      Science: 97,
      Studies: 84,
      English: 79,
      Religion: 94,
      Computer: 84,
      Skills: 94,
    },
  },
  51109: {
    name: "محمد رزق عبد الرازق رزق",
    subject: {
      Arabic: 93,
      Math: 89,
      Science: 99,
      Studies: 88,
      English: 94,
      Religion: 95,
      Computer: 88,
      Skills: 92,
    },
  },
  51154: {
    name: "محمد شريف عبد الغفار منصور",
    subject: {
      Arabic: 88,
      Math: 83,
      Science: 96,
      Studies: 85,
      English: 75,
      Religion: 86,
      Computer: 78,
      Skills: 95,
    },
  },
  51199: {
    name: "محمد صبحي علي محمد العطار",
    subject: {
      Arabic: 95,
      Math: 94,
      Science: 90,
      Studies: 81,
      English: 92,
      Religion: 92,
      Computer: 77,
      Skills: 90,
    },
  },
  // 51244: {
  //   name: "محمد عبد الله محمد عبد المنعم",
  //   subject: {
  //     Arabic: 65,
  //     Math: 62,
  //     Science: 84,
  //     Studies: 70,
  //     English: 67,
  //     Religion: 87,
  //     Computer: 73,
  //     Skills: 93,
  //   },
  // },
  // 51289: {
  //   name: "محمد عماد عزمي احمد سيد",
  //   subject: {
  //     Arabic: 43,
  //     Math: 51,
  //     Science: 71,
  //     Studies: 64,
  //     English: 43,
  //     Religion: 72,
  //     Computer: 65,
  //     Skills: 82,
  //   },
  // },
  // 51334: {
  //   name: "محمود حسن نجيب حسن مراد",
  //   subject: {
  //     Arabic: 96,
  //     Math: 87,
  //     Science: 97,
  //     Studies: 89,
  //     English: 99,
  //     Religion: 97,
  //     Computer: 90,
  //     Skills: 96,
  //   },
  // },
  51379: {
    name: "محي محمد محي محمد نافع",
    subject: {
      Arabic: 94,
      Math: 72,
      Science: 99,
      Studies: 89,
      English: 97,
      Religion: 97,
      Computer: 87,
      Skills: 91,
    },
  },
  51424: {
    name: "مكرم رضا محمد عبد الرازق",
    subject: {
      Arabic: 82,
      Math: 57,
      Science: 84,
      Studies: 83,
      English: 83,
      Religion: 87,
      Computer: 83,
      Skills: 87,
    },
  },
  51469: {
    name: "نور محمد احمد محمد ابراهيم",
    subject: {
      Arabic: 97,
      Math: 91,
      Science: 98,
      Studies: 93,
      English: 98,
      Religion: 83,
      Computer: 97,
      Skills: 97,
    },
  },
  51514: {
    name: "هيثم خالد فرج الدريني",
    subject: {
      Arabic: 84,
      Math: 64,
      Science: 83,
      Studies: 75,
      English: 67,
      Religion: 60,
      Computer: 88,
      Skills: 90,
    },
  },
  51559: {
    name: "يوسف خالد حموده السيد العرابي",
    subject: {
      Arabic: 59,
      Math: 46,
      Science: 83,
      Studies: 86,
      English: 63,
      Religion: 84,
      Computer: 76,
      Skills: 82,
    },
  },
  51604: {
    name: "يوسف سالم رجب سالم الديب",
    subject: {
      Arabic: 72,
      Math: 65,
      Science: 93,
      Studies: 90,
      English: 76,
      Religion: 86,
      Computer: 77,
      Skills: 82,
    },
  },
  // 51649: {
  //   name: "يوسف صلاح ابراهيم العرابي",
  //   subject: {
  //     Arabic: 88,
  //     Math: 78,
  //     Science: 99,
  //     Studies: 95,
  //     English: 64,
  //     Religion: 89,
  //     Computer: 81,
  //     Skills: 93,
  //   },
  // },
  51694: {
    name: "يوسف علي نجاح صبحي احمد",
    subject: {
      Arabic: 83,
      Math: 72,
      Science: 99,
      Studies: 87,
      English: 81,
      Religion: 90,
      Computer: 77,
      Skills: 87,
    },
  },
  51739: {
    name: "يوسف محمد ابو خليل احمد",
    subject: {
      Arabic: 93,
      Math: 82,
      Science: 97,
      Studies: 93,
      English: 87,
      Religion: 78,
      Computer: 81,
      Skills: 89,
    },
  },
  51784: {
    name: "يوسف محمود احمد عبد التواب",
    subject: {
      Arabic: 82,
      Math: 85,
      Science: 89,
      Studies: 86,
      English: 84,
      Religion: 85,
      Computer: 72,
      Skills: 94,
    },
  },
  // 51829: {
  //   name: "يوسف ياسر عزمي احمد",
  //   subject: {
  //     Arabic: 87,
  //     Math: 68,
  //     Science: 94,
  //     Studies: 81,
  //     English: 70,
  //     Religion: 75,
  //     Computer: 78,
  //     Skills: 94,
  //   },
  // },
  51874: {
    name: "اسيل احمد عبد العزيز عبد المحسن",
    subject: {
      Arabic: 79,
      Math: 83,
      Science: 100,
      Studies: 94,
      English: 92,
      Religion: 86,
      Computer: 100,
      Skills: 97,
    },
  },
  51919: {
    name: "جمانه عبد العزيز محمد عبد السلام",
    subject: {
      Arabic: 78,
      Math: 57,
      Science: 80,
      Studies: 84,
      English: 83,
      Religion: 78,
      Computer: 90,
      Skills: 85,
    },
  },
  // 51964: {
  //   name: "جنا عبد الله فرج السباعي",
  //   subject: {
  //     Arabic: 55,
  //     Math: 54.5,
  //     Science: 67,
  //     Studies: 66,
  //     English: 47,
  //     Religion: 62,
  //     Computer: 83,
  //     Skills: 59,
  //   },
  // },
  51998: {
    name: "جنا محمد سامي عبد الرازق",
    subject: {
      Arabic: 97,
      Math: 99,
      Science: 100,
      Studies: 92,
      English: 99,
      Religion: 94,
      Computer: 100,
      Skills: 98,
    },
  },
  52032: {
    name: "جني وليد صبحي عبد المعطي",
    subject: {
      Arabic: 88,
      Math: 70,
      Science: 95,
      Studies: 93,
      English: 90,
      Religion: 80,
      Computer: 94,
      Skills: 86,
    },
  },
  // 52066: {
  //   name: "جينا محمد رضا محمد السيد",
  //   subject: {
  //     Arabic: 64,
  //     Math: 64,
  //     Science: 97,
  //     Studies: 85,
  //     English: 76,
  //     Religion: 66,
  //     Computer: 86,
  //     Skills: 78,
  //   },
  // },
  52100: {
    name: "حبيبه ابراهيم احمد عبد العزيز",
    subject: {
      Arabic: 94,
      Math: 91,
      Science: 88,
      Studies: 66,
      English: 94,
      Religion: 97,
      Computer: 92,
      Skills: 95,
    },
  },
  52134: {
    name: "حبيبه عبوده عبد الله احمد",
    subject: {
      Arabic: 78.5,
      Math: 83,
      Science: 100,
      Studies: 93,
      English: 82,
      Religion: 81,
      Computer: 92,
      Skills: 93,
    },
  },
  52168: {
    name: "حنين ابراهيم علي عمر",
    subject: {
      Arabic: 97,
      Math: 85,
      Science: 99,
      Studies: 92,
      English: 95,
      Religion: 99,
      Computer: 99,
      Skills: 98,
    },
  },
  52202: {
    name: "دعاء رمضان موسي ابراهيم",
    subject: {
      Arabic: 97,
      Math: 99,
      Science: 100,
      Studies: 96,
      English: 99,
      Religion: 99,
      Computer: 100,
      Skills: 98,
    },
  },
  52236: {
    name: "رحمه احمد ابراهيم السعيد",
    subject: {
      Arabic: 90,
      Math: 79,
      Science: 95,
      Studies: 87,
      English: 89,
      Religion: 91,
      Computer: 97,
      Skills: 87,
    },
  },
  // 52270: {
  //   name: "رحمه علي السيد الحماقي",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  52304: {
    name: "رهف وائل الذكي منصور",
    subject: {
      Arabic: 59,
      Math: 51,
      Science: 79,
      Studies: 86,
      English: 82,
      Religion: 74,
      Computer: 85,
      Skills: 86,
    },
  },
  52338: {
    name: "رودينه فتحي السعيد السعيد",
    subject: {
      Arabic: 76,
      Math: 56,
      Science: 89,
      Studies: 88,
      English: 83,
      Religion: 87,
      Computer: 82,
      Skills: 84,
    },
  },
  52372: {
    name: "روضه محب السيد معوض",
    subject: {
      Arabic: 85,
      Math: 91,
      Science: 95,
      Studies: 96,
      English: 93,
      Religion: 92,
      Computer: 96,
      Skills: 98,
    },
  },
  52406: {
    name: "رؤي مجدي منصور توفيق",
    subject: {
      Arabic: 98,
      Math: 96,
      Science: 100,
      Studies: 99,
      English: 100,
      Religion: 100,
      Computer: 100,
      Skills: 99,
    },
  },
  // 52440: {
  //   name: "ريتاج ابراهيم عوض السعيد",
  //   subject: {
  //     Arabic: 87,
  //     Math: 65,
  //     Science: 92,
  //     Studies: 92,
  //     English: 90,
  //     Religion: 82,
  //     Computer: 93,
  //     Skills: 98,
  //   },
  // },
  52474: {
    name: "ريتاج محمود المتولي المتولي",
    subject: {
      Arabic: 50,
      Math: 40,
      Science: 67,
      Studies: 73,
      English: 58,
      Religion: 56,
      Computer: 77,
      Skills: 84,
    },
  },
  52508: {
    name: "ريم نجاح شوقي الورداني",
    subject: {
      Arabic: 98,
      Math: 99,
      Science: 100,
      Studies: 99,
      English: 100,
      Religion: 100,
      Computer: 100,
      Skills: 98,
    },
  },
  52542: {
    name: "سما عماد رجب محمد",
    subject: {
      Arabic: 93,
      Math: 82,
      Science: 90,
      Studies: 97,
      English: 96,
      Religion: 98,
      Computer: 89,
      Skills: 96,
    },
  },
  // 52576: {
  //   name: "علياء محمود عبد السلام محمد",
  //   subject: {
  //     Arabic: 77,
  //     Math: 56,
  //     Science: 81,
  //     Studies: 80,
  //     English: 63,
  //     Religion: 82,
  //     Computer: 80,
  //     Skills: 89,
  //   },
  // },
  52610: {
    name: "فاطمه محمد عبد القادر مصطفي",
    subject: {
      Arabic: 92,
      Math: 85,
      Science: 98,
      Studies: 87,
      English: 90,
      Religion: 92,
      Computer: 91,
      Skills: 95,
    },
  },
  52644: {
    name: "ليلي اشرف عزت ابراهيم",
    subject: {
      Arabic: 98,
      Math: 100,
      Science: 100,
      Studies: 99,
      English: 98,
      Religion: 98,
      Computer: 94,
      Skills: 99,
    },
  },
  52667: {
    name: "مريم ابراهيم ابراهيم ادم",
    subject: {
      Arabic: 96,
      Math: 86,
      Science: 97,
      Studies: 98,
      English: 91,
      Religion: 92,
      Computer: 90,
      Skills: 97,
    },
  },
  52690: {
    name: "مريم احمد محمد عبيده المتولي",
    subject: {
      Arabic: 91,
      Math: 91,
      Science: 96,
      Studies: 87.5,
      English: 95,
      Religion: 89,
      Computer: 85,
      Skills: 95,
    },
  },
  52713: {
    name: "ملك فيصل السعيد نجاح",
    subject: {
      Arabic: 78,
      Math: 77,
      Science: 86,
      Studies: 82,
      English: 79,
      Religion: 78,
      Computer: 86,
      Skills: 93,
    },
  },
  52736: {
    name: "ملك يوسف عبد العليم يوسف",
    subject: {
      Arabic: 91,
      Math: 76,
      Science: 90,
      Studies: 88,
      English: 95,
      Religion: 88,
      Computer: 82,
      Skills: 92,
    },
  },
  52759: {
    name: "منه ابراهيم ابراهيم آدم",
    subject: {
      Arabic: 96,
      Math: 95,
      Science: 99,
      Studies: 97,
      English: 97,
      Religion: 94,
      Computer: 85,
      Skills: 96,
    },
  },
  // 52782: {
  //   name: "منه جوده سعيد الورداني الحداد",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  52805: {
    name: "مها العراقي رفعت محمد",
    subject: {
      Arabic: 69,
      Math: 76,
      Science: 76,
      Studies: 83,
      English: 83,
      Religion: 65,
      Computer: 82,
      Skills: 93,
    },
  },
  52828: {
    name: "ميار علي علي عبد الغني",
    subject: {
      Arabic: 93,
      Math: 83,
      Science: 97,
      Studies: 88,
      English: 94,
      Religion: 86,
      Computer: 69,
      Skills: 93,
    },
  },
  52851: {
    name: "ميار محمود عطيه عبد العزيز",
    subject: {
      Arabic: 97,
      Math: 92,
      Science: 100,
      Studies: 92,
      English: 100,
      Religion: 91,
      Computer: 83,
      Skills: 94,
    },
  },
  52874: {
    name: "ميرفت ابو الفتوح محمد ابو الفتوح",
    subject: {
      Arabic: 87,
      Math: 61,
      Science: 85,
      Studies: 83,
      English: 56,
      Religion: 84,
      Computer: 82,
      Skills: 92,
    },
  },
  52897: {
    name: "نورا حازم ابراهيم ابراهيم",
    subject: {
      Arabic: 91,
      Math: 83,
      Science: 91,
      Studies: 83,
      English: 80,
      Religion: 89,
      Computer: 92,
      Skills: 94,
    },
  },
  52920: {
    name: "ولاء محمد السيد يوسف",
    subject: {
      Arabic: 83,
      Math: 79,
      Science: 91,
      Studies: 76,
      English: 82,
      Religion: 86,
      Computer: 75,
      Skills: 95,
    },
  },
  52943: {
    name: "ياسمين عمار عمر عبد المطلب",
    subject: {
      Arabic: 98,
      Math: 96,
      Science: 99,
      Studies: 94,
      English: 98,
      Religion: 93,
      Computer: 86,
      Skills: 96,
    },
  },
};
let userSix = {
  60000: {
    name: "ابراهيم الشحات محمد ابو الفتوح",
    subject: {
      Arabic: 41,
      Math: 42,
      Science: 73,
      Studies: 69,
      English: 65,
      Religion: 96,
      Computer: 0,
      Skills: 0,
    },
  },
  60043: {
    name: "ابراهيم محمد المتولي المتولي",
    subject: {
      Arabic: 96,
      Math: 99,
      Science: 93,
      Studies: 100,
      English: 99,
      Religion: 100,
      Computer: 0,
      Skills: 0,
    },
  },
  60086: {
    name: "احمد السيد بدير عبد الخبير",
    subject: {
      Arabic: 91,
      Math: 96,
      Science: 93,
      Studies: 100,
      English: 96,
      Religion: 97,
      Computer: 0,
      Skills: 0,
    },
  },
  60129: {
    name: "احمد السيد عبد الرازق ابراهيم",
    subject: {
      Arabic: 73,
      Math: 60,
      Science: 91,
      Studies: 86,
      English: 87,
      Religion: 92,
      Computer: 0,
      Skills: 0,
    },
  },
  60172: {
    name: "احمد حسام عطية المتولي",
    subject: {
      Arabic: 88,
      Math: 71,
      Science: 90,
      Studies: 95,
      English: 92,
      Religion: 99,
      Computer: 0,
      Skills: 0,
    },
  },
  60215: {
    name: "ادهم محمود محمود عطا محمود",
    subject: {
      Arabic: 76,
      Math: 83,
      Science: 93,
      Studies: 98,
      English: 87,
      Religion: 99,
      Computer: 0,
      Skills: 0,
    },
  },
  60258: {
    name: "اسلام فرج عطيه قاسم",
    subject: {
      Arabic: 85,
      Math: 82,
      Science: 90,
      Studies: 93,
      English: 74,
      Religion: 97,
      Computer: 0,
      Skills: 0,
    },
  },
  60301: {
    name: "السيد محمد شعبان عوض",
    subject: {
      Arabic: 93,
      Math: 98,
      Science: 97,
      Studies: 98,
      English: 99,
      Religion: 98,
      Computer: 0,
      Skills: 0,
    },
  },
  60344: {
    name: "السيد محمد فرج عبد الرازق",
    subject: {
      Arabic: 92,
      Math: 93,
      Science: 93,
      Studies: 95,
      English: 79,
      Religion: 98,
      Computer: 0,
      Skills: 0,
    },
  },
  60387: {
    name: "ايهاب طارق محمد ابراهيم",
    subject: {
      Arabic: 91,
      Math: 95,
      Science: 93,
      Studies: 98,
      English: 93,
      Religion: 99,
      Computer: 0,
      Skills: 0,
    },
  },
  60430: {
    name: "رزق علي علي رزق ابراهيم",
    subject: {
      Arabic: 87,
      Math: 82,
      Science: 92,
      Studies: 90,
      English: 94,
      Religion: 99,
      Computer: 0,
      Skills: 0,
    },
  },
  60473: {
    name: "زياد محمد ثروت زكي ابراهيم",
    subject: {
      Arabic: 63,
      Math: 74,
      Science: 85,
      Studies: 75,
      English: 68,
      Religion: 96,
      Computer: 0,
      Skills: 0,
    },
  },
  // 60516: {
  //   name: "صلاح ياسر شوقي السعيد",
  //   subject: {
  //     Arabic: 84,
  //     Math: 77,
  //     Science: 85,
  //     Studies: 88,
  //     English: 79,
  //     Religion: 99,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  60559: {
    name: "عادل علاء رشاد ابو الحمد",
    subject: {
      Arabic: 96,
      Math: 96,
      Science: 93,
      Studies: 98,
      English: 97,
      Religion: 100,
      Computer: 0,
      Skills: 0,
    },
  },
  // 60602: {
  //   name: "عبد الرحمن شريف شفيق عبد الكريم",
  //   subject: {
  //     Arabic: 95,
  //     Math: 98,
  //     Science: 90,
  //     Studies: 95,
  //     English: 94,
  //     Religion: 99,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  // 60645: {
  //   name: "عوني عبد الرازق عوض عبد الرازق",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  // 60688: {
  //   name: "فارس ابراهيم احمد محمد",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  60731: {
    name: "فتحي احمد ابو الفتوح عبد الفتاح",
    subject: {
      Arabic: 60,
      Math: 44,
      Science: 86,
      Studies: 81,
      English: 55,
      Religion: 96,
      Computer: 0,
      Skills: 0,
    },
  },
  60774: {
    name: "محمد اشرف رمضان سالم",
    subject: {
      Arabic: 90,
      Math: 63,
      Science: 96,
      Studies: 79,
      English: 84,
      Religion: 96,
      Computer: 0,
      Skills: 0,
    },
  },
  60817: {
    name: "محمد حسن جابر عرفات",
    subject: {
      Arabic: 89,
      Math: 92,
      Science: 97,
      Studies: 88,
      English: 95,
      Religion: 92,
      Computer: 0,
      Skills: 0,
    },
  },
  60851: {
    name: "محمد حماده عبد الهادي علي",
    subject: {
      Arabic: 83,
      Math: 89,
      Science: 90,
      Studies: 84,
      English: 86,
      Religion: 100,
      Computer: 0,
      Skills: 0,
    },
  },
  60885: {
    name: "محمد رضا لطفي احمد غطاس",
    subject: {
      Arabic: 92,
      Math: 100,
      Science: 93,
      Studies: 95,
      English: 100,
      Religion: 98,
      Computer: 0,
      Skills: 0,
    },
  },
  // 60919: {
  //   name: "محمد صلاح عبد الله يوسف جويلي",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  // 60953: {
  //   name: "محمد عزت سعد محمد ابو سريه",
  //   subject: {
  //     Arabic: 42,
  //     Math: 35,
  //     Science: 55,
  //     Studies: 40,
  //     English: 45,
  //     Religion: 60,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  60987: {
    name: "محمد عصام عبد الرازق محمد",
    subject: {
      Arabic: 71,
      Math: 48,
      Science: 84,
      Studies: 60,
      English: 58,
      Religion: 70,
      Computer: 0,
      Skills: 0,
    },
  },
  // 61021: {
  //   name: "محمد علي محمد علي",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  61055: {
    name: "محمود ابراهيم شاهبور محمد",
    subject: {
      Arabic: 81,
      Math: 72,
      Science: 90,
      Studies: 85,
      English: 92,
      Religion: 96,
      Computer: 0,
      Skills: 0,
    },
  },
  61089: {
    name: "مصطفي اسامه النادي عبد الهادي",
    subject: {
      Arabic: 89,
      Math: 100,
      Science: 97,
      Studies: 90,
      English: 96,
      Religion: 95,
      Computer: 0,
      Skills: 0,
    },
  },
  61123: {
    name: "مكرم رضا عبد العليم يوسف",
    subject: {
      Arabic: 75,
      Math: 70,
      Science: 86,
      Studies: 88,
      English: 61,
      Religion: 90,
      Computer: 0,
      Skills: 0,
    },
  },
  61157: {
    name: "نادر محمود احمد محمود",
    subject: {
      Arabic: 57,
      Math: 34,
      Science: 52,
      Studies: 47,
      English: 35,
      Religion: 43,
      Computer: 0,
      Skills: 0,
    },
  },
  61191: {
    name: "نور عبد القادر زكريا عبد القادر",
    subject: {
      Arabic: 73,
      Math: 38,
      Science: 94,
      Studies: 76,
      English: 63,
      Religion: 97,
      Computer: 0,
      Skills: 0,
    },
  },
  61225: {
    name: "ياسين محمد رمضان عبد الغني",
    subject: {
      Arabic: 77,
      Math: 45,
      Science: 87,
      Studies: 83,
      English: 60,
      Religion: 97,
      Computer: 0,
      Skills: 0,
    },
  },
  61259: {
    name: "يوسف ابراهيم ابراهيم ادم",
    subject: {
      Arabic: 89,
      Math: 100,
      Science: 97,
      Studies: 100,
      English: 91,
      Religion: 97,
      Computer: 0,
      Skills: 0,
    },
  },
  61293: {
    name: "يوسف احمد محمد عبيده",
    subject: {
      Arabic: 88,
      Math: 100,
      Science: 100,
      Studies: 98,
      English: 98,
      Religion: 98,
      Computer: 0,
      Skills: 0,
    },
  },
  61327: {
    name: "يوسف محمد عبد الله احمد غطاس",
    subject: {
      Arabic: 89,
      Math: 87,
      Science: 97,
      Studies: 88,
      English: 87,
      Religion: 89,
      Computer: 0,
      Skills: 0,
    },
  },
  // 61361: {
  //   name: "يوسف محمد ممدوح محمد",
  //   subject: {
  //     Arabic: 82,
  //     Math: 61,
  //     Science: 93,
  //     Studies: 72,
  //     English: 66,
  //     Religion: 95,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  61395: {
    name: "اماني صلاح عبد العزيز محمد",
    subject: {
      Arabic: 85,
      Math: 52,
      Science: 92,
      Studies: 88,
      English: 88,
      Religion: 94,
      Computer: 0,
      Skills: 0,
    },
  },
  61429: {
    name: "اسراء جابر السيد المغاوري",
    subject: {
      Arabic: 83,
      Math: 52,
      Science: 89,
      Studies: 80,
      English: 87,
      Religion: 97,
      Computer: 0,
      Skills: 0,
    },
  },
  61463: {
    name: "اسراء محمد عادل محمد",
    subject: {
      Arabic: 87,
      Math: 79,
      Science: 92,
      Studies: 95,
      English: 86,
      Religion: 99,
      Computer: 0,
      Skills: 0,
    },
  },
  // 61497: {
  //   name: "ايمان بدير فتحي السعيد النجار",
  //   subject: {
  //     Arabic: 74,
  //     Math: 74,
  //     Science: 89,
  //     Studies: 84,
  //     English: 82,
  //     Religion: 95,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  61520: {
    name: "بسملة فريد محمد ابو الخير",
    subject: {
      Arabic: 70,
      Math: 60,
      Science: 89,
      Studies: 78,
      English: 72,
      Religion: 92,
      Computer: 0,
      Skills: 0,
    },
  },
  61543: {
    name: "بسمله عبد المعطي صبري عبد الرازق",
    subject: {
      Arabic: 91,
      Math: 68,
      Science: 86,
      Studies: 88,
      English: 98,
      Religion: 97,
      Computer: 0,
      Skills: 0,
    },
  },
  61566: {
    name: "بسمله محمد محمد زاكي ابراهيم",
    subject: {
      Arabic: 58,
      Math: 79,
      Science: 86,
      Studies: 85,
      English: 98,
      Religion: 94,
      Computer: 0,
      Skills: 0,
    },
  },
  61589: {
    name: "بسمله مكرم ابو خليل محمد",
    subject: {
      Arabic: 78,
      Math: 58,
      Science: 86,
      Studies: 92,
      English: 92,
      Religion: 94,
      Computer: 0,
      Skills: 0,
    },
  },
  61612: {
    name: "جانا محمد حسام سعد المحمدي",
    subject: {
      Arabic: 94,
      Math: 92,
      Science: 97,
      Studies: 98,
      English: 100,
      Religion: 100,
      Computer: 0,
      Skills: 0,
    },
  },
  61635: {
    name: "جنه محمود علي رجب زلمه",
    subject: {
      Arabic: 85,
      Math: 78,
      Science: 97,
      Studies: 100,
      English: 94,
      Religion: 97,
      Computer: 0,
      Skills: 0,
    },
  },
  // 61658: {
  //   name: "جني ابراهيم عوض السعيد",
  //   subject: {
  //     Arabic: 74,
  //     Math: 96,
  //     Science: 93,
  //     Studies: 95,
  //     English: 100,
  //     Religion: 100,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  61681: {
    name: "جودي احمد عبيدة المتولي",
    subject: {
      Arabic: 92,
      Math: 89,
      Science: 93,
      Studies: 100,
      English: 96,
      Religion: 94,
      Computer: 0,
      Skills: 0,
    },
  },
  61704: {
    name: "جودي محمد ابو السادات منصور",
    subject: {
      Arabic: 93,
      Math: 97,
      Science: 92,
      Studies: 98,
      English: 100,
      Religion: 100,
      Computer: 0,
      Skills: 0,
    },
  },
  61727: {
    name: "جومانا ماجد السيد ابو خليل",
    subject: {
      Arabic: 74,
      Math: 79,
      Science: 92,
      Studies: 93,
      English: 97,
      Religion: 99,
      Computer: 0,
      Skills: 0,
    },
  },
  61750: {
    name: "حبيبه محمود محمد محمود",
    subject: {
      Arabic: 70,
      Math: 49,
      Science: 90,
      Studies: 78,
      English: 87,
      Religion: 99,
      Computer: 0,
      Skills: 0,
    },
  },
  // 61773: {
  //   name: "حنين ابراهيم فريد الشربيني",
  //   subject: {
  //     Arabic: 78,
  //     Math: 50,
  //     Science: 93,
  //     Studies: 95,
  //     English: 90,
  //     Religion: 99,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  61796: {
    name: "رحمه السيد عبد النبي السيد",
    subject: {
      Arabic: 83,
      Math: 96,
      Science: 93,
      Studies: 97,
      English: 100,
      Religion: 100,
      Computer: 0,
      Skills: 0,
    },
  },
  61819: {
    name: "ساره محمد نجيب حسن",
    subject: {
      Arabic: 86,
      Math: 62,
      Science: 86,
      Studies: 97,
      English: 90,
      Religion: 94,
      Computer: 0,
      Skills: 0,
    },
  },
  61842: {
    name: "عائشة السيد احمد المتولي",
    subject: {
      Arabic: 94,
      Math: 94,
      Science: 97,
      Studies: 100,
      English: 100,
      Religion: 98,
      Computer: 0,
      Skills: 0,
    },
  },
  61865: {
    name: "علياء محمود فريد الشربيني",
    subject: {
      Arabic: 74,
      Math: 80,
      Science: 76,
      Studies: 84,
      English: 66,
      Religion: 90,
      Computer: 0,
      Skills: 0,
    },
  },
  // 61888: {
  //   name: "فرح زينهم سعد المنجي",
  //   subject: {
  //     Arabic: 59,
  //     Math: 66,
  //     Science: 84,
  //     Studies: 85,
  //     English: 54,
  //     Religion: 88,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  61911: {
    name: "مروه علي عبد الغني عبد الهادي",
    subject: {
      Arabic: 96,
      Math: 100,
      Science: 97,
      Studies: 98,
      English: 99,
      Religion: 98,
      Computer: 0,
      Skills: 0,
    },
  },
  // 61934: {
  //   name: "مريم محمد شعبان ابراهيم احمد شحاته",
  //   subject: {
  //     Arabic: 0,
  //     Math: 0,
  //     Science: 0,
  //     Studies: 0,
  //     English: 0,
  //     Religion: 0,
  //     Computer: 0,
  //     Skills: 0,
  //   },
  // },
  61957: {
    name: "مريم نصر احمد ابراهيم",
    subject: {
      Arabic: 94,
      Math: 92,
      Science: 100,
      Studies: 100,
      English: 100,
      Religion: 95,
      Computer: 0,
      Skills: 0,
    },
  },
  61975: {
    name: "ملك ابراهيم عوض هلال العفيفي",
    subject: {
      Arabic: 87,
      Math: 84,
      Science: 90,
      Studies: 95,
      English: 88,
      Religion: 97,
      Computer: 0,
      Skills: 0,
    },
  },
  61993: {
    name: "ملك محسن فهمي سيبويه",
    subject: {
      Arabic: 95,
      Math: 98,
      Science: 97,
      Studies: 97.5,
      English: 94,
      Religion: 95,
      Computer: 0,
      Skills: 0,
    },
  },
  62011: {
    name: "ملك محمد شعبان المتولي",
    subject: {
      Arabic: 77,
      Math: 94,
      Science: 86,
      Studies: 95,
      English: 77,
      Religion: 72,
      Computer: 0,
      Skills: 0,
    },
  },
  62029: {
    name: "ملك محمد منصور عباس",
    subject: {
      Arabic: 55,
      Math: 78,
      Science: 79,
      Studies: 81,
      English: 61,
      Religion: 77,
      Computer: 0,
      Skills: 0,
    },
  },
  62047: {
    name: "ملك محمد يحيى محمود",
    subject: {
      Arabic: 37,
      Math: 64,
      Science: 70,
      Studies: 77.5,
      English: 45,
      Religion: 64,
      Computer: 0,
      Skills: 0,
    },
  },
  62065: {
    name: "مني السيد المتولي ابراهيم",
    subject: {
      Arabic: 95,
      Math: 100,
      Science: 97,
      Studies: 100,
      English: 99,
      Religion: 98,
      Computer: 0,
      Skills: 0,
    },
  },
  62083: {
    name: "مى ابو الفتوح محمد ابو الفتوح",
    subject: {
      Arabic: 73,
      Math: 98,
      Science: 83,
      Studies: 88,
      English: 61,
      Religion: 77,
      Computer: 0,
      Skills: 0,
    },
  },
  62101: {
    name: "ندى ياسر عزمي احمد",
    subject: {
      Arabic: 98,
      Math: 88,
      Science: 93,
      Studies: 97.5,
      English: 97,
      Religion: 98,
      Computer: 0,
      Skills: 0,
    },
  },
  62119: {
    name: "ندي منصور محمد محمد",
    subject: {
      Arabic: 77,
      Math: 60,
      Science: 93,
      Studies: 87.5,
      English: 89,
      Religion: 88,
      Computer: 0,
      Skills: 0,
    },
  },
  62137: {
    name: "نورا طارق عادل السيد",
    subject: {
      Arabic: 97,
      Math: 92,
      Science: 97,
      Studies: 97.5,
      English: 96,
      Religion: 98,
      Computer: 0,
      Skills: 0,
    },
  },
  62155: {
    name: "ياسمين سعد مصطفي السيد",
    subject: {
      Arabic: 57,
      Math: 58,
      Science: 72,
      Studies: 95,
      English: 50,
      Religion: 84,
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

// Open Select
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
        total.innerHTML = userFour[number.value].subject.total;
        userName.innerHTML = userFour[number.value].name;
        tops.innerHTML = userFour[number.value].rank;
        userFour[number.value].subject.total >= 680
          ? (rate.innerHTML = "فاق التوقعات")
          : total.innerHTML >= 520
          ? (rate.innerHTML = "امتلك المعارف و المهارات")
          : total.innerHTML >= 400
          ? (rate.innerHTML = "في حاجة إلي دعم")
          : (rate.innerHTML = "لم يتقن المعارف");
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
        total.innerHTML = userFive[number.value].subject.total;
        userFive[number.value].subject.total >= 680
          ? (rate.innerHTML = "فاق التوقعات")
          : total.innerHTML >= 520
          ? (rate.innerHTML = "امتلك المعارف و المهارات")
          : total.innerHTML >= 400
          ? (rate.innerHTML = "في حاجة إلي دعم")
          : (rate.innerHTML = "لم يتقن المعارف");
        tops.innerHTML = userFive[number.value].rank;
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
        total.innerHTML = userSix[number.value].subject.total;
        userSix[number.value].subject.total >= 425
          ? (rate.innerHTML = "ممتاز")
          : total.innerHTML >= 375
          ? (rate.innerHTML = "جيد جدا")
          : total.innerHTML >= 325
          ? (rate.innerHTML = "جيد")
          : total.innerHTML >= 250
          ? (rate.innerHTML = "مقبول")
          : (rate.innerHTML = "دون مستوى");
        tops.innerHTML = userSix[number.value].rank;
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
