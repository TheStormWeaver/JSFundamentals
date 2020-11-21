function countStrOccurrs(text, word) {
  let result = text.split(" ").filter(c => c == word).length
  console.log(result)
}
countStrOccurrs("This is a word and it also is a sentance", "is");
