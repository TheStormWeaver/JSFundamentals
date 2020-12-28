/*
Write a JS function that calculates the date of the next day by given year, month and day.
The input comes as three number parameters. The first element is the year, the second is the month and the third is
the day.
The output should be returned as a result of your function.
*/
function sortNumbers(year, month, day) {
    let date=new Date(year, month, day);
    let tomorrow=new Date(year, month-1, date.getDate()+1);
    console.log(`${tomorrow.getFullYear()}-${tomorrow.getMonth()+1}-${tomorrow.getDate()}`);
}
sortNumbers(2016, 8, 1);
