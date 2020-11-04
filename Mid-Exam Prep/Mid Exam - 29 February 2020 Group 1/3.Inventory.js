/*
Input / Constraints
You will receive a journal with some Collecting items, separated with ', ' (comma and space). After that, until receiving "Craft!" you will be receiving different commands. 
Commands (split by " - "):
•	"Collect - {item}" – Receiving this command, you should add the given item in your inventory. If the item already exists, you should skip this line.
•	"Drop - {item}" – You should remove the item from your inventory, if it exists.
•	"Combine Items - {oldItem}:{newItem}" – You should check if the old item exists, if so, add the new item after the old one. Otherwise, ignore the command.
•	"Renew – {item}" – If the given item exists, you should change its position and put it last in your inventory.
Output
After receiving "Craft!" print the items in your inventory, separated by ", " (comma and space).
 */
function Inventory(input) {
  let inventory = input.shift().split(", ")
  let journal = input.toString().split(",")
  for (const line of journal) {
    let currentcommand = line.split(" ")[0]
    if(currentcommand == "Craft!"){
      break;
    }
    if(currentcommand == "Collect"){
      let [command, item] = line.split(" - ")
      if(!inventory.includes(item)){
        inventory.push(item)
      }
    }else if(currentcommand == "Drop"){
      let [command, item] = line.split(" - ")
      if(inventory.includes(item)){
        inventory.splice(inventory.indexOf(item), 1)
      }
    }else if(currentcommand == "Combine"){
      let command = line.split(" - ")[1]
      let firstitem = command.split(":")[0]
      let seconditem = command.split(":")[1]
      if(inventory.includes(firstitem)){
        inventory.splice(inventory.indexOf(firstitem) + 1, 0, seconditem )
      }
    }else if(currentcommand == "Renew"){
      let [command, item] = line.split(" - ")
      if(inventory.includes(item)){
        inventory.splice(inventory.indexOf(item), 1)
        inventory.push(item)
      }
    }
  }
  console.log(inventory.join(", "))
}
Inventory([ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ]);
