/*
Write a function that stores the students that signed up for different courses at SoftUni. For each course you have to store the name, the capacity and the students that are in it. For each student store the username, the email and their credits. The input will come as an array of strings. The strings will be in some of the following formats:
"{course name}: {capacity}" – add the course with that capacity. If the course exists, add the capacity to the existing one
"{username}[{credits count}] with email {email} joins {course name}" – add the student if the course exists (each student can be in multiple courses) and if there are places left (count of students are less than the capacity)
Finally, you should sort the courses by the count of students in descending. Each course should have its students sorted by credits in descending.
Print the result in the format:
"{course one}: {places left} places left
--- {credits}: {username one}, {email one}
…"
*/
function softuniStudents(arr) {
  let list = {}
  for (const line of arr) {
    if(line.includes(":")){
      let [course, amount] = line.split(": ")
      if(!list.hasOwnProperty(course)){
        list[course] = {
          capacity : Number(amount),
        }
      }else{
      list[course].capacity += Number(amount)
      }
    }else if(line.includes("with email")){
      let [studentname, parts] = line.split(" with email ")
      let [email, course] = parts.split(" joins ")
      let [name, credits] = studentname.split("[")
      credits = credits.split("")
      credits.pop()
      credits = Number(credits.join(""))
      if(list.hasOwnProperty(course) && list[course].capacity - 1 > -1){
        list[course].capacity -= 1
        list[course][name] = {}
        list[course][name].email = email
        list[course][name].credits = credits
      }
    }
  }
  
  let sorted = Object.entries(list).sort((a, b) => list[a[0]].capacity - list[b[0]].capacity)
  for (const line of sorted) {
    console.log(`${line[0]}: ${list[line[0]].capacity} places left`)
    let result = Object.entries(line[1]).sort((a, b) => {
      if(a[0] != "capacity" && a[1] != "capacity" && b[0] != "capacity" && b[1] != "capacity"){
       return b[1].credits - a[1].credits
      }
    })
    for (const part of result) {
      if(part[0] != "capacity"){
      console.log(`--- ${Object.values(part[1])[1]}: ${part[0]}, ${Object.values(part[1])[0]} `)
      }
    }
  }
}
softuniStudents([
  "JavaBasics: 2",
  "user1[25] with email user1@user.com joins C#Basics",
  "C#Advanced: 3",
  "JSCore: 4",
  "user2[30] with email user2@user.com joins C#Basics",
  "user13[50] with email user13@user.com joins JSCore",
  "user1[25] with email user1@user.com joins JSCore",
  "user8[18] with email user8@user.com joins C#Advanced",
  "user6[85] with email user6@user.com joins JSCore",
  "JSCore: 2",
  "user11[3] with email user11@user.com joins JavaBasics",
  "user45[105] with email user45@user.com joins JSCore",
  "user007[20] with email user007@user.com joins JSCore",
  "user700[29] with email user700@user.com joins JSCore",
  "user900[88] with email user900@user.com joins JSCore",
]);
