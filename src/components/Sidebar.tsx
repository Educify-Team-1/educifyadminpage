import React, { useState } from 'react';
import SidebarComponent from '@/components/sidebar/sidebarComponent';
import SidebarHeader from '@/components/SidebarHeader';
import Search from '@/components/sidebar/search';
import Separator from '@/components/sidebar/separator';

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  // Manage which sidebar section is open and active
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleSectionClick = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null); // Collapse if it's already open
    } else {
      setExpandedSection(section); // Expand the clicked section
    }
  };

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
        <Separator />
      </div>

      <ul className="mt-4 px-4 text-[14px]">
        {/* Dashboard */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'dashboard' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-tachometer-alt" />}
            text="Dashboard"
            onClick={() => handleSectionClick('dashboard')}
            dropdown={[]}
            active={expandedSection === 'dashboard'}
            isOpen={expandedSection === 'dashboard'}
          />
        </li>

        {/* Analytics */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'analytics' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-chart-line" />}
            text="Analytics"
            onClick={() => handleSectionClick('analytics')}
            dropdown={[
              <div key="1">Marketing</div>,
              <div key="2">Social</div>,
              <div key="3">Sales</div>,
              <div key="4">Live Classes</div>,
            ]}
            active={expandedSection === 'analytics'}
            isOpen={expandedSection === 'analytics'}
          />
        </li>

        {/* Notifications */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'notifications' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-bell" />}
            text="Notifications"
            onClick={() => handleSectionClick('notifications')}
            dropdown={[]}
            active={expandedSection === 'notifications'}
            isOpen={expandedSection === 'notifications'}
          />
        </li>

        {/* CRM */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'crm' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-users" />}
            text="CRM"
            onClick={() => handleSectionClick('crm')}
            dropdown={[
              <div key="1">Messages</div>,
              <div key="2">Requests</div>,
              <div key="3">Calls</div>,
              <div key="4">SMS</div>,
              <div key="5">Emails</div>,
            ]}
            active={expandedSection === 'crm'}
            isOpen={expandedSection === 'crm'}
          />
        </li>

        {/* SEO */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'seo' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-search" />}
            text="SEO"
            onClick={() => handleSectionClick('seo')}
            dropdown={[]}
            active={expandedSection === 'seo'}
            isOpen={expandedSection === 'seo'}
          />
        </li>

        {/* Content Management */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'contentManagement' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-edit" />}
            text="Content Management"
            onClick={() => handleSectionClick('contentManagement')}
            dropdown={[
              <div key="1">Blogs</div>,
              <div key="2">Courses</div>,
            ]}
            active={expandedSection === 'contentManagement'}
            isOpen={expandedSection === 'contentManagement'}
          />
        </li>

        {/* User Management */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'userManagement' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-users" />}
            text="User Management"
            onClick={() => handleSectionClick('userManagement')}
            dropdown={[
              <div key="1">Students</div>,
              <div key="2">Teachers</div>,
              <div key="3">Accounts</div>,
            ]}
            active={expandedSection === 'userManagement'}
            isOpen={expandedSection === 'userManagement'}
          />
        </li>

        {/* Bookings and Payments */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'bookingAndPayment' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-calendar-check" />}
            text="Bookings & Payments"
            onClick={() => handleSectionClick('bookingAndPayment')}
            dropdown={[
              <div key="1">Bookings</div>,
              <div key="2">Payments</div>,
            ]}
            active={expandedSection === 'bookingAndPayment'}
            isOpen={expandedSection === 'bookingAndPayment'}
          />
        </li>

        {/* Products and Packages */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'productsAndPackages' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-box-open" />}
            text="Products and Packages"
            onClick={() => handleSectionClick('productsAndPackages')}
            dropdown={[
              <div key="1">Products</div>,
              <div key="2">Categories</div>,
              <div key="3">Subjects</div>,
              <div key="4">Manage Packages</div>,
            ]}
            active={expandedSection === 'productsAndPackages'}
            isOpen={expandedSection === 'productsAndPackages'}
          />
        </li>

        {/* Promotions */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'promotions' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-bullhorn" />}
            text="Promotions"
            onClick={() => handleSectionClick('promotions')}
            dropdown={[]}
            active={expandedSection === 'promotions'}
            isOpen={expandedSection === 'promotions'}
          />
        </li>

        {/* Help Desk */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'helpDesk' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-question-circle" />}
            text="Help Desk"
            onClick={() => handleSectionClick('helpDesk')}
            dropdown={[
              <div key="1">FAQs</div>,
              <div key="2">Complaints</div>,
              <div key="3">Articles</div>,
            ]}
            active={expandedSection === 'helpDesk'}
            isOpen={expandedSection === 'helpDesk'}
          />
        </li>

        {/* Trash */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'trash' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-trash" />}
            text="Trash"
            onClick={() => handleSectionClick('trash')}
            dropdown={[
            ]}
            active={expandedSection === 'trash'}
            isOpen={expandedSection === 'trash'}
          />
        </li>

        <div className="px-4">
          <Separator />
        </div>

        {/* Enable Guide */}
        <li className={`mt-4 mb-4 cursor-pointer ${expandedSection === 'enableGuide' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-lightbulb" />}
            text="Enable Guide"
            onClick={() => handleSectionClick('enableGuide')}
            dropdown={[]}
            active={expandedSection === 'enableGuide'}
            isOpen={expandedSection === 'enableGuide'}
          />
        </li>

        {/* Settings */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'settings' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-cogs" />}
            text="Settings"
            onClick={() => handleSectionClick('settings')}
            dropdown={[]}
            active={expandedSection === 'settings'}
            isOpen={expandedSection === 'settings'}
          />
        </li>

        {/* Log Out */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'logOut' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-sign-out-alt" />}
            text="Log Out"
            onClick={() => handleSectionClick('logOut')}
            dropdown={[]}
            active={expandedSection === 'logOut'}
            isOpen={expandedSection === 'logOut'}
          />
        </li>
      </ul>

      <style jsx>{`
        .border-gradient {
          border: 2px solid transparent;
          border-image: linear-gradient(to right, #F98B91, #B871D1, #8BBDFE) 1;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
