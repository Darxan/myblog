<template>
   <v-hover>
      <v-card slot-scope="{ hover }" 
               :class="`elevation-${hover ? 12 : 2}`" 
               class="mx-auto"
               v-if="seen">
         <v-container fluid>
            <v-layout xs8 md1 sm4 offset-xs-2>
               <v-flex justify-center id="instagram">
                  <v-avatar>
                     <img :src="task.avatar" alt="">
                  </v-avatar>
                  <v-card-text primary-title justify-content-center>
                     <v-flex md12>
                        <h5 class="headline">{{ task.usernameIns }}</h5><br>
                     </v-flex>

                     <p class="it"><b color="red">Vazifa:</b> {{ task.zadacha }}</p>
                  </v-card-text>
                  <v-card-actions>
                     <v-btn small :to="{name:'task',params:{id:task.id}}" class="primary" color="white" flat>Click</v-btn>
                     <v-btn small class="warning" @click="seen = !seen" color="purple" flat>
                        <v-icon>close</v-icon>
                     </v-btn>
                  </v-card-actions>
               </v-flex>
            </v-layout>
         </v-container>
      </v-card>
   </v-hover>
</template>
<script>
   export default {
      data(){
         return {
             seen: true
            
         }
      },
      props: {
         "task":{
            type: Object,
            required : true
         }
      },
   }
</script>
<style>

</style>