/*
Write a function that receives a text and a string that you need to search. Print all the occurrences of that word in
the string.
*/
function countStrOccurrs(text, word) {
  let matcher = ` ${word} `
  text = ` ${text} `
  let index = text.indexOf(matcher)
  let count = 0
  while(index != -1){
    count++;
    index = text.indexOf(matcher, index + 1)
  }
  console.log(count)
}
countStrOccurrs("This is a word and it also is a sentance", "is");
