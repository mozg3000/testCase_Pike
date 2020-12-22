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
			type: Array,
			required: true
		}
	},
}
</script>
<style scoped lang="sass">

<style>