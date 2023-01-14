import React from 'react'
import Sample from './components/Sample'

type Props = {}

const SampleSection = (props: Props) => {
  return (
    <div className="lg:px-[5%] lg:py-0 sm:py-4 lg:min-h-[90vh] w-full
        flex items-center
        flex-col lg:flex-row
        space-x-0 lg:space-x-12 lg:space-y-0 md:space-y-5
        text-2xl font-medium">
        <Sample title="Automate Zoning Code Search with ChatGPT" emoji="🎸" repoURL="github.com/rylandcrouse/"/>
        <Sample title="Automate Zoning Code Search with ChatGPT" emoji="🎸" repoURL="github.com/rylandcrouse/portfolio"/>
        <Sample title="Automate Zoning Code Search with ChatGPT" emoji="🎸" repoURL="http://github.com/rylandcrouse/portfolio"/>
    </div>
  )
}

export default SampleSection