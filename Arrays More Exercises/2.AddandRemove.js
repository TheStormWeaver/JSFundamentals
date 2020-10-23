function addAndRemove(arr) {
  let result = [];
  let num = 0;
  for (let command of arr) {
    if (command === "add") {
      num++;
      result.push(num);
    } else {
      num++;
      result.pop(num);
    }
  }
  if (result.length > 0) {
    console.log(result.join(" "));
  } else {
    console.log("Empty");
  }
}
addAndRemove(["add", "add", "remove", "add", "add"]);
