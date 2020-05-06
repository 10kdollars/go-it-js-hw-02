const checkForSpam = function(message) {
  const checkMassive = message.split(" ");
  for (const Word of checkMassive) {
    const word = Word.toLowerCase();
    if (word === "spam" || word === "sale") {
      console.log(false);
      break;
    } else {
      console.log(true);
      break;
    }
  }
};
checkForSpam("Latest spam");
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
