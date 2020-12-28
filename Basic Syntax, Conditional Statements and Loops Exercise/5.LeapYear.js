/*
Write a JS function to check whether a year is leap. Leap years are either divisible by 4 but not by 100 or are divisible
by 400. Return the result like examples below:
*/
function solve(num) {
  if(num % 4 == 0 & num % 100 !== 0 || num % 400 == 0){
    console.log("yes")
  }else{
    console.log("no")
  }
}
solve(1984);
