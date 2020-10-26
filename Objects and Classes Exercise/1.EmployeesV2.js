function employees(arr) {
  let employee = {}
  for (const line of arr) {
    employee[line] = line.length
  }
  Object.entries(employee).forEach(element => {
    console.log(`Name: ${element[0]} -- Personal Number: ${element[1]}`)
  });
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
