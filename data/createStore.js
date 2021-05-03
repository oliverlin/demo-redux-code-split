import { combineReducers, createStore } from 'redux'
import reducerRegistry from '../lib/reducerRegistry'

const combine = (reducers) => {
  return combineReducers(reducers)
}

const reducer = combine(reducerRegistry.getReducers())
const store = createStore(reducer)

// Replace the store's reducer whenever a new reducer is registered.
reducerRegistry.setChangeListener(reducers => {
  store.replaceReducer(combine(reducers))
})

export default store
