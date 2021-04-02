export default function video(state={},action){
        switch(action.type) {
            case 'TRENDING':
                return{ ...state, trend:action.payload}
            case 'SEARCHVEDIO':
                return {...state, serVideo:action.payload}
            case 'DETAILVEDIO':
                return {...state, detVideo:action.payload}
            case 'COMMENTVEDIO':
                return {...state, comVideo:action.payload}
            case 'RELATEDVEDIO':
                return {...state, relVideo:action.payload}
            default:
                return state
        }  
}
