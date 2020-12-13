function solve(arr) {
  let str = arr.shift()
  for (const line of arr) {
    if(line.includes("Change")){
      let [command, char, replacement] = line.split(" ")
      if(str.includes(char)){
      let regex = new RegExp(char, "g")
      str = str.replace(regex, replacement)
      console.log(str)
      }
    }else if(line.includes("Includes")){
      let [command, string] = line.split(" ")
      if(str.includes(string)){
        console.log("True")
      }else{
        console.log("False")
      }
    }else if(line.includes("End")){
      let [command, string] = line.split(" ")
      if(str.endsWith(string)){
        console.log("True")
      }else{
        console.log("False")
      }
    }else if(line.includes("Uppercase")){
      str = str.toUpperCase()
      console.log(str)
    }else if(line.includes("FindIndex")){
      let [command, index] = line.split(" ")
      let occurance = str.indexOf(index)
      if(occurance){
        console.log(occurance)
      }
    }else if(line.includes("Cut")){
      let [command, start, length] = line.split(" ")
      start = Number(start)
      length = Number(length)
      str = str.substring(start, start + length)
      console.log(str)
    }
  }
}
solve([
  "//Th1s 1s my str1ng!//",
  "Change 1 i",
  "Includes string",
  "End my",
  "Uppercase",
  "FindIndex I",
  "Cut 5 5",
  "Done",
]);
