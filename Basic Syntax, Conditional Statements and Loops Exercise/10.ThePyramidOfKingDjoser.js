/*
Write a JS program that calculates how much resources will be required for the construction of a pyramid. It is made
out of stone, marble, lapis lazuli and gold. Your program will receive an integer that will be the base width and
length of the pyramid and an increment, that is the height of each step. The bulk is made out of stone, while the
outer layer is made out of marble. Every fifth step’s outer layer is made out of lapis lazuli instead of marble. The
final step is made out of gold.
The pyramid is built with 1x1 blocks with height equal to the given increment. The first step of the pyramid has
width and length equal to the given base and every next step is reduced by 2 blocks (1 from each side). The height
of every step equals the given increment. See the drawing for an example. White steps are covered in marble, blue
steps are covered in lapis lazuli (every fifth layer from the bottom), and yellow steps are made entirely out of gold
(top-most step).
Since the outer layer of each step is made of a decorative material, to calculate the required stone for one step,
reduce the width and length by 2 blocks (one from each side), find it’s area and multiply it by the increment. The
rest of the step is made out of lapis lazuli for every fifth step from the bottom and marble for all other steps. To find
the amount needed, you may, for example, find its perimeter and reduce it by 4 (to compensate for the overlapping
corners) and multiply the result by the increment. See the drawing for details (grey is stone, white is decoration).
5x5 step
Stone required – 9 x increment
Marble required – 16 x
increment
7x7 step
Stone required – 25 x increment
Marble required – 24 x increment
8x8 step
Stone required – 36 x increment
Marble required – 28 x increment
Note the top-most layer is made entirely out of gold, with height equal to the given increment. See the examples for
complete calculations.
*/
function solve(base,increment) {
  let stone = 0
  let marble = 0
  let lapis = 0
  let gold = 0
  let area = 0
  let iner = 0
  let outer = 0
  let step = 0
  for(i= base; i >= 1; i= i - 2){
    step++
    if(step % 5 == 0 && i > 2){
      iner = (i - 2)*(i - 2)
      stone += iner * increment
      outer = (4 * i) - 4
      lapis += outer * increment
    }else if(i <= 2){
      gold += (i* i) * increment
    }else{
      area = i * i
      iner = (i - 2) * (i - 2)
      stone += iner * increment
      outer =(4 * i) - 4
      marble += outer * increment
    }
  }
  console.log(`Stone required: ${Math.ceil(stone)}`)
  console.log(`Marble required: ${Math.ceil(marble)}`)
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`)
  console.log(`Gold required: ${Math.ceil(gold)}`)
  console.log(`Final pyramid height: ${Math.floor(step * increment)}`)
}
