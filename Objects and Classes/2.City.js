/*
Receive a single parameter – an object, containing five properties:
{ name, area, population, country, postcode }
Loop through all the keys and print them with their values in format: &quot;{key} -&gt; {value}&quot;
See the examples below.
*/
function cityInfo(city) {
  let keys = Object.keys(city);
  for (const key of keys) {
    let value = city[key];
    console.log(`${key} -> ${value}`);
  }
}
cityInfo({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: 1000,
});
