function matchDate(input) {
  let pattern = /(?<day>\b\d{2})([\/\-.])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
  let matcher = pattern.exec(input);
  let result = [];
  while (matcher != null) {
    console.log(`Day: ${matcher.groups.day}, Month: ${matcher.groups.month}, Year: ${matcher.groups.year}`);
    matcher = pattern.exec(input);
  }
  console.log(result.join("\n"));
}
matchDate([
  "13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016",
]);
