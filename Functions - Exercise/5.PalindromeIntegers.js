/*
A palindrome is a number which reads the same backward as forward, such as 323 or 1001. Write a function which
receives an array of positive integer and checks if each integer is a palindrome or not.
*/
function polindrome(arr) {
  let result = "";
  for (let num of arr) {
    let ispoli = "true";
    let str = String(num);
    let reversedstr = str.split("").reverse().join("")
    ispoli = str == reversedstr ? "true":"false"
    result += ispoli + "\n";
  }
  return result;
}
console.log(polindrome([123, 323, 421, 121]));
