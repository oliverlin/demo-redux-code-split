import reducerRegistry from '../lib/reducerRegistry'

const initialState = []
let userId = 0

const reducerName = 'users'

// const createActionName = name => `app/${reducerName}/${name}`

// selectors
export const selectAllUsers = state => state[reducerName]
export const selectNextUser = state => state[reducerName][0]

// actions
export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'

// action creators
export const addUser = payload => ({ payload, type: ADD_USER })
export const removeUser = payload => ({ payload, type: REMOVE_USER })

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_USER:
      return [...state, { ...action.payload, id: userId += 1 }]
    case REMOVE_USER:
      return state.filter(noti => noti.id !== action.payload)
    default:
      return state
  }
}




