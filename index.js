/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` and `exampleSongData` variables below to gain access to arrays of movies or songs.

  Keep in mind that your functions must still have and use a parameter for accepting all movies or songs.
*/
const exampleMovies = require("./data/movies");
const songs = require("./data/songs");
const exampleSongData = require("./data/songs");
// Do not change the lines above.

/*
 * MAP PROBLEMS
 */

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

const getAllMovieTitles = (movies) => {
  if ( !movies.length ) { 
    return []   // to pass all test - have to return []
    throw ERROR // either throw error or return [] - cant do both
  }
    
  try {             // using try... catch for practice
    return movies.map(movie => movie.title) // map to return all movie titles
  } catch ( ERROR ) {
     console.log(ERROR)
  }
}

/**
 * Returns an array of all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are song titles.
 */

const getSongTitles = (songs) => songs.map(song => song.title) // map to return song titles

/**
 * Returns an array of all of the song titles with the artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are in the format "<TITLE> by <ARTIST>".
 *
 * EXAMPLE:
 *  getSongDetails(songs);
 *  //> [ "Berlin Tsukin by Taiyo Ky", "Up by Sebastian Kamae", ... ]
 */

const getSongDetails = (songs) => songs.map(song => `${song.title} by ${song.artist}`) // map to return song title and artist
                                  

/**
 * Returns an array of objects, where each object has a key that is the song title and has a value that is the song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 *
 * EXAMPLE:
 *  getTitleAndArtist(songs);
 *  //> [ { "Berlin Tsukin": "Taiyo Ky" }, { Up: "Sebastian Kamae" }, ... ]
 */

const getTitleAndArtist = (songs) => songs.map(song => ({ [ song.title ] : song.artist })) // map to return as array of objects
                                     
/**
 * FIND PROBLEMS
 */

/**
 * Returns the song "Pink Elephants" from the song array, if it is in the array.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */
const findPinkElephantsByTimestreet = (songs) => songs.find(song => song.title === 'Pink Elephants')

/**
 * Returns the first song in the list that is under three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */
const findFirstSongUnderThreeMinutes = (songs) => songs.find(song => song.runtimeInSeconds < 180)

/**
 * Returns the first song in the list where the song title equals the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */

const findFirstTitleTrack = (songs) => songs.find(song => song.title === song.album)

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
const findById = (movies, id) => movies.find(movie => movie.imdbID === id) || null

/**
 * FILTER PROBLEMS
 */

/**
 * Returns an array of all songs by the artist "Saib".
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
const getSongsBySaib = (songs) => songs.filter(song => song.artist === 'Saib')

/**
 * Returns an array of all songs where the runtime is over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
const getSongsOverThreeMinutes = (songs) => songs.filter(song => song.runtimeInSeconds > 180)

/**
 * Returns an array of songs where the song title is the same as the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
const getTitleTracks = (songs) => songs.filter(song => song.title === song.album)
/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty 
 * or no movies match the inputted `genre`, return `[]`.
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
const filterByGenre = (movies, genre) => movies.filter(movie => movie.genre.toLowerCase().includes(genre.toLowerCase())) || []
// const answer = [];
// for (let i = 0; i < movies.length; i++) {
//   if (
//     movies[i].genre.toLowerCase().split(", ").includes(genre.toLowerCase())
//   ) {
//     answer.push(movies[i]);
//   }
// }

// return answer;

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
const getAllMoviesReleasedAtOrBeforeYear = (movies, year) => movies.filter(movie => movie.released.slice(-4) <= year) || []

/*
 * REDUCE PROBLEMS
 */

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


 const getHighestMetascore = (movies) => movies.reduce((accumulator, currentMovie) => Math.max(accumulator, Number(currentMovie.metascore)), 0);
  //  {
  //   if(!movies.length) { return 0 }
  //   return movies.reduce((accumulator,currentMovie) => accumulator > Number(currentMovie.metascore) ? accumulator : Number(currentMovie.metascore))
  //  }

 
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
const getAverageIMDBRating = (movies) => movies.reduce((accumulator,currentMovie) => accumulator + Number(currentMovie.imdbRating), 0 ) / movies.length || 0

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. 
 * If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
 const countByRating = (movies) => movies.reduce((accumulator,currentMovie) => (accumulator[currentMovie.rated] ? accumulator[currentMovie.rated] ++ : accumulator[currentMovie.rated] = 1, accumulator),{})


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

 const convertBoxOfficeToNumber = (boxOffice) => Number(boxOffice.replace('$',"").replaceAll(',',''))
                                                         
 
 const getBiggestBoxOfficeMovie = (movies) => !movies.length ? null : movies.reduce( (accumulator, currentMovie) => convertBoxOfficeToNumber(accumulator.boxOffice) > convertBoxOfficeToNumber(currentMovie.boxOffice) ? accumulator : currentMovie).title

 
 /**
 * SOME/EVERY PROBLEMS
 */

 /**
 * Returns `true` if every song is over two minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
 const allSongsAreOverTwoMinutes = (songs) => songs.every(song => song.runtimeInSeconds > 120)

 /**
 * Returns `true` if any song is over four minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
 const anySongIsOverFourMinutes = (songs) => songs.some(song => song.runtimeInSeconds > 240)

 /**
 * Returns `true` if any song is by the artist "Peanut". Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
const anySongIsByPeanut = (songs) => songs.some(song => song.artist === 'Peanut')

// Do not change anything below this line.
module.exports = {
  findPinkElephantsByTimestreet,
  findFirstSongUnderThreeMinutes,
  findFirstTitleTrack,
  allSongsAreOverTwoMinutes,
  anySongIsOverFourMinutes,
  anySongIsByPeanut,
  getSongTitles,
  getSongDetails,
  getTitleAndArtist,
  getSongsBySaib,
  getSongsOverThreeMinutes,
  getTitleTracks,
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
