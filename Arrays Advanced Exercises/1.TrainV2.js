/*
You will be given an array of strings.
The first element will be a string containing wagons (numbers). Each number inside the string represents the number of passengers that are currently in a wagon. 
The second element in the array will be the max capacity of each wagon (single number).
The rest of the elements will be commands in the following format:
•	Add {passengers} – add a wagon to the end with the given number of passengers.
•	{passengers} -  find an existing wagon to fit all the passengers (starting from the first wagon)
At the end print the final state of the train (all the wagons separated by a space)
*/
function Train(arr) {
  let wagon = arr.shift().split(" ");
  let wagoncapacity = wagon.map(Number);
  let maxcapacity = Number(arr.shift());
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("Add")) {
      let newwagon = Number(arr[i].split(" ")[1]);
      wagoncapacity.push(newwagon);
    } else {
      let passengers = Number(arr[i]);
      for (let j = 0; j < wagoncapacity.length; j++) {
        if (wagoncapacity[j] + passengers <= maxcapacity) {
          wagoncapacity[j] += passengers;
          break;
        }
      }
    }
  }
  return wagoncapacity.join(" ");
}
console.log(
  Train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]));
