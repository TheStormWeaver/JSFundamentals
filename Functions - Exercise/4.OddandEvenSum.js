/*
You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits
from that number.
*/
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
