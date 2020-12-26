/*
Write a function, which prints common elements in two string arrays. Print all matches on separate lines. Compare
the first array with the second array.
*/
function solve(arr1, arr2) {
  for (let element of arr1) {
    let includes = arr2.includes(element)
    if(includes){
      console.log(element)
    }
  }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
