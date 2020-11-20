function cardGame(input) {
      let obj = {};
    for (let line of input) {
        let [name, cards] = line.split(": ");
        cards = cards.split(", ");
        if (!obj.hasOwnProperty(name)) {
            let uniq = Array.from(new Set(cards));
            obj[name] = uniq;
        } else {
            let concated = obj[name].concat(cards);
            let uniq = Array.from(new Set(concated));
            obj[name] = uniq;
        }

    }
    for (let key in obj) {
        let value = 0;
        for (let card of obj[key]) {     // goes through person's cards
            card = card.split("");
            let type = card.pop();
            let power = card.join("");
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
                default:
                    power = Number(power);
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
            value += (power * type);
        }
        obj[key].value = value;
    }
    for (let key in obj) {
        console.log(`${key}: ${obj[key].value}`);
    }
    console.log(obj);
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);

