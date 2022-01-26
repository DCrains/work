import Head from 'next/head'
import Image from 'next/image'
import Exchange from '../components/Exchange'
import Popular from '../components/Popular'
import WhyChangly from '../components/WhyChangly'

export default function Home() {
  return (
  <div>
    <Exchange/>
    <Popular/>
    <WhyChangly/>
  </div>
  )
}
