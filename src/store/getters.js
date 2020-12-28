export default {
	getMovieById: state => id => state.filteredMovies.find((movie) => movie.id === id)
}