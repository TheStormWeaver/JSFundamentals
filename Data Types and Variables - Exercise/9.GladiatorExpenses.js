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
