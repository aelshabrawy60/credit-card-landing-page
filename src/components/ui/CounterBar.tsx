import React from 'react'
import Counter from './Counter'
import { count } from 'console'

interface CounterBarProps{

}

const counters = [
    {count: "16y", label: "Experience"},
    {count: "250+", label: "Merchant Partner"},
    {count: "16+", label: "Years Experience"},
    {count: "12.5K", label: "Worldwide Clients"},
]

function CounterBar() {
  return (
    <div className='flex flex-wrap gap-8 bg-[#493d542d] backdrop-blur-[16px] px-[64px] py-[32px] justify-center md:justify-between  rounded-[32px]'>
        {
            counters.map((counter, i)=> <Counter key={i} count={counter.count} label={counter.label}/>)
        }
    </div>
  )
}

export default CounterBar