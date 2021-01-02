/*
You're tasked to create a list of employees and their personal numbers.
You will receive an array of strings. Each string is an employee name and to assign them a personal number you
have to find the length of the name (whitespace included).
Try to use an object.
At the end print all the list employees in the following format:
"Name: {employeeName} -- Personal Number: {personalNum}"
*/
function employees(arr) {
  class Person {
    constructor(name) {
      this.name = name;
      this.number = name.length;
    }
    print() {
      return `Name: ${this.name} -- Personal Number: ${this.number}`;
    }
  }
  arr = arr.map((x) =>  new Person(x));
  arr.forEach((obj) => {
    console.log(obj.print());
  });
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
