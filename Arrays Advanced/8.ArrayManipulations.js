/*
Write a function that manipulates an array of numbers.
 Add {number}: add a number to the end of the array
 Remove {number}: remove number from the array
 RemoveAt {index}: removes number at a given index
 Insert {number} {index}: inserts a number at a given index
Note: All the indices will be valid!
Print the final state of the array (separated by single space).
The input comes as array of strings. First element will be a string containing the array to manipulate. Every other
command you receive will also be a string.
The output is the manipulated array printed on the console on a single line, separated by space.
*/
function arrayManipulations(input) {
  let arr = input.shift().split(" ").map(Number);
  for (let line of input) {
    let [command, range1, range2] = line.split(" ");
    if (command == "Add") {
      add(range1);
    } else if (command == "Remove") {
      remove(range1);
    } else if (command == "RemoveAt") {
      removeAt(range1);
    } else if (command == "Insert") {
      insert(range1, range2);
    }
  }
  function add(ele) {
    arr.push(ele);
  }
  function remove(num) {
    arr = arr.filter((el) => el != num);
  }
  function removeAt(index) {
    arr.splice(index, 1);
  }
  function insert(num, index) {
    arr.splice(index, 0, num);
  }
  let result = arr.map(Number).join(" ")
  console.log(result);
}
arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
