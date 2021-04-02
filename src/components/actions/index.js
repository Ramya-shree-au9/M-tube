const url = 'https://www.googleapis.com/youtube/v3'
const api_key = 'AIzaSyCCjjQ3hJdSDrqgX6CHLoK4R6TndJAxok4'

export function Trevideos(){
    const output = fetch ((`${url}/search?part=snippet&key=${api_key}&chart=mostPopular&maxResults=10`)).then((res)=>res.json())
    return{
        type:'TRENDING',
        payload:output
    }
}

export function Seavideo(name){
    let search = name?name:'india'
    const output = fetch ((`${url}/search?part=snippet&key=${api_key}&maxResults=10&q=${search}`)).then((res)=>res.json())
    return{
        type:'SEARCHVEDIO',
        payload:output
    }
}

export function Detailvideo(id){
     id = id?id:'D24Oo0B5AN8'
    const output = fetch ((`${url}/videos?part=snippet&key=${api_key}&id=${id}`))
    .then((res)=>res.json())
    return{
        type:'DETAILVEDIO',
        payload:output
    }
}

export function Commentvideo(id){
    id = id?id:'D24Oo0B5AN8'
    const output = fetch ((`${url}/commentThreads?part=snippet
    ,replies&videoId=${id}&key=${api_key}`)).then((res)=>res.json())
    return{
        type:'COMMENTVEDIO',
        payload:output
    }
}
// https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=5rOiW_xY-kc&type=video&key=AIzaSyDh05wAwwBV8MqWTEj_MHV-MAK8qdk7FnM
export function Relatedvideo(id){
    id = id?id:'D24Oo0B5AN8'
    // const output = fetch ('https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=5rOiW_xY-kc&type=video&key=AIzaSyDh05wAwwBV8MqWTEj_MHV-MAK8qdk7FnM')
    const output = fetch ((`${url}/search?part=snippet&relatedToVideoId=${id}&type=video&key=${api_key}&maxResults=15`))
    .then((res)=>res.json())
    return{
        type:'RELATEDVEDIO',
        payload:output
    }
}

export const AUTH_ACTION = {
    LOGIN: 'AUTH_LOGIN',
    LOGOUT: 'AUTH_LOGOUT'
}
export const PROFILE_ACTION = {
    SET: 'SET_PROFILE',
    RESET: 'RESET_PROFILE'
}

