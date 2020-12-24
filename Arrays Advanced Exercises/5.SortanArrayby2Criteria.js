/*
Write a function that orders an array of strings, by their length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
The input comes as array of strings.
The output is the ordered array of strings.
*/
function sortBy2Criteria(arr) {
  arr.sort((a, b) => {
    if (a.length - b.length !== 0) {
      return a.length - b.length;
    } else {
      return a.localeCompare(b);
    }
  });
  console.log(arr.join("\n"));
}
sortBy2Criteria(["alpha", "beta", "gamma"]);
