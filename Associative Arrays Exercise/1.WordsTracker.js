/*
Write a function that receives an array of words and finds occurrences of given words in that sentence.
The input will come as array of strings. The first string will contain the words you will be looking for separated by a
space. All strings after that will be the words you will be looking for.
Print for each word how many times it occurs. The words should be sorted by count in descending.
*/
function wordsTracker(input) {
  let words = input.shift().split(" ")
  let wordsObj = {}
  for (const word of words) {
    wordsObj[word] = 0
  }
  for (const word of input){
    if(wordsObj.hasOwnProperty(word)){
      wordsObj[word] += 1
    }
  }
  let keyWords = Object.keys(wordsObj).sort((a, b) => wordsObj[b] - wordsObj[a])
  for (const element of keyWords) {
    console.log(`${element} - ${wordsObj[element]}`)
  }
}
wordsTracker([
  'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
  ,'words','this','and','sentence','because','this','is','your','task','sentence','sentence'
  ]);
