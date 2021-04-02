import {PROFILE_ACTION} from '../actions'

const initialProfile={
    name:'',
    email:'',
    firstname:'',
    lastname:'',
    imageurl:'',
    googlrId:''

}
export default function profilereducer(state,action){
    state= state || initialProfile
    switch(action.type){
        case PROFILE_ACTION.SET:
            return{
                name:action.payload.name,
                email:action.payload.email,
                firstname:action.payload.givenName,
                lastname:action.payload.familyName,
                imageurl:action.payload.imageUrl,
                googleId:action.payload.googleId
            }
        case PROFILE_ACTION.RESET:
            return{
                ...initialProfile
            }
        default :
            return state
    }
}