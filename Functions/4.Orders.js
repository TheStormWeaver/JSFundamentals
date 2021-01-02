/*
Write a function that calculates the total price of an order and prints it on the console. The function should receive
one of the following products: coffee, coke, water, snacks; and a quantity of the product. The prices for a single
piece of each product are:
 coffee - 1.50
 water - 1.00
 coke - 1.40
 snacks - 2.00
Print the result formatted to the second decimal place.
*/
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
solve("coffee", 2);
