<template>
	 <v-container fluid grid-list-md thema--black>
        <v-layout row wrap justify-space-between>
			  <v-flex xs12 md12 sm10 justify-space-around>
					<v-toolbar dense color="purple" >
						<v-toolbar-items class="hidden-sm-and-down" justify-space-around>
							<v-btn  color="orange" flat>Like</v-btn>
							<v-btn  color="warning" flat>PODPIS</v-btn>
							<v-btn  color="warning" flat>COMENT</v-btn>
							<v-btn  color="warning" flat>Re-Twit</v-btn>
						</v-toolbar-items>
					</v-toolbar>
			  </v-flex>
            <v-flex v-for="task in tasks" :key="task.id" xs12 sm10 md4 offset-sm-1>
                <task-item :task="task"></task-item>
            </v-flex>
        </v-layout>
    </v-container>
	
</template>
<script>
import TaskItem from '../components/TaskListItem'
export default {
	data(){
		return {
			
		}
	},
	computed:{
		tasks() {
				return this.$store.getters.getTaskInstagram
		}
	},
	components:{
		TaskItem
	},
	created(){
		// this.products = ProductService.products;
		// this.$store.commit('loadProducts',ProductService.products)
		// this.$store.dispatch('loadProducts', ProductService.instagram)
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