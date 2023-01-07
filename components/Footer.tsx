import React from 'react'
import styles from '@/styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p>CopyRight &copy; Faisyal Cuyy</p>
        <p>
            <Link href='/about' legacyBehavior>
                Tentang Website Ini
            </Link>
        </p>
    </footer>
  )
}
