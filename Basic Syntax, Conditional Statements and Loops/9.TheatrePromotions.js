/*
A theatre is doing a ticket sale, but they need a program to calculate the price of a single ticket. If the given age
does not fit one of the categories, you should print &quot;Error!&quot;. You can see the prices in the table below:
0 <= age <= 18  
Weekday 12$  Weekend 15$ Holiday 5$
18 <= age <= 64
Weekday 18$ Weekend 20$ Holiday 12$
64 <= age <= 122
Weekday 12$ Weekend 15$ Holiday 10$ 
Input
The input comes in two parameters. The first one will be the type of day (string). The second – the age of the
person (number).
Output
Print the price of the ticket according to the table, or "Error!" if the age is not in the table.
Constraints
The age will be in the interval [-1000…1000].
The type of day will always be valid.
*/
function solve(day, age) {
  price = 0;
  if (0 <= age & age < 18) {
    switch (day) {
      case "Weekday":
        price += 12;
        break;
      case "Weekend":
        price += 15;
        break;
      case "Holiday":
        price += 5;
        break;
    }
    }else if (18 < age & age <= 64) {
    switch (day) {
      case "Weekday":
        price += 18;
        break;
      case "Weekend":
        price += 20;
        break;
      case "Holiday":
        price += 12;
        break;
    }
  }else if (64 < age & age <= 122) {
    switch (day) {
      case "Weekday":
        price += 12;
        break;
      case "Weekend":
        price += 15;
        break;
      case "Holiday":
        price += 10;
        break;
    }
  }
  if(price > 0){
    console.log(`${price}$`)
  }else{
    console.log("Error!")
  }
}
