import React, { useState } from 'react'
import { AnimatePresence } from "framer-motion";
import Link from 'next/link';

type Props = {
    title: string;
    emoji: string;
    repoURL: string;
}

const Sample = ({title, emoji, repoURL}: Props) => {
    const [hovered, setHovered] = useState(false)
  return (
    <Link href={`${repoURL}`}>
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="sm:aspect-[7/8] aspect-square max-h-[70vh] w-full min-w-1/3 lg:px-10 px-14 py-10 max-w-[700px]
        flex flex-col justify-evenly items-center space-y-5
        rounded-xl border-neutral-900/60 xl:border-none
        hover:cursor-pointer hover:bg-slate-900/60 lg:hover:scale-105 hover:scale-[101%] hover:scale-none hover:ease-out duration-300
        font-normal bg-gradient-to-r from-neutral-900/10 to-slate-900/10">
            <h2 className="text-center font-medium">{title}</h2>
            <AnimatePresence>
                <div className={`guitar text-9xl ${hovered && "animate-prop"}`}>{emoji}</div>
            </AnimatePresence>
        </div>
    </Link>
  )
}

export default Sample