/*
The input will be a single string.
Write a function that cuts the given string into half and reverse the two halves. 
Print each half on a separate line.
*/
function cutandReverse(str) {
  let firstHalf = str.substring(0, str.length / 2)
  let secondHalf = str.substring(str.length / 2, str.length)
  let firstResult = firstHalf.split("").reverse().join("")
  let secondResult = secondHalf.split("").reverse().join("")
  console.log(`${firstResult} \n${secondResult}`)
}
cutandReverse('tluciffiDsIsihTgnizamAoSsIsihT');
