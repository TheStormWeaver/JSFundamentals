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

