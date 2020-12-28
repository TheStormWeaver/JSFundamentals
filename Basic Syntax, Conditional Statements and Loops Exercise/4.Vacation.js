/*
You are given a group of people, type of the group, and day of the week they are going to stay. Based on that
information calculate how much they have to pay and print that price on the console. Use the table below. In each
cell is the price for a single person. The output should look like that:
"Total price: {price}." The price should be formatted to the second decimal point.
There are also discounts based on some conditions:
· Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
· Business – if the group is bigger than or equal to 100 people 10 of them can stay for free.
· Regular – if the group is bigger than or equal 10 and less than or equal to 20 reduce the total price by 5%
You should reduce the prices in that EXACT order
*/
function solve(numofppl, group, day) {
  let price = 0;
  if (group == "Students") {
    if (day == "Friday") {
      price += 8.45;
    } else if (day == "Saturday") {
      price += 9.8;
    } else if (day == "Sunday") {
      price += 10.46;
    }
  } else if (group == "Business") {
    if (day == "Friday") {
      price += 10.9;
    } else if (day == "Saturday") {
      price += 15.6;
    } else if (day == "Sunday") {
      price += 16;
    }
  } else if (group == "Regular") {
    if (day == "Friday") {
      price += 15;
    } else if (day == "Saturday") {
      price += 20;
    } else if (day == "Sunday") {
      price += 22.5;
    }
  }
  if (group == "Students") {
    if (numofppl >= 30) {
      price = price * 0.85;
    }
  }
  if (group == "Business") {
    if (numofppl >= 100) {
      numofppl = numofppl - 10;
    }
  }
  if (group == "Regular") {
    if ((numofppl > 10) & (numofppl < 20)) {
      price = price * 0.95;
    }
  }
  sum = price * numofppl;
  console.log(`Total price: ${sum.toFixed(2)}`);
}
solve(30, "Students", "Sunday");
