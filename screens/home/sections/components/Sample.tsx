import React, { useState } from 'react'
import { AnimatePresence } from "framer-motion";

type Props = {
    title: string;
    emoji: string;
}

const Sample = ({title, emoji}: Props) => {
    const [hovered, setHovered] = useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="aspect-[8/9] max-h-[70vh] w-full min-w-1/3 px-6 py-8 max-w-[700px]
    flex flex-col justify-evenly items-center
    rounded-xl border-neutral-900/60 xl:border-none
    hover:cursor-pointer hover:bg-slate-900 xl:hover:scale-105 hover:scale-110
    font-normal bg-gradient-to-r from-neutral-900/10 to-slate-900/10">
        <h2 className="text-center">{title}</h2>
        <AnimatePresence>
            <div className={`text-7xl guitar ${hovered && "animate-prop"}`}>{emoji}</div>
        </AnimatePresence>
    </div>
  )
}

export default Sample