// src/apps/admin/components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import SidebarHeader from '@/components/SidebarHeader';
import Search from '@/components/sidebar/search';
import Separator from '@/components/sidebar/separator';
import SidebarComponent from '@/components/sidebar/sidebarComponents';

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`w-64 bg-[#171717] text-white transition-all duration-300 ease-in-out ${isSidebarOpen ? 'block' : 'hidden'}`}
    >
      <div className="mb-6">
       <SidebarHeader isSidebarOpen={isSidebarOpen} setIsSidebarOpen={toggleSidebar} />
      </div>
      <div className="mb-4 px-4">
        <Search />
      </div>

      <div className="px-4">
      <Separator/>
      </div>

      <ul className="mt-4 px-4 text-[14px]">
        <li className="mb-4">
          <Link href="/admin/dashboard" className="block py-2 px-4 rounded hover:bg-blue-700">
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/analytics" className="block py-2 px-4 rounded hover:bg-blue-700">
            Analytics
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/notifications" className="block py-2 px-4 rounded hover:bg-blue-700">
            Notifications
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/crm" className="block py-2 px-4 rounded hover:bg-blue-700">
            CRM
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/SEO" className="block py-2 px-4 rounded hover:bg-blue-700">
            SEO
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/contentManagement" className="block py-2 px-4 rounded hover:bg-blue-700">
            Content Management
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/userManagement" className="block py-2 px-4 rounded hover:bg-blue-700">
            User Management
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/Bookings&Payment" className="block py-2 px-4 rounded hover:bg-blue-700">
            Bookings & Payments
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/Products&Packages" className="block py-2 px-4 rounded hover:bg-blue-700">
            Products & Packages
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/Promotions" className="block py-2 px-4 rounded hover:bg-blue-700">
            Promotions
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/HelpDesk" className="block py-2 px-4 rounded hover:bg-blue-700">
            Help Desk
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/Trash" className="block py-2 px-4 rounded hover:bg-blue-700">
            Trash
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
