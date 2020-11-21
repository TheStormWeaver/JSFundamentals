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
function mightAndMagic(input) {
  let n = Number(input.shift())
  let heroes = {}
  let actions = {
    CastSpell: (heroes, [name, mpCost, spell]) => {
      let hero = heroes[name]
      mpCost = Number(mpCost)
      if(hero.mp >= mpCost){
        hero.mp -= mpCost
        console.log(`${name} has successfully cast ${spell} and now has ${hero.mp} MP!`)
      }else{
        console.log(`${name} does not have enough MP to cast ${spell}!`)
      }
    },
    TakeDamage: (heroes, [name, damage, source]) => {
      let hero = heroes[name]
      damage = Number(damage)
      hero.hp -= damage
      if(hero.hp > 0){
        console.log(`${name} was hit for ${damage} HP by ${source} and now has ${hero.hp} HP left!`)
      }else{
        console.log(`${name} has been killed by ${source}!`)
      }
    },
    Recharge: (heroes, [name, mpAmount]) => {
      let hero = heroes[name]
      mpAmount = Number(mpAmount)
      if(hero.mp + mpAmount > 200){
        mpAmount = 200 -hero.mp
      }
      hero.mp += mpAmount
      console.log(`${name} recharged for ${mpAmount} MP!`)
    },
    Heal: (heroes, [name, hpAmount]) => {
      let hero = heroes[name]
      hpAmount = Number(hpAmount)
      if(hero.hp + hpAmount > 100){
        hpAmount = 100 - hero.hp
      }
      hero.hp += hpAmount
      console.log(`${name} healed for ${hpAmount} HP!`)
    }
  }
  for (let i = 0; i < n; i++) {
    let [name, health, mana] = input.shift().split(" ")
    heroes[name] = {
      hp: Number(health),
      mp: Number(mana)
    }
  }
  while(input[0] != "End"){
    let [command, ...args] = input.shift().split(" - ")
    let action = actions[command]
    action(heroes,args)
  }

  let sorted = Object.entries(heroes)
  .filter(([name, {hp, mp}]) => hp > 0)
  .sort(compareHeroes)

  for (const hero of sorted) {
    console.log(`${hero[0]}`)
    console.log(`  HP: ${hero[1].hp}`)
    console.log(`  MP: ${hero[1].mp}`)
  }

  function compareHeroes(a, b){
    let heroA = a[1]
    let heroB = b[1]
    let result = heroB.hp - heroA.hp;
    if(result == 0){
      result = a[0].localeCompare(b[0])
    }
    return result
  }
}
mightAndMagic([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End"
]);
