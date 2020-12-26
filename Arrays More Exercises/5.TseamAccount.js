/*
As a gamer, Peter has Tseam Account. He loves to buy new games. You are given Peter&#39;s account with all of his
games-&gt; strings, separated by space. Until you receive &quot;Play!&quot; you will be receiving commands which Peter does
with his account.`
You may receive the following commands:
Install {game}
Uninstall {game}
Update {game}
Expansion {game}-{expansion}
If you receive Install command, you should add the game at last position in the account, but only if it isn&#39;t
installed already.
If you receive Uninstall command, delete the game if it exists.
If you receive Update command, you should update the game if it exists and place it on last position.
If you receive Expansion command, you should check if the game exists and insert after it the expansion in the
following format: "{game}:{expansion}";
Input
On the first input line you will receive Peter`s account - sequence of game names, separated by space.
Until you receive &quot;Play!&quot; you will be receiving commands.
Output
As output you must print Peter`s Tseam account.
Constraints
The command will always be valid.
The game and expansion will be strings and will contain any character, except &#39;-&#39;.
Allowed working time / memory: 100ms / 16MB.
*/
function Tseamacc(arr) {
  let account = arr.shift().split(" ");
  for (let element of arr) {
    if (element == "Play!") {
      break;
    }
    let splitted = element.split(" ");
    let command = splitted[0];
    let currentgame = splitted[1];
    if (command == "Install") {
      if (account.includes(currentgame)) {
        continue;
      } else {
        account.push(currentgame);
      }
    } else if (command == "Uninstall") {
      if (account.includes(currentgame)) {
        account.splice(account.indexOf(currentgame), 1);
      }
    } else if (command == "Update") {
      if (account.includes(currentgame)) {
        account.splice(account.indexOf(currentgame), 1);
        account.push(currentgame);
      }
    } else if (command == "Expansion") {
      let currentgame = splitted[1].split("-")[0];
      let expansion = splitted[1].split("-")[1];
      if (account.includes(currentgame)) {
        let insert = `${currentgame}:${expansion}`;
        account.splice(account.indexOf(currentgame) + 1, 0, insert);
      }
    }
  }
  console.log(account.join(" "));
}
Tseamacc([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
