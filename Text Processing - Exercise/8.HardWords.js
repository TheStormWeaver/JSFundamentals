function hardWords(input) {
  let words = input.pop();
  let text = input.shift().split(" ")
  let result = []
  for (let i = 0; i < text.length; i++) {
    if(text[i].includes("_")){
      if(text[i].includes(",")){
        text[i] = text[i].split("")
        result.push(text[i].pop())
        text[i] = text[i].join("")
      }else if(text[i].includes(".")){
        text[i] = text[i].split("")
        result.push(text[i].pop())
        text[i] = text[i].join("")
      }
      for (const line of words) {
        if(text[i].length == line.length){
          text[i] = line
          break;
        }
      }
      if(result.length > 0){
        let save = result.shift()
        text[i] += save
      }
    }
  }
  console.log(text.join(" "))
}
hardWords([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
