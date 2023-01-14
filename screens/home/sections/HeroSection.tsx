import React from 'react'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="md:min-h-[50vh] w-full flex md:pt-0 md:pb-0 pt-12 pb-8 2xl:px-72 2xl:justify-start px-th justify-center font-bold">
      <h1 className="self-center justify-self-center font-semibold !leading-tight 
      xl:text-8xl sm:text-[4vmax] text-3xl lg:my-16">
        “Howdy <span className="blog-title-emoji">👋🏻</span>. I leverage and expand upon digital solutions with code.”
      </h1>
     </div>
  )
}

export default HeroSection