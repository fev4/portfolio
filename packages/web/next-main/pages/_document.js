import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class PortfolioDoc extends Document {
  render() {
    return (
      <html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Josefin+Sans|Quicksand:300,400,700|Zilla+Slab:400,500"
            rel="stylesheet"
          />
          {/* To avoid FOIT */}
          <link
            href="https://use.fontawesome.com/releases/v5.6.0/css/svg-with-js.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
