function primeNumber(number) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
          isPrime = false;
      }
  }
  if (isPrime) {
      console.log('true');
  } else {
      console.log('false');
  }
}
primeNumber(81);
