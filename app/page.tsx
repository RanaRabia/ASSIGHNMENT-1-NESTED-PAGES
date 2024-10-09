
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1>This is homepage</h1>
      <ul>
        <li><Link href="/">HOME </Link></li>
        <li><Link href="/about">ABOUT</Link></li>
        <li><Link href="/contact">CONTACT</Link></li>
        <li><Link href="/service">SERVICE</Link></li>

      </ul>
</div>
  )
}

export default HomePage