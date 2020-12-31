/*
Write a function to print a chessboard of size n X n. See the example for more information.
The input comes as a single number argument n.
The output should be returned as a result of your function in the form of a string.
*/
function chessBoard(n) {
  console.log('<div class="chessboard">');
  for (let i = 1; i <= n; i++) {
    // divs
    console.log("  <div>");
    if (i % 2 !== 0) {
      // starts with black
      for (let span = 1; span <= n; span++) {
        if (span % 2 !== 0) {
          console.log('    <span class="black"></span>');
        } else {
          console.log('    <span class="white"></span>');
        }
      }
    } else {
      // starts with white
      for (let span = 1; span <= n; span++) {
        if (span % 2 !== 0) {
          console.log('    <span class="white"></span>');
        } else {
          console.log('    <span class="black"></span>');
        }
      }
    }
    console.log("  </div>");
  }
  console.log("</div>");
}
chessBoard(3);
