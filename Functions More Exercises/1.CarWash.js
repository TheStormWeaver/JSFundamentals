function carWash(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let command = arr[i];
    if (command === "soap") {
      result += 10;
    } else if (command === "water") {
      result += result * 0.20;
    } else if (command === "vacuum cleaner") {
      result += result * 0.25;
    } else if (command === "mud"){
      result -= result * 0.10;
    }
  }
  console.log(`The car is ${result.toFixed(2)}% clean.`);
}
carWash(["soap","soap","vacuum cleaner","mud","soap","water"]);
