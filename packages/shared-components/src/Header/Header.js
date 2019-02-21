import React from 'react'
import styled from '@emotion/styled'

const Background = styled.div`
  background-color: gray;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const Header = () => (
  <Background>
    <div>Header Shared Component</div>
  </Background>
)

export default Header