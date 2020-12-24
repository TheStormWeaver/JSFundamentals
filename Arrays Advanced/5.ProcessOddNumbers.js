/*
You are given an array of numbers. Write a function that prints the elements at odd positions from the array,
doubled and in reverse order.
The input comes as array of number elements.
The output is printed on the console on a single line, separated by space.
*/
function Oddprocess(arr) {
  let filtered = arr.filter(isOdd)
  let doubled = filtered.map(x => x * 2)
  function isOdd(val, index){
    return (index % 2 ) == 1
  }
  console.log(doubled.reverse())
}
Oddprocess([10, 15, 20, 25]);

/*
function Oddprocess(arr) {
  let filtered = arr.filter((val, index) => index % 2 == 1)
  let doubled = filtered.map(x => x * 2)
  console.log(doubled.reverse())
}
Oddprocess([10, 15, 20, 25]);
*/
