<template>
  <div class="wrapper">
		<div class="top">
			<header class="header">
				<div class="container">
					<h1 class="h1">
						#movienow
					</h1>
				</div>
			</header><!--header-->
			<main>
				<router-view />
			</main>
		</div><!--top-->
		<footer class="footer">
			
		</footer>
  </div><!--wrapper-->
</template>

<script>
	import Home from '@/views/Home'
    export default {
		name: 'Layout',
        components: {
			Home
        },
        data: () => ({
        }),
		computed: {
			
		},
        methods: {
            
        },
        mounted() {
        },
		created(){
		
		},
		updated(){
		
		}

    };
</script>
<style lang="sass">
	@import url("./assets/fonts/Roboto/stylesheet.css")
	*
		margin: 0 0 0 0
		box-sizing: border-box
	html
		min-height: 100%
	body
		min-height: 100%
		font-family: "Roboto", sans-serif
		font-weight: 300
		font-size: 12px
		line-height: 15px
		font-style: normal
		background-color: #363232

	a
		text-decoration: none

	.d-flex
		display: flex
	.flex-cln
		flex-direction: column
	.flex-justify-center
		justify-content: center
	.flex-justify-between
		justify-content: space-between
	.flex-align-center
		align-items: center
	.d-block
		display: block
	h1
		font-weight: bold
		font-size: 48px
		line-height: 48px
		text-align: center
	h2
		font-weight: 500
		font-size: 32px
		line-height: 32px
		color: #FFFFFF
	.h1
		line-height: 100px
	.wrapper
		display: flex
		flex-direction: column
		min-height: 100%
	.top
		flex: 1 0 auto
		min-height: 100%
	.footer
		flex: 0 0 auto
	.container
		width: 1440px
		margin: 0 auto
	.header>.container
		height: 100%
	.header
		height: 100px
		background-color: #FA2828
		opacity: 0.98

</style>