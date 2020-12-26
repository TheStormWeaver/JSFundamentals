/*
Write a function that adds and removes numbers to/from an array. You will receive a command which can either be
&quot;add&quot; or &quot;remove&quot;.
The initial number is 1. Each input command should increase that number, regardless of what it is.
Upon receiving an &quot;add&quot; command you should add the current number to your array.
Upon receiving the &quot;remove&quot; command you should remove the last entered number, currently existent in
the array.
Input
The input comes as array of strings. Each element holds a command.
Output
Print elements in a row, separated by single space. In case of an empty array, just print &quot;Empty&quot;.
*/
function addAndRemove(arr) {
  let result = [];
  let num = 0;
  for (let command of arr) {
    if (command === "add") {
      num++;
      result.push(num);
    } else {
      num++;
      result.pop(num);
    }
  }
  if (result.length > 0) {
    console.log(result.join(" "));
  } else {
    console.log("Empty");
  }
}
addAndRemove(["add", "add", "remove", "add", "add"]);
