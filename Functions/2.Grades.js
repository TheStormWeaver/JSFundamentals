/*
Write a function that receives a grade between 2.00 and 6.00 and prints a formatted line with grade and
description
 < 3.00 - "Fail"
 >= 3.00 and < 3.50 - "Poor"
 >= 3.50 and < 4.50 - "Good"
 >= 4.50 and < 5.50 - "Very good"
 >= 5.50 - "Excellent"
*/
function solve(grade) {
  if(grade < 3.00){
    console.log(`Fail (2)`)
  }else if(grade >= 3 && grade < 3.50){
    console.log(`Poor (${grade.toFixed(2)})`)
  }else if(grade >= 3.50 && grade < 4.50){
    console.log(`Good (${grade.toFixed(2)})`)
  }else if(grade >= 4.50 && grade < 5.50){
    console.log(`Very good (${grade.toFixed(2)})`)
  }else if(grade >= 5.50 ){
    console.log(`Excellent (${grade.toFixed(2)})`)
  }
}
solve(4.50);
