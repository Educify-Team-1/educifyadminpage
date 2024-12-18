import React from 'react'

interface SidebarComponentProps {
    icon: React.ReactNode;
    text: string;
    dropdown: React.ReactNode;
    onClick: () => void;
}

/* Linear gradient colors in order: #F98B91, #B871D1, #8BBDFE */

const SidebarComponent: React.FC<SidebarComponentProps> = ({icon, text, dropdown, onClick}) => {
  return (
    <div className="flex flex-direction items-center justify-between">
        <div className="flex flex-row gap-2">
            {icon}
            {text}
        </div>
        <div onClick={onClick
        }>
            {dropdown}
        </div>
    </div>
  )
}

export default SidebarComponent