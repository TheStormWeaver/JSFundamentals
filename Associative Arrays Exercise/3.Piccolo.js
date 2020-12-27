/*
Write function that:
•	Records a car number for every car that enters the  parking lot
•	Removes a car number when the car goes out
•	Input will be array of strings in format [direction, carNumber]
Print the output with all car numbers which are in the parking lot sorted in ascending by number

*/
function piccolo(data) {
  let parking = {}
  for (const line of data) {
    let [direction, carNumber] = line.split(", ")
    if(direction == "IN"){
      parking[carNumber] = 1
    }else{
      delete parking[carNumber]
    }
  }
  let sorted = Object.keys(parking).sort((a,b) => a.localeCompare(b))
  if(sorted.length > 0){
  console.log(sorted.join(`\n`))
  }else{
    console.log(`Parking Lot is Empty`)
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
