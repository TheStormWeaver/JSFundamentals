function cats(catsAsStrings) {
for (let catAsString of catsAsStrings) {
  let [name, age] = catAsString.split(" ")
  console.log(`${name}, age ${age} says Meow`)
}
}
cats(["Mellow 2","Tom 5"]);
