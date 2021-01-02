/*
Create a function which creates a register for heroes, with their names, level, and items (if they have such).
The input comes as array of strings. Each element holds data for a hero, in the following format:
“{heroName} / {heroLevel} / {item1}, {item2}, {item3}...”
You must store the data about every hero. The name is a string, the level is a number and the items are all strings.
The output is all of the data for all the heroes you’ve stored sorted ascending by level and the items are sorted
alphabetically. The data must be in the following format for each hero:
Hero: {heroName}
level => {heroLevel}
Items => {item1}, {item2}, {item3}
*/
function solve(arr) {
  let heroes = [];
  for (const line of arr) {
    let [hero, level, items] = line.split(" / ");
    items = items
      .split(", ")
      .sort((a, b) => a.localeCompare(b))
      .join(", ");
    let heroObject = {
      Hero: hero,
      level: Number(level),
      items,
    };
    heroes.push(heroObject);
  }
  heroes.sort((a, b) => a.level - b.level);
  for (const hero of heroes) {
    console.log(`Hero: ${hero.Hero}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }
}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
