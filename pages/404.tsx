import { FaExclamationTriangle } from 'react-icons/fa'
import React from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/404.module.css'

export default function NotFound() {
    return (
        <Layout title='Tampilan Tidak ditemukan'>
            <div className={styles.error}>
                <h1>
                    <FaExclamationTriangle/>
                    404</h1>
                <h4>Halaman Tidak ditemukan Cuy silakan balik Ke Home</h4>
                <Link href='/'  legacyBehavior>
                    <a>
                        Kembali Ke Home
                    </a>
                </Link>
            </div>
        </Layout>
    )
}
