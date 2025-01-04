import React, { useState } from 'react';

interface SidebarComponentProps {
  icon: React.ReactNode;
  text: string;
  dropdown?: React.ReactNode;
  onClick: () => void;
  active: boolean; // Track if this component is active
  isOpen: boolean; // Track if dropdown is open (for subitems toggle)
}

const SidebarComponent: React.FC<SidebarComponentProps> = ({
  icon,
  text,
  dropdown,
  onClick,
  active,
  isOpen,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Track the hovered subitem index
  const [clickedIndex, setClickedIndex] = useState<number | null>(null); // Track the clicked subitem index

  const dropdownItems = React.Children.toArray(dropdown); // Convert dropdown items to array for enumeration

  return (
    <div className={`${active || isOpen ? 'border-gradient' : ''}`}>
      {/* Parent Item (e.g., Analytics) */}
      <div
        className={`flex items-center justify-between p-3 border border-transparent group ${
          active ? 'bg-[#2d2d2d]' : ''
        }`}
        onClick={onClick}
      >
        <div className="flex flex-row gap-2">
          {icon}
          {text}
        </div>
      </div>

      {/* Submenu / Dropdown (only visible if isOpen is true) */}
      {isOpen && (
        <div className="ml-4 pl-4 border-[#2d2d2d]">
          <div className="flex flex-col space-y-2">
            {dropdownItems.map((child, index) => (
              <div
                key={index}
                className={`p-2 cursor-pointer ${
                  (hoveredIndex === index || clickedIndex === index)
                    ? 'bg-black'
                    : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  setClickedIndex(index);
                }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hover effect: Border gradient */}
      <style jsx>{`
        .group:hover {
          border-image: linear-gradient(to right, #F98B91, #B871D1, #8BBDFE) 1;
        }

        /* Gradient border when the parent is active or open */
        .border-gradient {
          border-image: linear-gradient(to right, #F98B91, #B871D1, #8BBDFE) 1;
        }
      `}</style>
    </div>
  );
};

export default SidebarComponent;
