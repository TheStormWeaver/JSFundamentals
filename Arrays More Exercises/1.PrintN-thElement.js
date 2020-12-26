/*
Write a function that collect each element of an array, on a given step.
The input comes as array of strings. The last element is N - the step.
The collections are every element on the N-th step starting from the first one. If the step is &quot;3&quot;, you need to print
the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array. Then, print elements in a row,
separated by single space.
*/
function printElement(arr) {
  let n = Number(arr.pop());
  let print = "";
  for (let i = 0; i < arr.length; i += n) {
    print += `${arr[i]} `;
  }
  console.log(print);
}
printElement(["5", "20", "31", "4", "20", "2"]);
