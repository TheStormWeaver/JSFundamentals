function numberMod(num) {
  let arr = num.toString().split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  let average = sum / arr.length;
  if (average > 5) {
    console.log(num);
  } else {
    while (average <= 5) {
      arr.push(9);
      sum += 9;
      average = sum / arr.length;
    }
    console.log(arr.join(""));
  }
}
numberMod(101);
