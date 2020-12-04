function rageQuit(input) {
  let first = input[0];
  let uniqueChars = [];
  let elements = first.match(/[^\d]+\d+/g);
  let print = "";
  for (let element of elements) {
    let num = Number(/\d+/g.exec(element)[0]);
    let chars = /[^\d]+/g.exec(element)[0];
    chars = chars.toUpperCase();
    if (num !== 0) {
      for (let char of chars) {
        if (!uniqueChars.includes(char)) {
          uniqueChars.push(char);
        }
      }
      for (let i = 1; i <= num; i++) {
        print += chars;
      }
    }
  }
  console.log(`Unique symbols used: ${uniqueChars.length}`);
  console.log(print);
}
rageQuit(["a3"]);
