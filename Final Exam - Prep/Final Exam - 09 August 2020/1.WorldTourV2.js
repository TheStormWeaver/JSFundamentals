/*
You are a world traveller and your next goal is to make a world tour. In order to do that, you have to plan out everything first. To start with, you would like to plan out all of your stops where you will have a break.
On the first line you will be given a string containing all of your stops. Until you receive the command "Travel", you will be given some commands to manipulate that initial string. The commands can be:
•	Add Stop:{index}:{string} – insert the given string at that index only if the index is valid
•	Remove Stop:{start_index}:{end_index} – remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid
•	Switch:{old_string}:{new_string} – if the old string is in the initial string, replace it with the new one. (all occurrences)
Note: After each command print the current state of the string
After the "Travel" command, print the following: "Ready for world tour! Planned stops: {string}"
Input / Constraints
•	JavaScript: you will receive a list of strings
Output
•	Print the proper output messages in the proper cases as described in the problem description
*/
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
    }else{
      return points
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
    }else{
      return points
    }
  }
  function replace(points, str, replacement) {
    if(points.includes(str)){
      let regex = new RegExp(str, "g")
      let result = points.replace(regex, replacement)
      console.log(result)
      return result
    }else{
      return points
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
