/*
Write a program, which prints the language, that a given country speaks. You can receive only the following
combinations: English is spoken in England and USA; Spanish is spoken in Spain, Argentina and Mexico; for the
others, we should print "unknown".
*/
function solve(country) {
  switch (country) {
    case "USA":
      console.log("English");
      break;
    case "England":
      console.log("English");
      break;
    case "Spain":
      console.log("Spanish");
      break;
    case "Argentina":
      console.log("Spanish");
      break;
    case "Mexico":
      console.log("Spanish");
      break;
    default:
      console.log("unknown");
      break;
  }
}
