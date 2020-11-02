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
