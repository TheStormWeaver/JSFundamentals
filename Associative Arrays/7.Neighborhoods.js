function neighborhoods(arr) {
  let hood = {}
  let regions = arr.shift().split(", ");
  for (const region of regions) {
    hood[region] = []
  }
  for (let i = 0; i < arr.length; i++) {
    let [neighbourhood, person] = arr[i].split(" - ");
    if (hood.hasOwnProperty(neighbourhood)) {
      hood[neighbourhood].push(person);
    }
  }
  let sorted = Object.entries(hood).sort(compareAvg);

  function compareAvg([nameA, peopleA], [nameB, peopleB]) {
    let avgA = hood[nameA].length;
    let avgB = hood[nameB].length;
    return avgB - avgA;
  }
  for (const [key, value] of sorted) {
    if (hood[key].length > 0) {
      console.log(`${key}: ${hood[key].length}`);
      for (const person of value) {
        console.log(`--${person}`);
      }
    } else {
      console.log(`${key}: ${hood[key].length}`);
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
