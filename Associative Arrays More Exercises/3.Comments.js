/*
Write a function that stores information about users and their comments in a website. You have to store the users, the comments as an object with title and content and the article that comment is about. The user can only comment, when he is on the list of users and the article is in the list of articles. The input comes as array of strings. The strings will be in format:
"user {username}" – add the user to the list of users
"article {article name}" – add the article to the article list
"{username} posts on {article name}: {comment title}, {comment content}" – save the info
At the end sort the articles by count of comments and print the users with their comments ordered by usernames in ascending.
Print the result in the following format:
"Comments on {article1 name}:
--- From user {username1}: {comment title} - {comment content}
--- From user {username2}: …
Comments on {article2 name}:
…"
*/
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
