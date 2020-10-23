function magicMatrices(mat) {
  let magic = 0;
  for (let num of mat[0]) {
    magic += num;
  }
  let isMagic = false;
  for (let row = 0; row < mat.length; row++) {
    let toCheck = 0;
    for (let num of mat[row]) {
      toCheck += num;
    }
    if (toCheck === magic) {
      isMagic = true;
    } else {
      isMagic = false;
      break;
    }
  }
  if (isMagic) {
    for (let col = 0; col < mat[0].length; col++) {
      let toCheck = 0;
      for (let row = 0; row < mat.length; row++) {
        toCheck += mat[row][col];
      }
      if (toCheck === magic) {
        isMagic = true;
      } else {
        isMagic = false;
        break;
      }
    }
  }
  console.log(isMagic);
}
magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
