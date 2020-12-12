function destinationMapper(str) {
  let pattern = /([=\/])[A-Z][A-Za-z]{2,}\1/g
  let matched = str.match(pattern)
  let points = 0
  let destinations = []
  if(matched != null){
  for (const matches of matched) {
    let current = matches.slice(1, matches.length - 1)
    destinations.push(current)
    points += current.length
  }
}
  console.log(`Destinations: ${destinations.join(", ")}`)
  console.log(`Travel Points: ${points}`)
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");

