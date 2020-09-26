function solve(n) {
  let sum = 0;
  for (let current = 1, count = 0; count < n; current += 2, count++) {
    console.log(current)
    sum+=current
  }
  console.log(`Sum: ${sum}`)
}
solve(5);

