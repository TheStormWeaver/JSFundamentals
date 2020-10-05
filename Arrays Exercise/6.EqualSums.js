function solve(arr) {
  let isindex = false
  for (let i = 0; i < arr.length; i++) { 
    let leftsum = 0
    let rightsum = 0
    if(i !== 0){
      for (let j = 0; j < i; j++) {
        leftsum += arr[j]
      }
    }
    if(i !== arr.length - 1){
      for (let r = i + 1; r < arr.length; r++) {    
        rightsum += arr[r]
      } 
    }
    if(leftsum == rightsum){
      isindex = true
      console.log(i)
    }
  }
  if(!isindex){
    console.log("no")
  }
}
solve([1, 2 ,3 ,3]);
