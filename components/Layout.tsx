import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'
import { useRouter } from 'next/router'
import styles from '../styles/Layout.module.css'


export default function Layout( {title, description, keywords, children}: { title: any; description: any; keywords:any; children:any; }) {
    const router = useRouter()

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            <Header/>
            {router.pathname == '/' && <Showcase/>}
            <div className={styles.container}>
                {children}
            </div>
            <Footer/>
        </>
    )
}

Layout.defaultProps = {
    title: 'Event Dj',
    description: 'event Dj cuy',
    keywords: 'Dj, edm,'

}
