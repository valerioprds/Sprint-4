// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map((film) => film.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  // director = 'Quentin Tarantino';
  const filteredMovies = movies.filter((movie) => movie.director === director);

  console.log('Director - Quentin Tarantino ', filteredMovies);
  return filteredMovies;
}
// Exercise 3: Calculate the average of the films of a given director.
function moviesAverage(movies) {
  //second argument is 0, where accumulator is going to start
  const TotalScore = Number(
    (
      movies.reduce((counter, movie) => counter + movie.score, 0) /
      movies.length
    ).toFixed(2)
  );
  return TotalScore;
}

function moviesAverageOfDirector(movies, director) {
  let moviesDirectos = getMoviesFromDirector(movies, director);
  let result = moviesAverage(moviesDirectos);

  return result;
}

// Exercise 4:  Alphabetic order by title

function aToZ(movies) {
  const copy = [...movies];
  copy.sort((a, b) => a.title.localeCompare(b.title));
  return copy.slice(0, 20).map((movie) => movie.title);
}
function orderAlphabetically(movies) {
  const moviesInOrder = aToZ(movies);
  return moviesInOrder;
}

//olderToNewer(movies)

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const sortedMoviesArray = [...movies];

  const sortedMovies = sortedMoviesArray.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  return sortedMoviesArray;
}

// Exercise 6: Calculate the average of the movies in a category

function moviesAverageByCategory(movies, genre) {
  const moviesByGenre = movies.filter(
    (movie) => movie.genre.includes(genre) && movie.score
  );

  if (!moviesByGenre.length) {
    return 0;
  }

  const sum = moviesByGenre.reduce((total, movie) => total + movie.score, 0);
  const average = Number((sum / moviesByGenre.length).toFixed(2));

  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
