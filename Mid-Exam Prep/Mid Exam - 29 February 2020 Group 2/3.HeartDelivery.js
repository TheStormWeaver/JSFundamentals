/*
Valentine’s Day is coming, and Cupid has very limited time to spread some love across the neighborhood. Help him with his mission!
You will receive a string with even integers, separated by a "@". This is our neighborhood. After that a series of Jump commands will follow, until you receive "Love!" 
Every house in the neighborhood needs a certain number of hearts delivered by Cupid, in order to be able to celebrate Valentine’s Day. Those needed hearts are indicated by the integers in the neighborhood.
Cupid starts at the position of the first house (index 0) and must jump by a given length. The jump commands will be in this format: "Jump {length}". 
Every time he jumps from one house to another, the needed hearts for the visited house are decreased by 2. 
If the needed hearts for a certain house become equal to 0 , print on the console "Place {houseIndex} has Valentine's day."
If Cupid jumps to a house where the needed hearts are already 0, print on the console "Place {houseIndex} already had Valentine's day.".
Keep in mind that Cupid can have a bigger jump length than the size of the neighborhood and if he does jump outside of it, he should start from the first house again. 
For example, we are given this neighborhood: 6@6@6. Cupid is at the start and jumps with a length of 2. He will end up at index 2 and decrease the needed hearts there by 2: [6, 6, 4].
Next he jumps again with a length of 2 and goes outside the neighborhood, so he goes back to the first house (index 0) and again decreases the needed hearts there: [4, 6, 4].
 */
function heartDelivery(input) {
  let neighbourhood = input.shift().split("@").map(Number);
  let num = 0;
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    let [command, length] = input[i].split(" ");
    if (command == "Love!") {
      break;
    } else if (command == "Jump") {
      num += Number(length);
      if (num >= neighbourhood.length) {
        num = 0;
      }
      if (neighbourhood[num] == 0) {
        console.log(`Place ${num} already had Valentine's day.`);
      } else {
        neighbourhood[num] -= 2;
        if (neighbourhood[num] <= 0) {
          neighbourhood[num] = 0;
          console.log(`Place ${num} has Valentine's day.`);
        }
      }
    }
  }
  for (const element of neighbourhood) {
    if (element != 0) {
      count++;
    }
  }
  if (count > 0) {
    console.log(`Cupid's last position was ${num}.`)
    console.log(`Cupid has failed ${count} places.`);
  } else {
    console.log(`Cupid's last position was ${num}.`)
    console.log(`Mission was successful`);
  }
}
heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
