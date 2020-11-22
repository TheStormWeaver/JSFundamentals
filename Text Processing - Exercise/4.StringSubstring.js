function strSubstring(word, text) {
  text = text.toLowerCase().split(" ")
  if(text.includes(word.toLowerCase())){
    console.log(`${word}`)
  }else{
    console.log(`${word} not found!`)
  }
}
strSubstring("javascript", "JavaScript is the best programming language");
