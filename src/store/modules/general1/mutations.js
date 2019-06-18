export function  SET_PROCESSING(state, payload){
   state.processing = payload
}
function SET_ERROR(state, payload){
   state.error = payload
}
function CLEAN_ERROR(state){
   state.error = null
}