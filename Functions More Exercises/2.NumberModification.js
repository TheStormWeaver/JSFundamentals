/*
Write a JS program that modifies a number until the average value of all its digits is higher than 5. To modify the
number, your program should append a 9 to the end of the number, when the average value of all its digits is higher
than 5 the program should stop appending. If the number’s average value of all its digits is already higher than 5, no
appending should be done.
The input is a single number.
The output should consist of a single number - the final modified number which has an average value of all its digits
higher than 5. The output should be printed on the console.
Constraints
 The input number will consist of no more than 6 digits.
 The input will be a valid number (there will be no leading zeroes).
*/
function numberMod(num) {
  let arr = num.toString().split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  let average = sum / arr.length;
  if (average > 5) {
    console.log(num);
  } else {
    while (average <= 5) {
      arr.push(9);
      sum += 9;
      average = sum / arr.length;
    }
    console.log(arr.join(""));
  }
}
numberMod(101);
