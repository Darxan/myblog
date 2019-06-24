<template>
   <v-container :fixed="true" temporary mb-5
               >
      <v-layout>
         <v-card dense color="default">
            <v-list >
               <v-list-tile>
                  <v-list-tile-action>
                     <v-icon>attach_money</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                     <v-list-tile-title>
                        Balance 22
                     </v-list-tile-title>
                  </v-list-tile-content>
               </v-list-tile>
               <v-list-tile v-for="item in items" :key="item.text" :to="item.route">
                  <v-list-tile-action>
                     <v-icon>{{ item.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                     <v-list-tile-title>
                        {{ item.text }}
                     </v-list-tile-title>
                  </v-list-tile-content>
               </v-list-tile>
               <v-subheader class="mt-3 grey--text text--darken-1">YouTube</v-subheader>
               <v-list>
                
               </v-list>
               <v-list-tile class="mt-3">
                  <v-list-tile-action>
                     <v-icon color="grey darken-1">add_circle_outline</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
               </v-list-tile>
               <v-list-tile>
                  <v-list-tile-action>
                     <v-icon color="grey darken-1">settings</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
               </v-list-tile>
            </v-list>
         </v-card>
      </v-layout>
   </v-container>
</template>
<script>
   import TaskList from '../components/TaskList'
   export default {
      data() {
         return {
            items: [{
                  icon: 'fab fa-instagram',
                  text: 'Zarabotat',
                  route: '/tasks'
               },
               {
                  icon: 'subscriptions',
                  text: 'TaskAdd',
                  route: '/add'
               },
               {
                  icon: 'history',
                  text: 'History'
               },
               {
                  icon: 'featured_play_list',
                  text: 'Playlists'
               },
               {
                  icon: 'watch_later',
                  text: 'Watch Later'
               }
            ]
            
         }
      },
      props: {
         source: String
      },

   }
</script>