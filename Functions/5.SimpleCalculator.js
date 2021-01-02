/*
Write a function that receives three parameters and write an arrow function that calculate result depending of
operator. Operator can be "multiply", "divide", "add", "subtract".
Input
The input comes as parameters named numOne, numTwo, operator.
*/
function solve(numOne, numTwo, operator) {
  let multiply = (numOne,numTwo) => numOne * numTwo 
  let divide = (numOne,numTwo) => numOne / numTwo 
  let add = (numOne,numTwo) => numOne + numTwo 
  let subtract = (numOne,numTwo) => numOne - numTwo 
  switch (operator) {
    case "multiply":
      console.log(multiply(numOne, numTwo))
      break;
    case "divide":
      console.log(divide(numOne, numTwo));
      break;
    case "add":
      console.log(add(numOne, numTwo))
      break;
    case "subtract":
      console.log(subtract(numOne, numTwo))
      break;
  }
}
solve(2,8,"add");
