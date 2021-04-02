import {combineReducers} from 'redux'
import trend from './trendingVideo'
import auth from './aouth'
import profile from './profilereducer'

const reducers = combineReducers({
    trend,auth,profile
})

export default reducers