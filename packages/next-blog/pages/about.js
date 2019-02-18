import { Component } from 'react'
import Link from 'next/link'
import {Header} from '@fillipvt/components'

class AboutPage extends Component {
  render() {
    return (
      <main>
        <Header />
        <div>About Page</div>
        <section>
          <Link href="/" as="/blog" prefetch>
            <a>Go To Blog Home (with Link)</a>  
          </Link>
        </section>
        <section>
          <a href="https://fillipvt.com/blog">Go To Blog Home</a>
        </section>
        <section>
          <a href="https://fillipvt.com">Go To Portfolio Home Page</a>
        </section>
      </main>
    )
  }
}

export default AboutPage