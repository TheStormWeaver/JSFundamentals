/*
You will be given an array of integer numbers on the first line of the input (space-separated). 
Remove all repeating elements from the array. 
Print the result elements separated by single space.
*/
function DistinctArray(arr) {
  let result = []
  for (const element of arr) {
    if(!result.includes(element)){
      result.push(element)
    }
  }
  console.log(result)
}
DistinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
