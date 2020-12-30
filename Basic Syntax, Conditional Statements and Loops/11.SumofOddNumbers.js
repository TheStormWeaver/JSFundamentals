/*
Write a program that prints the next n odd numbers (starting from 1) and on the last row prints the sum of them.
Input
You will receive a number – n. This number shows how many odd numbers you should print.
Output
Print the next n odd numbers, starting from 1, separated by new lines. On the last line, print the sum of these
numbers.
Constraints
n will be in the interval [1…100]
*/
function solve(n) {
  let sum = 0;
  for (let current = 1, count = 0; count < n; current += 2, count++) {
    console.log(current)
    sum+=current
  }
  console.log(`Sum: ${sum}`)
}
solve(5);

