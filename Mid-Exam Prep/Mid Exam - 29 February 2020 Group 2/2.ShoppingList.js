/*
It’s the end of the week and it is time for you to go shopping, so you need to create a shopping list first. 
Input
You will receive an initial list with groceries separated by "!".
After that you will be receiving 4 types of commands, until you receive "Go Shopping!"
•	Urgent {item} - add the item at the start of the list.  If the item already exists, skip this command.
•	Unnecessary {item} - remove the item with the given name, only if it exists in the list. Otherwise skip this command.
•	Correct {oldItem} {newItem} – if the item with the given old name exists, change its name with the new one. If it doesn't exist, skip this command.
•	Rearrange {item} - if the grocery exists in the list, remove it from its current position and add it at the end of the list.
Constraints
•	There won`t be any duplicate items in the initial list
Output
Print the list with all the groceries, joined by ", ".
•	"{firstGrocery}, {secondGrocery}, …{nthGrocery}"
 */
function shoppingList(input) {
  let list = input.shift().split("!")
  for (let i = 0; i < input.length; i++) {
    let [command, item, newitem] = input[i].split(" ")
    if(command == "Go"){
      break;
    }else if(command == "Urgent"){
      if(!list.includes(item)){
        list.unshift(item)
      }
    }else if(command == "Unnecessary"){
      if(list.includes(item)){
        list.splice(list.indexOf(item), 1)
      }
    }else if(command == "Correct"){
      if(list.includes(item)){
        list.splice(list.indexOf(item), 1, newitem)
      }
    }else if(command == "Rearrange"){
      if(list.includes(item)){
        list.splice(list.indexOf(item), 1)
        list.push(item)
      }
    }
  }
  console.log(list.join(", "))
}
shoppingList([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
]);
