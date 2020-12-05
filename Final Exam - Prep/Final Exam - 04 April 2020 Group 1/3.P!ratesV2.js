function emojiDetector(input) {
  let actions = {
    Plunder(towns, name, pop, gold) {
      [pop, gold] = [Number(pop), Number(gold)];
      let town = towns[name];
      town.pop -= pop;
      town.gold -= gold;
      console.log(
        `${name} plundered! ${gold} gold stolen, ${pop} citizens killed.`
      );
      if (town.pop <= 0 || town.gold <= 0) {
        console.log(`${name} has been wiped off the map!`);
        delete towns[name];
      }
    },
    Prosper(towns, name, gold) {
      if (gold < 0) {
        console.log(`Gold added cannot be a negative number!`);
      } else {
        gold = Number(gold);
        let town = towns[name];
        town.gold += gold;
        console.log(
          `${gold} gold added to the city treasury. ${name} now has ${towns[name].gold} gold.`
        );
      }
    },
  };
  let towns = {};
  let line;
  while ((line = input.shift()) != "Sail") {
    let [name, pop, gold] = line.split("||");
    if (!towns.hasOwnProperty(name)) {
      towns[name] = { pop: 0, gold: 0 };
    }
    towns[name].pop += Number(pop);
    towns[name].gold += Number(gold);
  }
  while ((line = input.shift()) != "End") {
    let [action, name, ...params] = line.split("=>");
    actions[action](towns, name, ...params);
  }
  let sorted = Object.entries(towns).sort(comapreTowns);
  if (sorted.length > 0) {
    console.log(
      `Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`
    );
    for (const town of sorted) {
      console.log(
        `${town[0]} -> Population: ${town[1].pop} citizens, Gold: ${town[1].gold} kg`
      );
    }
  } else {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  }
  function comapreTowns(a, b) {
    let [nameA, townA] = a;
    let [nameB, townB] = b;
    return townB.gold - townA.gold || nameA.localeCompare(nameB);
  }
}
emojiDetector([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
