/*
Pesho is a pro gladiator, he is struggling to become master of the Arena. 
You will receive several input lines in one of the following formats:
"{gladiator} -> {technique} -> {skill}"
"{gladiator} vs {gladiator}"
The gladiator and technique are strings, the given skill will be an integer number. You need to keep track of every gladiator. 
When you receive a gladiator and his technique and skill, add him to the gladiator pool, if he isn't present, else add his technique or update his skill, only if the current technique skill is lower than the new value.
If you receive "{gladiator} vs {gladiator}" and both gladiators exist in the tier, they duel with the following rules:
Compare their techniques, if they got at least one in common, the gladiator with better total skill points wins and the other is demoted from the tier -> remove him.
If they don't have techniques in common, the duel isn't happening and both continue in the Season.
You should end your program when you receive the command "Ave Cesar". At that point you should print the gladiators, ordered by total skill in desecending order, then ordered by name in ascending order. Foreach gladiator print their technique and skill, ordered desecending, then ordered by technique name in ascending order
Input / Constraints
You will receive an array of strings as a parameter to your solution.
•	The input comes in the form of commands in one of the formats specified above.
•	Gladiator and technique will always be one word string, containing no whitespaces.
•	Skill will be an integer in the range [0, 1000].
•	There will be no invalid input lines.
•	The programm ends when you receive the command "Ave Cesar".
Output
•	The output format for each gladiator is:
"{gladiator}: {totalSkill} skill"
"- {technique} <!> {skill}"
Scroll down to see examples.
*/
function arenaTier(arr) {
  let arena = {}
  let current = 0
  let result = 0
  for (const line of arr) {
    if(line == "Ave Cesar"){
      break;
    }
    if(line.includes("vs")){
      current = arr.indexOf(line)
      break;
    }else{
      let [name, technique, skill] = line.split(" -> ")
      skill = Number(skill)
      if(!arena.hasOwnProperty(name)){
        arena[name] = {}
        arena[name][technique] = skill
      }else if(arena.hasOwnProperty(name) && !arena[name].hasOwnProperty(technique)){
        arena[name][technique] = skill
      }else if(arena.hasOwnProperty(name) && arena[name].hasOwnProperty(technique)){
        if(skill > arena[name][technique]){
          arena[name][technique] = skill
        }
      }
    }
  }
  for (let name in arena) { 
    let totalSkill = 0;
    for (let technique in arena[name]) {
     totalSkill += arena[name][technique];
    }
    arena[name].totalSkill = totalSkill;
}
if(current > 0){
  for (let i = current; i < arr.length; i++) {
    if(arr[i] == "Ave Cesar"){
      break;
    }
    let [glad1, glad2] = arr[i].split(" vs ")
    let fight = false;
    let sameTech = ""
    if(arena.hasOwnProperty(glad1) && arena.hasOwnProperty(glad2)){
      for (const tech in arena[glad1]) {
        if(arena[glad2].hasOwnProperty(tech)){
          fight = true
          sameTech = tech
          break;
        }
      }
      if(fight){
        if(arena[glad1].totalSkill > arena[glad2].totalSkill){
          delete arena[glad2]
        }else if(arena[glad2].totalSkill > arena[glad1].totalSkill){
          delete arena[glad1]
        }
      }
    } 
  }
}
let sorted = Object.entries(arena).sort((a, b) => {
  if(b[1].totalSkill - a[1].totalSkill === 0){
    return a[0].localeCompare(b[0])
  }else{
    return b[1].totalSkill - a[1].totalSkill
  }
})
for (let element of sorted) {
  console.log(`${element[0]}: ${element[1].totalSkill} skill`)
  result = Object.entries(element[1]).sort((a, b) => {
    if (b[1] - a[1] !== 0) {
      return b[1] - a[1];
  } else {
      return a[0].localeCompare(b[0]);
  }
  })
  for (let final of result) {
    if (final[0] !== "totalSkill") {
        console.log(`- ${final[0]} <!> ${final[1]}`);
    }
}
}
}
arenaTier([
  'Pesho -> Duck -> 400',
  'Julius -> Shield -> 150',
  'Gladius -> Heal -> 200',
  'Gladius -> Support -> 250',
  'Gladius -> Shield -> 250',
  'Peter vs Gladius',
  'Gladius vs Julius',
  'Gladius vs Maximilian',
  'Ave Cesar' 
  ]
  );
