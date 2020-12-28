/*
Write a JavaScript program that calculates the total amount of bitcoins you purchased with the gold you mined
during your shift at the mine. Your shift consists of a certain number of days where you mine an amount of gold in
grams. Your program will receive an array with the amount of gold you mined each day, where the first day of your
shift is the first index of the array. Also, someone was stealing every third day from the start of your shift 30% from
the mined gold for this day. For the different exchanges use these prices:
Input
You will receive an array of numbers, representing your shift at the mine.
Output
Print on the console these lines in the following formats:
First line prints the total amount of bought bitcoins:
"Bought bitcoins: {count}"
Second line prints which day you bought your first bitcoin:
"Day of the first purchased bitcoin: {day}"
In case you did not purchased any bitcoins, do not print the second line.
Third line prints the amount of money that’s left after the bitcoin purchases rounded by the second digit
after the decimal point:
"Left money: {money} lv."
Constraints
The input array may contain up to 1,000 elements
The numbers in the array are in range [0.01..5,000.00] inclusive
Allowed time/memory: 100ms/16MB
*/
function solve(input) {
    let daylyEarnedGold = 0;
    let totalMinedGold = 0;
    let count = 0;
    let bitcoinsBought = 0;
    let levaEarned = 0;
    let bitcoinCount = 0;
    let dayFirstBought = 0;
    let currentBitcoinsBought = 0;
 
    for (let i = 0; i <= input.length - 1; i++) {
        count++;
 
        if (count % 3 === 0) {
            daylyEarnedGold = input[i] * 0.7;
        } else {
            daylyEarnedGold = input[i];
        }
 
        totalMinedGold += daylyEarnedGold;
        levaEarned = totalMinedGold * 67.51;
 
        if (levaEarned / 11949.16 > 1) {
            currentBitcoinsBought = Math.floor(levaEarned / 11949.16)
            bitcoinsBought += currentBitcoinsBought
            bitcoinCount++;
            totalMinedGold -= currentBitcoinsBought * 11949.16 / 67.51
            levaEarned = totalMinedGold * 67.51;
            if (bitcoinCount === 1) {
                dayFirstBought = count;
            }
            currentBitcoinsBought = 0;
        }
    }
    
    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (dayFirstBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayFirstBought}`);
    }
    console.log(`Left money: ${levaEarned.toFixed(2)} lv.`);
}
