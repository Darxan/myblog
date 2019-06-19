export function  SIGNUP({commit}, payload){
   commit('SET_PROCESSING', true)
   firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
   .then(user => {
       commit('SET_USER', user.uid)
       commit('SET_PROCESSING', false) 
   })
   .catch(function(error)
   {
       commit('SET_PROCESSING', false)
       commit('SET_ERROR', error.message)
       
   });
}
function SIGNIN({commit}, payload){
   commit('SET_PROCESSING', true)
   firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
   .then(user => {
       commit('SET_USER', user.uid)
       commit('SET_PROCESSING', false) 
   })
   .catch(function(error)
   {
       commit('SET_PROCESSING', false)
       commit('SET_ERROR', error.message) 

   });
}
function STATE_CHANGED({commit}, payload){
   if(payload){
       commit('SET_USER', payload.uid) 
   } else{
       commit('UNSET_USER')
   }
}