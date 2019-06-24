<template>
    <v-container fluid grid-list-md thema--black>
        <v-layout row wrap justify-space-between>
			  <v-flex xs12 md12 sm10 justify-space-around>
              <!-- <v-card-text>Hi Bro!</v-card-text>0 -->
			  </v-flex>
           <v-flex xs12 md12 sm10 offset-sm-1 >
               <v-card grid-list-md>
                  <v-list two-line>
                     <template v-for="(item, index) in menuTaskadd">
                        <v-subheader
                        v-if="item.header"
                        :key="item.header"
                        >
                        {{ item.header }}
                        </v-subheader>

                        <v-divider
                        v-else-if="item.divider"
                        :key="index"
                        :inset="item.inset"
                        ></v-divider>

                        <v-list-tile
                        v-else
                        :key="item.title"
                        avatar
                        to="/tasks"
                        color="black--text"
                        >
                        <v-list-tile-avatar>
                           <v-icon size="24px">{{item.icon}}</v-icon>
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                           <v-list-tile-title v-html="item.title"></v-list-tile-title>
                           <v-list-tile-sub-title v-html="item.description"></v-list-tile-sub-title>
                        </v-list-tile-content>
                        </v-list-tile>
                     </template>
                  </v-list>
               </v-card>
           </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
   data(){
      return{

      }
   },
   computed:{
      menuTaskadd(){
         return [
            {
                icon: 'fab fa-facebook',
                title: 'Facebook',
                description: 'Лайки, репосты, подписчики, голоса в опросах и комментарии',
                route: '/tasks'
            },
            {
                icon: 'fas fa-thumbs-up',
                title: 'Вконтакте',
                description: 'Лайки на фотографию или видеозапись в Instagram',
                route: '/tasks'
            },
            {
                icon: 'fab fa-youtube',
                title: 'YouTube',
                description: 'Лайки, репосты, подписчики, голоса в опросах и комментарии',
                route: '/tasks'
            },
            {
                icon: 'fab fa-twitter',
                title: 'Twitter',
                description: 'Лайки, репосты, подписчики, голоса в опросах и комментарии',
                route: '/tasks'
            },
            {
                icon: 'fab fa-instagram',
                title: 'Instagram',
                description: 'Лайки, репосты, подписчики, голоса в опросах и комментарии',
                route: '/tasks'
            },
            {
                icon: 'fab fa-linkedin',
                title: 'Linkedin',
                description: 'Лайки, репосты, подписчики, голоса в опросах и комментарии',
                route: '/tasks'
            },
             {
                icon: 'fab fa-odnoklassniki',
                title: 'Odnoklassniki',
                description: 'Лайки, репосты, подписчики, голоса в опросах и комментарии',
                route: '/tasks'
            },
         ]
      }
   }
}
</script>
<style>
   
</style>