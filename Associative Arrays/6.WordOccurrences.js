function wordOccurrences(arr) {
  let wordbook = {}
  for (const line of arr) {
    if(wordbook.hasOwnProperty(line)){
      let current = wordbook[line]
      current += 1
      wordbook[line] = current
    }else{
      wordbook[line] = 1
    }
  }
  let sorted = Object.entries(wordbook)
  sorted.sort((a, b) => {valueA = a[1];valueB = b[1]; return valueB - valueA})
  for (const key of sorted) {
    console.log(`${key[0]} -> ${key[1]} times`)
  }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
