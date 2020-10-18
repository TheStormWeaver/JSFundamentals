function Distinct(arr) {
  for (let i = 0; i < arr.length; i++) {
    let index = arr.indexOf(arr[i], i + 1);

    while (index !== -1) {
      arr.splice(index, 1);
      index = arr.indexOf(arr[i], i + 1);
    }
  }
  console.log(arr.join(" "));
}
Distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]);
