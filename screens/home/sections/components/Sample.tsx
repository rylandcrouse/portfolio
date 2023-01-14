import React, { useState } from 'react'
import { AnimatePresence } from "framer-motion";

type Props = {
    title: string;
    emoji: string;
}

const Sample = ({title, emoji}: Props) => {
    const [hovered, setHovered] = useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="aspect-[8/9] max-h-[70vh] w-full min-w-1/3 lg:px-10 py-10 max-w-[700px]
    flex flex-col justify-evenly items-center space-y-5
    rounded-xl border-neutral-900/60 xl:border-none
    hover:cursor-pointer hover:bg-slate-900/60 hover:scale-105 hover:ease-out duration-300
    font-normal bg-gradient-to-r from-neutral-900/10 to-slate-900/10">
        <h2 className="text-center font-medium whitespace-nowrap">{title}</h2>
        <AnimatePresence>
            <div className={`guitar text-9xl ${hovered && "animate-prop"}`}>{emoji}</div>
        </AnimatePresence>
    </div>
  )
}

export default Sample