import { Component } from 'react'
import Link from 'next/link'
import Header from '../components/header'

class AboutPage extends Component {
  render() {
    return (
      <main>
        <Header />
        <div>You are in the About Page</div>
        <section>
          <Link href="/blog/">
            <a>Go To Blog Home</a>
          </Link>
        </section>
        <section>
          <a href="https://fillipvt.com/">Go To Portfolio Home Page</a>
        </section>
      </main>
    )
  }
}

export default AboutPage