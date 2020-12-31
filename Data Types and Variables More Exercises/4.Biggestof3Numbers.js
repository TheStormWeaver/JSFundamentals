/*
Write a function that finds the biggest of 3 numbers.
The input comes as 3 parameters.
The output is the biggest from the input numbers.
Write a function that reads an 8-bit binary number and converts it to a decimal.
The input comes as one string element, representing a binary number.
The output should be printed to the console.
*/
function maxNum(a, b, c) {
  let max = Number.MIN_SAFE_INTEGER
  if (a >= b && a >= c){
    max = a
  }
  if(b >= a && b >= c){
    max = b
  }
  if(c >= a && c >= b){
    max = c
  }
  console.log(max)
}
maxNum(-2, 3, 7);
