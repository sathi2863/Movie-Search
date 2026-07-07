async function getMovie(){
    const movieName = document.getElementById("search").value;
    const apiUrl= `https://api.themoviedb.org/3/search/movie?api_key=f6c9908e7ec74427d50d65218724a417&query=${movieName}`
    const res = await fetch(apiUrl)
    const data = await res.json()
    const movieContainer = document.getElementById('movie')
    movieContainer.innerHTML = "";
    data.results.forEach((Movie) => {
        const mov = `
    <div class=" bg-white rounded-lg shadow-lg p-4 text-left m-2 text-black dark:bg-gray-800 dark:text-white">
    <img 
    src="https://image.tmdb.org/t/p/w500${Movie.poster_path}" 
    alt="${Movie.title}"
    class="w-full h-96 object-cover rounded-3xl mb-2.5">
    <h3><strong>Title: </strong>${Movie.title}</h3>
    <h3><strong>Language: </strong>${Movie.original_language}</h3> 
    <p><strong>Original Title: </strong>${Movie.original_title}</p>
    <p><strong>Release Date: </strong>${Movie.release_date} </p>
    <p><strong>Rating: </strong>${Movie.vote_average}</p>
    <p><strong>Overview: </strong>${Movie.overview}</p>
    </div>`;
        movieContainer.innerHTML += mov;

    });
    
}
getMovie();

const btn = document.getElementById("themeBtn")
btn.addEventListener("click", ()=>{
    document.documentElement.classList.toggle("dark");
})


const searchInput = document.getElementById("search");
searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        getMovie();
    }
});