/*
Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power. 
Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right. Detonations are performed from left to right and all detonated numbers disappear. 
The input contains two arrays of numbers. The first contains the initial sequence and the second contains the special bomb number and it's power.
The output is the sum of the remaining elements in the sequence.
*/
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
