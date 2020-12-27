/*
You are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on), and every even – quantity. Your task is to collect the resources and print them each on a new line. 
Print the resources and their quantities in format:
{resource} –> {quantity}
The quantities inputs will be in the range [1 … 2 000 000 000]
*/
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
