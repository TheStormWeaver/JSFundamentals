function solve(arr) {
  let meals = {};
  let disliked = 0;
  for (const line of arr) {
    if (line == "Stop") {
      break;
    }
    let [mood, person, meal] = line.split("-");
    if (mood == "Like") {
      if (!meals.hasOwnProperty(person)) {
        meals[person] = {};
        meals[person].liked = [];
      }
      if (meals.hasOwnProperty(person)) {
        if (!meals[person].liked.includes(meal)) {
          meals[person].liked.push(meal);
        }
      }
    } else if (mood == "Unlike") {
      if (meals.hasOwnProperty(person)) {
        if (meals[person].liked.includes(meal)) {
          let i = meals[person].liked.indexOf(meal);
          meals[person].liked.splice(i, 1);
          disliked++;
          console.log(`${person} doesn't like the ${meal}.`);
        } else {
          console.log(
            `${person} doesn't have the ${meal} in his/her collection.`
          );
        }
      } else {
        console.log(`${person} is not at the party.`);
      }
    }
  }
  let sorted = Object.entries(meals).sort((a, b) => {
    if (b[1].liked.length - a[1].liked.length != 0) {
      return b[1].liked.length - a[1].liked.length;
    } else {
      return a[0].localeCompare(b[0]);
    }
  });
  for (const person of sorted) {
    console.log(`${person[0]}: ${person[1].liked.join(", ")}`);
  }
  console.log(`Unliked meals: ${disliked}`);
}
solve([
  "Like-Krisi-shrimps",
  "Like-Krisi-soup",
  "Like-Misho-salad",
  "Like-Penelope-dessert",
  "Stop",
]);
solve([
  "Like-Krisi-shrimps",
  "Unlike-Vili-carp",
  "Unlike-Krisi-salad",
  "Unlike-Krisi-shrimps",
  "Stop",
]);
solve([
  "Like-Mike-frenchFries",
  "Like-Mike-salad",
  "Like-George-fruit",
  "Like-Steven-salad",
  "Unlike-Steven-salad",
  "Unlike-Steven-fruit",
  "Stop",
]);
