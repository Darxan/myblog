<template>
  <v-container justify-space-between>
        <v-layout row wrap>
            <v-flex xs12 sm10 md3 offset-xs-1>
                <sidebar></sidebar>
            </v-flex>
            <v-flex xs12 sm10 md9 offset-xs-1>  
              <router-view></router-view>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import Sidebar from './Sidebar'
export default {
   data(){
      return{

      }
   },
   components:{
      Sidebar
   }
}
</script>
<style>
   
</style>