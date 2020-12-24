/*
You will receive two arrays of integers. The second array is contains exactly three numbers. 
First number represents the number of elements you have to take from the first array (starting from the first one).
Second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 
Third number is the number we search in our collection after the manipulations. 
As output print how many times that number occurs in our array in the following format: 
"Number {number} occurs {count} times."
*/
function searchForNum(arr, commands) {
  let newArr = [];
  let elementsToTake = commands.shift();
  let elementsToDelete = commands.shift();
  let elementsToSearch = commands.shift();
  newArr = arr.slice(0, elementsToTake)
  newArr.length = elementsToTake;
  for (let j = 0; j < elementsToTake; j++) {
    newArr[j] = arr[j];
  }
  for (let j = 1; j <= elementsToDelete; j++) {
    newArr.shift();
  }
  let occureCount = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === elementsToSearch) {
      occureCount++;
    }
  }
  console.log(`Number ${elementsToSearch} occurs ${occureCount} times.`);
}
searchForNum([5, 2, 3, 4, 1, 6], [5, 2, 3]);

