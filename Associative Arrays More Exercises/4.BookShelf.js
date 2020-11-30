function bookShelf(arr) {
  let shelf = {}
  for (const line of arr) {
    if(line.includes("->")){
      let [id, genre] = line.split(" -> ")
      if(!shelf.hasOwnProperty(id)){
        shelf[id] = {}
        shelf[id].genre = genre
        shelf[id].book = []
      }
    }else if(line.includes(":")){
      let [title, genre] = line.split(", ")
      for (const key in shelf) {
        if(shelf[key].genre === genre){
          shelf[key].book.push(title)
        }
      }
    }
  }
  let sorted = Object.entries(shelf).sort((a,b) => b[1].book.length - a[1].book.length)
  for (const line of sorted) {
    console.log(`${line[0]} ${line[1].genre}: ${line[1].book.length}`)
    let result = line[1].book.sort((a, b) => a.localeCompare(b))
    for (const book of result) {
      console.log(`--> ${book}`)
    }
  }
}
bookShelf([
  "1 -> history",
  "1 -> action",
  "Death in Time: Criss Bell, mystery",
  "2 -> mystery",
  "3 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Hurting Secrets: Dustin Bolt, action",
  "Future of Dawn: Aiden Rose, sci-fi",
  "Lions and Rats: Gabe Roads, history",
  "2 -> romance",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
  "Pilots of Stone: Brook Jay, history",
]);
