/*
Write a function that stores information about an army leader and his armies. The input will be array of strings. The strings can be in some of the following formats:
"{leader} arrives" – add the leader (no army)
"{leader}: {army name}, {army count}" – add the army with its count to the leader (if he exists)
"{army name} + {army count}" – if the army exists somewhere add the count
"{leader} defeated" – delete the leader and his army (if he exists)
When finished reading the input sort the leaders by total army count in descending. Then each army should be sorted by count in descending.
Print in the following format:
"{leader one name}: {total army count}
>>> {armyOne name} - {army count}
>>> {armyTwo name} - {army count}
 …
{leader two name}: {total army count}
…"
Constrains
•	The new leaders will always be unique
•	When adding new army to leader, the army will be unique
*/
function armies(arr) {
  let barracks = {};
  for (let line of arr) {
    if (line.includes("arrives")) {
      line = line.split(" ");
      line.pop();
      let leader = line.join(" ");
      barracks[leader] = {};
    } else if (line.includes(":")) {
      let leader = line.split(":").shift();
      if (barracks.hasOwnProperty(leader)) {
        line = line.split(": ")[1];
        let [armyName, count] = line.split(", ");
        barracks[leader][armyName] = Number(count);
      }
    } else if (line.includes("+")) {
      let [armyName, armyCount] = line.split(" + ");
      let exists = false;
      let leader = "";
      for (let key in barracks) {
        if (barracks[key].hasOwnProperty(armyName)) {
          exists = true;
          leader = key;
          break;
        }
      }
      if (exists) {
        armyCount = Number(armyCount);
        barracks[leader][armyName] += armyCount;
      }
    } else if (line.includes("defeated")) {
      line = line.split(" ");
      line.pop();
      let leader = line.join(" ");
      if (barracks.hasOwnProperty(leader)){
         delete barracks[leader];
      }
    }
  }
  for (const leader in barracks) {
    let total = 0;
    for (const army in barracks[leader]) {
      total += barracks[leader][army];
    }
    barracks[leader].total = total;
  }
  let sorted = Object.entries(barracks).sort((a, b) => b[1].total - a[1].total);
  for (const key of sorted) {
    console.log(`${key[0]}: ${key[1].total}`);
    let result = Object.entries(key[1]).sort((a, b) => b[1] - a[1]);
    for (const army of result) {
      if (army[0] != `total`) {
        console.log(`>>> ${army[0]} - ${army[1]}`);
      }
    }
  }
}
armies([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
]);
