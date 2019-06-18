<template>
  <v-app class="application theme--black">
    <app-header>
    </app-header>
            <v-content dark>
               <router-view></router-view>
            </v-content>
    <app-footer></app-footer> 
  </v-app>
</template>

<script>
  import AppHeader from './components/AppHeader'
  import AppFooter from './components/AppFooter'  

export default {
  data(){
    return {
      
    }
  },
  computed:{
    // componentName(){
    //   return this.mode == 'view' ? 'ProductDetails' : 'ProductAdd';
    // }
  },
  components: {
    AppHeader: AppHeader,
    AppFooter
  },

}
</script>

<style>

</style>
