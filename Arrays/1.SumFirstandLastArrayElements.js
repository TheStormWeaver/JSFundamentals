/*
Write a function that receives an array of strings and prints the sum of first and last element in that array.
*/
function solve(arr) {
  let sum = arr[0] + arr[arr.length-1]
  console.log(sum)
}
solve([20, 30, 20 , 100, 2]);
