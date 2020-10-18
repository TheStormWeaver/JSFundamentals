function DistinctArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let index = arr.indexOf(arr[i], i + 1)
    if (index !== -1){
      arr.splice(index,1)
    }
  }
  console.log(arr);
}
DistinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
