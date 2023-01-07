import React from 'react'
import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import Link from 'next/link'
import { API_URL } from '../config'


export default function Home({ events } : { events: any;}) {
  return (
    <>
      <Layout>
        <h1>Event Akan Hadir</h1>
        {events.length === 0 && <h3>Tidak ada Event!!</h3>}
        {events.map((evt: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) =>(
          <EventItem key={evt.id} evt={evt} />
        ))}

        {events.length > 0 && (
          <Link href='/events' legacyBehavior>
            <a className="btn-secondary">
              Lihat Semua Event
            </a>
          </Link>
        )}
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${ API_URL }/api/events`)
  const events = await res.json()

  return{
    props: { events: events.slice(0,3) },
    revalidate: 1,
  }

  
}
