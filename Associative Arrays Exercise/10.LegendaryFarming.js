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
