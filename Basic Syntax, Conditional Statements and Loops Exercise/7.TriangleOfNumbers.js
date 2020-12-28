/*
Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.
Constraints
n will be in the interval [1...20].
*/
function solve(num) {
  for (let i = 1; i <= num; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += i + " ";
    }
    console.log(line);
  }
}
solve(6)
