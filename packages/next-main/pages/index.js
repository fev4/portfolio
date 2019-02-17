import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Bar, Header } from "@fillipvt/components"
// import PropTypes from 'prop-types'

const Heading = styled.h2`
  color: green;
  font-family: 'Quicksand', sans-serif;
`

const Pg = styled.p`
  font-family: 'Zilla Slab', serif;
`

const Home = (props) => {
  return (
    <>
      <Header/>
      <Heading>Welcome</Heading>
      <Pg>Portfolio Home Page</Pg>
      <Bar/>
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