function solve(arr1, arr2) {
  let equal = true
  let sum = 0
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = Number(arr1[i])
  }
  for (let e = 0; e < arr2.length; e++) {
    arr2[e] = Number(arr2[e])
  }
  for (let u = 0; u < arr1.length; u++) {
    if(arr1[u] !== arr2[u]){
      console.log(`Arrays are not identical. Found difference at ${u} index`)
      equal = false
      break
    }else if (arr1[u] == arr2[u]){
      sum += arr1[u] 
    }
  }
  if(equal == true){
    console.log(`Arrays are identical. Sum: ${sum}`)
  }
}
solve(["10","20","30"],["10","20","30"]);
