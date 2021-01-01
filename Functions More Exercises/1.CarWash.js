/*
Write a JS function that receives some commands. Depending on the command add a percentage of how much the
car is cleaned. Start from 0. The first command will always be "soap":
 soap – add 10 to the value
 water – increase the value with 20%
 vacuum cleaner – increase the value with 25%
 mud – decrease the value with 10%
The input comes as an array strings. When finished cleaning the car, print the resulting value in the format:
"The car is {value}% clean." The value should be rounded to the second decimal point.
*/
function carWash(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let command = arr[i];
    if (command === "soap") {
      result += 10;
    } else if (command === "water") {
      result += result * 0.20;
    } else if (command === "vacuum cleaner") {
      result += result * 0.25;
    } else if (command === "mud"){
      result -= result * 0.10;
    }
  }
  console.log(`The car is ${result.toFixed(2)}% clean.`);
}
carWash(["soap","soap","vacuum cleaner","mud","soap","water"]);
