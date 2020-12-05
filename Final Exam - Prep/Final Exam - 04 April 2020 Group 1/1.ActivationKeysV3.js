/*
You are about to make some good money, but first you need to think of a way to verify who paid for your product and who didn`t. You have decided to let people use the software for a free trial period and then require an activation key in order to continue to use the product. The last step before you could cash out is to design a program that creates unique activation keys for each user. So, waste no more time and start typing!
The first line of the input will be your raw activation key. It will consist of letters and numbers only. 
After that, until the "Generate" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the raw activation key.
There are several types of instructions, split by ">>>":
•	Contains>>>{substring} – checks if the raw activation key contains the given substring.
o	If it does prints: "{raw activation key} contains {substring}".
o	If not, prints: "Substring not found!"
•	Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}
o	Changes the substring between the given indixes (the end index is exclusive) to upper or lower case. 
o	All given indexes will be valid.
o	Prints the activation key.
•	Slice>>>{startIndex}>>>{endIndex}
o	Deletes the characters between the start and end indices (end index is exclusive).
o	Both indices will be valid.
o	Prints the activation key.
Input
•	The first line of the input will be string and it will consist of letters and numbers only. 
•	After the first line, until the "Generate" command is given, you will be receiving strings.
Output
•	After the "Generate" command is received, print:
o	"Your activation key is: {activation key}"
*/
function activationKeys(input) {
  let actions = {
    Contains(key, pattern) {
      if (key.includes(pattern)) {
        console.log(`${key} contains ${pattern}`);
      } else {
        console.log(`Substring not found!`);
      }
      return key;
    },
    Flip(key, mode, start, end) {
      [start, end] = [Number(start), Number(end)];
      let first = key.substring(0, start);
      let second = key.substring(start, end);
      let third = key.substring(end);
      if (mode == "Upper") {
        second = second.toUpperCase();
      } else if (mode == "Lower") {
        second = second.toLowerCase();
      }
      let result = first + second + third;
      console.log(result);
      return result;
    },
    Slice(key, start, end) {
      [start, end] = [Number(start), Number(end)];
      let first = key.substring(0, start);
      let second = key.substring(start, end);
      let third = key.substring(end);
      let result = first + third;
      console.log(result);
      return result;
    },
  };
  let key = input.shift();
  let line;
  while ((line = input.shift()) != "Generate") {
    let [action, ...params] = line.split(">>>");
    key = actions[action](key, ...params);
  }
  console.log(`Your activation key is: ${key}`)
}
activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
