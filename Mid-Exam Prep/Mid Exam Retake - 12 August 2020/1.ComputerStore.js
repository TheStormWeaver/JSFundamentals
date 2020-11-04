/*
Write a program that prints you a receipt for your new computer. You will receive the prices (without tax) of the parts until you receive what type of customer is this - special or regular.
Once you receive the type of the customer you should print the receipt.
The taxes are 20% of each part's price you receive. 
If the customer is special, then he has a 10% discount of the price of the total price with taxes.
If a given price is not positive number, you should print "Invalid price!" on the console and continue with the next price.
If total price is equal to zero, you should print "Invalid order!" on the console.
Input
•	You will receive numbers representing prices (without tax) until command "special" or "regular":
Output
•	The receipt should be in the following format: 
"Congratulations you've just bought a new computer!
Price without taxes: {total price without taxes}$
Taxes: {total amount of taxes}$
-----------
Total price: {total price with taxes}$"
*/
function computerStore(input) {
  let sum = 0;
  let taxes = 0;
  let total = 0;
  let discount = 0;
  for (const element of input) {
    if (element == "special" || element == "regular") {
      break;
    } else {
      let line = Number(element);
      if (line > 0) {
        sum += line;
      } else {
        console.log("Invalid price!");
      }
    }
  }
  if (sum > 0) {
    taxes = sum * 0.2;
    total = taxes + sum;
    if (input.includes("special")) {
      discount = total * 0.9;
    } else {
      discount = total;
    }
    console.log("Congratulations you've just bought a new computer!"),
      console.log(`Price without taxes: ${sum.toFixed(2)}$`),
      console.log(`Taxes: ${taxes.toFixed(2)}$`),
      console.log("-----------"),
      console.log(`Total price: ${discount.toFixed(2)}$`);
  } else {
    console.log("Invalid order!");
  }
}
computerStore([
  "1023",
  "15",
  "-20",
  "-5.50",
  "450",
  "20",
  "17.66",
  "19.30",
  "regular",
]);
