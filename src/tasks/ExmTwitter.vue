<template>
	<div class="container list">
		<h1>Twitter</h1>
	</div>
	
</template>
<script>


export default {
	data(){
		return {
			// products: []
		}

		
	},
	computed:{
		products(){
			// return this.$store.state.products
			// return this.$store.getters.getProducts;
		}
	},
	
	created(){
		// this.products = ProductService.products;
		// this.$store.commit('loadProducts',ProductService.products)
		this.$store.dispatch('loadProducts', ProductService.instagram)
	}

}	
</script>
<style>
	#product{
		display: flex;
		margin: 0 auto;
		padding:0;
		justify-content: space-around;
		align-self: center;
		flex-direction: row;
		width: 100%;
	}
</style>