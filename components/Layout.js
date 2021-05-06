import Tabs from './Tabs'
import { connect } from 'react-redux'
import React from 'react'
import styled from 'styled-components'

const Layout = ({ children, jobs, trees, books }) => {
  return (
    <StyledLayout>
      <Tabs />
      <div className='stats'>
        <div>
          <span>Job count:</span>{' '}<b>{jobs.length}</b>
        </div>
        <div>
          <span>Tree count:</span>{' '}<b>{trees.length}</b>
        </div>
        <div>
          <span>Book count:</span>{' '}<b>{books.length}</b>
        </div>
      </div>
      <div className='container'>
        {children}
      </div>
    </StyledLayout>
  )
}


const mapStateToProps = (state) => {
  return {
    trees: state.trees || [],
    books: state.books || [],
    jobs: state.jobs || []
  }
}

export default connect(mapStateToProps, {})(Layout)

const StyledLayout = styled.div`
  margin: 0 auto;
  width: 980px;
  .stats{
    > div{
      display: inline-block;
      margin: 0 15px 15px 0;

    }
  }
  .container{
    display: flex;
    > div{
      flex: 1;
    }
  }
`
