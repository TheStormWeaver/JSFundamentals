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

