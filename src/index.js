
const searchAlgoliaPlaces = (event) => {
  const result = document.getElementById('result');
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: event.currentTarget.value })
  })
    .then(response => response.json())
    .then((data) => {
      const text = data.hits [0].locale_names.default[0];
      result.innerHTML = text;
    });
}

const input = document.querySelector("#algolia");
input.addEventListener("keyup", searchAlgoliaPlaces);








const form = document.getElementById('search');
form.addEventListener('submit',(event)=>{
  event.preventDefault();
  const movieName = document.getElementById('movieName').value;

  searchMovies(movieName);
});


const searchMovies = (movieName) => {
  const movies = document.getElementById('movies');

  movies.innerHTML = '<h1>Loading.......</h1>';

  fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {

      movies.innerHTML = '';
      data.Search.forEach((movie)=>{
        const movieHtml = `
          <div class='col-md-4'>
            <h4>${movie.Title}</h4>
            <img src='${movie.Poster}' style="width: 200px;" >
          </div>`

        movies.insertAdjacentHTML('beforeend', movieHtml);
        // console.log(movie);
      });
    });
}

searchMovies('Avengers');
