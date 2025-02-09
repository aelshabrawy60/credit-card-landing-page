import React from 'react'
import TestomnialCard from '../ui/TestomnialCard'


const Testomnials_list = [
    {
        text: "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
        name : "max tor",
        image: "user1.jpg",
        role: "software engineer"
    },
    {
        text: "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
        name : "max tor",
        image: "user1.jpg",
        role: "software engineer"
    },
    {
        text: "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
        name : "max tor",
        image: "user1.jpg",
        role: "software engineer"
    }
]

function Testomnials() {
  return (
    <div className='flex flex-wrap gap-10 justify-center'>
        {Testomnials_list.map((testomnial, i)=> <TestomnialCard key={i} image={testomnial.image} text={testomnial.text} role={testomnial.role} name={testomnial.name}/>)}
    </div>
  )
}

export default Testomnials