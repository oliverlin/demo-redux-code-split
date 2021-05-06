import reducerRegistry from '../lib/reducerRegistry'
import { HYDRATE } from '../constants'

const REDUCER_NAME = 'jobs'
const initialState = []
let jobId = 0

// actions
export const ADD_JOB = 'ADD_JOB'
export const REMOVE_JOB = 'REMOVE_JOB'

// action creators
export const hydrate = payload => ({ payload, type: HYDRATE })
export const addJob = payload => ({ payload, type: ADD_JOB })
export const removeJob = payload => ({ payload, type: REMOVE_JOB })

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case HYDRATE:
      return action.state[REDUCER_NAME] || state
    case ADD_JOB:
      return [...state, { ...action.payload, id: jobId += 1 }]
    case REMOVE_JOB:
      return state.filter(noti => noti.id !== action.payload)
    default:
      return state
  }
}

reducerRegistry.register(REDUCER_NAME, reducer)
