/*
Write a function that receives a digit in the form of a word as string and prints the digit as a number.
*/
function Digits(num) {
  let finalsum;
  switch (num) {
    case "zero":
      finalsum = 0;
      break;
    case "one":
      finalsum = 1;
      break;
    case "two":
      finalsum = 2;
      break;
    case "three":
      finalsum = 3;
      break;
    case "four":
      finalsum = 4;
      break;
    case "five":
      finalsum = 5;
      break;
    case "six":
      finalsum = 6;
      break;
    case "seven":
      finalsum = 7;
      break;
    case "eight":
      finalsum = 8;
      break;
    case "nine":
      finalsum = 9;
      break;
  }
  console.log(finalsum)
}
Digits("nine");
