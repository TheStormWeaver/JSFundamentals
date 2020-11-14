function schoolGrades(input) {
  let students = new Map()
  for (const line of input) {
    let tokens = line.split(" ")
    let name = tokens.shift()
    let grades = tokens.map(Number)
    if(students.has(name)){
      let existing = students.get(name)
      for (const grade of grades) {
        existing.push(grade)
      }
    }else{
      students.set(name, grades)
    }
  }
  let sorted = Array.from(students)
  sorted.sort(compareAvg)
  for (const [name, grades] of sorted) {
    console.log(`${name}: ${grades.join(", ")}`)
  }
  function compareAvg([nameA, gradesA],[nameB, gradesB]){
    let avgA = 0
    gradesA.forEach(x => avgA += x)
    avgA /= gradesA.length
    
    let avgB = 0
    gradesB.forEach(x => avgB += x)
    avgB /= gradesB.length

    return avgA - avgB
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
