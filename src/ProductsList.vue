<template>
	<div class="container-fluid list">
		<router-link to="/add" class="btn btn-warning mb-3">Add Product</router-link> 
		<div id="product" class="row">
		<!-- 1- example <ProductItem v-for="(product, i) in products" :key="product.id" :product="product" :index="(i+1)" @viewDetails="viewDetails"> -->
				
				<!-- route dinamichiskiy qilib berish yoli -->
				
					<ProductItem v-for="(product, i) in products" :key="product.id" :product="product" :index="(i+1)" 
						:viewDetails="viewDetails">
			<!-- product bosganda detailda korinishi uchun uni $emit qilib tepadga bervoramiz  -->
					</ProductItem>
	</div>
	</div>
	
</template>
<script>
import ProductItem from './ProductItem.vue';
import ProductService from './ProductService.js';
export default {
	data(){
		return {
			// products: []
		}

		
	},
	computed:{
		products(){
			// return this.$store.state.products
			return this.$store.getters.getProducts;
		}
	},
	components: {
		ProductItem,
	},
	created(){
		// this.products = ProductService.products;
		// this.$store.commit('loadProducts',ProductService.products)
		this.$store.dispatch('loadProducts', ProductService.products)
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