/*
Write a function which as input will receive a number.
Check and print if it is amazing or not into the following format:
"{number} Amazing? {result}";
An amazing number is one that includes the digit 9 the sum of its digits.
Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)
*/
function solve(num) {
  let numasstring = num.toString()
  let sum = 0
  for(let i = 0; i < numasstring.length; i++){
    sum+= Number(numasstring[i])
  }
  let sumasstring =sum.toString()
  if( sumasstring.includes("9")){
    console.log(`${num} Amazing? True`)
  }else{
    console.log(`${num} Amazing? False`)
  }
}
solve(1233);
