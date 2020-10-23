function spiralMatrix(x, y) {
  let maxNumber = x * y;   // center of the matrix
  let matrix = [];
  for (let i = 0; i < x; i++) {
      let toPush = [];
      toPush.length = y;
      matrix.push(toPush);
  }
  let num = 0;
  for (let s = 0; s < Math.floor(x / 2); s++) {        // circles / spiral movements !!!
      for (let fr = 0 + s; fr < matrix[s].length - s; fr++) { // current first row
          num++;
          matrix[s][fr] = num; // s is the row in the matrix
      }
      for (let row = 1 + s; row < matrix.length - s; row++) {
          num++;
          matrix[row][y - 1 - s] = num
      }
      for (let lr = y - 2 - s; lr >= 0 + s; lr--) {     //lr - current last row
          num++;
          matrix[x - 1 - s][lr] = num;
      }
      for (let row = y - 2 - s; row >= 1 + s; row--) {
          num++;
          matrix[row][s] = num;
      }
  }
  if (x % 2 !== 0 && y % 2 !== 0) {
      matrix[Math.floor(x / 2)][Math.floor(y / 2)] = num + 1;
  }
  for (let row of matrix) {
      console.log(row.join(" "));
  }
}
spiralMatrix(5, 5);
