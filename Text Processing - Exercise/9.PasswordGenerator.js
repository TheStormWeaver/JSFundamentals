function passwordGenerator(input) {
  let firstPart = input.shift()
  let secondPart = input.shift()
  let toReplace = input.shift().split("")
  let Pass = (firstPart + secondPart).split("")
  let index = 0
  for (let i = 0; i < Pass.length; i++) {
    let char = Pass[i].charCodeAt()
    if(char == 65 || char == 69 || char == 73|| char == 79|| char == 85 ||char == 97 ||char == 101 ||char == 105 ||char == 111 ||char == 117){
      Pass[i] = toReplace[index].toUpperCase()
      index++;
      if(index >= toReplace.length){
        index = 0
      }
    }
  }
  console.log(`Your generated password is ${Pass.reverse().join("")}`)
}
passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
