function smallestTwoNumbers(arr) {
  arr.sort((a, b) => a - b);
  let result = arr.slice(0, 2);
  return result.join(" ");
}
console.log(smallestTwoNumbers([10, 15, 20, 25]));
