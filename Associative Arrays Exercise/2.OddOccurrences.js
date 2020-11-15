function oddOccurrences(input) {
  let arr = input.split(" ")
  let occurrences = new Map()
  for (let line of arr) {
    line = line.toLowerCase()
    if(!occurrences.has(line)){
      occurrences.set(line, 1)
    }else{
      let current = occurrences.get(line)
      occurrences.set(line, current + 1)
    }
  }
  let keys = Array.from(occurrences.keys()).filter((x) => occurrences.get(x) % 2 !== 0)
  console.log(keys.join(" "))
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
