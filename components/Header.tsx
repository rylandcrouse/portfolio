import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="flex px-th h-20 w-full items-center font-semibold leading-none overflow-x-scroll no-scrollbar
    bg-gradient-to-r from-zinc-700/20 to-slate-700/10 border-inherit border-b lg:space-x-28 space-x-16">
      <Link href="/">Home</Link>
      <Link href="/work/">Showcase</Link>
      <Link href="/blog/a">Blog</Link>
      <Link href="/info">Info</Link>
    </header>
  )
}

export default Header