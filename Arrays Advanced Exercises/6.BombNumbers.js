function bombNumbers(numbers, bomb) {
  let [bombNum, power] = bomb;
  for (let i = 0; i < numbers.length; i++) {
    let currentNum = numbers[i];
    if (currentNum === bombNum) {
      let start = Math.max(0, i - power);
      let end = Math.min(i + power, numbers.length - 1);
      for (let j = start; j <= end; j++) {
        numbers[j] = 0;
    }
    }
  }
  let sum = 0;
  for (let element of numbers) {
    sum += element
  }
  console.log(sum);
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
