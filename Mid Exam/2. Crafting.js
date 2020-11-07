/*
You will receive a line with string particles, separated by "|", representing parts of the name of a weapon. The particles will be in mixed order and you can align them through the commands, which you will receive on the next lines, until you receive the "Done" command. They will come the form of strings, separated by space. There are five supported commands: 
•	"Move Left {index}":
•	Moves the value at {index} position to the Left, if the index exist and the move is possible.
•	If movement is not possible, do nothing.
•	"Move Right {index}":
•	Moves the value at {index} position to the Right, if the index exists and the move is possible.
•	If movement is not possible, do nothing.
•	"Check Even":
•	Print the elements at even index positions, separated by a single space.
•	"Check Odd":
•	Print the elements at odd index positions, separated by a single space.
 After the "Done" command, the weapon name is considered correct and you should print the particles in their current order joined together in the following format: "You crafted {WeaponName}!"
Input
•	On the first line, you will receive parts of the given weapon name in a mixed order separated by "|".
•	On the next lines, until the "Done" command, you will receive commands in the format described above.
Output
•	Print the needed output upon the "Done" command as a string.
•	Output should be in the format "You crafted {Weapon name}!"
 */
function crafting(input) {
  let weaponname = input.shift().split("|");
  let oddarr = []
  let evenarr = []
  let checkedodd = false
  let checkeven = false
  for (const line of input) {
    let [command, action, amount] = line.split(" ");
    amount = Number(amount)
    if (command == "Done") {
      break;
    } else if (command == "Move") {
      if (action == "Left") {
        let currentpart = weaponname[amount];
        let move = weaponname[amount - 1]
        if (weaponname.indexOf(move) != -1) {
          weaponname.splice(weaponname.indexOf(currentpart), 1);
          weaponname.splice(weaponname.indexOf(move), 0, currentpart);
        }
      } else {
        let currentpart = weaponname[amount];
        let move = weaponname[amount + 1]
        if (weaponname.indexOf(move) != -1) {
          weaponname.splice(weaponname.indexOf(currentpart), 1);
          weaponname.splice(weaponname.indexOf(move) + 1, 0, currentpart);
        }
      }
    }else if(command == "Check"){
      if(action == "Even"){
        for (let j = 0; j < weaponname.length; j++) {
          if(j % 2 == 0){
            evenarr.push(weaponname[j])
            checkeven = true
          }
        }
      }else{
        for (let j = 0; j < weaponname.length; j++) {
          if(j % 2 == 1){
            oddarr.push(weaponname[j])
            checkedodd = true
          }
        }
      }
    }
  }
  if(checkeven){
    console.log(evenarr.join(" "))
  }
  if(checkedodd){
    console.log(oddarr.join(" "))
  }
  console.log(`You crafted ${weaponname.join("")}!`);
}
crafting(["ha|Do|mm|om|er",
"Move Right 0",
"Move Left 3",
"Check Odd",
"Check Even",
"Move Left 2",
"Move Left 10",
"Move Left 0",
"Done"])

