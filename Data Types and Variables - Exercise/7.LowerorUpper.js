/*
Write a function that prints whether a given character is upper-case or lower-case.
*/
function solve(char) {
  let uppercase = char.toUpperCase()
  if(char == uppercase){
    console.log("upper-case")
  }else{
    console.log("lower-case")
  }
}
solve("l");
