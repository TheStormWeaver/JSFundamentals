/*
You will receive three integer numbers.
Write a function sum() to get the sum of the first two integers and subtract() function that subtracts the third
integer from the result.
*/
function AddandSubtract(numOne, numTwo, numThree) {
 function sum(a,b){
   return a + b
 }
 let result = sum(numOne, numTwo)
 return result - numThree
}
console.log(AddandSubtract(23,6,10));
