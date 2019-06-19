<template>
	<div class="container">
		<div class="row">
			<div class="col-md-4"></div>
			<div class="col-md-6">
			 	<div class="card">
				 	<div class="card-body">
				 		<div class="row">
				 			<div class="col">
				 				<h1 class="card-title">Product Details</h1>
				 				<h5 class="card-title">Product Name: {{ product.title }}</h5>
								<p class="card-text">Price: ${{ product.price }}</p>
								<p class="card-text">Quantity:{{ product.qt }}</p>
							</div>
				 			<div class="col">
				 				<img :src="product.imageUrl" alt="">
				 			</div>
				 		</div>
				 		<router-link :to="{name:'home'}" class="btn btn-warning">Back</router-link>
				 		<button  @click="ProductBuyClick" class="btn btn-success">Buy</button>
				 		<!--  -->
				 	</div>
			
				</div>
			</div>
			
		</div>
		
	</div>
	
</template>

<script>
import ProductService from './ProductService.js';
export default {
	
	data(){
		return {
			product: {}
		}
	},
	created(){
		ProductService.$on('viewDetails', (selectedProduct) => {
			this.product = selectedProduct;
		});
	},
	mounted(){
		ProductService.viewDetails(this.$route.params.id);
	},
	watch:{
		'$route.params.id'(id){
			ProductService.viewDetails(id);
		}
	},
	methods:{
		ProductBuyClick(){
			this.$router.push('/buy/'+this.product.id);
			this.$router.push({name: 'buy', params:{id:this.product.id}});
		}
	}
}	
</script>

<style scoped>
	
</style>