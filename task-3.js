const findLongestWord = function(string) {
  const words = string.split(" ");

  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  console.log(longestWord);
};
findLongestWord("The quick brown fox jumped over the lazy dog");
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'
