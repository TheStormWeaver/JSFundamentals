/*
You will be given a string representing a username. The password will be that username reversed. Until you receive
the correct password print on the console "Incorrect password. Try again.". When you receive the correct password
print "User {username} logged in."; However on the fourth try if the password is still not correct print "User
{username} blocked!" and end the program. The input comes as an array of strings.
*/
function solve(arr) {
  let username = arr.shift();
  let pass = username.split("").reverse().join("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === pass) {
      console.log(`User ${username} logged in.`);
    } else {
      if (i == 3) {
        console.log(`User ${username} blocked!`);
        break;
      }
      console.log(`Incorrect password. Try again.`);
    }
  }
}
solve(["Acer", "login", "go", "let me in", "recA"]);
