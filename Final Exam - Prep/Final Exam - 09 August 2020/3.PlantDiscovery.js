function plantDiscovery(arr) {
  let n = Number(arr.shift())
  let plants = {}
  for (let i = 0; i < n; i++) {
    let [plant, rarity] = arr.shift().split("<->")
    plants[plant] = {}
    plants[plant].rarity = Number(rarity)
    plants[plant].rating = []
  }
  for (let line of arr) {
    if(line == "Exhibition"){
      break;
    }
    line = line.split(": ")
    let command = line.shift()
    line = line.join(" ")
    if(command == "Rate"){
      let [plant, rating] = line.split(" - ")
      if(plants.hasOwnProperty(plant)){
        plants[plant].rating.push(Number(rating))
      }else{
        console.log("error")
      }
    }else if(command == "Update"){
      let [plant, rarity] = line.split(" - ")
      if(plants.hasOwnProperty(plant)){
        plants[plant].rarity = Number(rarity)
      }else{
        console.log("error")
      }
    }else if(command == "Reset"){
      let plant = line
      if(plants.hasOwnProperty(plant)){
        plants[plant].rating = []
      }else{
        console.log("error")
      }
    }
  }
  for (const key in plants) {
    if(plants[key].rating.length > 0){
      let total = 0
      for (const current of plants[key].rating) {
        total += current
      }
      total /= plants[key].rating.length
      plants[key].rating = total
    }else{
      plants[key].rating = 0
    }
  }
  let sorted = Object.entries(plants).sort((a, b) => {
    if(b[1].rarity - a[1].rarity != 0){
      return b[1].rarity - a[1].rarity
    }else{
      return b[1].rating - a[1].rating
    }
  })
  console.log(`Plants for the exhibition:`)
  for (const plant of sorted) {
    console.log(`- ${plant[0]}; Rarity: ${plant[1].rarity}; Rating: ${plant[1].rating.toFixed(2)}`)
  }
}
plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
