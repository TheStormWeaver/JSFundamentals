/*
Create a program that tracks the battle and either chooses a winner or prints a stalemate. On the first line you will receive the status of the pirate ship, which is a string representing integer sections separated by '>'. On the second line you will receive the same type of status, but for the warship: 
"{section1}>{section2}>{section3}… {sectionn}"
On the third line you will receive the maximum health capacity a section of the ship can reach. 
The following lines represent commands until "Retire":
•	Fire {index} {damage} – the pirate ship attacks the warship with the given damage at that section. Check if the index is valid and if not skip the command. If the section breaks (health <= 0) the warship sinks, print the following and stop the program:
"You won! The enemy ship has sunken."
•	Defend {startIndex} {endIndex} {damage} - the warship attacks the pirate ship with the given damage at that range (indexes are inclusive). If the section breaks (health <= 0) the pirate ship sinks, print the following and stop the program:
"You lost! The pirate ship has sunken."
•	Repair {index} {health} - the crew repairs a section of the pirate ship with the given health. Check if the index is valid and if not skip the command. The health of the section cannot exceed the maximum health capacity.
•	Status – prints the count of all sections of the pirate ship that need repair soon, which are all sections that are lower than 20% of the maximum health capacity. Print the following:
"{count} sections need repair."
In the end if a stalemate occurs print the status of both ships, which is the sum of their individual sections in the following format:
"Pirate ship status: {pirateShipSum}"
"Warship status: {warshipSum}"

 */
function warShips(input) {
  let pirateship = input.shift().split(">").map(Number);
  let warship = input.shift().split(">").map(Number);
  let maxhealth = Number(input.shift());
  let count = 0;
  let isalive = true;
  let sumpirate = 0;
  let sumwar = 0;
  for (const line of input) {
    let command = line.split(" ")[0];
    if (!isalive) {
      break;
    }
    if (command == "Retire") {
      break;
    } else if (command == "Fire") {
      let [action, index, damage] = line.split(" ");
      index = Number(index);
      damage = Number(damage);
      let part = warship[index];
      if (warship.indexOf(part) != -1) {
        warship[index] -= damage;
        if (warship[index] <= 0) {
          console.log(`You won! The enemy ship has sunken.`);
          isalive = false;
          break;
        }
      }
    } else if (command == "Defend") {
      let [action, startindex, endindex, damage] = line.split(" ");
      startindex = Number(startindex);
      endindex = Number(endindex);
      damage = Number(damage);
      let part = pirateship[startindex];
      let finalpart = pirateship[endindex]
      if(pirateship.indexOf(part) != -1 && pirateship.indexOf(finalpart) != -1){
      for (let j = startindex; j <= endindex; j++) {
        pirateship[j] -= damage;
        if (pirateship[j] <= 0) {
          console.log(`You lost! The pirate ship has sunken.`);
          isalive = false;
          break;
        }
      }
    }
    } else if (command == "Repair") {
      let [action, index, health] = line.split(" ");
      index = Number(index);
      health = Number(health);
      let part = pirateship[index];
      if (pirateship.indexOf(part) != -1) {
        if (pirateship[index] + health > maxhealth) {
          pirateship[index] = maxhealth;
        } else {
          pirateship[index] += health;
        }
      }
    } else if (command == "Status") {
      for (const element of pirateship) {
        let current = element;
        let check = maxhealth * 0.2;
        if (current < check) {
          count++;
        }
      }
      console.log(`${count} sections need repair.`);
    }
  }
  if (isalive) {
    for (const element of pirateship) {
      sumpirate += element;
    }
    for (const element of warship) {
      sumwar += element;
    }
    console.log(`Pirate ship status: ${sumpirate}`);
    console.log(`Warship status: ${sumwar}`);
  }
}
warShips([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 1",
  "Defend 0 4 11",
  "Repair 3 4",
  "Retire",
]);
