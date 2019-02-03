import Link from 'next/link'
import Header from '../components/header'

export default () => (
  <main>
    <Header />
    <div>Blog Home Page</div>
    <section>
      <Link href="/about" as="/blog/about/">
        <a>Go To About Page (with Link)</a>  
      </Link>
    </section>
    <section>
      <a href="https://fillipvt.com/blog/about/">Go To About Page</a>
    </section>
    <section>
      <a href="https://fillipvt.com/">Go To Portfolio Home Page</a>
    </section>
  </main>
)
