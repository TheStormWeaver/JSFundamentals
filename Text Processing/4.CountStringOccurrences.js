/*
Write a function that receives a text and a string that you need to search. Print all the occurrences of that word in
the string.
*/
function countStrOccurrs(text, word) {
  let words = text.split(" ")
  let counter = 0
  for (const current of words) {
    if(current == word){
      counter++;
    }
  }
  console.log(counter);
}
countStrOccurrs("This is a word and it also is a sentance", "is");
