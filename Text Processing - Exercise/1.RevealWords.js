/*
Write a function, which receives two parameters. 
The first parameter will be a string with some words separated by ', '.
The second parameter will be a string which contains templates containing '*'.
Find the word with the exact same length as the template and replace it.
*/
function revealWords(words, text) {
  words = words.split(", ");

  for (const word of words) {
    let stars = "*".repeat(word.length);

    text = text.replace(stars, word);
  }
  console.log(text);
}
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
