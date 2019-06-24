<template>
    <v-container fluid grid-list-md thema--black>
        <v-layout row wrap justify-space-between>
			  <v-flex xs12 md12 sm10 justify-space-around>
               <add-task-menu>
              </add-task-menu> 
			  </v-flex>
            <v-flex xs12 sm10 md12 offset-sm-1>
               <router-view></router-view>
            </v-flex>
        </v-layout>
    </v-container>
    
</template>
<script>
import AddTaskMenu from './newtaskadd/TaskMenuCategories'
export default {
   data(){
      return{

      }
   },
   components:{
     AddTaskMenu
   }
   
}
</script>
<style>
   
</style>