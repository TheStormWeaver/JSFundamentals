function censoredWords(text, word) {
  let result = text.split(word).join("*".repeat(word.length))

  console.log(result)
}
censoredWords("A small sentance with some words", "small");
