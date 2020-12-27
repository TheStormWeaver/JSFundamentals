/*
Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an
array.
*/
function solve(arr) {
  let oddsum = 0
  let evensum = 0
  for (let i = 0; i < arr.length; i++) { 
    arr[i] = Number(arr[i])
  }
  for (let num of arr) {
    if(num % 2 == 0){
      oddsum += num
    }else{
      evensum += num
    }
  }
  console.log(oddsum - evensum)
}
solve([1,2,3,4,5,6]);
