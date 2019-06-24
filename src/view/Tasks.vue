<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm10 md12 offset-sm-1>
               <navmenu></navmenu>
            </v-flex>
            <v-flex xs12 sm10 md12 offset-sm-1>
                <router-view></router-view>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
  import navmenu from './NavMenu'

    export default {
        data(){
            return {

            }
        },
        components: {
            navmenu
            
        }
    }
</script>
<style>

</style>