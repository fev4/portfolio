import React from 'react'
import Error from 'next/error'
import fetch from 'isomorphic-unfetch'

export default class Page extends React.Component {
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const statusCode = res.statusCode > 200 ? res.statusCode : false
    const json = await res.json()

    return { statusCode, stars: json.stargazers_count }
  }

  render() {
    if (this.props.statusCode) {
      return (<Error statusCode={this.props.statusCode} />)
    }

    return (
      <div>
        <p>This is a custom error</p>
        Next stars: {this.props.stars}
      </div>
    )
  }
}