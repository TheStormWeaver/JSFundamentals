/*
Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the smallest one, the third is the second biggest one, the fourth is the second smallest one and so on. 
Print the elements on one row, separated by single space.
*/
function Sorting(arr) {
  let output = [];
  let inputSorted = arr.slice(0).sort((a, b) => b - a);
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        let biggest = inputSorted.shift();
        output.push(biggest);
      } else {
        let smallest = inputSorted.pop();
        output.push(smallest);
      }
    }
  console.log(output.join(" "));
}
Sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
