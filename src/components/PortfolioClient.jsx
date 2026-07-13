"use client"
import { useRef } from 'react'
import dynamic from 'next/dynamic'
import CinemaAnimation from './CinemaAnimation'

const Achievement = dynamic(() => import('./sections/Achievement'), {
  ssr: false,
  loading: () => <div className="w-full min-h-screen" />,
})

const Contact = dynamic(() => import('./sections/Contact'), {
  ssr: false,
  loading: () => <div className="w-full min-h-screen" />,
})

const Experience = dynamic(() => import('./sections/Experience'), {
  ssr: false,
  loading: () => <div className="w-full min-h-screen" />,
})

export default function PortfolioClient() {
  const timelineRef = useRef(null)
  return (
    <>
      <CinemaAnimation timelineRef={timelineRef} />
      <Achievement />
      <Contact timelineRef={timelineRef} />
    </>
  )
}