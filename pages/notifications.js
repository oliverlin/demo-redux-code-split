import Notifications from '../components/Notifications'

export const getServerSideProps = () => {
  return {
    props: {
      'notifications': [{ eventName: 'hello', id: 12345 }]
    }
  }
}

export default Notifications
