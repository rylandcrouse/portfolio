import Head from 'next/head'
import React from 'react'
import HeroSection from './sections/HeroSection'
import SampleSection from './sections/SampleSection'

type Props = {}

const HomeScreen = (props: Props) => {
  return (
    <>
    <Head>
      <title>Ryland Crouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  
    <main className="w-full sm:space-y-px">
        <HeroSection/>
        <SampleSection/>
    </main>

    <footer className="flex px-6 h-20 w-full items-center sm:justify-end justify-center border-inherit border-t">
      <a
        className="flex items-center justify-center gap-4 text-sm"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
      </a>
    </footer>
  </>
  )
}

export default HomeScreen