/*
The SoftUni Spelling Bee competition is here. But it`s not like any other Spelling Bee competition out there, it`s different and a lot more fun! You, of course, are a participant and you are eager to show the competition that you are the best, so go ahead, learn the rules and win!
On the first line of the input you will be given a text string. In order to win the competition you have to find all hidden word pairs, read them and mark the ones that are mirror images of each other.
First of all you have to extract the hidden word pairs. Hidden word pairs are:
•	Surrounded by "@" or "#" (only one of the two) in the following pattern #wordOne##wordTwo# or @wordOne@@wordTwo@
•	At least 3 characters long each (without the surrounding symbols)
•	Made up of letters only
If the second word, spelled backwards is the same as the first word and vice versa (casing matters!), then they are a match and you have to store them somewhere. Examples of mirror words: 
#Part##traP# @leveL@@Level@ #sAw##wAs#
•	If you don`t find any valid pairs print: "No word pairs found!"
•	If you find valid pairs print their count: "{valid pairs count} word pairs found!"
•	If there are no mirror words print: "No mirror words!"
•	If there are mirror words print:
"The mirror words are:
{wordOne} <=> {wordtwo}, {wordOne} <=> {wordtwo}, {wordOne} <=> {wordtwo}, etc…"
Input / Constraints
•	You will recive a string.
Output
•	Print the proper output messages in the proper cases as described in the problem description.
•	If there are pairs of mirror words, print them in the end, each pair separated by ", ".
•	Each pair of mirror word must be printed with " <=> " between the words.
*/
function mirrorWords(arr) {
  let str = arr.shift();
  let pattern = /([@#])[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g;
  let matches = str.match(pattern);
  let mirror = [];
  if (matches) {
    console.log(`${matches.length} word pairs found!`);
    for (const match of matches) {
      let words = match.split(match[0]);
      words = words.filter((x) => x.length > 0);
      let isMirror = words[0] == words[1].split("").reverse().join("");
      if (isMirror) {
        mirror.push(`${words[0]} <=> ${words[1]}`);
      }
    }
  } else {
    console.log(`No word pairs found!`);
  }
  if(mirror.length > 0){
    console.log(`The mirror words are:`)
    console.log(mirror.join(", "))
  }else{
    console.log(`No mirror words!`)
  }
}
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])
