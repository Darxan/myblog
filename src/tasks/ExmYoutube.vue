<template>
	<div class="container-fluid list">
		<!-- <router-link to="/add" class="btn btn-warning mb-3">Add Product</router-link> -->
		<div id="product" class="row">
		<!-- 1- example <ProductItem v-for="(product, i) in products" :key="product.id" :product="product" :index="(i+1)" @viewDetails="viewDetails"> -->	
				<!-- route dinamichiskiy qilib berish yoli -->
				<div class="col" v-for="(product, i) in products" 
										   :key="product.id" :product="product" 
										   :index="(i+1)">
					<div class="card">
					<div class="card-body"  >
						   <div class="card-header">
						   		<p class="card-title">{{ index }} Y{{ product.title }}</p>
						   </div>
						
						<img :src="product.insImg" alt="" class="card-img" style="border-radius:100px;">
						<div class="card-footer d-flex align-items-center justify-content-ceneter">
							<a :href="product.insUrl" class="btn btn-warning">Click Me</a>
							<a href="#" class="btn btn-danger">&#215</a>
						</div>
						
					</div>
	    		</div>
				</div>
				
		</div>
	</div>
	
</template>
<script>

import ProductService from '../ProductService.js';
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
	components:{
		
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