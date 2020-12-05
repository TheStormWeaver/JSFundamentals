/*
Anno 1681. The Caribbean. The golden age of piracy. You are a well-known pirate captain by the name of Jack… Daniels. Together with your comrades Jim (Beam) and Johnny (Walker) you have been roaming the seas, looking for gold and treasure… and the occasional killing, of course. Go ahead, target some wealthy settlements and show them the pirate`s way!
Description
Until the "Sail" command is given you will be receiving:
•	Cities that you and your crew have targeted, with their population and gold, separated by "||".
•	If you receive a city which has been already received, you have to increase the population and gold with the given values.
After the "Sail" command, you will start receiving lines of text representing events until the "End" command is given. 
Events will be in the following format:
•	"Plunder=>{town}=>{people}=>{gold}"
o	You have successfully attacked and plundered the town, killing the given number of people and stealing the respective amount of gold. 
o	For every town you attack print this message: "{town} plundered! {gold} gold stolen, {people} citizens killed."
o	If any of those two values (population or gold) reaches zero, the town is disbanded.
	You need to remove it from your collection of targeted cities and print the following message: "{town} has been wiped off the map!"
o	There will be no case of receiving more people or gold than there is in the city.
•	"Prosper=>{town}=>{gold}"
o	There has been a dramatic economic growth in the given city, increasing its treasury by the given amount of gold.
o	The gold amount can be a negative number, so be careful. If a negative amount of gold is given print: "Gold added cannot be a negative number!" and ignore the command.
o	If the given gold is a valid amount, increase the town's gold reserves by the respective amount and print the following message: "{gold added} gold added to the city treasury. {town} now has {total gold} gold."
Input
•	On the first lines, until the "Sail" command, you will be receiving strings representing the cities with their gold and population, separated by "||"
•	On the next lines, until the "End" command, you will be receiving strings representing the actions described above, separated by "=>"
Output
•	After receiving the "End" command if there are any existing settlements on your list of targets, you need to print all of them, sorted by their gold in descending order, then by their name in ascending order, in the following format:
Ahoy, Captain! There are {count} wealthy settlements to go to:
{town1} -> Population: {people} citizens, Gold: {gold} kg
   …
{town…n} -> Population: {people} citizens, Gold: {gold} kg
•	If there are no settlements left to plunder, print:
"Ahoy, Captain! All targets have been plundered and destroyed!"
Constraints
•	The initial population and gold of the settlements will be valid, 32-bit integers, 
will never be negative or exceed the respective limits.
•	The town names in the events will always be valid towns that should be on your list.
*/
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
        console.log(`${gold} gold added to the city treasury. ${name} now has ${towns[name].gold} gold.`);
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
    console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
    for (const town of sorted) {
      console.log(`${town[0]} -> Population: ${town[1].pop} citizens, Gold: ${town[1].gold} kg`);
    }
  } else {
    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
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
