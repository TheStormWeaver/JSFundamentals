function nonDecreasing(arr) {
  let result = []
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max){
      max = arr[i]
      result.push(max)
    }
  }
  console.log(result.join(" "))
}
nonDecreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]);
