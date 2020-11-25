/*
Write a function that stores information about a person’s name and his address. The input comes as an array of
strings. Each string contains the name and the address separated by a colon. If you receive the same name twice
just replace the address. At the end print the full list, sorted alphabetically by the person’s name.
*/
function addressBook(input) {
  let catalog = {}
  for (const line of input) {
    let [name, address] = line.split(":")
    catalog[name] = address
  }
  let sorted = Object.entries(catalog)
  sorted.sort((a, b) => { 
    keyA = a[0];
    keyB = b[0];
    return keyA.localeCompare(keyB)
    });
  for (const [name, address] of sorted) {
    console.log(`${name} -> ${address}`)
  }
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
