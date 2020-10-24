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
