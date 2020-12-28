/*
Write a program which reverses a string and print it on the console.
*/
function sortNumbers(input) {
  let splitted = input.split("");
  let reversedString = "";
  for (let i = splitted.length - 1; i >= 0; i--) {
    reversedString += splitted[i];
  }
  console.log(reversedString);
}
sortNumbers("Hello");
