function pascalCaseSplitter(str) {
  let capitalIndex = 0
  let result = []
  for (let i = 1; i < str.length; i++) {
    if(str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90){
      let word = str.substring(capitalIndex, i)
      result.push(word)
      capitalIndex = i
    }
  }
  result.push(str.substring(capitalIndex, str.length))
  console.log(result.join(", "))
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
