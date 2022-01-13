const Value1 = 3;
const Value2 = 4;

console.log(3 * 4);

const Value3 = 16;
const Value4 = 2;

console.log(16 / 2);

const Value5 = 51;
const Value6 = 31;

console.log(51 + 31);

console.log(typeof 11);

console.log(typeof true);

console.log(typeof "java script");

console.log(typeof "100");

let num1 = 1;

console.log((num2 = num1 += 11));
console.log((num2 = num1 -= 11));
console.log((num2 = num1 *= 11));
console.log((num2 = num1 /= 11));
console.log((num2 = num1++));
console.log((num2 = num1--));

const n = prompt("Введите число");
alert(n * n);

const Value8 = Number(
  prompt("Введите число")
);
const Valu9 = Number(
  prompt("Введите число")
);

alert((Value8 + Valu9) / 2);

const minutes = prompt(
  "Введите количество минут"
);

alert(minutes * 60);

const greeting = "Hello, ";

const userName = prompt(
  "Введите имя пользователя"
);

alert(greeting + userName);

const a = prompt("Введите число");
if (a == 10) {
  alert("Верно");
} else {
  alert("Неверно");
}

const test = prompt("Введите test");

if (test == "test") {
  alert("Верно");
} else {
  alert("Неверно");
}

const test1 = prompt("Введите test1");

if (test1 != "test1") {
  alert("Неверно");
} else {
  alert("Верно");
}

const Value10 = prompt("Введите число");

if (Value10 < 500) {
  alert(Value10);
} else if (Value10 < 800) {
  alert(Value10 - Value10 * 0.03);
} else {
  alert(Value10 - Value10 * 0.05);
}

for (let i = 25; i >= 0; i--) {
  console.log(i);
}

let i1 = 25;
while (i1 >= 0) {
  console.log(i1);
  i1--;
}

for (let i2 = 10; i2 <= 50; i2++) {
  if (!(i2 % 5)) {
    console.log(i2);
  }
}

let i3 = 10;
while (i3 <= 50) {
  if (!(i3 % 5)) {
    console.log(i3);
  }
  i3++;
}

let sum = 0;
for (let i4 = 1; i4 <= 100; i4++) {
  sum += i4;
}
console.log(sum);

let sumWhile = 0;
let i5 = 1;
while (i5 <= 100);
{
  sumWhile += i5;
  i5++;
  console.log(sumWhile);
}

let dateIsValid = false;
let dayNr;
while (!dateIsValid) {
  dayNr = Number(
    prompt("Введите номер дня недели")
  );
  if (
    !Number.isInteger(dayNr) ||
    dayNr < 1 ||
    dayNr > 7
  ) {
    alert("Неправильно введено число");
  } else {
    dateIsValid = true;
  }
}
const days = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресень",
];
const day = days[dayNr - 1];
alert(day);

const day1 = Number(
  prompt("Введите номер дня месяца")
);

if ((day1 >= 1) & (day1 < 11)) {
  alert("Первая декада");
} else if (day1 < 21)
  alert("Вторая декада");
else if (day1 <= 31)
  alert("Третья декада");
else alert("Неправильно введено число");
