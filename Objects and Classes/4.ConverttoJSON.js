function convertToJSON(name, lastName, hairColor) {
  let person = {
    name,
    lastName,
    hairColor,
  };
  let asString = JSON.stringify(person);
  console.log(asString);
}
convertToJSON("George", "James", "Brown");
