import reducerRegistry from '../lib/reducerRegistry'

const initialState = []
let notificationId = 0

const reducerName = 'notifications'

// const createActionName = name => `app/${reducerName}/${name}`

// selectors
export const selectAllNotifications = state => state[reducerName]
export const selectNextNotification = state => state[reducerName][0]

// actions
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'

// action creators
export const addNotification = payload => ({ payload, type: ADD_NOTIFICATION })
export const removeNotification = payload => ({ payload, type: REMOVE_NOTIFICATION })

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'HYDRATE':
      return action.state.notifications
    case ADD_NOTIFICATION:
      return [...state, { ...action.payload, id: notificationId += 1 }]
    case REMOVE_NOTIFICATION:
      return state.filter(noti => noti.id !== action.payload)
    default:
      return state
  }
}

reducerRegistry.register(reducerName, reducer)
