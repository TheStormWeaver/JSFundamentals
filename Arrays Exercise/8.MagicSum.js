/*
Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number.
*/
function solve(arr, num) {
  for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j]
      if(sum === num){
        console.log(`${arr[i]} ${arr[j]}`)
      }
    }
  }
}
solve([14, 20, 60, 13, 7, 19, 8], 27);
