function arrayManipulations(input) {
  let arr = input.shift().split(" ").map(Number);
  for (let line of input) {
    let [command, range1, range2] = line.split(" ");
    if (command == "Add") {
      add(range1);
    } else if (command == "Remove") {
      remove(range1);
    } else if (command == "RemoveAt") {
      removeAt(range1);
    } else if (command == "Insert") {
      insert(range1, range2);
    }
  }
  function add(ele) {
    arr.push(ele);
  }
  function remove(num) {
    arr = arr.filter((el) => el != num);
  }
  function removeAt(index) {
    arr.splice(index, 1);
  }
  function insert(num, index) {
    arr.splice(index, 0, num);
  }
  let result = arr.map(Number).join(" ")
  console.log(result);
}
arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
