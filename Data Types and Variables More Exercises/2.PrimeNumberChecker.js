/*
Write a function to check if a number is prime (only wholly divisible by itself and one).
The input comes as a single number argument.
The output should be the return value of your function. Return true for prime number and false otherwise.
*/
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
