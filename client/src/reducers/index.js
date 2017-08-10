import {combineReducers} from 'redux'
import UserProfileReducer from './MainPage/UserProfileReducer'

const rootReducer = combineReducers({
  equityInfo: UserProfileReducer,
})

export default rootReducer
