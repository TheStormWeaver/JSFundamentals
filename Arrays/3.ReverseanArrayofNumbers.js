function solve(num, arr) {
  let newarr = []
  let result = ""
  for (let i = 0; i < num; i++) {
    newarr.push(arr[i])
  }
  for (let i = newarr.length - 1; i >= 0 ; i--) {
    result += newarr[i]
    result += " "
  }
  console.log(result)
}
solve(3, [10, 20, 30, 40, 50]);
