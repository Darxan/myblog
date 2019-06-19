<template>
  <v-container justify-space-between>
        <v-layout row wrap>
            <v-flex xs12 sm10 md3 offset-sm-1>
                <sidebar></sidebar>
            </v-flex>
            <v-flex xs12 sm10 md9 offset-sm-1>
                <v-container mb-4 style="margin-top:-2rem;">
                    <router-view></router-view>
                </v-container>
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