/*
You will be given a number that will be distance in meters. Write a program that converts meters to kilometers
formatted to the second decimal point.
*/
function solve(num) {
  let converter = num /1000.0
  console.log(converter.toFixed(2))
}
solve(1852);
