function pirates(arr) {
  let cities = {};
  for (const line of arr) {
    if (line == "Sail") {
      break;
    }
    let [city, population, gold] = line.split("||");
    if (!cities.hasOwnProperty(city)) {
      cities[city] = {};
      cities[city].population = Number(population);
      cities[city].gold = Number(gold);
    } else {
      cities[city].population += Number(population);
      cities[city].gold += Number(gold);
    }
  }
  for (const line of arr) {
    if (line == "End") {
      break;
    }
    if (line.includes("Plunder=>")) {
      let [command, town, people, gold] = line.split("=>");
      people = Number(people);
      gold = Number(gold);
      if (cities.hasOwnProperty(town)) {
        cities[town].population -= people;
        cities[town].gold -= gold;
        console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
        if (cities[town].population <= 0 || cities[town].gold <= 0) {
          console.log(`${town} has been wiped off the map!`);
          delete cities[town];
        }
      }
    } else if (line.includes("Prosper=>")) {
      let [command, town, gold] = line.split("=>");
      gold = Number(gold);
      if (cities.hasOwnProperty(town)) {
        if (gold < 0) {
          console.log(`Gold added cannot be a negative number!`);
        } else if (gold >= 0) {
          cities[town].gold += gold;
          console.log(
            `${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`
          );
        }
      }
    }
  }
  let sorted = Object.entries(cities).sort((a, b) => {
    let result = b[1].gold - a[1].gold;
    if (result === 0) {
      result = b[0].localeCompare(a[0]);
    }
    return result;
  });
  if (sorted.length > 0) {
    console.log(
      `Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`
    );
    for (const line of sorted) {
      console.log(`${line[0]} -> Population: ${line[1].population} citizens, Gold: ${line[1].gold} kg`);
    }
  }else{
    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
  }
}
pirates([
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
