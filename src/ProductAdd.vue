<template>
	<div class="row">
		<div class="col-md-4"></div>
		<div class="col-md-6 col-offset-md-4 align-items-center">
		<div class="card br-10">
		
		<div class="card-body">
			<h1 class="card-title">Add Product</h1>
			<form action="">
			<div class="form-group">
				<label for="title">Title</label><br>
				<input type="text" class="form-control" id="title" placeholder="Enter title" v-model="product.title">
			</div>
			<div class="form-group">
				<label for="title">Price</label><br>
				<input type="text" class="form-control" id="price" placeholder="Enter Price"
						v-model="product.price">
			</div>
			<!-- <div class="form-group">
				<label for="title">Image</label><br>
				<input type="url:" class="form-control" id="price" placeholder="Enter URL IMAGE"
						v-model="product.imageUrl">
			</div> -->
			<div class="form-group">
				<label for="title">Quantity</label><br>
				<input type="text" class="form-control" id="qt" placeholder="Enter Quantity" v-model="product.qt">
			</div>
			<div class="form-group">
				<buttno class="btn btn-success" @click.prevent="addProduct">Add Product</buttno>
			</div>
		</form>
		</div>
		
	 </div>
	</div>
	</div>
	
	
</template>

<script>
	import ProductService from './ProductService.js'
	export default {
		data() {
			return {
				product: {}
			}
		},
		methods: {
			addProduct(){
				ProductService.addProduct(this.product.title, this.product.price,  this.product.qt);
				this.$router.push('/') // bosh saxifaga jonatvoradi
				// this.$router.go(-1) bita orqaga qaytaradi -100 bolsa 100ta orqaga qaytadi
			}
		}
	}
</script>

<style>
	
</style>