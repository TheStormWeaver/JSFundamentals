/*
Write a function that receives a text and a word to remove all occurrences of it inside the text.
*/
function matchPhone(word, text) {
  let current = "";
  let final = "";
  while (text.includes(word)) {
    current = text.indexOf(word);
    final = current + word.length - 1;
    text = text.split("");
    for (let i = current; i <= final; i++) {
      text.splice(current, 1);
    }
    text = text.join("");
  }
  console.log(text)
}
