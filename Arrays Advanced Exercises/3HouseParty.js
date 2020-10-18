function Party(arr) {
  let listOfGuests = [];

  for (let str of arr) {
    let workArr = str.split(" "); // console.log(workArr);
    let name = workArr[0]; // console.log(name);

    if (workArr.length === 3) {
      // Add person to list of guests
      let isIncluded = listOfGuests.includes(name);

      if (isIncluded) {
        console.log(`${name} is already in the list!`);
      } else {
        listOfGuests.push(name);
      }
    } else {
      // Remove person from list of guests
      let indexOfPerson = listOfGuests.indexOf(name);

      if (indexOfPerson !== -1) {
        listOfGuests.splice(indexOfPerson, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }

  console.log(listOfGuests.join(`\n`));
}
Party([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
