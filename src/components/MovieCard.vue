<template>
<div class="movie_card d-flex flex-justify-between">
	<div class="movie_poster d-flex flex-justify-center flex-align-center">
		<img 
			:alt="`Постер ${movie.title}`"
			:src="movie.poster"
			class="movie_poster_img d-clock"
		/>
	</div>
	<div class="movie_data">
		<router-link :to="{name: 'movie', params: {id: movie.id}}" class="link"></router-link>
			<h3 class="h3">
				{{movie.title }}
			</h3>
		<p>
			<span>{{movie.year }}</span>
			<span 
				v-for="(genre, i) in movie.genres"
				:key="i"
			>{{`, ${genre} `}}</span>
		</p>
		<p>
			режиссёр: 
			<span 
				v-if="movie.directors&&movie.directors.length" v-for="(director, i) in movie.directors" 
				:key="i"
			>
				{{`${director} ${i+1!==movie.directors.length?',':''}`}}
			</span>
		</p>
		<p>
			Актёры: 
			<span 
				v-if="movie.actors&&movie.actors.lenght"
				v-for="(actor, i) in movie.actors" 
				:key="i"
				class="actors_list"
			>
				{{`${actor}`}}
			</span>
		</p>
		<p class="description">
			{{movie.description | cutText}}
		</p>
	</div>
</div>
</template>
<script>
export default{
	name: 'MovieCard',
	props: {
		movie: {
			type: Object,
			required: true
		},
		inList: {
			type: Boolean,
			required: false
		}
	},
	filters: {
		cutText(value){
			return value? value.substr(0,100)+'...':'';
		}
	}
}
</script>
<style lang="sass">
	.movie
		&_card
			position: relative
			width: 100%
			margin: 18px 0
			color: white
		&_poster
			flex-basis: 260px
			background-color: #C4C4C4
			&_img
				width: 112px
				height: 168px
		&_data
			background-color: #4D4747
			flex-grow: 12
			padding: 32px 24px
	.h3
		padding: 0 0 12px 0
		font-weight: bold
		font-size: 36px
		line-height: 36px
	p, span
		margin: 5px 0
		font-size: 12px
		line-height: 12px
		text-transform: uppercase
		color: #988F8F
	.description
		margin-top: 14px
		color: white
	.actors_list
		color: white
		
</style>