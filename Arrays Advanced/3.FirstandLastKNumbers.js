function firstlastk(arr) {
  let k = arr.shift()
  console.log(arr.slice(0, k))
  console.log(arr.slice(arr.length - k, k + 1))
}
firstlastk([2, 7, 8, 9]);
