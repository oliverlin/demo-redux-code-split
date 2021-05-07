import { combineReducers, createStore } from 'redux'
import reducerRegistry from '../lib/reducerRegistry'

function initStore(preloadedState = null){
  const combine = (reducers) => {
    return combineReducers(reducers)
  }

  const reducer = combine(reducerRegistry.getReducers())
  const store = createStore(reducer, preloadedState)
  // initialAction && store.dispatch(initialAction)

  // Replace the store's reducer whenever a new reducer is registered.
  reducerRegistry.setChangeListener(reducers => {
    store.replaceReducer(combine(reducers))
  })
  return store
}

// export default store
export default initStore
