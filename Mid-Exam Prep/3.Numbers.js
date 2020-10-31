/*
Write a program to read a sequence of integers and find and print the top 5 numbers that are greater than the average value in the sequence, sorted in descending order.
Input
Read from the console a single line holding space separated number.
Output
Print the above described numbers on a single line, space separated.
If less than 5 numbers hold the above mentioned property, print less than 5 numbers. Print “No” if no numbers hold the above property.
Constraints
All input numbers are integers in range [-1 000 000 … 1 000 000]. The count of numbers is in range [1…10 000].
*/
function numbers(input) {
  let result = []
  let sum = 0
  let arr = input.split(" ").map(Number)
  for (const element of arr) {
    sum += element
  }
  sum = sum / arr.length
  for (const num of arr) {
    if(num > sum){
      result.push(num)
    }
  }
  if(result.length > 0){
    result = result.sort((a, b) => b - a)
    if(result.length > 5){
      result.length = 5
    }
    console.log(result.join(" "))
  }else{
    console.log("No")
  }
}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
