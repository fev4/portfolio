import React from 'react'
import App, { Container } from 'next/app'

import '../lib/fontawesome'
import { GlobalStyles } from '../lib/styles/globalStyles';

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
        <GlobalStyles />
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default PortfolioApp
