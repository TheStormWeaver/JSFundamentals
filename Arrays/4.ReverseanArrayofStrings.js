/*
Write a program which receives an array of strings (space separated values). Your task is to reverse it and print its
elements. Swap elements.
*/
function reverse(arr) {
  let result = []
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i])
  }
  console.log(result.join(" "))
}
reverse(["a","b","c","d","e"]);
