import styles from "../service/service.module.css"
import Link from "next/link"


const Servicepage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.header}>this is Service page</h1>
        <ul className={styles.list}>
            
            <li><Link href="/service/graphic-desighn">THIS IS GRAPHIC DESIGHNING PAGE</Link></li>
            <li><Link href="/service/video-editing">THIS IS VIDEO EDITING PAGE</Link></li>
        </ul>
    </div>
  )
}

export default Servicepage