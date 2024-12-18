import React from 'react';
import Image from 'next/image';

interface SidebarHeaderProps {
    logo?: string;
    vector?: React.ReactNode;
    className?: string;
    isSidebarOpen: boolean
    setIsSidebarOpen: () => void;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({logo, vector, className, isSidebarOpen, setIsSidebarOpen}) => {
   const defaultLogo = '/educify.png';
   const defaultVector = '/vector.png'

    return(
        <div className={`flex flex-row bg-[#171717] space-between items-center px-2 py-2 ${className}`}>
            <Image src={logo || defaultLogo}
             width={40} height={20} alt="educify" className="cursor-pointer"/>
            <div onClick={setIsSidebarOpen}>{vector || defaultVector}</div>
        </div>

    )
}

export default SidebarHeader;