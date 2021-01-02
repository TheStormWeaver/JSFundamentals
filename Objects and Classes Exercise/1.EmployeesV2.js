/*
You're tasked to create a list of employees and their personal numbers.
You will receive an array of strings. Each string is an employee name and to assign them a personal number you
have to find the length of the name (whitespace included).
Try to use an object.
At the end print all the list employees in the following format:
"Name: {employeeName} -- Personal Number: {personalNum}"
*/
function employees(arr) {
  let employee = {}
  for (const line of arr) {
    employee[line] = line.length
  }
  Object.entries(employee).forEach(element => {
    console.log(`Name: ${element[0]} -- Personal Number: ${element[1]}`)
  });
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
