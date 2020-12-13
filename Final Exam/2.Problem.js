function solve(arr) {
  let n = Number(arr.shift());
  let messages = [];
  for (let i = 0; i < n; i++) {
    let message = arr.shift();
    messages.push(message);
  }
  for (const line of messages) {
    let pattern = /![A-Z][a-z]{2,}!:\[[A-Za-z]{8,}\]/g;
    let matcher = pattern.exec(line);
    if (matcher) {
      let i = line.indexOf("[");
      let text = line.slice(i + 1, line.length - 1);
      text = text.split("");
      let final = "";
      for (const letter of text) {
        if (letter != " ") {
          let char = letter.charCodeAt();
          final += char + " ";
        }
      }
      let message = line.slice(0, i);
      message = message.split("!");
      message = message.join("");
      console.log(`${message} ${final.trimEnd()}`);
    } else {
      console.log("The message is invalid");
    }
  }
}
solve(["2", "!Send!:[IvanisHere]", "*Time@:[Itis5amAlready]"]);
solve([
  "3",
  "go:[outside]",
  "!drive!:YourCarToACarWash",
  "!Watch!:[LordofTheRings]",
]);
solve([
  "3",
  "!play!:[TheNewSong]",
  "!Ride!:[Bike]",
  "!Watch!:[LordofTheRings]",
]);
