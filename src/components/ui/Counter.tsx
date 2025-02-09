import React from 'react'

interface CounterProps{
    count: string
    label: string
}

function Counter({count, label}: CounterProps) {
  return (
    <div className='flex flex-col items-center'>
        <div className='text-[48px] font-bold'>
            {count}
        </div>
        <div className='text-primary'>
            {label}
        </div>
    </div>
  )
}

export default Counter