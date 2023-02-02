let password = [
  "40000",
  "40043",
  "40086",
  "40129",
  "40172",
  "40215",
  "40258",
  "40301",
  "40344",
  "40387",
  "40430",
  "40473",
  "40516",
  "40559",
  "40602",
  "40645",
  "40688",
  "40731",
  "40774",
  "40817",
  "40851",
  "40885",
  "40919",
  "40953",
  "40987",
  "41021",
  "41055",
  "41089",
  "41123",
  "41157",
  "41191",
  "41225",
  "41259",
  "41293",
  "41327",
  "41361",
  "41395",
  "41429",
  "41463",
  "41497",
  "41520",
  "41543",
  "41566",
  "41589",
  "41612",
  "41635",
  "41658",
  "41681",
  "41704",
  "41727",
  "41750",
  "41773",
  "41796",
  "41819",
  "41842",
  "41865",
  "41888",
  "41911",
  "41934",
  "41957",
  "42011",
  "42065",
  "42119",
  "42173",
  "42227",
  "42281",
  "42335",
  "42389",
  "42443",
  "42497",
  "42551",
  "42605",
  "42659",
  "42713",
  "42767",
  "42821",
  "42875",
  "42929",
  "42983",
  "43037",
  "43073",
  "43109",
  "43145",
  "43181",
  "43217",
  "43253",
  "43289",
  "43325",
  "43361",
  "43397",
  "43433",
  "43469",
  "50000",
  "50056",
  "50112",
  "50168",
  "50224",
  "50280",
  "50336",
  "50392",
  "50448",
  "50504",
  "50560",
  "50616",
  "50672",
  "50728",
  "50784",
  "50840",
  "50896",
  "50952",
  "51008",
  "51064",
  "51109",
  "51154",
  "51199",
  "51244",
  "51289",
  "51334",
  "51379",
  "51424",
  "51469",
  "51514",
  "51559",
  "51604",
  "51649",
  "51694",
  "51739",
  "51784",
  "51829",
  "51874",
  "51919",
  "51964",
  "51998",
  "52032",
  "52066",
  "52100",
  "52134",
  "52168",
  "52202",
  "52236",
  "52270",
  "52304",
  "52338",
  "52372",
  "52406",
  "52440",
  "52474",
  "52508",
  "52542",
  "52576",
  "52610",
  "52644",
  "52667",
  "52690",
  "52713",
  "52736",
  "52759",
  "52782",
  "52805",
  "52828",
  "52851",
  "52874",
  "52897",
  "52920",
  "52943",
  "60000",
  "60043",
  "60086",
  "60129",
  "60172",
  "60215",
  "60258",
  "60301",
  "60344",
  "60387",
  "60430",
  "60473",
  "60516",
  "60559",
  "60602",
  "60645",
  "60688",
  "60731",
  "60774",
  "60817",
  "60851",
  "60885",
  "60919",
  "60953",
  "60987",
  "61021",
  "61055",
  "61089",
  "61123",
  "61157",
  "61191",
  "61225",
  "61259",
  "61293",
  "61327",
  "61361",
  "61395",
  "61429",
  "61463",
  "61497",
  "61520",
  "61543",
  "61566",
  "61589",
  "61612",
  "61635",
  "61658",
  "61681",
  "61704",
  "61727",
  "61750",
  "61773",
  "61796",
  "61819",
  "61842",
  "61865",
  "61888",
  "61911",
  "61934",
  "61957",
  "61975",
  "61993",
  "62011",
  "62029",
  "62047",
  "62065",
  "62083",
  "62101",
  "62119",
  "62137",
  "62155",
];

let inputPass = document.querySelector(".pass");

window.onload = () => {
  inputPass.focus();
};

inputPass.oninput = () => {
  for (let i = 0; i < password.length; i++) {
    if (inputPass.value == password[i]) {
      document.querySelectorAll(".blur").forEach((ele) => {
        ele.classList.remove("blur");
      });
      inputPass.remove();
    }
  }
  if (inputPass.value[0] == "4") {
    four.style.display = "block";
    fourBox.style.display = "grid";

    five.style.display = "none";
    fiveBox.style.display = "none";

    six.style.display = "none";
    sixBox.style.display = "none";
  } else if (inputPass.value[0] == "5") {
    four.style.display = "none";
    fourBox.style.display = "none";

    five.style.display = "block";
    fiveBox.style.display = "grid";

    six.style.display = "none";
    sixBox.style.display = "none";
  } else if (inputPass.value[0] == "6") {
    four.style.display = "none";
    fourBox.style.display = "none";

    five.style.display = "none";
    fiveBox.style.display = "none";

    six.style.display = "block";
    sixBox.style.display = "grid";
  }
};

let four = document.querySelector(".four");
let fourBox = document.querySelector(".four_box");
let five = document.querySelector(".five");
let fiveBox = document.querySelector(".five_box");
let six = document.querySelector(".six");
let sixBox = document.querySelector(".six_box");

// window.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// });

// document.onkeydown = (e) => {
//   let num = 0;
//   let ctrl;
//   e.ctrlKey !== false ? (ctrl = true) : "";
//   e.keyCode == 85 ? (num = 85) : "";
//   if (num == 85 && ctrl == true) {
//     e.preventDefault();
//   }
// };
