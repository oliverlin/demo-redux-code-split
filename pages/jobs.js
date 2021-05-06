import Jobs from '../components/Jobs'

export const getServerSideProps = () => {
  return {
    props: {
      'jobs': [
        { eventName: 'server job A', id: 'a' },
        { eventName: 'server job B', id: 'b' }
      ]
    }
  }
}

export default Jobs
