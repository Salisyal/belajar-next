import React from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'



export default function eventsPages() {
    const Router = useRouter()

  return (
    <Layout>
        <h1>coba events slug</h1>
        <h3>{Router.query.slug}</h3>
    </Layout>
  )
}
