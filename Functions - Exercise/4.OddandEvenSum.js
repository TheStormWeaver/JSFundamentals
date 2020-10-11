function OddandEvenSum(n) {
  let sumodd = 0
  let sumeven = 0
  let arr = String(n).split("")
  for (let i = 0; i < arr.length; i++) {
    const num = Number(arr[i])
    if(num % 2 == 0){
      sumeven +=num
    }else{
      sumodd += num
    }
  }
  return `Oddsum = ${sumodd}, Evensum = ${sumeven}`
}
console.log(OddandEvenSum(1000435));
