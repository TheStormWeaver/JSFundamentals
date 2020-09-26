function solve(distance, passengers, price) {
  let neededfuel = (distance / 100) * 7;
  neededfuel += passengers * 0.1;
  let money = neededfuel * price;
  console.log(`Needed money for that trip is ${money} lv.`);
}
solve(260, 9, 2.49);
