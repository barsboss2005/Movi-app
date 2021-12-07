const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'


const main = document.querySelector('main')


async function getMovies(){
     const res = await fetch(API_URL)
     const movies = await res.json()
      console.log(movies.results)
      displayMovies(movies.results)
}

getMovies()


function displayMovies(movies){
    
    movies.forEach(movie=>{
        const movieDiv = document.createElement('div')
        movieDiv.className = 'movie'

        movieDiv.innerHTML = `<img src=${IMG_PATH+movie.poster_path} alt="">
              
        <div class="movie-info">
            <span class="title">
                 ${movie.title}
            </span>
            
           <span class="rating">
                ${movie.vote_average}
            </span>
 
            
        </div>
        <div class="overview">
           ${movie.overview}
        </div>`

        main.appendChild(movieDiv)
    })

}