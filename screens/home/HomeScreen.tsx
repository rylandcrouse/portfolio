import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import HeroSection from './sections/HeroSection'

type Props = {}

const HomeScreen = (props: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center antialiased">
    <Head>
      <title>Ryland Crouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="w-full">
        <HeroSection/>
        <div className="h-screen w-full bg-black border-t-neutral-900 border-t-2">
      
        </div>
    </main>

    <footer className="flex h-24 w-full items-center justify-center border-t">
      <a
        className="flex items-center justify-center gap-2"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </a>
    </footer>
  </div>
  )
}

export default HomeScreen