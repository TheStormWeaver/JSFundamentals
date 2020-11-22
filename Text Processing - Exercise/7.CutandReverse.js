function cutandReverse(str) {
  let firstHalf = str.substring(0, str.length / 2)
  let secondHalf = str.substring(str.length / 2, str.length)
  let firstResult = firstHalf.split("").reverse().join("")
  let secondResult = secondHalf.split("").reverse().join("")
  console.log(`${firstResult} \n${secondResult}`)
}
cutandReverse('tluciffiDsIsihTgnizamAoSsIsihT');
