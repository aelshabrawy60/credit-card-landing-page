import { count } from 'console';
import React from 'react'

interface UsersListProps {
    images : string[];
    count : number;
    label: string;
}

function UsersList({images, count, label} : UsersListProps) {
  return (
    <div className='flex items-center'>
        <div className='relative h-[46px] w-[138px]'>
            {
                images.map((image, index) => (
                    <div style={{left: index * 32}} className={`absolute w-[46px] h-[46px] border-2 border-white rounded-full overflow-hidden`} key={index}>
                        <img src={image} alt="user" className='w-full h-full'/>
                    </div>
                ))
            }
        </div>
        <div>
            <div>{count}</div>
            <div className='text-[12px] text-gray-500'>{label}</div>
        </div>
    </div>
  )
}

export default UsersList