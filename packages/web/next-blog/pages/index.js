import Link from 'next/link'
import Header from '../components/header'

export default () => (
  <main>
    <Header />
    <div>You are in the Blog Home Page</div>
    <section>
      <Link href="/blog/about/">
        <a>Go To About Me</a>
      </Link>
    </section>
    <section>
      <a href="https://fillipvt.com/">Go To Portfolio Home Page</a>
    </section>
  </main>
)
