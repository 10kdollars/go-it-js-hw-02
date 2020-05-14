const numbers = [];
let total = 0;
let input;

do {
  input = prompt("Введи число!");
  numbers.push(input);
} while (input !== null);

for (const num of numbers) {
  total += Number(num);
}
alert(`Общая сумма чисел равна ${total}`);
