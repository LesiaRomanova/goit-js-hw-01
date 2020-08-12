// "user script";
// //let country;

// const doLiveIsKitaj = "китай";
// const doLiveIsChile = "чили";
// const doLiveIsAustralia = "австралия";
// const doLiveIsIndia = "индия";
// const doLiveIsJamaica = "ямайка";
// const kitajPrice = 100;
// const chilePrice = 250;
// const australiaPrice = 170;
// const indiaPrice = 80;
// const jamaicaPrice = 120;

// const country = prompt("Введите страну для доставки");
// if (country === null) {
//   alert("Отмена пользователем");
// } else {
//   // country = country.toLowerCase();

//   switch (country.toLocaleLowerCase()) {
//     case doLiveIsKitaj:
//       alert(`"Доставка в китай будет стоить ${kitajPrice} кредитов `);
//       break;
//     case doLiveIsChile:
//       alert(`"Доставка в китай будет стоить ${chilePrice} кредитов `);
//       break;
//     case doLiveIsAustralia:
//       alert(`"Доставка в китай будет стоить ${australiaPrice} кредитов `);
//       break;
//     case doLiveIsIndia:
//       alert(`"Доставка в китай будет стоить ${isIndiaPrice} кредитов `);
//       break;
//     case doLiveIsJamaica:
//       alert(`"Доставка в китай будет стоить ${jamaicaPrice} кредитов `);
//       break;

//     default:
//       alert("В вашей стране доставка не доступна");
//   }
// }

"user script";
//let country;

const doLiveIsKitaj = "китай";
const doLiveIsChile = "чили";
const doLiveIsAustralia = "австралия";
const doLiveIsIndia = "индия";
const doLiveIsJamaica = "ямайка";
const kitajPrice = 100;
const chilePrice = 250;
const australiaPrice = 170;
const indiaPrice = 80;
const jamaicaPrice = 120;

const country = prompt("Введите страну для доставки");
if (country !== null) {
  // country = country.toLowerCase();

  switch (country.toLocaleLowerCase()) {
    case doLiveIsKitaj:
      alert(`"Доставка в китай будет стоить ${kitajPrice} кредитов `);
      break;
    case doLiveIsChile:
      alert(`"Доставка в китай будет стоить ${chilePrice} кредитов `);
      break;
    case doLiveIsAustralia:
      alert(`"Доставка в китай будет стоить ${australiaPrice} кредитов `);
      break;
    case doLiveIsIndia:
      alert(`"Доставка в китай будет стоить ${isIndiaPrice} кредитов `);
      break;
    case doLiveIsJamaica:
      alert(`"Доставка в китай будет стоить ${jamaicaPrice} кредитов `);
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
}
