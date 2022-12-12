import types from "./types";


const init_state={
    num:0
}

export function counterReducer(state=init_state,action){
 switch (action.types) {
    case types.INCREMENT:{
        let data = action.payload
       return {...state,num:data+1}}
       case types.DECREMENT:{
        let data = action.payload
       return {...state,num:data-1}}
    default:
     return {...state}
 }
}