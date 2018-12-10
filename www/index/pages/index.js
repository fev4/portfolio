import React from 'react'
import styled from 'styled-components'
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
        <Link href="/todo" prefetch>
          <a>Show TODO</a>
        </Link>
      </div>
    </>
  );
}

export default Home