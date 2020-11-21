function censoredWords(text, word) {
  let start = text.indexOf(word);

  while (start != -1) {
    let first = text.substring(0, start);

    let second = text.substring(start + word.length)

    text = first + "*".repeat(word.length) + second

    start = text.indexOf(word);
  }
  console.log(text)
}
censoredWords("A small sentance with some words", "small");
