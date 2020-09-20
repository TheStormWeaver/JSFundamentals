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
