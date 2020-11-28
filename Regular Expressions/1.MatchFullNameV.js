function matchName([text]) {
  let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  let matches = text.match(pattern);
  console.log(matches.join(" "));
}
matchName(["ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov",]);
