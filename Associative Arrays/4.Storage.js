function storage(input) {
  let warehouse = new Map()
  for (const line of input) {
    let [product, amount] = line.split(" ")
    amount = Number(amount)
    if(warehouse.has(product)){
      let existing = warehouse.get(product)
      warehouse.set(product, existing + amount)
    }else{
      warehouse.set(product, amount)
    }
  }
  for (const [product, amount] of warehouse) {
    console.log(`${product} -> ${amount}`)
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
