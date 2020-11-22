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
