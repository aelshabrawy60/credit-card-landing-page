import React from 'react'

interface UserCardProps{
    name: string;
    image: string;
    role: string
}

function UserCard({name, role, image}: UserCardProps) {
  return (
    <div className='flex items-center gap-3'>
        <div className='w-[48px] h-[48px] rounded-full overflow-hidden'>
            <img src={image} className='w-full h-full'></img>
        </div>
        <div>
            <div>{name}</div>
            <div className='text-[12px] text-gray-500'>{role}</div>
        </div>
    </div>
  )
}

export default UserCard