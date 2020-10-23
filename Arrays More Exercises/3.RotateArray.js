function arrRotation(arr) {
  let rotations = Number(arr.pop())
  for (let i = 0; i < rotations; i++) {
    let element = arr.pop()
    arr.unshift(element)
  }
  console.log(arr.join(" "))
}
arrRotation(["1", "2", "3", "4", "2"]);
