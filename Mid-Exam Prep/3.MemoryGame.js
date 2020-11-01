/*
Write a program, which receives a sequence of elements. Each element in the sequence will have a twin. 
Until the player receives "end" from the console, he will receive strings with two integers separated by space, which represent the indexes of elements in the sequence.  
If the player tries to cheat and enters two equal indexes or indexes which are out of bounds of the sequence you should add two matching elements in the following format "-{number of moves until now}a" at the middle of the sequence and print this message on the console:
"Invalid input! Adding additional elements to the board"
Input
•	On the first line you will receive sequence of elements.
Output
•	Every time the player hit two matching elements you should remove them from the sequence and print on the console the following message:
"Congrats! You have found matching elements - ${element}!"
•	If the player hit two different elements, you should print on the console the following message:
"Try again!"
•	If the player hit all matching elements before he receives "end" from the console, you should print on the console the following message: 
"You have won in {number of moves until now} turns!"
•	If the player receives "end" before he hits all matching elements, you should print on the console the following message:
"Sorry you lose :( {the current sequence's state}"
Constraints
•	All elements in the sequence will always have a matching element.
*/
function memoryGame(input) {
  let moves = 0;
  let sequence = input.shift().split(" ");
  for (let i = 0; i < input.length; i++) {
    moves++;
    let move = input[i];
    let [x, y] = move.split(" ").map(Number);
    if (move == "end") {
      break;
    }
    if (x == y || x < 0 || y < 0 ||
        x >= sequence.length || y >= sequence.length) {
       let element = `-${moves}a`;
       sequence.splice(sequence.length / 2, 0, element, element)
      console.log(`Invalid input! Adding additional elements to the board`);
      continue;
    }

    if (sequence[x] == sequence[y]) {
      let element = sequence[x]
      sequence.splice(x, 1);
      let index = sequence.indexOf(element)
      sequence.splice(index, 1);
      console.log(`Congrats! You have found matching elements - ${element}!`);
  }else{
    console.log("Try again!")
  }
  if(sequence.length == 0){
    console.log(`You have won in ${moves} turns!`)
    break;
  }
}
if(sequence.length > 0){
  console.log(`Sorry you lose :( \n${sequence.join(" ")}`)
}
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
