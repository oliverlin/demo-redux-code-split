import reducerRegistry from '../lib/reducerRegistry'

const initialState = []
let homeId = 0

const reducerName = 'homes'

// const createActionName = name => `app/${reducerName}/${name}`

// selectors
export const selectAllHomes = state => state[reducerName]
export const selectNextHome = state => state[reducerName][0]

// actions
export const ADD_HOME = 'ADD_HOME'
export const REMOVE_HOME = 'REMOVE_HOME'

// action creators
export const addHome = payload => ({ payload, type: ADD_HOME })
export const removeHome = () => ({ type: REMOVE_HOME })

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_HOME:
      return [...state, { ...action.payload, id: homeId += 1 }]
    case REMOVE_HOME:
      return state.slice(1)
    default:
      return state
  }
}

reducerRegistry.register(reducerName, reducer)
