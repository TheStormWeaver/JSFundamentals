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
