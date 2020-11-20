function minerTask(arr) {
  let mine = {}
  for (let i = 0; i < arr.length; i += 2) {
    let resource = arr[i];
    let amount = Number(arr[i + 1])
    if(!mine.hasOwnProperty(resource)){
      mine[resource] = amount
    }else{
      mine[resource] += amount
    }
  }
  for (let element in mine) {
    console.log(`${element} -> ${mine[element]}`)
  }
}
minerTask([
  'Gold',
  '155',
  'Silver',
  '10',
  'Copper',
  '17'  
]);
