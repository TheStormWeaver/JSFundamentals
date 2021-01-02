/*
Write a function that calculates and returns the value of a number raised to a given power:
*/
function solve(num, loop) {
  let result = 1
  for (let i = 0; i < loop; i++) {
    result = result * num 
  }
  console.log(result)
}
solve(2, 8);
