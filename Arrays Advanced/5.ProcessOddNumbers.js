function Oddprocess(arr) {
  let filtered = arr.filter(isOdd)
  let doubled = filtered.map(x => x * 2)
  function isOdd(val, index){
    return (index % 2 ) == 1
  }
  console.log(doubled.reverse())
}
Oddprocess([10, 15, 20, 25]);
