function firstlastk(arr) {
  let k = arr.shift()
  console.log(arr.slice(0, k).join(" "))
  console.log(arr.slice(arr.length - k, arr.length).join(" "))
}
firstlastk([3, 7, 8, 9, 10, 20 ,30]);

