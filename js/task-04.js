"user script";

let credits = 23580;
const pricePerDroid = 3000;
// let totalPrice;

const input = prompt("Какое количество дроидов вы хотите приобрести?");

if (input === null) {
  alert("Отменено пользователем!");
} else {
  const totalPrice = input * pricePerDroid;
  if (totalPrice > credits) {
    alert("Недостаточно средств на счету");
  } else {
    alert(
      `Вы купили ${input} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`
    );
  }
}
