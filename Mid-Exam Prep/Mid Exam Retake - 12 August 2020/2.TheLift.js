/*
Write a program that finds a place for the tourist on a lift. 
Every wagon should have a maximum of 4 people on it. If a wagon is full you should direct the people to the next one with space available.
Input
•	On the first line you, will receive how many people are waiting to get on the lift
•	On the second line, you will you will receive the current state of the lift separated by " ".
Output
When there is no more available space left on the lift, or there are no more people in the queue, you should print on the console the final state of the lift's wagons separated by " " and one of the following messages:
•	If there are no more people and the lift have empty spots you should print:
"The lift has empty spots!
{wagons separated by ' '}"
•	If there are still people on the queue and no more available space, you should print:
"There isn't enough space! {people} people in a queue!
{wagons separated by ' '}"
•	If the lift is full and there are no more people in the queue, you should print only the wagons separated by " "
*/
function lift(input) {
  let passengers = Number(input.shift());
  let lift = input.shift().split(" ").map(Number);
  for (let i = 0; i < lift.length; i++) {
    let element = lift[i];
    let numofpass = 4 - element;
    if (numofpass > passengers) {
      numofpass = passengers;
    }
    passengers -= numofpass;
    element += numofpass;
    lift[i] = element;
  }
  if (passengers == 0 && lift[lift.length - 1] === 4) {
    console.log(lift.join(" "));
  } else if (passengers > 0) {
    console.log(`There isn't enough space! ${passengers} people in a queue!`);
    console.log(lift.join(" "));
  } else {
    console.log("The lift has empty spots!");
    console.log(lift.join(" "));
  }
}
lift(["15", "0 0 0 0 0"]);
