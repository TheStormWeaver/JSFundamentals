function loadingBar(n) {
  if(n == 100){
    console.log(`${n}% Complete! \n[%%%%%%%%%%]`)
  }else if(n % 20 == 0){
    console.log(`${n}% [%%........]\nStill loading...`)
  }else if(n % 30 == 0){
    console.log(`${n}% [%%%.......]\nStill loading...`)
  }else if(n % 40 == 0){
    console.log(`${n}% [%%%%......]\nStill loading...`)
  }else if(n % 50 == 0){
    console.log(`${n}% [%%%%%.....]\nStill loading...`)
  }else if(n % 60 == 0){
    console.log(`${n}% [%%%%%%....]\nStill loading...`)
  }else if(n % 70 == 0){
    console.log(`${n}% [%%%%%%%...]\nStill loading...`)
  }else if(n % 80 == 0){
    console.log(`${n}% [%%%%%%%%..]\nStill loading...`)
  }else if(n % 90 == 0){
    console.log(`${n}% [%%%%%%%%%.]\nStill loading...`)
  }else if(n % 10 == 0){
    console.log(`${n}% [%.........]\nStill loading...`)
  }
}
loadingBar(100)
