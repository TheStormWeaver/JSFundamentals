/*
The input will be given as two separated strings.
Write a function that checks given text for containing a given word. The comparison should be case insensitive. Once you find match, print the word and stop the program. 
If you don't find the word print "{word} not found!"
*/
function strSubstring(word, text) {
  text = text.toLowerCase().split(" ")
  if(text.includes(word.toLowerCase())){
    console.log(`${word}`)
  }else{
    console.log(`${word} not found!`)
  }
}
strSubstring("javascript", "JavaScript is the best programming language");
