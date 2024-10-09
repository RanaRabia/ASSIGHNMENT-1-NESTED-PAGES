import styles from "../about/about.module.css"
import Link from 'next/link'
import React from 'react'

const Aboutpage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.header}>this is about page</h1>
        <ul>
        <li><Link href="/"> GO TO HOME PAGE </Link></li>
        <li><Link href="/contact">GO TO CONTACT PAGE</Link></li>
        <li><Link href="/service">GO TO SERVICE PAGE</Link></li>

      </ul>
        </div>
  )
}

export default Aboutpage