/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  //define & return an empty array if conditions arent met
  //set up your Bucket/Accumulator
  let titleMovies = [];
  // use a traditional for loop to loop through array of 'movies' objects
  for (let i = 0; i < movies.length; i++) {
    //condition is to return all the movie titles -- push them into new array
    titleMovies.push(movies[i].title);
  } // now return outside for loop the condition met
  return titleMovies;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  //accumulator = bucket that collects our highest 'metascore'
  let topScore = 0;

  //make a guard clause "the bouncer" outside your loop in the function
  if (movies.length) {
    // if there are multiple objects in the array of movies -->
    // must return the datatype as a Number --> but must reference the first or 0 index to compare
    topScore = Number(movies[0].metascore);
  }
  // create your loop now to gather the indexes in the accumulator
  for (let i = 1; i < movies.length; i++) {
    //encapsulate the condition and convert datatype again
    if (Number(movies[i].metascore) > topScore) {
      // set your condition to represent the new accumulator to the index of metascore as a Number
      topScore = Number(movies[i].metascore);
    }
  }
  return topScore;
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  //set the bucket up
  let avgIMDBRating = 0;

  // loop it up
  for (let i = 0; i < movies.length; i++) {
    // accumulate into that bucket by redefining += to a Number datatylp
    avgIMDBRating += Number(movies[i].imdbRating);
  }
  // where is my Bouncer?? to check it the ratings are present?
  if (avgIMDBRating > 0) {
    // divide entire length of array to get the average
    avgIMDBRating /= movies.length;
  }
  return avgIMDBRating;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  //set up accumulator pattern
  let newObject = {};

  // loop through 'movies' array 
  for (let i = 0; i < movies.length; i++) {
    //!set loop condition to include keys according to instruction**
    // gather up the rating count in this key below
    let ratedKey = movies[i].rated;
    // setup the guard clause / Bouncer
    if (newObject[ratedKey]) {
      // Accumulate! to gather starting at first iteration of found property to compare
      newObject[ratedKey] += 1;
    } else {
      // collect everything else here in this condition -- the difference is in operands
      newObject[ratedKey] = 1;
    }
  } // return final object outside loop
  return newObject;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  // set up guard clause first since we are returning null if 'No Movies' with strict equality
  if (movies.length === 0) {
    return null;
  }
  //loop it up
  for (i = 0; i < movies.length; i++) {
    // set new conditions to find if the id's equal -- using loop ---> it is dynamically changing to check the values
    if (movies[i].imdbID === id) {
      //retrun the random index
      return movies[i];
    }
  } 
  return null; // otherwise if the 'movie' index cannot be found
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  //set up accumulation pattern
  let filteredGenre = []; // define an empty array to return or be a bucket for collection

  //set up your Bouncer/Guard Clause if length of movies is = to 0
  if (movies.length === 0) {
    return filteredGenre; // resurgance of accumulator pattern
  }
  //now define your loop
  for (let i = 0; i < movies.length; i++) {
    // we must format the output which will be the genres into new key -- must be case-sensitive
    let formatGenre = movies[i].genre.toLowerCase();
    // if the condition includes the genre and is case sensitive
    if (formatGenre.includes(genre.toLowerCase())) {
      // push new values into new array
      filteredGenre.push(movies[i]);
      console.log(filteredGenre);
    }
  } //bring back my array
  return filteredGenre;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let releaseYear = []; // define empty array for collection
  //set up your loop -- use a for of loop because its way easier for these parameters since its less than or equal to.
  for (movies of movies) {
    //lets check if the release year matched the given year, slice off the rest of the string and convert it to a Number
    if (Number(movies.released.slice(-4)) <= year) {
      releaseYear.push(movies);
    }
  }
  return releaseYear;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  //!set a new variable that will be the highest box office movie as a number
  let bigBox = 0;
  //set a new movie title variable equal to a string
  let bigMoneyMovie = "";
  //set up guard clause if 'no movies'
  if (!movies.length) {
    //the conditiom should return null according to instruction
    return null;
  }
  //now loop through what you your movies array one last time.
  for (movies of movies) {
    // we have to take the boxOffice value and replace the money sign and commas --->  then convert that new string to a Number
    let boxNumber = Number(movies["boxOffice"].replace(/[$,]/g, ""));
    // if the index from loop is higher than the current highest box office set up a guard clause
    if (boxNumber > bigBox) {
      //reassign that value
      bigBox = boxNumber;
      // assign the highest movie title to it now
      bigMoneyMovie = movies["title"];
    }
  } // now return the highest box office movie titles
  return bigMoneyMovie;
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
