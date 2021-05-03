import Tabs from './Tabs'
import { connect } from 'react-redux'
import { addNotification, removeNotification } from '../data/notifications'

const Notifications = ({ removeNotification, addNotification, notifications }) => {
  return <div>
    <Tabs />
    Notifications
    <div onClick={() => addNotification({ eventName: 'test' })}>
      Add
    </div>
    {
      notifications.map(noti=>{
        return (
          <div key={noti.id} onClick={() => removeNotification(noti.id)}>
            {noti.eventName} {noti.id}
          </div>
        )
      })
    }
  </div>
}


const mapStateToProps = (state) => ({
  notifications: state.notifications
})
const mapDispatchToProps = (dispatch) => ({
  addNotification: (payload) => dispatch(addNotification(payload)),
  removeNotification: (payload) => dispatch(removeNotification(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
