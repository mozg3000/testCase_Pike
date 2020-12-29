<template>
	<div class="movies_box">
		<MovieCard 
			v-for="movie in movies"
			:key="movie.id"
			:movie="movie"
			:inList="true"
		/>
	</div>
</template>
<script>
import MovieCard from '@/components/MovieCard'
export default {
	name: 'MovieCardList',
	components: {
		MovieCard
	},
	props: {
		movies: {
			type: Object,
			required: true
		}
	},
	updated(){
		//console.log(this.movies)
	},
	created(){

	}
}
</script>
<style scoped lang="sass">

<style>