function sortNumbers(year, month, day) {
    let date=new Date(year, month, day);
    let tomorrow=new Date(year, month-1, date.getDate()+1);
    console.log(`${tomorrow.getFullYear()}-${tomorrow.getMonth()+1}-${tomorrow.getDate()}`);
}
sortNumbers(2016, 8, 1);
