/*
Write a function that receives a text as a first parameter and a single word as a second. Find all occurrences of that
word in the text and replace them with the corresponding count of "*".
*/
function censoredWords(text, word) {
  let result = text.split(word).join("*".repeat(word.length))

  console.log(result)
}
censoredWords("A small sentance with some words", "small");
