import {DataProvider} from '@mozg3000/datastructures';
let initState = {
	
}
export default {
	SET_LOADING_MOVIES_STATE: (state, stateValue) => {
		state.loadingMovies = stateValue
	},
	SET_MOVIES: (state, movies) => {
		state.movies = movies;
		state.filteredMovies = new DataProvider(
			{
				data: [...movies],
				sorters
			}
		)
	},
	TOGGLE_SORTER_STATE: (state, name) => {
		state.filteredMovies.toggleSorters(name)
	}
}
const sorters = [
	{
		name: 'Отсортировать по названию',
		on: false,
		sorter: (movie1, movie2) => {
							return movie1.title === movie2.title? 0 : movie1.title < movie2.title? -1 : 1;
						}
	},
	{
		name: 'Отсортировать по году',
		on: false,
		sorter: (movie1, movie2) => {
							return movie1.year === movie2.year? 0 : movie1.year < movie2.year? -1 : 1;
						}
	}
]