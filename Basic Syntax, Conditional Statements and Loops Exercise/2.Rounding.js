function solve(num1, precision) {
  if(precision > 15){
    precision = 15
  }
  num1 = num1.toFixed(precision)
  console.log(parseFloat(num1))
}
solve(3.1415926535897932384626433832795, 2);
