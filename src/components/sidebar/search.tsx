import React from 'react'

interface SearchProps {
    icon?: React.ReactNode;
    placeholder?: string;
}

const search: React.FC<SearchProps> = ({icon, placeholder='Search for Anything' }) => {
  return (
    <div className="flex flex-row gap-4 text-[#414158] bg-[#232324]">
            <span> {icon} </span>
            <div>
            <input placeholder={placeholder} type='text' className="bg-[#232324] border-none"/>
            </div>
    </div>
  )
}

export default search