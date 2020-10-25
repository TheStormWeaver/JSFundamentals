function convertToObject(json) {
  let stringify = JSON.stringify(json)
  let parsedObj = JSON.parse(stringify)
  for( let key of Object.keys(parsedObj)){
    console.log(`${key}: ${parsedObj[key]}`)
  }
}
let input = {"name": "George", "age": 40, "town": "Sofia"}
convertToObject(input);

