function worldTour(arr) {
  let travelPoints = arr.shift()
  for (const line of arr) {
    if(line == "Travel"){
      break;
    }
    if(line.includes("Add Stop")){
      let [command, index, str] = line.split(":")
      index = Number(index)
      if(index >= 0 && index < travelPoints.length){
        let firstHalf = travelPoints.substring(0, index)
        let secondHalf = travelPoints.substring(index)
        travelPoints = firstHalf + str + secondHalf
        console.log(travelPoints)
      }

    }else if(line.includes("Remove Stop")){
      let [command, start, end] = line.split(":")
      start = Number(start)
      end = Number(end)
      if(start >= 0 && start < travelPoints.length && end >= 0 && end < travelPoints.length){
        let firstHalf = travelPoints.substring(0, start)
        let secondHalf = travelPoints.substring(end + 1)
        travelPoints = firstHalf + secondHalf
        console.log(travelPoints)
      }
    }else if(line.includes("Switch")){
      let [command, str, replacement] = line.split(":")
      if(travelPoints.includes(str)){
        let regex = new RegExp(str, "g")
        travelPoints = travelPoints.replace(regex, replacement)
        console.log(travelPoints)
      }
    }
  }
  console.log(`Ready for world tour! Planned stops: ${travelPoints}`)
}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
