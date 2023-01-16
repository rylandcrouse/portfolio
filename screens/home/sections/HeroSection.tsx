import Image from 'next/image'
import React from 'react'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="min-h-[50vh] w-full flex 2xl:px-72 justify-start px-th justify-center font-bold
    bg-gradient-to-r from-white/5 via-white/ to-white/5 bg-s text-neutral-200
    ">
      <h1 className="self-center justify-self-center font-semibold !leading-tight 
      xl:text-4xl sm:text-[3vmax] text-3xl sm:my-16 mt-12"> 
        “I leverage and expand upon digital solutions with code.”
      </h1>
     </div>
  )
}

export default HeroSection