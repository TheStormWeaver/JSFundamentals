function timesofHashTag(text) {
  text = text.split(" ")
  let result = []
  for (let word of text) {
    if(word.startsWith("#") && word.length > 1){
      word = word.slice(1)
      let isonlyletters = true
      for (const char of word) {
        let symbol = char.charCodeAt()
        if(symbol < 65 || symbol > 90 && symbol < 97 || symbol > 122){
          isonlyletters = false;
          break;
        }
      }
      if(isonlyletters){
        
        console.log(word)
      }
    }
  }
}
timesofHashTag(
  'Nowadays everyone uses # to tag a #special word in #socialMedia'
);
