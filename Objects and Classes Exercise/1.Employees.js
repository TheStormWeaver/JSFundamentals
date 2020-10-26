function employees(arr) {
  let employee = [];
  arr.forEach((element) => {
    let person = {
      name: element,
      number: element.length,
    };
    employee.push(person);
  });
  employee.forEach((Obj) => {
    console.log(`Name: ${Obj.name} -- Personal Number: ${Obj.number}`);
  });
}
employees([
  "Silas Butler&#39",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
