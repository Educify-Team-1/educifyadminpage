// src/apps/admin/components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import SidebarHeader from '@/components/SidebarHeader';
import Search from '@/components/sidebar/search';
import Separator from '@/components/sidebar/separator';

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
       <SidebarHeader isSidebarOpen={isSidebarOpen} setIsSidebarOpen={toggleSidebar} />
      </div>

      <Separator/>

      <div>
        <Search />
      </div>
      <ul>
        <li className="mb-4">
          <Link href="/admin/dashboard" className="block py-2 px-4 rounded hover:bg-blue-700">
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/users" className="block py-2 px-4 rounded hover:bg-blue-700">
            Users
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/settings" className="block py-2 px-4 rounded hover:bg-blue-700">
            Settings
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/reports" className="block py-2 px-4 rounded hover:bg-blue-700">
            Reports
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
