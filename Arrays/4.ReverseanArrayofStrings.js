function solve(arr) {
  let lastindex = arr.length - 1
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i]
    arr[i] = arr[lastindex - i]
    arr[lastindex - i] = temp
  }
  console.log(arr.join(" "))
}
solve(["a","b","c","d","e"]);
