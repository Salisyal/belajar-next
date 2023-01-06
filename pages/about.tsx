import React from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function AboutPages() {
  return (
    <div>
        <Layout>
          <h1>About</h1>
          <Link href="/">Home</Link>
        </Layout>
    </div>
  )
}
