function solve(n) {
  sum = 0;
    for (i = 1; i <= n; i++) {
      if (i % 2 == 0) {
        continue;
      } else {
        console.log(i);
        sum += i;
      }
    }
  console.log(sum);
  }
  solve(3)
