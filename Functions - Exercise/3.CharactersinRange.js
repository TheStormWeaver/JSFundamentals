/*
Write a function that receives two characters and prints on a single line all the characters in between them
according to the ASCII code. Keep in mind that the second character code might be before the first one inside the
ASCII table.
*/
function charinRange(a, b) {
  let firstchar = a.charCodeAt();
  let secondchar = b.charCodeAt();
  let start = Math.min(firstchar, secondchar)
  let end = Math.max(firstchar, secondchar)
  let line = "";
  for (let i = start + 1; i < end; i++) {
    line += String.fromCharCode(i) + " ";
  }
  return line;
}
console.log(charinRange("a", "d"));
