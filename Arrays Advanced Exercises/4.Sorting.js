function Sorting(arr) {
  let output = [];
  let inputSorted = arr.slice(0).sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        let biggest = inputSorted.shift();
        output.push(biggest);
      } else {
        let smallest = inputSorted.pop();
        output.push(smallest);
      }
    }
  }
  console.log(output.join(" "));
}
Sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
