/*
John likes Math. But he also likes the English alphabet a lot. He invented a game with numbers and letters from the English alphabet. The game is simple. You get a string consisting of a number between two letters. Depending on whether the letter was in front of the number or after it you would perform different mathematical operations on the number to achieve the result.
First you start with the letter before the number:
•	If it's uppercase you divide the number by the letter's position in the alphabet
•	If it's lowercase you multiply the number with the letter's position in the alphabet

Then you move to the letter after the number:
•	If it's uppercase you subtract its position from the resulted number
•	If it's lowercase you add its position to the resulted number

But the game became too easy for John really quick. He decided to complicate it a bit by doing the same but with multiple strings keeping track of only the total sum of all results. Once he started to solve this with more strings and bigger numbers it became quite hard to do it only in his mind. So he kindly asks you to write a program that calculates the sum of all numbers after the operations on each number have been done.
For example: You are given the sequence "A12b s17G":
We have two strings - "A12b" and "s17G". We do the operations on each and sum them. We start with the letter before the number on the first string. A is Uppercase and its position in the alphabet is 1. So we divide the number 12 with the position 1 (12/1 = 12). Then we move to the letter after the number. b is lowercase and its position is 2. So we add 2 to the resulted number (12+2=14). Similarly for the second string s is lowercase and its position is 19 so we multiply it with the number (17*19 = 323). Then we have Uppercase G with position 7, so we subtract it from the resulted number (323 - 7 = 316). Finally, we sum the 2 results and we get 14 + 316=330.
Input
The input comes as a text, holding the sequence of strings. Strings are separated by one or more white spaces.
The input data will always be valid and in the format described. There is no need to check it explicitly.
Output
Print on the console a single number: the total sum of all processed numbers rounded up to two digits after the decimal separator.
Constraints
•	The count of the strings will be in the range [1 … 10].
•	The numbers between the letters will be integers in range [1 … 2 147 483 647].
•	Time limit: 0.3 sec. Memory limit: 16 MB.
*/
function passwordGenerator(input) {
  let arr = [input]
  let numbers = arr.shift().split(" ").filter((c) => c.length > 0);
  let result = 0;
  let current = ""
  let capOp = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };
  let downOp = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  }
  for (const line of numbers) {
    let prototype = line.split("");
    let firstLetter = prototype.shift();
    let finalLetter = prototype.pop();
    let number = Number(prototype.join(""));
    let firstChar = firstLetter.charCodeAt();
    let finalChar = finalLetter.charCodeAt();
    if (firstChar >= 65 && firstChar <= 90) {
      current = capOp[firstLetter]
      number /= current
    } else if (firstChar >= 97 && firstChar <= 122) {
      current = downOp[firstLetter]
      number *= current
    }
    if (finalChar >= 65 && finalChar <= 90) {
      current = capOp[finalLetter]
      number -= current
    } else if (finalChar >= 97 && finalChar <= 122) {
      current = downOp[finalLetter]
      number += current
    }
    result += number
  }
  console.log(result.toFixed(2))
}
passwordGenerator("P34562Z q2576f   H456z");
