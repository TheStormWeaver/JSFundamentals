/*
Write a function to find all the top integers in an array. A top integer is an integer which is bigger than all the
elements to its right.
Output
Print all top integers on the console, separated by single space.
*/
function solve(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let isbigger = true
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[i] <= arr[j]){
        isbigger = false
      }
    }
    if(isbigger){
      result.push(arr[i])
    }
  }
  console.log(result.join(" "))
}
solve([1, 4, 3, 2]);
