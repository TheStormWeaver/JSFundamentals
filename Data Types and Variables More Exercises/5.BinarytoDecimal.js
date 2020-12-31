/*
Write a function that reads an 8-bit binary number and converts it to a decimal.
The input comes as one string element, representing a binary number.
The output should be printed to the console.
*/
function binaryToDecimal(binary) {
  binary = binary.toString();
  let decimal = 0;
  let exponent = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
      decimal += binary[i] * (2 ** exponent);
      exponent++;
  }
  console.log(decimal);
}
binaryToDecimal(00001001);
