/*
As a gladiator, Peter has to repair his broken equipment when he loses a fight. His equipment consists of helmet,
sword, shield and armour. You will receive the Peter`s lost fights count.
 Every second lost game, his helmet is broken.
 Every third lost game, his sword is broken.
 When both his sword and helmet are broken in the same lost fight, his shield also brakes.
 Every second time, when his shield brakes, his armour also needs to be repaired.
You will receive the price of each item in his equipment. Calculate his expenses for the year for renewing his
equipment.
Input / Constraints
You will receive 5 parameters to your function:
 First parameter – lost fights count – integer in the range [0, 1000].
 Second parameter – helmet price - floating point number in range [0, 1000].
 Third parameter – sword price - floating point number in range [0, 1000].
 Fourth parameter – shield price - floating point number in range [0, 1000].
 Fifth parameter – armor price - floating point number in range [0, 1000].
Output
As output you must print Peter`s total expenses for new equipment: "Gladiator expenses:
{expenses} aureus"
Allowed working time / memory: 100ms / 16MB.
*/
function solve(lostfights, helmet, sword, shield, armor) {
  let expenses = 0;
  let shieldcounter = 0;
  for (let i = 1; i <= lostfights; i++) {
    if (i % 2 == 0) {
      expenses += helmet;
    }
    if (i % 3 == 0) {
      expenses += sword;
    }
    if (i % 2 == 0 && i % 3 == 0) {
      expenses += shield;
      shieldcounter++;
      if (shieldcounter == 2) {
        expenses += armor; 
        shieldcounter = 0;
      }
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
solve(23,12.50,21.50,40,200);
