import React from 'react';

const Sidebar = () => {
  return (
     <aside
        className={`w-64 bg-blue-800 text-white p-4 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
          <button
            onClick={toggleSidebar}
            className="text-white bg-blue-600 p-2 rounded"
          >
            {isSidebarOpen ? "Close" : "Open"} Sidebar
          </button>
        </div>
        <ul>
          <li className="mb-4">
            <a
              href="/admin/dashboard"
              className="block py-2 px-4 rounded hover:bg-blue-700"
            >
              Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/admin/users"
              className="block py-2 px-4 rounded hover:bg-blue-700"
            >
              Users
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/admin/settings"
              className="block py-2 px-4 rounded hover:bg-blue-700"
            >
              Settings
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/admin/reports"
              className="block py-2 px-4 rounded hover:bg-blue-700"
            >
              Reports
            </a>
          </li>
        </ul>
      </aside>
  )
}

export default Sidebar