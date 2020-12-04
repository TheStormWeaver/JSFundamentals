function winningTicket(input) {
  input = input.shift().split(/\s*,\s*/g);
  for (let line of input) {
    if (line.length !== 20) {
      console.log("invalid ticket");
      continue;
    }
    let firstHalf = line.substring(0, line.length / 2);
    let secHalf = line.substring(line.length / 2, line.length);
    let pattern = /[@#$^]{6,}/g;
    let firstMatched = firstHalf.match(pattern);
    let secMatched = secHalf.match(pattern);
    if (firstMatched !== null && secMatched !== null) {
      let combination;
      if (firstMatched[0].length === secMatched[0].length) {
        combination = firstMatched[0];
      } else if (firstMatched[0].length > secMatched[0].length) {
        combination = secMatched[0];
      } else {
        combination = firstMatched[0];
      }

      if (combination.length >= 6 && combination.length <= 9) {
        console.log(
          `ticket "${line}" - ${combination.length}${combination[0]}`
        );
      } else if (combination.length === 10) {
        console.log(
          `ticket "${line}" - ${combination.length}${combination[0]} Jackpot!`
        );
      } else {
        console.log(`ticket "${line}" - no match`);
      }
    } else {
      console.log(`ticket "${line}" - no match`);
    }
  }
}
winningTicket(["Cash$$$$$$Ca$$$$$$sh"]);
