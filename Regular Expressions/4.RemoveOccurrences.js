function matchPhone(word, text) {
  let old;
  while (old !== text) {
    old = text;
    text = text.replace(word, "");
  }
  console.log(text);
}
matchPhone(["ice, kicegiciceeb"]);
