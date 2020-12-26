/*
Write a function that determines if there exists an element in the array of numbers such that the sum of the
elements on its left is equal to the sum of the elements on its right.
If there are NO elements to the left/right, their sum is 0.
Print the index that satisfies the required condition or &quot;no&quot; if there is no such index.
*/
function solve(arr) {
  let isindex = false
  for (let i = 0; i < arr.length; i++) { 
    let leftsum = 0
    let rightsum = 0
    if(i !== 0){
      for (let j = 0; j < i; j++) {
        leftsum += arr[j]
      }
    }
    if(i !== arr.length - 1){
      for (let r = i + 1; r < arr.length; r++) {    
        rightsum += arr[r]
      } 
    }
    if(leftsum == rightsum){
      isindex = true
      console.log(i)
    }
  }
  if(!isindex){
    console.log("no")
  }
}
solve([1, 2 ,3 ,3]);
