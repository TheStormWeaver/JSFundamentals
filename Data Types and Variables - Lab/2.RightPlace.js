/*
You will receive 3 parameters (string, char, string).
First string will be a word with a missing char replaced with a underscore &#39;_&#39;
You have to replace the character with the missing part (underscore) from the first string and compare the
result with the second string.
If they are equals you should print "Matched", otherwise print "Not Matched".
*/
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
