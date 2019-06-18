<template>
	<div class="col">
	    <div class="card m-1">
			<div class="card-body">
				<h5 class="card-title">{{ index }} {{ product.title }}</h5>
				<p class="card-text">{{ product.qt }} item for ${{product.price}}</p>
				<img :src="product.imageUrl" alt="" class="card-img circle">
				<a href="#" class="btn btn-primary mt-3" @click="viewDetailsCliked">View Details</a>
				<!-- viewDetailsCliked bu $emit qilib bosilganligi xaqida malumot berish uchun  -->
			</div>
	    </div>
	</div>
</template>
<script>
import ProductService from './ProductService.js'
export default {
	props: {
		product: {
			type: Object,
			ruquired: true,
		},
		index: {
			type: Number,
		
		},
		//2- example function bervorildi shuni propsda qabul qildik
		// viewDetails : Function
	  },
	data(){
		return{
			// product: {},
			// index: 1
		}
	},
	methods: {
		viewDetailsCliked(){
			// ProductService.viewDetails(this.product.id);
			this.$router.push('/detail/'+this.product.id);
			this.$router.push({name: 'product-detail', params:{id:this.product.id}});

		}

	}
}	
</script>
<style scoped>

	
</style>