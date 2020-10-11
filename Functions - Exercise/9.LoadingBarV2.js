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
