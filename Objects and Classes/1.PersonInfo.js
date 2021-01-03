/*
Write a function that receives 3 parameters, sets them to an object and returns that object.
The input comes as 3 separate strings in the following order: firstName, lastName, age.
*/
function personalInfo(arr) {
  let firstName = arr.shift()
  let lastName = arr.shift()
  let age = arr.shift()
  let person = {};
  person.firstName = firstName;
  person.lastName = lastName;
  person.age = age;

  return person
}
console.log(personalInfo(["Peter", "Pan", 20]));
