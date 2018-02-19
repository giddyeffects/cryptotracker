import { combineReducers } from 'redux'
import CryptoReducers from './CryptoReducer'

export default combineReducers({
    crypto: CryptoReducers
})