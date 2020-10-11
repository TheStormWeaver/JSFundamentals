function polindrome(arr) {
  let result = "";
  for (let num of arr) {
    let ispoli = "true";
    let str = String(num);
    let reversedstr = str.split("").reverse().join("")
    ispoli = str == reversedstr ? "true":"false"
    result += ispoli + "\n";
  }
  return result;
}
console.log(polindrome([123, 323, 421, 121]));
