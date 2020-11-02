function houseParty(arr) {
  let guests = [];
  for (let i = 0; i < arr.length; i++) {
    let command = arr[i].split(" ");
    let name = command[0];
    let action = command[2];
    if (action === "going!") {
      if (guests.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        guests.push(name);
      }
    } else {
      if (guests.includes(name)) {
        guests = guests.filter((x) => x !== name);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  console.log(guests.join("\n"));
}
houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
