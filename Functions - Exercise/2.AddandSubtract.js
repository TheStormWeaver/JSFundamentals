function AddandSubtract(numOne, numTwo, numThree) {
  let sumadd = 0
  let sumsub = 0
  sum(numOne, numTwo)
  subtract(sumadd, numThree)
  function sum(a, b){
    sumadd = a + b
    return sumadd
  }
  function subtract(sumadd, numThree){
    sumsub = sumadd - numThree
    return sumsub
  }
  return sumsub
}
console.log(AddandSubtract(23,6,10));
