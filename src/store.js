import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { isSortedReducer, todoReducer } from './reducers'

const reducer = combineReducers({
  todoState: todoReducer,
  sortedState: isSortedReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
)
