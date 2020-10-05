function solve(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let isbigger = true
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[i] <= arr[j]){
        isbigger = false
      }
    }
    if(isbigger){
      result.push(arr[i])
    }
  }
  console.log(result.join(" "))
}
solve([1, 4, 3, 2]);
