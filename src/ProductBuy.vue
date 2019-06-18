<template>
	<div class="row">
		<div class="col-md-3">
			
		</div>
		<div class="col-md-8">
			<div class="card">
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
				 	</div>
			
				</div>
			</div>
			<div class="card">
				
				<div class="card-body">
					<form action="">
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Enter Card Number">
					</div>
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Enter CVC CARD">
					</div>
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Enter goden do">
					</div>

					<button class="btn btn-success">Confirm</button>
				
					<router-link :to="{name:'product-detail'}" class="btn btn-warning">Back</router-link>

				</form>
				</div>
				
			</div>
		</div>
		<div class="col-md-2"></div>
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
	// methods:{
	// 	backDetail(){
	// 		this.$router.go(-1);
	// 	}
	// }
}	
</script>
<style>
	
</style>