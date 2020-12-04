function rageQuit(input) {
  let string = input[0];
  let uniqueChars = [];
  let series = string.match(/[^\d]+\d+/g);
  let print = "";
  for (let elem of series) {
    let num = Number(/\d+/g.exec(elem)[0]);
    let chars = /[^\d]+/g.exec(elem)[0];
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
