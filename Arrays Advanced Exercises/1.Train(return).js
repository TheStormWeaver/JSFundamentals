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
