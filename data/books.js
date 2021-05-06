import reducerRegistry from '../lib/reducerRegistry'
import { HYDRATE } from '../constants'

const REDUCER_NAME = 'books'
const initialState = []
let jobId = 0

// actions
export const ADD_BOOK = 'ADD_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'

// action creators
export const hydrate = payload => ({ payload, type: HYDRATE })
export const addBook = payload => ({ payload, type: ADD_BOOK })
export const removeBook = payload => ({ payload, type: REMOVE_BOOK })

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case HYDRATE:
      return action.state[REDUCER_NAME] || state
    case ADD_BOOK:
      return [...state, { ...action.payload, id: jobId += 1 }]
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload)
    default:
      return state
  }
}

reducerRegistry.register(REDUCER_NAME, reducer)
