// src/apps/admin/components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import SidebarHeader from '@/components/SidebarHeader'

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`w-64 bg-[#171717] text-white p-4 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'block' : 'hidden'}`}
    >
      <div className="flex justify-between items-center mb-6">
       <SidebarHeader isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>
      <ul>
        <li className="mb-4">
          <Link href="/admin/dashboard">
            <a className="block py-2 px-4 rounded hover:bg-blue-700">Dashboard</a>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/users">
            <a className="block py-2 px-4 rounded hover:bg-blue-700">Users</a>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/settings">
            <a className="block py-2 px-4 rounded hover:bg-blue-700">Settings</a>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/reports">
            <a className="block py-2 px-4 rounded hover:bg-blue-700">Reports</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
