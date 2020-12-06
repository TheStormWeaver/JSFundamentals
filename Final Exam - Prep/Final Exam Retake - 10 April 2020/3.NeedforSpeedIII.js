/*
You have just bought the latest and greatest computer game – Need for Seed III. We know that you can`t wait to start playing. Pick your favorite cars and drive them all you want!
On the first line of the standard input you will receive an integer n – the number of cars that you can obtain. On the next n lines the cars themselves will follow with their mileage and fuel available, separated by "|" in the following format:
{car}|{mileage}|{fuel}
Then, you will be receiving different commands, each on a new line, separated by " : ", until the "Stop" command is given:
•	Drive : {car} : {distance} : {fuel} 
o	You need to drive the given distance and you will need the given fuel to do that. If the car doesn`t have enough fuel print:
"Not enough fuel to make that ride"
o	If the car has the required fuel available in the tank, increase its mileage with the given distance, decrease its fuel with the given fuel and print: 
"{car} driven for {distance} kilometers. {fuel} liters of fuel consumed."
o	You like driving new cars only, so if the mileage of a car reaches 100 000 km, remove it from the collection(s). Print:
"Time to sell the {car}!"
•	Refuel : {car} : {fuel}
o	Refill the tank of your car. 
o	Each tank can hold a maximum of 75 liters of fuel, so if the given amount of fuel is more than you can fit in the tank, take only what is required to fill it up. 
o	Print a message in the following format:
"{car} refueled with {fuel} liters"
•	Revert : {car} : {kilometers}
o	Decrease the mileage of the given car with the given kilometers and print the kilometers you have decreased it with in the following format:
"{car} mileage decreased by {amount reverted} kilometers"
o	If the mileage becomes less than 10 000km after it is decreased, just set it to 10 000km and 
DO NOT print anything.
Upon receiving the "Stop" command you need to print all cars in your possession, sorted by their mileage in decscending order, then by their name in ascending order, in the following format:
"{car} -> Mileage: {mileage} kms, Fuel in the tank: {fuel} lt."
Input/Constraints
•	The mileage and fuel of the cars will be valid, 32-bit integers and will never be negative.
•	The fuel and distance amounts in the commands will never be negative.
•	The car names in the commands will always be valid cars in your possession.
Output
•	All the output messages with the appropriate formats are described in the problem description.
*/
function needForSpeed(arr) {
  let num = Number(arr.shift());
  let cars = {};
  let counter = 1;
  for (const line of arr) {
    if (counter > num) {
      break;
    }
    let [model, mileage, fuel] = line.split("|");
    cars[model] = {};
    cars[model].mileage = Number(mileage);
    cars[model].fuel = Number(fuel);
    counter++;
  }
  for (const line of arr) {
    if(line == "Stop"){
      break;
    }
    if (line.includes("Drive")) {
      let [command, car, distance, fuel] = (line.split(" : "))
      distance = Number(distance)
      fuel = Number(fuel)
      if (cars.hasOwnProperty(car)) {
        if (cars[car].fuel - fuel > 0) {
          cars[car].mileage += distance;
          cars[car].fuel -= fuel;
          console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
        } else {
          console.log(`Not enough fuel to make that ride`);
        }
        if (cars[car].mileage >= 100000) {
          console.log(`Time to sell the ${car}!`);
          delete cars[car];
        }
      }
    } else if (line.includes("Refuel")) {
      let [command, car, fuel] = line.split(" : ")
      fuel = Number(fuel)
      if(cars.hasOwnProperty(car)){
        if(cars[car].fuel + fuel > 75){
          fuel = 75 - cars[car].fuel
        }
        cars[car].fuel += fuel
          console.log(`${car} refueled with ${fuel} liters`)
      }
    } else if (line.includes("Revert")) {
      let [command, car, kilometers] = line.split(" : ")
      kilometers = Number(kilometers)
      if(cars.hasOwnProperty(car)){
        cars[car].mileage -= kilometers
        if(cars[car].mileage < 10000){
          cars[car].mileage = 10000
        }else{
          console.log(`${car} mileage decreased by ${kilometers} kilometers`)
        }
      }
    }
  }
  let sorted = Object.entries(cars).sort((a, b) => {
    if(a[1].mileage - b[1].mileage != 0){
      return b[1].mileage - a[1].mileage
    }else{
      return a[0].loacleCompare(b[0])
    }
  })
  for (const car of sorted) {
    console.log(`${car[0]} -> Mileage: ${car[1].mileage} kms, Fuel in the tank: ${car[1].fuel} lt.`)
  }
}
needForSpeed([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
