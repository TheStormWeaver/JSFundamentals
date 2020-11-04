/*
You are given an array with integers. Write a program to modify the elements after receive the commands “swap”, “multiply” or “decrease”.
•	“swap {index1} {index2}” take two elements and swap their places.
•	“multiply {index1} {index2}” take element at the 1st index and multiply it with element at 2nd index. Save the product at the 1st index.
•	“decrease” decreases all elements in the array with 1.
Input
On the first input line you will be given the initial array values separated by a single space.
On the next lines you will receive commands until you receive the command “end”. The commands are as follow: 
•	“swap {index1} {index2}”
•	“multiply {index1} {index2}”
•	“decrease”
Output
The output should be printed on the console and consist element of the modified array – separated by “, “(comma and single space).
Constraints
•	Commands will be: “swap”, “multiply”, “decrease” and “end”
•	Elements of the array will be integer numbers in the range [-231...231]
•	Count of the array elements will be in the range [2...100]
•	Indexes will be always in the range of the array
*/
function arrModifier(input) {
  let stringArr = input.shift().split(" ")
  let arr = stringArr.map(Number)
  for (let i = 0; i < input.length; i++) {
    let [command, range1, range2] = input[i].split(" ")
    if(command == "swap"){
      let temp = arr[range1]
      arr[range1] = arr[range2]
      arr[range2] = temp
    }
    if(command == "multiply"){
      arr[range1] = arr[range1] * arr[range2]
    }
    if(command == "decrease"){
      arr = arr.map((x) => x - 1)
    }
    if(command == "end"){
      break;
    }
  }
  console.log(arr.join(", "))
}
arrModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
