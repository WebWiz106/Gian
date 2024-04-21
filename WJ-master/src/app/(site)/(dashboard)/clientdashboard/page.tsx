"use client";
import { Button } from "@mantine/core";
import React, { useState } from "react";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Button>harsh</Button>
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-gray-900 px-4 py-6 transition duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Content */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-white">Admin Panel</h1>
          <button
            className="text-gray-500 focus:text-white focus:outline-none lg:hidden"
            onClick={toggleSidebar}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isSidebarOpen ? (
                <path d="M19 6.41l-1.41-1.41L12 10.17 6.41 4.59 5 6l7 7-7 7 1.41 1.41L12 13.83l5.59 5.58L19 18z" />
              ) : (
                <path d="M5 4v3h5.59l-1.8-1.79L12 9l6.41-6.41L19 4l-7 7-7-7zM5 18v3h14v-3H5z" />
              )}
            </svg>
          </button>
        </div>
        {/* Sidebar Links */}
        <nav>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800"
              >
                Users
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800"
              >
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Content Body */}
      <div className="flex-1 bg-gray-100">
        <div className="p-6">
          <h1 className="mb-6 text-2xl font-semibold">
            Welcome to Admin Panel
          </h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
