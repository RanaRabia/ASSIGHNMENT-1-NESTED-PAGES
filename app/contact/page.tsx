import styles from"../contact/contact.module.css"
import Link from 'next/link'
import React from 'react'

const Contactpage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.header}>this is Contact page</h1>
        <ul>
        <li><Link href="/"> GO TO HOME PAGE </Link></li>
        <li><Link href="/about">GO TO ABOUT PAGE</Link></li>
        <li><Link href="/service">GO TO SERVICE PAGE</Link></li>

      </ul>
        </div>
  )
}

export default Contactpage