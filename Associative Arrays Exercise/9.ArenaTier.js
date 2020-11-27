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
