import { connect } from 'react-redux'
import { addTree, removeTree } from '../data/trees'
import { addBook, removeBook } from '../data/books'
import List from './List'
import Layout from './Layout'

const Home = ({
  addTree,
  removeTree,
  trees,
  addBook,
  removeBook,
  books
}) => {
  return (
    <Layout>
      <List
        onAdd={addTree}
        onRemove={removeTree}
        items={trees}
        name='Trees' />
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
    trees: state.trees || [],
    books: state.books || [],
    jobs: state.jobs || []
  }
}
const mapDispatchToProps = (dispatch) => ({
  addTree: (payload) => dispatch(addTree(payload)),
  removeTree: (payload) => dispatch(removeTree(payload)),
  addBook: (payload) => dispatch(addBook(payload)),
  removeBook: (payload) => dispatch(removeBook(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
