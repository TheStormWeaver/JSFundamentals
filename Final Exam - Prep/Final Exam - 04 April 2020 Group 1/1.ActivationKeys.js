*\
You are about to make some good money, but first you need to think of a way to verify who paid for your product and who didn`t. You have decided to let people use the software for a free trial period and then require an activation key in order to continue to use the product. The last step before you could cash out is to design a program that creates unique activation keys for each user. So, waste no more time and start typing!
The first line of the input will be your raw activation key. It will consist of letters and numbers only. 
After that, until the "Generate" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the raw activation key.
There are several types of instructions, split by ">>>":
•	Contains>>>{substring} – checks if the raw activation key contains the given substring.
o	If it does prints: "{raw activation key} contains {substring}".
o	If not, prints: "Substring not found!"
•	Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}
o	Changes the substring between the given indixes (the end index is exclusive) to upper or lower case. 
o	All given indexes will be valid.
o	Prints the activation key.
•	Slice>>>{startIndex}>>>{endIndex}
o	Deletes the characters between the start and end indices (end index is exclusive).
o	Both indices will be valid.
o	Prints the activation key.
Input
•	The first line of the input will be string and it will consist of letters and numbers only. 
•	After the first line, until the "Generate" command is given, you will be receiving strings.
Output
•	After the "Generate" command is received, print:
o	"Your activation key is: {activation key}"
\*
function activationKeys(arr) {
  let key = arr.shift()
  let isGenerate = false
  for (const line of arr) {
    if(line.includes("Generate")){
      isGenerate = true
      break;
    }
    if(line.includes("Contains")){
      let [command, value] = line.split(">>>")
      if(key.includes(value)){
        console.log(`${key} contains ${value}`)
      }else{
        console.log(`Substring not found!`)
      }
    }else if(line.includes("Flip")){
      let [command, type, start, end] = line.split(">>>")
      start = Number(start)
      end = Number(end)
      if(type == "Upper"){
        let current = key.slice(start, end)
        key = key.split(current)
        current = current.toUpperCase()
        key = key.join(current)
        console.log(key)
      }else if(type == "Lower"){
        let current = key.slice(start, end)
        key = key.split(current)
        current = current.toLowerCase()
        key = key.join(current)
        console.log(key)
      }
    }else if(line.includes("Slice")){
      let [command, start, end] = line.split(">>>")
      start = Number(start)
      end = Number(end)
      let current = key.slice(start, end)
      key = key.split(current)
      key = key.join("")
      console.log(key)
    }
  }
  if(isGenerate){
    console.log(`Your activation key is: ${key}`)
  }
}
activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
