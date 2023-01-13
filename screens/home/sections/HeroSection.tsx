import React from 'react'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="h-screen w-full flex 2xl:px-72 2xl:justify-start px-th justify-center font-bold bg-black text-neutral-100">
      <h1 className="self-center justify-self-center font-bold font-psans !leading-tight 
      xl:text-9xl lg:w-[1300px] text-[3vmax]">“Howdy 👋🏻. I leverage and expand upon digital solutions with code.”</h1>
     </div>
  )
}

export default HeroSection