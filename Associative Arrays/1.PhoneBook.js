/*
Write a function that stores information about a person’s name and his phone number. The input comes as an array
of strings. Each string contains the name and the number. If you receive the same name twice just replace the
number. At the end print the result without sorting it. Try using an associative array.
*/
function phoneBook(input) {
  let phonebook = {}
  for (let line of input) {
    let tokens = line.split(" ")
    let name = tokens[0]
    let phone = tokens[1]
    phonebook[name] = phone
  }
  for (let name in phonebook) {
    console.log(`${name} -> ${phonebook[name]}`)
  }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
