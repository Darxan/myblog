<template>
    <v-container justify-space-between>
        <v-layout row wrap>
            <v-flex xs12 sm10 md3 offset-sm-1>
                <sidebar></sidebar>
            </v-flex>
            <v-flex xs12 sm12 md8>
                <!-- <task-list></task-list> -->
                <v-container fluid mb-4 style="margin-top:-3rem;">
                    <router-view></router-view>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
  import TaskList from '../components/TaskList'
  import Sidebar from './Sidebar'

    export default {
        data(){
            return {

            }
        },
        components: {
            //  TaskList,
            Sidebar
            
        }
    }
</script>
<style>

</style>