function solve(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  let convertedsum = Math.trunc(sum);
  let finalsum = 0;
  if (convertedsum == sum) {
    finalsum = sum + " - Integer";
    console.log(finalsum);
  } else {
    finalsum = sum + " - Float";
    console.log(finalsum);
  }
}
solve(9, 100, 1.1);
