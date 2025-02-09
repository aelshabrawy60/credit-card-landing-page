import React from 'react'
import Service from '../ui/Service'
import { MdOutlineSecurity } from "react-icons/md";

function Services() {
  return (
    <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <div className="text-[40px]">What do we offer?</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center max-w-6xl mx-auto">
            <Service 
                icon={<MdOutlineSecurity />} 
                title="Security Guarantee" 
                description="Your data and funds will be securely protected."
            />
            <Service 
                icon={<MdOutlineSecurity />} 
                title="Security Guarantee" 
                description="Your data and funds will be securely protected."
            />
            <Service 
                icon={<MdOutlineSecurity />} 
                title="Security Guarantee" 
                description="Your data and funds will be securely protected."
            />
        </div>
    </div>
  )
}

export default Services