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
