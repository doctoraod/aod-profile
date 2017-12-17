import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  background-color: #222;
  height: 80px;
  padding: 20px;
  color: white;
`
const Title = styled.h1`
  font-size: 1.5em;
`
class Header extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Wrapper>
        <Title>{children}</Title>
      </Wrapper>
    )
  }
}

export default Header