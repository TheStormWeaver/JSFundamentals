/*
Write a program which receives an array of strings, parse them to numbers and sum only the even numbers.
*/
function solve(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    let element = Number(arr[i]);
    if(element % 2 == 0){
      sum += element
    }
  }
  console.log(sum)
}
solve(["1","2","3","4","5","6"]);
