import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import HeroSection from './sections/HeroSection'
import SampleSection from './sections/SampleSection'

type Props = {}

const HomeScreen = (props: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center antialiased bg-neutral-900 text-neutral-100">
    <Head>
      <title>Ryland Crouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="w-full bg-neutral-900 text-neutral-100 [&>*]:bg-black sm:space-y-px">
        <HeroSection/>
        <SampleSection/>
    </main>

    <footer className="flex px-6 h-20 w-full items-center justify-end bg-black border-neutral-900 border-t">
      <a
        className="flex items-center justify-center gap-4 text-sm"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-10 h-10 relative overflow-hidden rounded-full">
          <Image src="/me.png" alt="Vercel Logo" fill={true} />
        </div>
      </a>
    </footer>
  </div>
  )
}

export default HomeScreen