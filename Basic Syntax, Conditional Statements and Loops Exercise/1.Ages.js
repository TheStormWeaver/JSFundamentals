/*
Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder. The
input comes as single number parameter. The bounders are:
0-2 – baby;
3-13 – child;
14-19 – teenager;
20-65 – adult;
>=66 – elder;
In all other cases - out of bounds
All the values are inclusive.
*/
function solve(age) {
  if ((0 <= age) & (age <= 2)) {
    console.log("baby");
  } else if ((3 <= age) & (age <= 13)) {
    console.log("child");
  } else if ((14 <= age) & (age <= 19)) {
    console.log("teenager");
  } else if ((20 <= age) & (age <= 65)) {
    console.log("adult");
  } else if (age >= 66) {
    console.log("elder");
  }else{
    console.log("out of bounds")
  }
}
