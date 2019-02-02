import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
// import PropTypes from 'prop-types'

const Heading = styled.h1`
  color: green;
  font-family: 'Quicksand', sans-serif;
`

const Pg = styled.p`
  font-family: 'Zilla Slab', serif;
`

const Home = (props) => {
  return (
    <>
      <Heading>Welcome</Heading>
      <Pg>This is the start of a portfolio</Pg>
      <div>
        <Link href="/todo/">
          <a>Go To ToDo List</a>
        </Link>
      </div>
      <div>
        <a href="https://fillipvt.com/blog/">Go To Blog Home Page</a>
      </div>
    </>
  );
}

export default Home