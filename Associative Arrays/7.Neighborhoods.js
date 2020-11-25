/*
Write a function that receives list of neighborhoods and then some people, who are going to live in it. The input will
come as array of strings. The first element will be the list of neighborhoods separated by &quot;, &quot;. The rest of the
elements will be a neighborhood followed by a name of a person in the format "{neighborhood} - {person}".
Add the person to the neighborhood only if the neighborhood is in the list of neighborhoods. At the end print the
neighborhoods sorted by the count of inhabitants in descending order. Print them in the following format:
"{neighborhood}: {inhabitants count}
--{1 st inhabitant}
--{2 nd inhabitant}
…"
*/
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
