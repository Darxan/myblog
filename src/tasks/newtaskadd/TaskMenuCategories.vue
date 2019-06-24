<template>
<div id="menucategories">
            <v-card>
               <v-card-title>
                  <div class="headline">
                     ADD New Tasks:
                  </div>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis facere illum eius sunt, maiores molestiae possimus, quia, fugiat delectus iusto animi porro.</span>
               </v-card-title>
            </v-card>
			
           <v-flex xs12 md12 sm10 offset-sm-1 >
             
               <v-flex grid-list-md v-for="(item, index) in menuTaskadd">
                  <v-list two-line>
                     <template>
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
                        color="black--text"
                        :to="item.route"
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
               </v-flex>
           </v-flex>
</div>
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
                route: '/facebook/all'
            },
            {
                icon: 'fab fa-vk',
                title: 'Вконтакте',
                description: 'Лайки, репосты, подписчики, голоса в опросах и комментарии',
                route: '/allfacebook'
            },
            {
                icon: 'fab fa-youtube',
                title: 'YouTube',
                description: 'Лайки, репосты, подписчики, голоса в опросах и комментарии',
                route: '/allfacebook'
            },
            {
                icon: 'fab fa-twitter',
                title: 'Twitter',
                description: 'Лайки, репосты, подписчики, голоса в опросах и комментарии',
                route: '/allfacebook'
            },
            {
                icon: 'fab fa-instagram',
                title: 'Instagram',
                description: 'Лайки, репосты, подписчики, голоса в опросах и комментарии',
                route: '/allfacebook'
            },
            {
                icon: 'fab fa-linkedin',
                title: 'Linkedin',
                description: 'Лайки, репосты, подписчики, голоса в опросах и комментарии',
                route: '/allfacebook'
            },
             {
                icon: 'fab fa-odnoklassniki',
                title: 'Odnoklassniki',
                description: 'Лайки, репосты, подписчики, голоса в опросах и комментарии',
                route: '/allfacebook'
            },
         ]
      }
   }
}
</script>
<style>
   
</style>