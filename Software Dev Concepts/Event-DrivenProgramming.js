function analyzeString(text, onLetter, onNewWord) {
  let newWord = true;
  for (const letter of text) {
    if (letter.match(/\w/i)) {
      if (newWord)
        onNewWord();
      onLetter(letter);
      newWord = false;
    } else
      newWord = true;
  }
}

let word = '';
analyzeString(
  "Students, you are welcome to SoftUni!",
  function onLetter(l) { word += l },
  function onNewWord(l) {
    if (word != '')
      console.log('word:', word);
    console.log('[new word]');
    word = '';
  }
);
console.log('word:', word);
