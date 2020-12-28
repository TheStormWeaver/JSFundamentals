/*
Write a function that returns the English name of the last digit of a given number. Write a program that receives a
number and prints the returned value from this function.
*/
function sortNumbers(arr) {
  arr = arr.toString();
  let split = arr.split("");
  let lastdigit = split[arr.length - 1];
  if (lastdigit == "0") {
    console.log("zero");
  } else if (lastdigit == "1") {
    console.log("one");
  } else if (lastdigit == "2") {
    console.log("two");
  } else if (lastdigit == "3") {
    console.log("three");
  } else if (lastdigit == "4") {
    console.log("four");
  } else if (lastdigit == "5") {
    console.log("five");
  } else if (lastdigit == "6") {
    console.log("six");
  } else if (lastdigit == "7") {
    console.log("seven");
  } else if (lastdigit == "8") {
    console.log("eight");
  } else if (lastdigit == "9") {
    console.log("nine");
  }
}
sortNumbers([412]);
