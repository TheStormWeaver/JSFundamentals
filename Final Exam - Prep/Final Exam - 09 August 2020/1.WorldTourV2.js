function worldTour(arr) {
  let travelPoints = arr.shift();
  for (const line of arr) {
    if (line == "Travel") {
      break;
    }
    let [command, ...args] = line.split(":");
    switch (command) {
      case "Add Stop":
        travelPoints = addStop(travelPoints, ...args);
        break;
      case "Remove Stop":
        travelPoints = removeStop(travelPoints, ...args);
        break;
      case "Switch":
        travelPoints = replace(travelPoints, ...args);
        break;
    }
  }
  function addStop(points, index, str) {
    index = Number(index);
    if (index >= 0 && index < points.length) {
      let firstHalf = points.substring(0, index);
      let secondHalf = points.substring(index);
      let result = firstHalf + str + secondHalf;
      console.log(result);
      return result;
    }
  }
  function removeStop(points, start, end) {
    start = Number(start);
    end = Number(end);
    if((start >= 0 && start < points.length) && (end >= 0 && end < points.length)){
      let firstHalf = points.substring(0, start)
      let secondHalf = points.substring(end + 1)
      let result = firstHalf + secondHalf
      console.log(result)
      return result
    }
  }
  function replace(points, str, replacement) {
    if(points.includes(str)){
      let regex = new RegExp(str, "g")
      let result = points.replace(regex, replacement)
      console.log(result)
      return result
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
