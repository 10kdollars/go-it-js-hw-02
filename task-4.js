const formatString = function(string) {
  const symbol = string.split("");
  console.log(symbol);
  if (symbol.length < 40) {
    const newString = string;
    console.log(newString);
  } else {
    symbol[39] = "...";
    const newSymbol = symbol.splice(0, 40);
    newString = newSymbol.join("");
    console.log(newString);
  }
};
formatString("Nunc sed turpis..");
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// вернется форматированная строка
