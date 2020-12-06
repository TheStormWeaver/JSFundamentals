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
mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"])
