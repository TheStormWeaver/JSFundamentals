function softuniReception(arr) {
  let hours = 0
  let firstEmployee = Number(arr.shift())
  let secondEmployee = Number(arr.shift())
  let thirdEmployee = Number(arr.shift())
  let studentsCount = Number(arr.shift())
  let workcap = firstEmployee + secondEmployee + thirdEmployee
  for (let i = 0; i < studentsCount; i+= workcap) {
    hours++
    if(hours % 4 === 0){
      hours++
    }
  }
  console.log(`Time needed: ${hours}h.`)
}
softuniReception(['3','2','5','40']);
