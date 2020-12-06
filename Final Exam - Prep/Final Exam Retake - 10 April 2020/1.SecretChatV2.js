/*
You have plenty of free time, so you decide to write a program that conceals and reveals your received messages. Go ahead and type it in! 
On the first line of the input you will receive the concealed message. After that, until the "Reveal" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the concealed message in order to interpret it and reveal its true content. There are several types of instructions, split by ":|:"
•	InsertSpace:|:{index}
o	Inserts a single empty space at the given index. The given index will always be valid.
•	Reverse:|:{substring}
o	If the message contains the given substring, cut it out, reverse it and add it at the end of the message. 
o	If not, print "error". 
o	This operation should replace only the first occurrence of the given substring if there are more than one such occurrences.
•	ChangeAll:|:{substring}:|:{replacement} 
o	Changes all occurrences of the given substring with the replacement text.
Input / Constraints
•	On the first line, you will receive a string with message.
•	On the next lines, you will be receiving commands, split by ":|:".
Output
•	After each set of instructions, print the resulting string. 
•	After the "Reveal" command is received, print this message:
"You have a new text message: {message}"
*/
function secretChat(arr) {
  let str = arr.shift();
  for (const line of arr) {
    if (line.includes("InsertSpace")) {
      let [command, index] = line.split(":|:");
      index = Number(index);
      let firsthalf = str.slice(0, index);
      let secondhalf = str.slice(index, str.length);
      str = firsthalf + " " + secondhalf;
      console.log(str);
    } else if (line.includes("Reverse")) {
      let [command, substr] = line.split(":|:");
      if (str.includes(substr)) {
        let i = str.indexOf(substr);
        let sliced = str.substring(i, i + substr.length);
        sliced = sliced.split("").reverse().join("");
        let firsthalf = str.substring(0, i);
        let secondhalf = str.substring(i + substr.length);
        str = firsthalf + secondhalf + sliced;
        console.log(str);
      } else {
        console.log(`error`);
        continue;
      }
    } else if (line.includes("ChangeAll")) {
      let [command, substr, replacement] = line.split(":|:");
      if (line.includes(substr)) {
        let i = str.indexOf(substr)
        while(i != -1){
          str = str.substring(0, i) + replacement + str.substring(i + substr.length)
          i = str.indexOf(substr)
        }
        console.log(str)
      }
    }
  }
  console.log(`You have a new text message: ${str}`);
}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
