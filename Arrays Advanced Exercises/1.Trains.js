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
  console.log(wagoncapacity.join(" "));
}
Train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
