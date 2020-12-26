/*
Write a function that receives an array and number of rotations you have to perform (first element goes at the
end).
Output
Print the resulting array elements separated my single space.
*/
function solve(arr, rotations) {
  for (let i = 1; i <= rotations; i++) {
    let element = arr.shift()
    arr.push(element)
  }
  console.log(arr.join(" "))
}
solve([51, 47, 32, 61, 21], 2);
