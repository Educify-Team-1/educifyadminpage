import React from 'react'

interface SidebarComponentProps {
  icon: React.ReactNode;
  text: string;
  dropdown?: React.ReactNode;
  onClick: () => void;
}

/* Linear gradient colors in order: #F98B91, #B871D1, #8BBDFE */

const SidebarComponent: React.FC<SidebarComponentProps> = ({
  icon,
  text,
  dropdown,
  onClick,
}) => {
  return (
    <div
      className="flex items-center justify-between p-3 border border-transparent group hover:border-transparent"
    >
      <div className="flex flex-row gap-2">
        {icon}
        {text}
      </div>
      <div onClick={onClick}>{dropdown}</div>

      {/* Hover effect: Border gradient */}
      <style jsx>{`
        .group:hover {
          border-image: linear-gradient(to right, #F98B91, #B871D1, #8BBDFE) 1;
        }
      `}</style>
    </div>
  );
}

export default SidebarComponent;
