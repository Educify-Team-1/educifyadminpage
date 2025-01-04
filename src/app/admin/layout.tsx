"use client";
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleRightSidebar = () => {
    setRightSidebarOpen(!isRightSidebarOpen);
  };

  return (
    <div className="flex">
      <Navbar 
        userName="Bekwa Undie" 
        toggleSidebar={toggleSidebar}
        toggleRightSidebar={toggleRightSidebar}
      />
      
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Right Sidebar */}
      {isRightSidebarOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-gray-800 text-white">
          <div className="p-4">Right sidebar contents</div>
        </div>
      )}
      
      <div className="flex-1 p-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;
