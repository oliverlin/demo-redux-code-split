import Tabs from './Tabs'
import { connect } from 'react-redux'
import '../data/home'

const Home = ({ notifications }) => {
  return <div>
    <Tabs />
    Notification count: {notifications.length}
    Home
  </div>
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications || []
  }
}

export default connect(mapStateToProps, {})(Home)
