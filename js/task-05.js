"user script";
//let country;

const doLiveIsKitajPrice = 100;
const doLiveIsChilePrice = 250;
const doLiveIsAustraliaPrice = 170;
const doLiveIsIndiaPrice = 80;
const doLiveIsJamaicaPrice = 120;

let country = prompt("Введите страну для доставки");
if (country !== null) {
  // country = country.toLowerCase();

  switch (country.toLocaleLowerCase()) {
    case doLiveIsKitajPrice:
      alert(`"Доставка в китай будет стоить ${doLiveIsChilePrice} кредитов `);
      break;
    case doLiveIsChilePrice:
      alert(`"Доставка в китай будет стоить ${doLiveIsChilePrice} кредитов `);
      break;
    case doLiveIsAustraliaPrice:
      alert(
        `"Доставка в китай будет стоить ${doLiveIsAustraliaPrice} кредитов `
      );
      break;
    case doLiveIsIndiaPrice:
      alert(`"Доставка в китай будет стоить ${doLiveIsIndiaPrice} кредитов `);
      break;
    case doLiveIsJamaicaPrice:
      alert(`"Доставка в китай будет стоить ${doLiveIsJamaicaPrice} кредитов `);
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
}
