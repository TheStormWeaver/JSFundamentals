function race(arr) {
  let names = arr.shift().split(", ")
  let racers = {}
  for (const name of names) {
    racers[name] = 0
  }
  for (const line of arr) {
    let regexName = /[A-Za-z]/g
    let match = line.match(regexName)
    let name = match.join("")
    if(racers.hasOwnProperty(name)){
      let regex = /[0-9]/g
      let digits = line.match(regex).map(Number).reduce((a, b) => a + b)
      racers[name] += digits 
    }
  }
  let sorted = Object.entries(racers).sort((a, b) => b[1] - a[1])
  console.log(`1st place: ${sorted[0][0]}`)
  console.log(`2nd place: ${sorted[1][0]}`)
  console.log(`3rd place: ${sorted[2][0]}`)
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
