import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
// import PropTypes from 'prop-types'

import { Icon } from '@fillipvt/components'


const Heading = styled.h1`
  color: red;
`

const Todo = (props) => {
  return (
    <>
    <Heading>TODO List for the project:</Heading>
    <ul>
      <li>Define the scope: What will be possible? <Icon iconprefix="fas" iconname="balance-scale"></Icon></li>
      <li>Do mockups: Design the look <Icon iconprefix="fas" iconname="ad"></Icon></li>
      <li>Create: Code the components</li>
    </ul>
      <div>
        <Link href="/">
          <a>Go To Home Page</a>
        </Link>
      </div>
    </>
  );
}

export default Todo 