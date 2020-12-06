function secretChat(arr) {
  let str = arr.shift();
  let isTrue = false
  for (const line of arr) {
    if (line == "Reveal") {
      isTrue = true
      break;
    }
    if (line.includes("InsertSpace")) {
      let [command, index] = line.split(":|:");
      index = Number(index);
      let firsthalf = str.slice(0, index);
      let secondhalf = str.slice(index, str.length);
      str = firsthalf + " " + secondhalf;
      console.log(str)
    } else if (line.includes("Reverse")) {
      let [command, substr] = line.split(":|:");
      if (str.includes(substr)) {
        str = str.split(substr);
        str = str.join(substr.split("").reverse().join(""));
        console.log(str)
      }else{
        console.log(`error`)
      }
    } else if (line.includes("ChangeAll")) {
      let [command, substr, replacement] = line.split(":|:");
      if (line.includes(substr)) {
        let regex = new RegExp(substr, "g");
        str = str.replace(regex, replacement);
        console.log(str)
      }
    }
  }
  if(isTrue){
  console.log(`You have a new text message: ${str}`);
  }
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
