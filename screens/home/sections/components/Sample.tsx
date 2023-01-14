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
    // <Link href={`${repoURL}`}>
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        className="
        flex flex-col justify-evenly items-center px-6 p-6
        lg:w-1/3 sm:w-1/2 w-full h-full sm:aspect-[9/10] aspect-[9/3] 
        sm:rounded-xl sm:border-neutral-900/30 border border-neutral-900/50
        hover:cursor-pointer sm:hover:bg-slate-900/60 lg:hover:scale-105 sm:hover:scale-[101%] hover:ease-out duration-300
        font-normal bg-gradient-to-r from-neutral-900/10 to-slate-700/5">
            <h2 className="text-center font-black">{title}</h2>
            <AnimatePresence>
                <div className={`hidden sm:block guitar text-8xl`}>{emoji}</div>
            </AnimatePresence>
        </div>
    // </Link>
  )
}

export default Sample