<template>
	<div >
	    <!-- Здесь вместо fontawesome можно использовать просто svg изображение (inline)-->
		<fa-icon
			v-if="metaState === 1"
			:icon="['fas', 'minus']" 
			:class="[{chevron_checked: checked}, 'chevron']"
			@click="$emit('change')"
		/>
		<!-- Здесь вместо fontawesome можно использовать просто svg изображение (inline)-->
		<fa-icon
			v-else
			:icon="['fas', 'chevron-down']" 
			:class="[{chevron_checked: checked}, 'chevron']"
			@click="$emit('change')"
		/>
	</div>
</template>
<script>
export default{
	name: 'Checkbox',
	props: {
		checked: Boolean,	
		metaState: Number,
		name: String
	},
	data: ()=> ({
		
	})
}
</script>
<style scoped lang="sass">
	.chevron, .minus
		width: 15px
		height: 15px
		background-color: #363232
		color: #363232
		border: 1px solid #C4C4C4
	.chevron_checked, .minus_checked
		background-color: rgba(255, 82, 82, 0.98)
		border: 1px solid rgba(255, 82, 82, 0.98)
		color: white
</style>