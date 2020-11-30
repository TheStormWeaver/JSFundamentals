function comments(arr) {
  let storage = {};
  let userList = [];
  let result = ""
  for (let line of arr) {
    if (line.includes("user")) {
      line = line.split(" ");
      let name = line.pop();
      userList.push(name);
    } else if (line.includes("article")) {
      line = line.split(" ");
      let article = line.pop();
      storage[article] = {};
    } else if (line.includes("posts")) {
      line = line.split(" posts on ");
      let user = line.shift();
      line = line[0].split(": ");
      let article = line.shift();
      line = line[0].split(", ");
      let title = line[0];
      let content = line[1];
      if (userList.includes(user) && storage.hasOwnProperty(article)) {
        storage[article][user] = {};
        storage[article][user][title] = content;
    }
    }
  }
  let sorted = Object.entries(storage).sort((a, b) => Object.values(b[1]).length - Object.values(a[1]).length)
  for (const element of sorted) {
    console.log(`Comments on ${element[0]}`)
    result = Object.entries(element[1]).sort((a, b) => a[0].localeCompare(b[0]))
    for (const part of result) {
      console.log(`--- From user ${part[0]}: ${Object.keys(part[1])[0]} - ${Object.values(part[1])[0]} `)
    }
  }
}
comments([
  "user aUser123",
  "someUser posts on someArticle: NoTitle, stupidComment",
  "article Books",
  "article Movies",
  "article Shopping",
  "user someUser",
  "user uSeR4",
  "user lastUser",
  "uSeR4 posts on Books: I like books, I do really like them",
  "uSeR4 posts on Movies: I also like movies, I really do",
  "someUser posts on Shopping: title, I go shopping every day",
  "someUser posts on Movies: Like, I also like movies very much",
]);
