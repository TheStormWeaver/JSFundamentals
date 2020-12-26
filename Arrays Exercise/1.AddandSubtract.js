/*
Write a function, which changes the value of odd and even numbers in an array of numbers.
If the number is even - add to its value its index position
If the number is odd - subtract to its value its index position
Output
On the first line print the newly modified array, on the second line print the sum of numbers from the original
array, on the third line print the sum of numbers from the modified array.
*/
function solve(arr) {
  firstsum = 0;
  secondsum = 0;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    firstsum += element;
    if (element % 2 == 0) {
      arr[i] += i;
      secondsum += arr[i];
    } else {
      arr[i] -= i;
      secondsum += arr[i];
    }
  }
  console.log(arr)
  console.log(firstsum)
  console.log(secondsum)
}
solve([5, 15, 23, 56, 35]);
