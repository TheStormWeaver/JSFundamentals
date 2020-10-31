/*
Every day thousands of students pass by the reception at SoftUni with different questions to ask and the employees have to help everyone by providing all the information and to answer all of the questions. 
There are 3 employees working on the reception all day. Each of them can handle different number of students per hour. 
Your task is to calculate how much time it will take to answer all the questions of given number of students.
First you will receive 3 lines with integers, representing count of students that each of the employee can help per hour. 
On the next line you will receive students count as a single integer. 
Every forth hour all of the employees have a break, so they don’t work for a hour. 
This is the only break for the employees, because they don`t need rest, nor have a personal life. 
Calculate the time needed to answer all the student's questions and print it in the following format: "Time needed: {time}h."
*/
function softuniReception(arr) {
  let hours = 0;
  let firstEmployee = Number(arr.shift());
  let secondEmployee = Number(arr.shift());
  let thirdEmployee = Number(arr.shift());
  let studentsCount = Number(arr.shift());
  let workcap = firstEmployee + secondEmployee + thirdEmployee;
  for (let i = 0; i < studentsCount; i += workcap) {
    hours++;
    if (hours % 4 === 0) {
      hours++;
    }
  }
  console.log(`Time needed: ${hours}h.`);
}
softuniReception(["3", "2", "5", "40"]);
