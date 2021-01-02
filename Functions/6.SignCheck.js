/*
You are given a function, that calculate the result of numOne * numTwo * numThree (the product) is
negative or positive.
Try to do this WITHOUT multiplying the 3 numbers.
The input comes as parameters named numOne, numTwo, numThree.
*/
function solve(numOne, numTwo, numThree) {
  let result = "";
  if (numOne >= 0 && numTwo >= 0 && numThree >= 0) {
    result = "Positive";
  } else if (numOne >= 0 && numTwo <= 0 && numThree <= 0) {
    result = "Positive";
  }else if (numOne <= 0 && numTwo >= 0 && numThree <= 0) {
    result = "Positive";
  }else if (numOne <= 0 && numTwo <= 0 && numThree >= 0) {
    result = "Positive";
  }else{
    result = "Negative"
  }
  console.log(result);
}
solve(-5, 12, -15);
