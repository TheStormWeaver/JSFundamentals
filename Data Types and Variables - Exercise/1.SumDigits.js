/*
Write a function which will be given a single number. Your task is to find the sum of its digits.
*/
function solve(num) {
  let sum = 0
  num = num.toString()
  for(let i = 0; i < num.length; i++){
    sum += Number(num.charAt(i))
  }
  console.log(sum)
}
solve(245678);
