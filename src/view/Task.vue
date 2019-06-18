<template>
   <v-container grid-list-md app color="primary" v-if="task">
      <v-layout row wrap>
         <v-flex x12 xs10 offset-sm1>
            <TaskDetails :task="task"></TaskDetails>
         </v-flex>
         <v-flex x12 xs10 offset-sm1>
            <!-- xozircha bosh -->
         </v-flex>
      </v-layout>
   </v-container>
</template>
<script>
import TaskDetails from '../components/TaskDetails'
export default {
   props:{
      "id": {
         type: String,
         required: true
      }
   },
   computed:{
      task(){
         return this.$store.getters.getTasks.find(t => t.id == this.id)
      }
   },
   components:{
      TaskDetails
   }
}
</script>
<style lang="">
   
</style>
