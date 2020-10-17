function firstlastk(arr) {
  let k = arr.shift()
  console.log(arr.slice(0, k).join(" "))
  console.log(arr.slice(arr.length - k, k + 1).join(" "))
}
firstlastk([2, 7, 8, 9]);

