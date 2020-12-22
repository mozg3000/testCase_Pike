let initState = {
	
}
export default {
	SET_LOADING_MOVIES_STATE: (state, stateValue) => {
		state.loadingMovies = stateValue
	},
	SET_MOVIES: (state, movies) => {
		state.movies = movies
		state.filteredMovies = [...movies]
	},
	SET_FILTERED_BYNAME_MOVIES: (state) => {
		let movies = [...state.movies]
		state.filteredMovies = movies.sort(
			(movie1, movie2) => {
				return movie1.title === movie2.title? 0 : movie1.title < movie2.title? -1 : 1;
			}
		)
	},
	SET_FILTERED_BYYEAR_MOVIES: (state) => {
		let movies = [...state.movies]
		state.filteredMovies = movies.sort(
			(movie1, movie2) => {
				return movie1.year === movie2.year? 0 : movie1.year < movie2.year? -1 : 1;
			}
		)
	},
	DROP_FILTER_MOVIE: (state) => {
		state.filteredMovies = [...state.movies];
	}
}