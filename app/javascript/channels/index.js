// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

const results = document.querySelector('#results');

const searchMovies = (keyword) => {
const apiUrl = `https://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`; //keyword is a search param
fetch(apiUrl) //request the api
  .then(response => response.json()) //parsed the json
  .then((data) => {
    // console.log(data);
    data.Search.forEach((movie) => { //iterated over the array of movies and created strings
      const newMovie = `<li>
      <a href="https://www.imdb.com/title/${movie.imdbID}/">
      <img src="${movie.Poster}" />
      </a>
      <p><strong>${movie.Title}</strong></p>
      <p><strong><em>${movie.Year}</em></strong></p>
      </li>`
      results.insertAdjacentHTML('beforeend', newMovie) //data.Search is the key to call, the api is limiting the results to 10
    // inserted each movie to the list, to the end of the list
    });
  });
};

  const searchForm = document.querySelector('#search-movies')
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      results.innerHTML = ""; //gets rid of all the listed items so is all new information
      const keyword = document.querySelector('#keyword').value;
      //console.log(keywordInput);
      searchMovies(keyword);
    });

    searchMovies("Wonder Woman");




