function replaceRepeatingChars(str) {
  result = ""
  for (let i = 0; i < str.length; i++) {
    if(str[i] == str[i + 1]){
    }else{
      result += str[i]
    }
  }
  console.log(result)
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
