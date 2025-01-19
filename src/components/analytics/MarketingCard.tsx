import React from 'react'
import Image from 'next/image';

interface MarketingCardProps {
    number: string;
    title: string;
    icon?: React.ReactNode;
};

const MarketingCard: React.FC<MarketingCardProps> = ({number, title, icon}) => {
  return (
    <div className="flex flex-col px-2 py-2 justify-around items-center" >
        <div>
        {/* vector as background */}
        <Image src="/Vector 8.png" alt="vector background" />
        </div>
        <div className="flex flex-row rounded-[12px]">
            <div>
                <h4>{number}</h4>
                <p>{title} </p>
            </div>
            <div>
                {icon}
            </div>
        </div>
    </div>
  )
}

export default MarketingCard