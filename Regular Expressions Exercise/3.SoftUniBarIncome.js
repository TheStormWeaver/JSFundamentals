function softuniBarIncome(arr) {
  let totalIncome = 0
  for (const line of arr) {
    let regex = /%(?<name>[A-Z][a-z]+)%([^\|\$%\.]+)?<(?<product>[\w]+)>([^\|\$%\.]+)?\|(?<count>\d+)\|([^\|\$%\.\d]+)?(?<price>[\d. \d]+)\$/g
    let match = regex.exec(line)
    if(match){
      let total = Number(match.groups.count) * Number(match.groups.price)
      totalIncome += total
      console.log(`${match.groups.name}: ${match.groups.product} - ${total.toFixed(2)}`)
    }
  }
  console.log(`Total income: ${totalIncome.toFixed(2)}`)
}
softuniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
