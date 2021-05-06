import Tabs from './Tabs'
import { connect } from 'react-redux'
import { addJob, removeJob } from '../data/jobs'
import { addBook, removeBook } from '../data/books'
import List from './List'
import Layout from './Layout'

const Jobs = ({ removeJob, addJob, removeBook, addBook, jobs, books }) => {
  return (
    <Layout>
    <List
      onAdd={addJob}
      onRemove={removeJob}
      items={jobs}
      name='Jobs' />
    <List
      onAdd={addBook}
      onRemove={removeBook}
      items={books}
      name='Books' />
    </Layout>
  )
}


const mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
    books: state.books
  }
}
const mapDispatchToProps = (dispatch) => ({
  addJob: (payload) => dispatch(addJob(payload)),
  removeJob: (payload) => dispatch(removeJob(payload)),
  addBook: (payload) => dispatch(addBook(payload)),
  removeBook: (payload) => dispatch(removeBook(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)
