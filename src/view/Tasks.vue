<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm10 md12 offset-sm-1>
               <navmenu></navmenu>
               <router-view></router-view>
            </v-flex>
            <v-flex xs12 sm10 md12 offset-sm-1>
                <v-container>
                    
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
  import navmenu from './NavMenu'
  import Sidebar from './Sidebar'

    export default {
        data(){
            return {

            }
        },
        components: {
            //  TaskList,
            Sidebar,
            navmenu
            
        }
    }
</script>
<style>

</style>