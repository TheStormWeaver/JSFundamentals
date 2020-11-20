function timeTravel(arr) {
  let destinations = {}
  for (const line of arr) {
    let [country, town, cost] = line.split(" > ")
    cost = Number(cost)
    if(!destinations.hasOwnProperty(country)){
      destinations[country] = {};
      destinations[country][town] = cost;
    }else if (destinations.hasOwnProperty(country) && !destinations[country].hasOwnProperty(town)) {
      destinations[country][town] = cost;
  } else if (destinations.hasOwnProperty(country) && destinations[country].hasOwnProperty(town)) {
      if (destinations[country][town] > cost) {
          destinations[country][town] = cost;
      }
    }
  }
  let sorted = Object.entries(destinations).sort((a, b) => a[0].localeCompare(b[0]));
  for (let element of sorted) {
      let print = "";
      print += `${element[0]} -> `;
      for (let town in element[1]) {
          print += `${town} -> ${element[1][town]} `;
      }
      console.log(print);
  }
}
timeTravel([
"Bulgaria > Sofia > 500",
"Bulgaria > Sopot > 800",
"France > Paris > 2000",
"Albania > Tirana > 1000",
"Bulgaria > Sofia > 200"
])
