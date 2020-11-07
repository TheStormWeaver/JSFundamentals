/*
We are placing N orders at a time. You need to calculate the price on the following formula:
((daysInMonth * capsulesCount) * pricePerCapsule)
Input / Constraints
•	On the first line you will receive integer N – the count of orders the shop will receive.
•	For each order you will receive the following information:
o	Price per capsule - floating-point number in range [0.00…1000.00]
o	Days – integer in range [1…31]
o	Capsules count - integer in range [0…2000]
The input will be in the described format, there is no need to check it explicitly.
Output
The output should consist of N + 1 lines. For each order you must print a single line in the following format:
•	"The price for the coffee is: ${price}"
On the last line you need to print the total price in the following format:
•	 "Total: ${totalPrice}"
The price must be rounded to 2 decimal places. 
 */
function coffeShop(input) {
  let numoforders = input.shift();
  let currentprice = 0;
  let finalprice = 0;
  for (let i = 0; i < numoforders; i++) {
    let price = input.shift();
    let days = input.shift();
    let capsulecount = input.shift();
    currentprice = days * capsulecount * price;
    console.log(`The price for the coffee is: $${currentprice.toFixed(2)}`);
    finalprice += currentprice;
  }
  console.log(`Total: $${finalprice.toFixed(2)}`);
}
coffeShop([2, 4.99, 31, 3, 0.35, 31, 5]);
