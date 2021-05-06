import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Button from './Button'

const Tabs = () => {
  return (
    <StyledTabs>
      <Button href='/'>
        home
      </Button>
      <Button href='/jobs'>
        job
      </Button>
    </StyledTabs>
  )
}

export default Tabs

const StyledTabs = styled.div`
  margin-bottom: 20px;
`
