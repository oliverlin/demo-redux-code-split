import reducerRegistry from '../lib/reducerRegistry'
import { HYDRATE } from '../constants'

const REDUCER_NAME = 'trees'
const initialState = []
let jobId = 0

// actions
export const ADD_TREE = 'ADD_TREE'
export const REMOVE_TREE = 'REMOVE_TREE'

// action creators
export const hydrate = payload => ({ payload, type: HYDRATE })
export const addTree = payload => ({ payload, type: ADD_TREE })
export const removeTree = payload => ({ payload, type: REMOVE_TREE })

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case HYDRATE:
      return action.state[REDUCER_NAME] || state
    case ADD_TREE:
      return [...state, { ...action.payload, id: jobId += 1 }]
    case REMOVE_TREE:
      return state.filter(tree => tree.id !== action.payload)
    default:
      return state
  }
}

reducerRegistry.register(REDUCER_NAME, reducer)
