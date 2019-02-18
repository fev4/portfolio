import React from 'react'
import App, { Container } from 'next/app'

import { GlobalStyles, FontAwesome } from '@fillipvt/components';
import { Global } from '@emotion/core'

FontAwesome
class PortfolioApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Global styles={ GlobalStyles }/>
        <Component { ...pageProps } />
      </Container>
    )
  }
}

export default PortfolioApp
