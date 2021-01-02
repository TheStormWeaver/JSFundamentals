/*
You will receive an array with strings in the form of JSON's.
You have to parse these strings and combine them into one object. Every string from the array will hold terms and a
description. If you receive the same term twice replace it with the new definition.
Print every term and definition in that dictionary on new line in format:
Term: ${term} => Definition: ${definition}
Don't forget to sort the dictionary alphabetically by the terms as in real dictionaries.
*/
function makeDictionary(data) {
  let result = {};
  data.forEach((x) => {
    const parsed = JSON.parse(x);
    const key = Object.keys(parsed)[0];
    const value = Object.values(parsed)[0];
    result[key] = value;
  });

  Object.entries(result)
    .sort((x, y) => x[0].localeCompare(y[0]))
    .forEach((x) => console.log(`Term: ${x[0]} => Definition: ${x[1]}`));
}
makeDictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
