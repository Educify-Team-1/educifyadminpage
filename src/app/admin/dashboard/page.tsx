"use client"
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Sidebar from '@/components/Sidebar';

export default function Admin() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Handle sidebar toggle
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Placeholder content */}
      <div className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <Image
              src="/admin-avatar.png"
              alt="Admin Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-lg">Admin</span>
            <button
              onClick={() => router.push("/")}
              className="px-4 py-2 bg-red-600 text-white rounded"
            >
              Log Out
            </button>
          </div>
        </header>

        {/* Placeholder Admin Content */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">User Management</h3>
              <p className="text-gray-600">Manage your users here.</p>
              <button
                onClick={() => router.push("/admin/users")}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              >
                View Users
              </button>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Reports</h3>
              <p className="text-gray-600">Generate and view reports.</p>
              <button
                onClick={() => router.push("/admin/reports")}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              >
                View Reports
              </button>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Settings</h3>
              <p className="text-gray-600">Configure your admin panel.</p>
              <button
                onClick={() => router.push("/admin/settings")}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              >
                Go to Settings
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
