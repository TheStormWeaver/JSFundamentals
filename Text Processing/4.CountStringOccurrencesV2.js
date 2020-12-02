/*
Write a function that receives a text and a string that you need to search. Print all the occurrences of that word in
the string.
*/
function countStrOccurrs(text, word) {
  let result = text.split(" ").filter(c => c == word).length
  console.log(result)
}
countStrOccurrs("This is a word and it also is a sentance", "is");
