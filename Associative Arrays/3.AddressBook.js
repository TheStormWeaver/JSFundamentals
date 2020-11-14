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
