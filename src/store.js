import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import index from './Reducers/index'
const midelware = [thunk]

const store = createStore(
  index,
  composeWithDevTools(applyMiddleware(...midelware)),
)

export default store
//initialstate
