/*
Write a function to calculate a cone’s volume and total surface area by given height and radius at the base.
The input comes as two number arguments. The first element is the cone’s radius and the second is its height.
The output should be printed to the console on a new line for every result. The result should be formatted to the
fourth decimal point
*/
function cone(r, h) {
  let volume = (1 / 3) * Math.PI * r ** 2 * h;
  let slant = Math.sqrt(r ** 2 + h ** 2);
  let latArea = Math.PI * r * slant;
  let baseArea = Math.PI * r ** 2;
  let totalArea = latArea + baseArea;
  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${totalArea.toFixed(4)}`);
}
cone(3, 5);
