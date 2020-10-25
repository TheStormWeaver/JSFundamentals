function convertToObject(json) {
  let stringify = JSON.stringify(json)
  let parsedObj = JSON.parse(stringify)
  for( let key of Object.keys(parsedObj)){
    console.log(`${key}: ${parsedObj[key]}`)
  }
}
convertToObject({"name": "George", "age": 40, "town":"Sofia"});
