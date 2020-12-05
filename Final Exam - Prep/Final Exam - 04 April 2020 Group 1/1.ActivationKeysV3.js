function activationKeys(input) {
  let actions = {
    Contains(key, pattern) {
      if (key.includes(pattern)) {
        console.log(`${key} contains ${pattern}`);
      } else {
        console.log(`Substring not found!`);
      }
      return key;
    },
    Flip(key, mode, start, end) {
      [start, end] = [Number(start), Number(end)];
      let first = key.substring(0, start);
      let second = key.substring(start, end);
      let third = key.substring(end);
      if (mode == "Upper") {
        second = second.toUpperCase();
      } else if (mode == "Lower") {
        second = second.toLowerCase();
      }
      let result = first + second + third;
      console.log(result);
      return result;
    },
    Slice(key, start, end) {
      [start, end] = [Number(start), Number(end)];
      let first = key.substring(0, start);
      let second = key.substring(start, end);
      let third = key.substring(end);
      let result = first + third;
      console.log(result);
      return result;
    },
  };
  let key = input.shift();
  let line;
  while ((line = input.shift()) != "Generate") {
    let [action, ...params] = line.split(">>>");
    key = actions[action](key, ...params);
  }
  console.log(`Your activation key is: ${key}`)
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
