// Написать функцию sumDigits(x), получить сумму цифр пересланного в аргументах числа;
// Написать функцию luckyNumber(x), реализовать проверку числа на "счастливость";

const task = document.getElementById('task');
const numberDigitsForm = document.getElementById('numberDigitsForm');
const numberDigitsForm1 = document.getElementById('numberDigitsForm1');
const numberForm = document.getElementById('numberForm');
const resultForm = document.getElementById('resultForm');

task.textContent = 'Task8';
task.style.fontSize = 22 + 'px';

let randomNumber = Math.random() * 1000_000;

randomNumber = Math.round(randomNumber);

const numberDigits = ('' + randomNumber).length;

const number = sumDigits(randomNumber);

console.log(randomNumber);
console.log(number);
console.log(numberDigits);

const lucky = luckyNumber(randomNumber, numberDigits);

console.log(lucky);

function task1() {
  numberDigitsForm.textContent = 'Случайное число: ' + randomNumber;
  numberDigitsForm.style.marginTop = 10 + 'px';
  numberDigitsForm.style.color = 'blue';

  numberForm.textContent = 'Сумма цифр: ' + number;
  numberForm.style.marginTop = 4 + 'px';
  numberForm.style.color = 'red';
  numberForm.style.marginBottom = 20 + 'px';
}

function task2() {
  numberDigitsForm1.textContent = 'Случайное число: ' + randomNumber;
  numberDigitsForm1.style.marginTop = 10 + 'px';
  numberDigitsForm1.style.color = 'blue';

  if (lucky) {
    resultForm.textContent = 'Удача';
    resultForm.style.color = 'green';
  } else {
    resultForm.textContent = 'Не повезло';
    resultForm.style.color = 'red';
  }
}

function sumDigits(number) {
  let sumDigits = 0;

  while (number > 0) {
    sumDigits += number % 10;
    number = Math.floor(number / 10);
  }
  return sumDigits;
}

function luckyNumber(number, numberDigits) {
  if (numberDigits % 2 == 0) {
    let numberX = 0;
    let numberY = 0;

    let count = numberDigits / 2;

    while (count > 0) {
      numberX += number % 10;
      number = Math.floor(number / 10);
      count--;
    }

    count = numberDigits / 2;

    while (count > 0) {
      numberY += number % 10;
      number = Math.floor(number / 10);
      count--;
    }

    return numberX === numberY;
  } else {
    console.log('Число должно быть чётное');
    return 0;
  }
}
