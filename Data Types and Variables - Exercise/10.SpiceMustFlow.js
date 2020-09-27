function solve(startingyield) {
  let days = 0
  let totalspice = 0
  for (let i = startingyield; i >= 100; i = i - 10) {
    days ++
    totalspice += i
    totalspice -= 26
  }
  if(totalspice > 0){
  totalspice = totalspice - 26
  }else{
    totalspice = 0
  }
  console.log(days)
  console.log(totalspice)
}
solve(111);
