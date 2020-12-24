/*
Write a function that processes the elements in an array one by one and produces a new array. Prepend each
negative element at the front of the result and append each positive (or 0) element at the end of the result.
The input comes as array of number elements.
The output is printed on the console, each element on a new line.
*/
function process(arr) {
  let result = []
  for (let num of arr) {
    if(num >= 0){
      result.push(num)
    }else{
      result.unshift(num)
    }
  }
  for (let num of result) {
    console.log(num)
  }
}
process([3, -2, 0, -1]);
