<template>
	<div v-show="showFlag" class="food">
		food detail
	</div>
</template>
<script type="text/javascript">
export default{
	props:{
		food:{
			type: Object
		}
	},
	methods:{
		show(){
			
		}
	}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	.food 
		position fixed
		left 0px
		top 0px
		bottom 48px
		z-index 30
		width 100%
		background #fff
</style>