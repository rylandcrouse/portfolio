import React from 'react'
import Sample from './components/Sample'

type Props = {}

const SampleSection = (props: Props) => {
  return (
    <div className="min-w-full h-full px-7 sm:px-0
        flex items-center justify-around sm:space-y-0 space-y-4
        flex-col sm:flex-row
        text-xl max-xl:text-base">
        <Sample title="Automate Hotel Booking for Employees" emoji="🏨" repoURL="http://github.com/rylandcrouse/portfolio"/>
        <Sample title="Fretboard Exersize" emoji="🎸" repoURL="github.com/rylandcrouse/portfolio"/>
        <Sample title="Automate Zoning Code Search with ChatGPT" emoji="👷🏼‍♀️" repoURL="github.com/rylandcrouse/"/>
    </div>
  )
}

export default SampleSection