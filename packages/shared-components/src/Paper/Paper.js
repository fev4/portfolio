import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const dimensions = css`
  padding: 5px;
`

const Background = styled.div`
  background-color: white;
  box-shadow: 5px 5px 4px gray;
  ${dimensions}
`

const Paper = (props) => {
  return (
    <Background>Hello</Background>
  )
}

export default Paper