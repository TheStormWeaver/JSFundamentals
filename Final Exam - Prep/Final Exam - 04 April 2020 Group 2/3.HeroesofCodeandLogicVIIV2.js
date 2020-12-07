/*
You got your hands on the most recent update on the best MMORPG of all time – Heroes of Code and Logic. You want to play it all day long! So cancel all other arrangements and create your party!

On the first line of the standard input you will receive an integer n – the number of heroes that you can choose for your party. On the next n lines, the heroes themselves will follow with their hit points and mana points separated by empty space in the following format: 
{hero name} {HP} {MP} 
-	where HP stands for hit points and MP for mana points
-	a hero can have a maximum of 100 HP and 200 MP
After you have successfully picked your heroes, you can start playing the game.  You will be receiving different commands, each on a new line, separated by " – ", until the "End" command is given. 
There are several actions that can be performed by the heroes:
CastSpell – {hero name} – {MP needed} – {spell name} 
•	If the hero has the required MP, he casts the spell, thus reducing his MP. Print this message: 
o	"{hero name} has successfully cast {spell name} and now has {mana points left} MP!"
•	If the hero is unable to cast the spell print:
o	"{hero name} does not have enough MP to cast {spell name}!"
TakeDamage – {hero name} – {damage} – {attacker}
•	Reduce the hero HP by the given damage amount. If the hero is still alive (his HP is greater than 0) print:
o	"{hero name} was hit for {damage} HP by {attacker} and now has {current HP} HP left!"
•	If the hero has died, remove him from your party and print:
o	"{hero name} has been killed by {attacker}!"
Recharge – {hero name} – {amount}
•	The hero increases his MP. If a command is given that would bring the MP of the hero above 200, MP is increased so that it reaches the maximum. Print the following message:
o	"{hero name} recharged for {amount recovered} MP!"
Heal – {hero name} – {amount}
•	The hero increases his HP. If a command is given that would bring the HP of the hero above 100, HP is increased so that it reaches the maximum. Print the following message:
o	"{hero name} healed for {amount recovered} HP!"
Input
•	On the first line of the standard input you will receive an integer n
•	On the next n lines, the heroes themselves will follow with their hit points and mana points separated by empty space in the following format
•	You will be receiving different commands, each on a new line, separated by " – ", until the "End" command is given
Output
•	Print all members of your party who are still alive, sorted by their HP in descending order, then by their name in ascending order, in the following format (their HP/MP need to be indented 2 spaces):
"{hero name}
 	 HP: {current HP}
 MP: {current MP}
 ..."
Constraints
•	The starting HP/MP of the heroes will be valid, 32-bit integers, will never be negative or exceed the respective limits.
•	The HP/MP amounts in the commands will never be negative.
•	The hero names in the commands will always be valid members of your party. No need to check that explicitly
*/
function heroesOfCodeAndLogic(arr) {
  let n = Number(arr.shift());
  let counter = 0;
  let heroes = {};
  for (let i = 0; i < n; i++) {
    let [hero, hp, mp] = arr.shift().split(" ");
      heroes[hero] = {};
      heroes[hero].hp = Number(hp);
      heroes[hero].mp = Number(mp);
    counter++;
  }
  for (let element of arr) {
    if (element == "End") {
      break;
    }
    if (element.includes("CastSpell")) {
      let [command, hero, mp, spell] = element.split(" - ");
      mp = Number(mp);
        if (heroes[hero].mp > mp) {
          heroes[hero].mp -= mp;
          console.log(`${hero} has successfully cast ${spell} and now has ${heroes[hero].mp} MP!`);
        } else {
          console.log(`${hero} does not have enough MP to cast ${spell}!`);
        }
    } else if (element.includes("TakeDamage")) {
      let [command, hero, damage, attacker] = element.split(" - ");
      damage = Number(damage);
      heroes[hero].hp -= damage
        if (heroes[hero].hp > 0) {
          console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hp} HP left!`);
        } else {
          console.log(`${hero} has been killed by ${attacker}!`);
          delete heroes[hero];
        }
    } else if (element.includes("Recharge")) {
      let [command, hero, mp] = element.split(" - ");
      mp = Number(mp);
        if (heroes[hero].mp + mp > 200) {
          mp = 200 - heroes[hero].mp;
        }
        heroes[hero].mp += mp;
        console.log(`${hero} recharged for ${mp} MP!`);
    } else if (element.includes("Heal")) {
      let [command, hero, hp] = element.split(" - ");
      hp = Number(hp);
        if (heroes[hero].hp + hp > 100) {
          hp = 100 - heroes[hero].hp;
        }
        heroes[hero].hp += hp;
        console.log(`${hero} healed for ${hp} HP!`);
    }
  }
  let sorted = Object.entries(heroes).sort((a, b) => {
    let result = b[1].hp - a[1].hp;
    if(result == 0){
      result = a[0].localeCompare(b[0])
    }
    return result
  });
  for (let arr of sorted) {
    console.log(`${arr[0]}`);
    console.log(`  HP: ${arr[1].hp}`)
    console.log(`  MP: ${arr[1].mp}`)
  }
}
heroesOfCodeAndLogic([
  '4',
  'Adela 90 190',
  'SirMullich 80 40',
  'Ivor 4 111',
  'Tyris 100 61',
  'Heal - SirMullich - 50',
  'Recharge - Adela - 100',
  'CastSpell - Tyris - 100000 - Fireball',
  'TakeDamage - Tyris - 99 - Fireball',
  'TakeDamage - Ivor - 30 - Mosquito',
  'End'
]); //73
