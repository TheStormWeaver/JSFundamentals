/*
Write a function that receives two integer numbers. Calculate factorial of each number. Divide the first result by the
second and print the division formatted to the second decimal point.
*/
function factorialDivision(a, b) {
  let suma = 1
  let sumb = 1
  for (let i = 1; i <= a; i++) {
    suma *= i
  }
  for (let j = 1; j <= b; j++) {
    sumb *= j
  }
  console.log((suma / sumb).toFixed(2))
}
factorialDivision(5, 2)
