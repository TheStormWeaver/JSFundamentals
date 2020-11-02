function searchForNum(arr, commands) {
  let elementsToTake = commands.shift();
  let elementsToDelete = commands.shift();
  let elementsToSearch = commands.shift();
  let newArr = arr.slice(0, elementsToTake)
  newArr = newArr.splice(elementsToDelete)
  let occureCount = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === elementsToSearch) {
      occureCount++;
    }
  }
  console.log(`Number ${elementsToSearch} occurs ${occureCount} times.`);
}
searchForNum([5, 2, 3, 4, 1, 6], [5, 2, 3]);
