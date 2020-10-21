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
