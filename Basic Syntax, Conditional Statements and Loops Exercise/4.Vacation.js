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
