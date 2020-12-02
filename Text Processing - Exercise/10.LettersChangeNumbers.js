function passwordGenerator(input) {
  let arr = [input]
  let numbers = arr.shift().split(" ").filter((c) => c.length > 0);
  let result = 0;
  let current = ""
  let capOp = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };
  let downOp = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  }
  for (const line of numbers) {
    let prototype = line.split("");
    let firstLetter = prototype.shift();
    let finalLetter = prototype.pop();
    let number = Number(prototype.join(""));
    let firstChar = firstLetter.charCodeAt();
    let finalChar = finalLetter.charCodeAt();
    if (firstChar >= 65 && firstChar <= 90) {
      current = capOp[firstLetter]
      number /= current
    } else if (firstChar >= 97 && firstChar <= 122) {
      current = downOp[firstLetter]
      number *= current
    }
    if (finalChar >= 65 && finalChar <= 90) {
      current = capOp[finalLetter]
      number -= current
    } else if (finalChar >= 97 && finalChar <= 122) {
      current = downOp[finalLetter]
      number += current
    }
    result += number
  }
  console.log(result.toFixed(2))
}
passwordGenerator("P34562Z q2576f   H456z");
