/*
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
