import React from 'react'
import Button from '../ui/button/Button';
import Dora from '../ui/Dora';

interface FeatureProps {
    title: string;
    description: string;
    CTA: string;
    image: string;
    type: boolean;
}

function Feature({ title, description, CTA, image, type }: FeatureProps) {
    return (
        <div className={`
            grid grid-cols-1 lg:grid-cols-2 
            gap-14 items-center 
            relative
            ${type ? 'lg:[&>*:first-child]:order-2' : ''}
        `}>
            {type && <Dora right={0} top={0} />}
            
            <div className="max-w-[600px] justify-self-center lg:justify-self-start">
                <div className="text-[40px] font-bold">
                    {title}
                </div>
                <div className="text-gray-500 my-6">
                    {description}
                </div>
                <div>
                    <Button label={CTA} onClick={() => { }} type={true} />
                </div>
            </div>

            <div className="justify-self-center lg:justify-self-end">
                <img src={image} alt={title} />
            </div>
        </div>
    )
}

export default Feature