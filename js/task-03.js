"user script";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const input = prompt("Введите пароль");

if (input === null) {
  message = "Отмена пользователем!";
} else if (input === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль";
}

alert(message);
