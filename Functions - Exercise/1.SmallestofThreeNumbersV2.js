/*
Write a function which receives three integer numbers to print the smallest. Use appropriate name for the function.
*/
function SmallestofThree(numOne, numTwo, numThree) {
  let smallest = Number.MAX_SAFE_INTEGER;
   smallest = smaller(numOne, smallest)
   smallest = smaller(numTwo, smallest)
   smallest = smaller(numThree, smallest)
  function smaller(n, small){
    if(n < small){
      small = n
    }
    return small
  }
  return smallest
}
console.log(SmallestofThree(2,5,3));
