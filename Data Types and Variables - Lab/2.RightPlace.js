function solve(word,symbol,template) {
  let result = word.replace("_",symbol)
  let match = result == template
  if(match){
    console.log("Matched")
  }else{
    console.log("Not Matched")
  }
}
solve("Str_ng","o","Strong");
