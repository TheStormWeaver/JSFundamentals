function solve(product, quantity) {
  let result = 0;
  for (let i = 0; i < quantity; i++) {
    if (product == "coffee") {
      result += 1.5;
    } else if (product == "water") {
      result += 1.0;
    } else if (product == "coke") {
      result += 1.4;
    } else if (product == "snacks") {
      result += 2.0;
    }
  }
  console.log(result)
}
solve("coffe", 2);
