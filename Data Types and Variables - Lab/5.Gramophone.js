function solve(bandname,albumname,songname) {
  let time = (bandname.length * albumname.length) * (songname.length / 2)
  let rotations = Math.ceil(time / 2.5)
  console.log(`The plate was rotated ${rotations} times.`)
}
solve("Black Sabbath","Paranoid","War Pigs");
