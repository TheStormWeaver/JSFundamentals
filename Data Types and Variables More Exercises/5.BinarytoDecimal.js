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
