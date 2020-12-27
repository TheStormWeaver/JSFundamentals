/*
You’ve beaten all the content and the last thing left to accomplish is own a legendary item. However, it’s a tedious process and requires quite a bit of farming. Anyway, you are not too pretentious – any legendary will do. The possible items are:
•	Shadowmourne – requires 250 Shards;
•	Valanyr – requires 250 Fragments;
•	Dragonwrath – requires 250 Motes;
Shards, Fragments and Motes are the key materials, all else is junk. You will be given as a string, such as 2 motes 3 ores 15 stones. Keep track of the key materials - the first that reaches the 250 mark wins the race. At that point, print the corresponding legendary obtained. Then, print the remaining shards, fragments, motes, ordered by quantity in descending order, then by name in ascending order, each on a new line. Finally, print the collected junk items, in alphabetical order.
Input
•	Input is a string  in format {quantity} {material} {quantity} {material} … {quantity} {material}
Output
•	On the first line, print the obtained item in format {Legendary item} obtained!
•	On the next three lines, print the remaining key materials in descending order by quantity
o	If two key materials have the same quantity, print them in alphabetical order
•	On the final several lines, print the junk items in alphabetical order
o	All materials are printed in format {material}: {quantity}
o	All output should be lowercase, except the first letter of the legendary
*/
function legendaryFarming(input) {
  let mainItems = {
    shards: 0,
    fragments: 0,
    motes: 0,
  };
  let stuff = {};
  let arr = input.split(" ");
  for (let i = 0; i < arr.length; i += 2) {
    let amount = Number(arr[i]);
    let element = arr[i + 1].toLowerCase();
    if (mainItems.hasOwnProperty(element)) {
      mainItems[element] += amount;
    } else {
      if (!stuff.hasOwnProperty(element)) {
        stuff[element] = amount;
      } else {
        stuff[element] += amount;
      }
    }
    if (mainItems.shards >= 250) {
      console.log(`Shadowmourne obtained!`);
      mainItems.shards -= 250;
      break;
    } else if (mainItems.fragments >= 250) {
      console.log(`Valanyr obtained!`);
      mainItems.fragments -= 250;
      break;
    } else if (mainItems.motes >= 250) {
      console.log(`Dragonwrath obtained!`);
      mainItems.motes -= 250;
      break;
    }
  }
  let sortedMain = Object.entries(mainItems).sort((a, b) => {
    if (a[1] - b[1] !== 0) {
      return b[1] - a[1];
    } else {
      return a[0].localeCompare(b[0]);
    }
  });
  let sortedStuff = Object.entries(stuff).sort((a, b) =>a[0].localeCompare(b[0]));
  for (const key of sortedMain) {
    console.log(`${key[0]}: ${key[1]}`);
  }
  for (const key of sortedStuff) {
    console.log(`${key[0]}: ${key[1]}`);
  }
}
legendaryFarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
