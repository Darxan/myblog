export function  SET_USER(state, payload){
   state.user.isAuthenticated = true
   state.user.uid = payload
}
function UNSET_USER(state){
   state.user = {
       isAuthenticated: false,
       uid: null
   }
}