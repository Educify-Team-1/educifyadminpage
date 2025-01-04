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
        <li className={`mb-4 ${expandedSection === 'dashboard' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-tachometer-alt" />}
            text="Dashboard"
            onClick={() => handleSectionClick('dashboard')}
            dropdown={null} // No dropdown
            active={expandedSection === 'dashboard'}
            isOpen={expandedSection === 'dashboard'}
          />
        </li>

        {/* Analytics */}
        <li className={`mb-4 ${expandedSection === 'analytics' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-chart-line" />}
            text="Analytics"
            onClick={() => handleSectionClick('analytics')}
            dropdown={
              <>
                <div>Marketing</div>
                <div>Social</div>
                <div>Sales</div>
                <div>Live Classes</div>
              </>
            }
            active={expandedSection === 'analytics'}
            isOpen={expandedSection === 'analytics'}
          />
        </li>

        {/* Notifications */}
        <li className={`mb-4 ${expandedSection === 'notifications' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-chart-line" />}
            text="Notifications"
            onClick={() => handleSectionClick('notifications')}
            dropdown={null}
            active={expandedSection === 'notifictions'}
            isOpen={expandedSection === 'notifictions'}
          />
        </li>

        {/* CRM */}
        <li className={`mb-4 ${expandedSection === 'crm' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-users" />}
            text="CRM"
            onClick={() => handleSectionClick('crm')}
            dropdown={
              <>
                <div>Messages</div>
                <div>Requests</div>
                <div>Calls</div>
                <div>SMS</div>
                <div>Emails</div>
              </>
            }
            active={expandedSection === 'crm'}
            isOpen={expandedSection === 'crm'}
          />
        </li>

        {/* SEO */}
        <li className={`mb-4 ${expandedSection === 'seo' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-users" />}
            text="SEO"
            onClick={() => handleSectionClick('seo')}
            dropdown={null}
            active={expandedSection === 'seo'}
            isOpen={expandedSection === 'seo'}
          />
        </li>

        {/* Content Management */}
        <li className={`mb-4 ${expandedSection === 'contentManagement' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-users" />}
            text="Content Management"
            onClick={() => handleSectionClick('contentManagement')}
            dropdown={
              <>
                <div>Blogs</div>
                <div>Courses</div>
              </>
            }
            active={expandedSection === 'contentManagement'}
            isOpen={expandedSection === 'contentManagement'}
          />
        </li>

        {/* User Management */}
        <li className={`mb-4 ${expandedSection === 'userManagement' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-users" />}
            text="User Management"
            onClick={() => handleSectionClick('userManagement')}
            dropdown={
              <>
                <div>Students</div>
                <div>Teachers</div>
                <div>Accounts</div>
              </>
            }
            active={expandedSection === 'userManagement'}
            isOpen={expandedSection === 'userManagement'}
          />
        </li>

        {/* Bookings and Payments */}
        <li className={`mb-4 ${expandedSection === 'bookingAndPayment' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-users" />}
            text="Bookings & Payments"
            onClick={() => handleSectionClick('bookingAndPayment')}
            dropdown={
              <>
                <div>Bookings</div>
                <div>Payments</div>
              </>
            }
            active={expandedSection === 'bookingAndPayment'}
            isOpen={expandedSection === 'bookingAndPayment'}
          />
        </li>

        {/* Products and Packages */}
        <li className={`mb-4 ${expandedSection === 'productsAndPackages' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-users" />}
            text="Products and Packages"
            onClick={() => handleSectionClick('productsAndPackages')}
            dropdown={
              <>
                <div>Products</div>
                <div>Categories</div>
                <div>Subjects</div>
                <div>Manage Packages</div>
              </>
            }
            active={expandedSection === 'productsAndPackages'}
            isOpen={expandedSection === 'productsAndPackages'}
          />
        </li>

        {/* Promotions */}
        <li className={`mb-4 ${expandedSection === 'promotions' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-users" />}
            text="Promotions"
            onClick={() => handleSectionClick('promotions')}
            dropdown={null
            }
            active={expandedSection === 'promotions'}
            isOpen={expandedSection === 'promotions'}
          />
        </li>

        {/* Help Desk */}
        <li className={`mb-4 ${expandedSection === 'helpDesk' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-users" />}
            text="Help Desk"
            onClick={() => handleSectionClick('helpDesk')}
            dropdown={
              <>
              <div>FAQs</div>
              <div>Complaints</div>
              <div>Articles</div>
              </>
            }
            active={expandedSection === 'helpDesk'}
            isOpen={expandedSection === 'helpDesk'}
          />
        </li>

        {/* Trash */}
        <li className={`mb-4 ${expandedSection === 'trash' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-users" />}
            text="Trash"
            onClick={() => handleSectionClick('trash')}
            dropdown={
              <>
              <div>FAQs</div>
              <div>Complaints</div>
              <div>Articles</div>
              </>
            }
            active={expandedSection === 'trash'}
            isOpen={expandedSection === 'trash'}
          />
        </li>

        <div className="px-4">
        <Separator />
      </div>

       {/* Enable Guide */}
        <li className={`mt-4 mb-4 ${expandedSection === 'enableGuide' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-users" />}
            text="Enable Guide"
            onClick={() => handleSectionClick('enableGuide')}
            dropdown={null}
            active={expandedSection === 'enableGuide'}
            isOpen={expandedSection === 'enableGuide'}
          />
        </li>

       {/* Settings */}
        <li className={`mb-4 ${expandedSection === 'settings' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-users" />}
            text="Settings"
            onClick={() => handleSectionClick('settings')}
            dropdown={null}
            active={expandedSection === 'settings'}
            isOpen={expandedSection === 'settings'}
          />
        </li>

       {/* Log Out */}
        <li className={`mb-4 ${expandedSection === 'logOut' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-users" />}
            text="Log Out"
            onClick={() => handleSectionClick('logOut')}
            dropdown={null}
            active={expandedSection === 'logOut'}
            isOpen={expandedSection === 'logOut'}
          />
        </li>

        {/* Other items can follow similarly... */}
      </ul>

      <style jsx>{`
        .border-gradient {
          border: 2px solid transparent; /* Set a transparent border */
          border-image: linear-gradient(to right, #F98B91, #B871D1, #8BBDFE) 1; /* Apply gradient to border */
          border-radius: 8px; /* Optional: Add some border radius */
        }
      `}</style>
    </div>
  );
};

export default Sidebar;