function cardGame(arr) {
  let players = {};
  for (const line of arr) {
    let [name, hand] = line.split(": ");
    hand = hand.split(", ");
    if (!players.hasOwnProperty(name)) {
      players[name] = [];
    }
    players[name].push(...hand);
  }
  for (const key in players) {
    let cardsArr = new Set(players[key]);
    let total = 0;
    for (const card of cardsArr) {
      let element = card.split("");
      let type = element.pop();
      let power = element.join("");
      switch (power) {
        case "J":
          power = 11;
          break;
        case "Q":
          power = 12;
          break;
        case "K":
          power = 13;
          break;
        case "A":
          power = 14;
          break;
      }
      switch (type) {
        case "S":
          type = 4;
          break;
        case "H":
          type = 3;
          break;
        case "D":
          type = 2;
          break;
        case "C":
          type = 1;
          break;
      }
      total += (power * type)
    }
    players[key] = total
  }
  for (const element in players) {
    console.log(`${element}: ${players[element]}`)
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
