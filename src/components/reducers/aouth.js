import {AUTH_ACTION} from '../actions'

const initialstate={
    token:null,
    isauth:false
}


export default function authreducer(state,action){
    state= state || initialstate 
    switch(action.type){
        case AUTH_ACTION.LOGIN:
            return{token:action.payload, isauth:true}
        case AUTH_ACTION.LOGOUT:
            return {token:null, isauth:false}
       
        default :
            return false
    }
}