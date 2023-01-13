import React from 'react'
import Sample from './components/Sample'

type Props = {}

const SampleSection = (props: Props) => {
  return (
    <div className="px-[5%] lg:py-0 py-7 min-h-screen w-full
        flex items-center
        flex-col lg:flex-row
        space-x-0 lg:space-x-10 lg:space-y-0 space-y-5
        2xl:text-5xl md:text-4xl text-4xl font-medium 
        ">
            <Sample title="Practice Guitar Theory" emoji="🎸"/>
            <Sample title="Practice Guitar Theory" emoji="🎸"/>
            <Sample title="Practice Guitar Theory" emoji="🎸"/>
            
    </div>
  )
}

export default SampleSection