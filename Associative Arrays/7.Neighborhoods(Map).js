function neighborhoods(arr) {
  let hood = new Map();
  let regions = arr.shift().split(", ");
  for (const region of regions) {
    hood.set(region, []);
  }
  for (let i = 0; i < arr.length; i++) {
    let [neighbourhood, person] = arr[i].split(" - ");
    if (hood.has(neighbourhood)) {
      hood.get(neighbourhood).push(person);
    }
  }
  let sorted = Array.from(hood.entries()).sort(compareAvg);

  function compareAvg([nameA, peopleA], [nameB, peopleB]) {
    let avgA = hood.get(nameA).length;
    let avgB = hood.get(nameB).length;
    return avgB - avgA;
  }
  for (const [key, value] of sorted) {
    if (hood.get(key).length > 0) {
      console.log(`${key}: ${hood.get(key).length}`);
      for (const person of value) {
        console.log(`--${person}`);
      }
    } else {
      console.log(`${key}: ${hood.get(key).length}`);
    }
  }
}
neighborhoods([
  "Abbey Street, Herald Street, Bright Mews",
  "Bright Mews - Garry",
  "Bright Mews - Andrea",
  "Invalid Street - Tommy",
  "Abbey Street - Bill",
]);
