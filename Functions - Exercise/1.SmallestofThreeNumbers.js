function SmallestofThree(numOne, numTwo, numThree) {
  let smallest = Number.MAX_SAFE_INTEGER;
  if (smallest > numOne) {
    smallest = numOne;
  }
  if (smallest > numTwo) {
    smallest = numTwo;
  }
  if (smallest > numThree) {
    smallest = numThree;
  }
  return smallest
}
console.log(SmallestofThree(5, 2, 3));
