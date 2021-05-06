import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Button = ({ children, href, ...extraProps }) => {
  return (
    href ? (
      <Link href={href} >
        <StyledButton {...extraProps}>
          {children}
        </StyledButton>
      </Link >
    ) : (

      <StyledButton {...extraProps}>
        {children}
      </StyledButton>
    )
  )
}

export default Button

const StyledButton = styled.div`
  display: inline-block;
  padding: 4px 10px;
  line-height: 1em;
  margin-right: 10px;
  border: 1px solid #eee;
  border-radius: 5px;
  cursor: pointer;
  a{
    text-decoration: none;
  }
`
