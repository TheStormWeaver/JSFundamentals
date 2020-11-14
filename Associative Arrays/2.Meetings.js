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
