import {createStore} from 'redux'
import toDoucer from './reducers/toDoucer'

const store = createStore(toDoucer)

export default store