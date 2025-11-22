import FlipCard from '@/components/ui/flipCard'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Qulites = () => {



const qulites = [
    {
        title: "MENTORSHIP THAT MATTERS",
        description: "Our Mentors don’t teach from textbook; they teach from trades. Every session is designed to push you forward not leave you behind.",
    },
    {
        title: "EXECUTION OVER THEORY",
        description: "We value action, our training is structured for you to implement, not just understand.",
    },
    {
        title: "COMMUNITY WITH A CODE",
        description: "We don’t believe in crowded signals or guru hype. We believe in shared growth, ethical practices and results that speak.",
    },
    {
        title: "CLARITY OVER COMPLEXITY",
        description: "We Simplify what other complicate – Focus on real setup, not Noise.",
    },
]
  return (
    <div className='w-screen  md:px-15 px-3 md:min-h-[40vh] min-h-[50vh] grid grid-cols-2 md:grid-cols-4 gap-1'>
        {qulites.map((qulite) => (
           <FlipCard key={qulite.title} title={qulite.title} description={qulite.description} icon={<FaArrowRight />} />
        ))}
    </div>
  )
}

export default Qulites
