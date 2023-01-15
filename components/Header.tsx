import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="flex px-th h-20 w-full items-center font-semibold leading-none overflow-x-scroll no-scrollbar
    bg-gradient-to-r from-zinc-700/20 to-slate-700/10 border-inherit border-b space-x-16">
      <Link href="/blog">Home</Link>
      <Link href="/blog">Showcase</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/blog">Info</Link>
    </header>
  )
}

export default Header