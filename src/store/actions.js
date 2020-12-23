import axios from 'axios';
import router from "../router";

export default {
	
	fetchMovies: ({commit}) => {
		return new Promise(
			async (resolve, reject) => {
				commit('SET_LOADING_MOVIES_STATE', true);
				try{
					let response = await axios({
						method: 'get',
						url: 'https://floating-sierra-20135.herokuapp.com/api/movies',
					});
					console.log(response);
					if(response.status === 200 && response.data.success){
						let movies = response.data.data;
						commit('SET_MOVIES', movies);
						commit('SET_LOADING_MOVIES_STATE', false);
						resolve(movies);
					}else{
						commit('SET_LOADING_MOVIES_STATE', false);
						reject(response);
					}
				}catch(e){
					commit('SET_LOADING_MOVIES_STATE', false);
					reject(e);
				}
			}
		)
	},
	fetchMovie: ({commit}, id) => {
		return new Promise(
			async (resolve, reject) => {
				try{
					commit('SET_LOADING_MOVIES_STATE', true);
					let response = await axios({
						method: 'get',
						url: `https://floating-sierra-20135.herokuapp.com/api/movie/${id}`
					});
					if(response.status === 200 && response.data.success){
						let movie = response.data.data;
						commit('SET_LOADING_MOVIES_STATE', false);
						resolve(movie);
					}else{
						commit('SET_LOADING_MOVIES_STATE', false);
						reject(response);
					}
				}catch(e){
					commit('SET_LOADING_MOVIES_STATE', false);
					reject(e.response)
				}
			}
		);
	}
}