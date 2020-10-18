function DistinctArray(arr) {
  let result = []
  for (const element of arr) {
    if(!result.includes(element)){
      result.push(element)
    }
  }
  console.log(result)
}
DistinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
