<template>
<div :class="[{'in-list': inList}, 'movie_card', 'd-flex', 'flex-justify-between']">
	<div class="sticker d-flex">
		<div class="triangle">
		</div>
		<p class="sticker_text">
			142 мин / 02:22:00
		</p>
		<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M14 0V2H12V0H4V2H2V0H0V18H2V16H4V18H12V16H14V18H16V0H14ZM4 14H2V12H4V14ZM4 10H2V8H4V10ZM4 6H2V4H4V6ZM10 16H6V2H10V16ZM14 14H12V12H14V14ZM14 10H12V8H14V10ZM14 6H12V4H14V6Z" fill="#FA2828" fill-opacity="0.98"/>
		</svg>
	</div>
	<div class="movie_poster d-flex flex-justify-center flex-align-center">
		<img 
			:alt="`Постер ${movie.title}`"
			:src="movie.poster"
			class="movie_poster_img d-clock"
		/>
	</div>
	<div class="movie_data">
		<div class="title">
			<router-link :to="{name: 'movie', params: {id: movie.id}}" class="h3 upper-case link">
					{{movie.title }}
			</router-link>
		</div>
		<p>
			<span class="upper-case">{{movie.year }}</span>
			<span 
				class="upper-case"
				v-for="(genre, i) in movie.genres"
				:key="i"
			>{{`, ${genre} `}}</span>
		</p>
		<p class="upper-case">
			режиссёр: 
			<span 
					class="upper-case"
					v-if="movie.directors&&movie.directors.length" v-for="(director, i) in movie.directors" 
				:key="i"
			>
				{{`${ director} ${i+1!==movie.directors.length?',':''}`}}
			</span>
		</p>
		<p>
			<span class="upper-case">Актёры:</span> 
			<span 
				v-if="movie.actors&&movie.actors.length"
				v-for="(actor, i) in movie.actors" 
				:key="i"
				class="actors_list"
			>
				{{`${ actor}${i+1!==movie.actors.length?',':''}`}}
			</span>
		</p>
		<p class="description">
			{{cutText(movie.description)}}
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
	methods: {
		cutText(value){
			return this.inList&&value? value.substr(0,100)+'...':value;
		}
	},
	created(){
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
			flex-basis: 168px
			background-color: #C4C4C4
			min-width: 168px
			&_img
				width: 112px
				height: 168px
		&_data
			background-color: #4D4747
			flex-grow: 12
			padding: 32px 24px
	.link
		font-weight: bold
		font-size: 36px
		line-height: 36px
		color: white
	.title
		padding: 0 0 12px 0
		width: auto
	p, span
		margin: 5px 0
		font-size: 12px
		line-height: 12px
		color: #988F8F
	.description
		margin-top: 14px
		color: white
	.actors_list
		color: white
	.in-list:hover
		transition: 0.5s
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
		transform: translateY(-8px)
	.sticker
		position: absolute
		right: 0
		top: 32px
		background-color: #C4C4C4
		width: 184px
		height: 30px
		padding: 9px 18px
		&_text
			font-weight: bold
			font-size: 12px
			line-height: 12px
			margin: 0
			color: black
			margin-right: 12px
		&>svg	
			display: block
			margin-top: -5px
	.triangle
		position: absolute
		top: 0
		left: 0
		width: 0
		height: 0
		border: 0 solid transparent
		border-bottom-width: 34px
		border-top-width: 0px
		border-left: 9px solid #4D4747
</style>