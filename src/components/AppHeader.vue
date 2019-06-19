<template>
  <div>
    <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
      <v-list>
        <v-list-tile v-for="(item, i) in menuItems" :key="`navdrawer${i}`" :to="item.route">
          <v-list-tile-action>
            <v-icon left v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
         
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="purple" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"  class="hidden-md-and-up">

      </v-toolbar-side-icon>
      <router-link to="/" tag="span" style="cursor:pointer">
        <v-toolbar-title v-text="'Anor | Social'">
         </v-toolbar-title>
      </router-link>
        <v-spacer></v-spacer>
           <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                small
                color="primary"
                dark
                v-on="on"
              >
                Zarabotat!
              </v-btn>
            </template>
            <v-list>
              <v-list-tile
                v-for="(item, index) in tasksItems"
                :key="index"
                :to="item.route"
              >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        <v-toolbar-items class="hidden-sm-and-down">
           <v-btn flat v-for="(item, i) in menuItems" :key="`menuitem${i}`" :to="item.route"> 
            <v-icon left v-html="item.icon"></v-icon>
            {{item.title}}
           </v-btn>
           
        </v-toolbar-items>      
      </v-toolbar>
  </div>

 
</template>

<script>
	
export default {
    data(){
      return {
        drawer: false
      }
    },
  computed: {
    isUserAuthenticated(){
        return this.$store.getters.isUserAuthenticated
      },
    menuItems(){
        
     return this.isUserAuthenticated
          ?  [
              {
                icon: 'home',
                title: 'Home',
                route: '/tasks'
              },
              {
                icon: 'dashboard',
                title: 'Dashboard',
                route: '/dash'
              },
              {
                icon: 'person_pin',
                title: 'MyCabinet',
                route: '/'
              },
              {
                icon: 'exit_to_app',
                title: 'Log out',
                route: '/'
              },
              
          ] :
          [
              {
                icon: 'home',
                title: 'Home',
                route: '/'
              },
              {
                icon: 'info',
                title: 'About',
                route: '/'
              },
              {
                icon: 'group',
                title: 'Team',
                route: '/exc'
              },
              {
                icon: 'input',
                title: 'Sing In',
                route: '/login'
              },
              {
                icon: 'home',
                title: 'Sing Up',
                route: '/signup'
              },
          ]
    },
    tasksItems(){
      return  [ 
                {
                  title:'Instagram',
                  route: '/'
                },
                {
                  title:'tasks',
                  route: '/'
                }
            ] 
     }
   }
}
</script>

<style scoped>

</style>