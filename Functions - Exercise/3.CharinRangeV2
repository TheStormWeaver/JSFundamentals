function charinRange(a, b) {
  let firstchar = a.charCodeAt();
  let secondchar = b.charCodeAt();
  let start = firstchar < secondchar ? firstchar : secondchar;
  let end = firstchar > secondchar ? firstchar : secondchar;
  let line = "";
  for (let i = start + 1; i < end; i++) {
    line += String.fromCharCode(i) + " ";
  }
  return line;
}
console.log(charinRange("a", "d"));
