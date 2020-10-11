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
