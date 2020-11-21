function censoredWords(text, word) {
  while (text.includes(word)) {
    text = text.replace(word, "*".repeat(word.length));
  }
  console.log(text);
}
censoredWords("A small sentance with some words", "small");
