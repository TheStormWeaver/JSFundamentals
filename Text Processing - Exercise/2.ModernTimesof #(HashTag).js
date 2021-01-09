/*
The input will be a single string.
Find all special words starting with #. Word is invalid if it has anything other than letters. 
Print the words you found without the tag each on a new line.
*/
function timesofHashTag(text) {
  text = text.split(" ");
  for (let word of text) {
    if (word.startsWith("#") && word.length > 1) {
      word = word.slice(1);
      let isonlyletters = true;
      for (const char of word) {
        let symbol = char.charCodeAt();
        if (symbol < 65 || (symbol > 90 && symbol < 97) || symbol > 122) {
          isonlyletters = false;
          break;
        }
      }
      if (isonlyletters) {
        console.log(word);
      }
    }
  }
}
timesofHashTag(
  "Nowadays everyone uses # to tag a #special word in #socialMedia"
);
