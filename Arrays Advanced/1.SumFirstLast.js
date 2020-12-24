/*
Write a function that calculates and prints the sum of the first and the last elements in an array.
The input comes as array of string elements holding numbers.
The output is the return value of your function.
*/
function sum(arr) {
  let finalsum = Number(arr[0]) + Number(arr[arr.length - 1]);
  console.log(finalsum);
}
sum(["20", "30", "40"]);

