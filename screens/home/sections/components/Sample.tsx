import React from 'react'

type Props = {
    title: string;
    emoji: string;
}

const Sample = ({title, emoji}: Props) => {
  return (
    <div className="aspect-[7/9] max-h-[80vh] w-full min-w-1/3 px-10 py-8
    flex flex-col justify-evenly items-center
    lg:rounded-2xl border-neutral-800 border-2
    hover:cursor-pointer hover:bg-slate-900 xl:hover:scale-105 hover:scale-110
    font-normal from-black to-lime-50/50">
        <h2 className="text-center">{title}</h2>
        <div className="text-7xl blog-title-emoji">{emoji}</div>
    </div>
  )
}

export default Sample