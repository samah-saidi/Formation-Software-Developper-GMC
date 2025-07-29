// app.js
const API_KEY = 'https://www.themoviedb.org/documentation/api'; 
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

let currentPage = 1;
let currentMovies = [];

async function getMovies(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error('Error fetching movies:', err);
    return [];
  }
}

function displayMovies(movies) {
  const moviesContainer = document.getElementById('movies-container');
  moviesContainer.innerHTML = '';

  movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    
    movieCard.innerHTML = `
      <img src="${movie.poster_path ? IMG_PATH + movie.poster_path : 'placeholder.jpg'}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <span class="${getClassByRate(movie.vote_average)}">${movie.vote_average.toFixed(1)}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${movie.overview}
      </div>
    `;
    
    moviesContainer.appendChild(movieCard);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) return 'green';
  else if (vote >= 5) return 'orange';
  else return 'red';
}

// Initial load
document.addEventListener('DOMContentLoaded', async () => {
  const popularMovies = await getMovies(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${currentPage}`);
  currentMovies = popularMovies;
  displayMovies(currentMovies);
});

// Search functionality
document.getElementById('search-btn').addEventListener('click', async () => {
  const searchTerm = document.getElementById('search').value;
  if (searchTerm) {
    const searchedMovies = await getMovies(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}`);
    currentMovies = searchedMovies;
    displayMovies(currentMovies);
  }
});