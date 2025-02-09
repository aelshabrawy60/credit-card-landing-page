import React from 'react'

interface ServiceProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function Service({icon, title, description}: ServiceProps) {
  return (
    <div className='flex gap-4'>
        <div className='bg-[#4D3D54] flex items-center justify-center text-2xl p-[16px] rounded-[24px] w-[64px] h-[64px]'>
            {icon}
        </div>
        <div>
            <div className='text-[24px]'>
                {title}
            </div>
            <div className='text-gray-500 max-w-[300px]'>
                {description}
            </div>
        </div>
    </div>
  )
}

export default Service