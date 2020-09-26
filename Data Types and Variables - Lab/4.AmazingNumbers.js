function solve(num) {
  let numasstring = num.toString()
  let sum = 0
  for(let i = 0; i < numasstring.length; i++){
    sum+= Number(numasstring[i])
  }
  let sumasstring =sum.toString()
  if( sumasstring.includes("9")){
    console.log(`${num} Amazing? True`)
  }else{
    console.log(`${num} Amazing? False`)
  }
}
solve(1233);
