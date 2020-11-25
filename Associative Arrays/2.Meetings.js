/*
Write a function that manages meeting appointments. The input comes as an array of strings. Each string contains a
weekday and person’s name. For each successful meeting, print a message. If you receive the same weekday twice,
the meeting cannot be scheduled so print a conflict message. At the end print a list of all successful meetings. See
example for message format and details.
*/
function Meetings(input) {
  let calendar = {}
  for (let line of input) {
    let [day, person] = line.split(" ")
    if (calendar.hasOwnProperty(day)){
      console.log(`Conflict on ${day}!`)
    }else{
    console.log(`Scheduled for ${day}`)
    calendar[day] = person
    }
  }
  for (const key in calendar) {
    console.log(`${key} -> ${calendar[key]}`)
  }
}
Meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
