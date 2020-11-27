/*
Write a function that stores cars in garages. You will be given an array of strings. Each string will contain number of a garage and info about a car. You have to store the car (with its info) in the given garage. The info about the car will be in the format "{key}: {value}, {key}: {value}…". If the garage does not exist, create it. The cars will always be unique. At the end print the result in the format:
"Garage № {number}:
--- {carOneKeyOne} - {carOneValueOne}, {carOneKeyTwo} - {carOneValueTwo}…
--- {the same for the next car}
Garage № {number}: …"
*/
function garage(arr) {
  let carStorage = new Map()
  for (const line of arr) {
    let [num, carInfo] = line.split(" - ")
    if(!carStorage.has(num)){
      carStorage.set(num, [carInfo])
    }else{
      let newInfo = carStorage.get(num)
      newInfo.push(carInfo)
      carStorage.set(num, newInfo)
    }
  }
  for (const key of carStorage) {
    console.log(`Garage № ${key[0]}`)
    for (const current of key[1]) {
      console.log(`--- ${current.replace(/: /g, " - ")}`)
    }
  }
}
garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
