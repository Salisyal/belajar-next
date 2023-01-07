import React from 'react'
import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import { API_URL } from '../../config'


export default function eventsPages({ events } : { events: any;}) {
  return (
    <>
      <Layout>
        <h1>List Event</h1>
        {events.length === 0 && <h3>Tidak ada Event!!</h3>}
        {events.map((evt: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) =>(
          <EventItem key={evt.id} evt={evt} />
        ))}
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${ API_URL }/api/events`)
  const events = await res.json()

  return{
    props: {
      events: JSON.parse(JSON.stringify(events)),
    }
  }

  
}
