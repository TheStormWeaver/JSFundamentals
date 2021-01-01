/*
You will receive a single number between 0 and 100 which is divided with 10 without residue (0, 10, 20, 30...).
Your task is to create a function that visualize a loading bar depending on that number you have received in the
input.
*/
function loadingBar(n) {
  let procentnum = n /10
  let procentloader = ".........."
  let procentarr = procentloader.split('')
  if(n == 100){
    console.log(`100% Complete!`)
    console.log(`[%%%%%%%%%%]`)
  }else{
    for (let i = 0; i < procentnum; i++) { 
      procentarr.pop()
      procentarr.unshift("%")   
    }
    console.log(`${n}% [${procentarr.join('')}]`)
    console.log(`Still loading...`)
  }
}
loadingBar(30)
