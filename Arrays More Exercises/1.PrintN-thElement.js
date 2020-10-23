function printElement(arr) {
  let n = Number(arr.pop());
  let print = "";
  for (let i = 0; i < arr.length; i += n) {
    print += `${arr[i]} `;
  }
  console.log(print);
}
printElement(["5", "20", "31", "4", "20", "2"]);
