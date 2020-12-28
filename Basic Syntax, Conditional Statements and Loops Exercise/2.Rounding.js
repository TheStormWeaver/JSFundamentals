/*
Write a JS function that rounds numbers to specific precision.
The input comes as two numbers. The first value is the number to be rounded and the second is the precision
(significant decimal places). If a precision is passed, that is more than 15 it should automatically be reduced to 15.
Remove trailing zeroes, if any (you can use parseFloat())
The output should be printed to the console. Do not print insignificant decimals.
*/
function solve(num1, precision) {
  if(precision > 15){
    precision = 15
  }
  num1 = num1.toFixed(precision)
  console.log(parseFloat(num1))
}
solve(3.1415926535897932384626433832795, 2);
