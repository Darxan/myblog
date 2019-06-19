import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase/app'
import 'firebase/auth'    
import 'firebase/storage'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/messaging'
import 'firebase/functions'
import firebaseConfig from './config/firebase.js'


Vue.use(Vuetify)

Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig)

new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App),
  created(){
    let vm = this
    firebase.auth().onAuthStateChanged(function(user) {
      vm.$store.dispatch('STATE_CHANGED', user)
    });
  }
}).$mount('#app')
