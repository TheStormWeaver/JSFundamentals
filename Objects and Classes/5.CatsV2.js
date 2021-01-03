/**
/*
Write a function that receives array of strings in the following format "{cat name} {age}".
Create a Cat class that receives in the constructor the name and the age parsed from the input.
It should also have a function named &quot;meow&quot; that will print "{cat name}, age {age} says Meow" on the
console.
For each of the strings provided you must create a cat object.
*/

function cats(catsAsStrings) {
  for (let catAsString of catsAsStrings) {
    let [name, age] = catAsString.split(" ");
    console.log(`${name}, age ${age} says Meow`);
  }
}
cats(["Mellow 2", "Tom 5"]);
