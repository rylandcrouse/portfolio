import React from 'react'
import Sample from './components/Sample'

type Props = {}

const SampleSection = (props: Props) => {
  return (
    <div className="px-th lg:min-h-[90vh] min-w-full h-full
        flex items-center justify-around lg:space-x-10 lg:space-y-0 space-y-6 space-x-0 py-8
        flex-col lg:flex-row
        text-xl font-medium">
        <Sample title="Automate Zoning Code Search with ChatGPT" emoji="🎸" repoURL="github.com/rylandcrouse/"/>
        <Sample title="Fretboard Exersize" emoji="🎸" repoURL="github.com/rylandcrouse/portfolio"/>
        <Sample title="Automate Zoning Code Search with ChatGPT" emoji="🎸" repoURL="http://github.com/rylandcrouse/portfolio"/>
    </div>
  )
}

export default SampleSection