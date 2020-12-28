/*
Write a function to display numbers from given start to given end and their sum. The input comes as two number
parameters.
*/
function solve(num1, num2) {
  let sum = 0
  let line = ""
  for(i = num1 ; i <= num2; i++){
    line += i + " "
    sum += i
  }
  console.log(line)
  console.log(`Sum: ${sum}`)
}
solve(5, 10);
