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
