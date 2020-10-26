function storeProvision(stock, order) {
  let shop = {};
  for (let i = 0; i < stock.length; i += 2) {
    let element = stock[i];
    shop[element] = Number(stock[i + 1]);
  }
  for (let i = 0; i < order.length; i += 2) {
    let element = order[i];
    if (shop.hasOwnProperty(element)) {
      shop[element] += Number(order[i + 1]);
    }else{
      shop[element] = Number(order[i + 1]);
    }
  }
  for (const key of Object.keys(shop)) {
    console.log(`${key} -> ${shop[key]}`)
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
