import React from 'react'
import UserCard from './UserCard'
import { text } from 'stream/consumers'
import { TfiQuoteRight } from "react-icons/tfi";

interface TestomnialCard{
    text: string
    name: string
    image: string
    role: string
}

function TestomnialCard({name, image , role, text} : TestomnialCard) {
  return (
    <div className='bg-[#2d273240] backdrop-blur-[16px] rounded-[32px] max-w-[392px] px-[24px] py-[48px]'>
        <div>
            <div className='bg-[#4D3D54] flex justify-center items-center w-[56px] h-[56px] rounded-full text-2xl'>
                <TfiQuoteRight />
            </div>
        </div>
        <div className='my-[32px]'>
            {text}
        </div>
        <div>
            <UserCard name={name} image={image} role={role}/>
        </div>
    </div>
  )
}

export default TestomnialCard