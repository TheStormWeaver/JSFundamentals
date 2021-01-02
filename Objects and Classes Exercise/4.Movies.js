/*
Write a function that stores information about movies inside an array. The movies object info must be name,
director and date. You can receive several types of input:
 "addMovie {movie name}" – add the movie
 "{movie name} directedBy {director}" – check if the movie exists and then add the director
 "{movie name} onDate {date}" – check if the movie exists and then add the date
At the end print all the movies that have all the info (if the movie has no director, name or date, don’t print it) in
JSON format.
*/
function solve(arr) {
  let movies = [];
  for (const line of arr) {
    if (line.includes("addMovie")) {
      let currentMovie = {};
      let name = line.substring(9);
      currentMovie.name = name;
      movies.push(currentMovie);
    } else if (line.includes("directedBy")) {
      let [movie, director] = line.split(" directedBy ");
      let myMovie = movies.find((x) => x.name === movie);
      if (myMovie) {
        myMovie.director = director;
      }
    } else if (line.includes("onDate")) {
      let [movie, date] = line.split(" onDate ");
      let myMovie = movies.find((x) => x.name === movie);
      if (myMovie) {
        myMovie.date = date;
      }
    }
  }
  movies.forEach((movie) => {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  });
}
solve([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
