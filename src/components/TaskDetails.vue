<template>
    <v-hover>
      <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto">
         <v-container fluid>
            <v-layout>
               <v-flex justify-center id="instagram">
                  <v-avatar>
                     <img :src="task.avatar" alt="">
                  </v-avatar>
                  <v-card-text primary-title justify-content-center>
                     <v-flex md12>
                        <h3 class="headline">{{ task.usernameIns }}</h3><br>
                     </v-flex>

                     <p class="it"><b color="red">TASK:</b> {{ task.zadacha }}</p>
                  </v-card-text>
                  <v-card-actions>
                     <v-btn round class="primary" color="white" flat>Click</v-btn>
                     <v-btn round class="warning" color="purple" flat>
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
   props:{
      "task":{
         type:Object,
         required: true
      }
      
   }
}
</script>