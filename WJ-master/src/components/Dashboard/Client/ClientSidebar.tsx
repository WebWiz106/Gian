"use client";
import Link from "next/link";
import React, { useRef } from "react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

export default function ClientSidebar({
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  const sidebar = useRef<any>(null);
  const trigger = useRef<any>(null);

  return (
    <aside
      ref={sidebar}
      className={` dark:bg-boxdark absolute  left-0 top-0 z-[1] flex h-screen w-72 flex-col overflow-y-hidden bg-black duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="py-5.5 lg:py-6.5 flex items-center justify-between gap-2 px-4">
        <button className="inline-flex items-center justify-center rounded-md border border-dark bg-dark px-7 py-3 text-center text-base font-medium text-white hover:border-body-color hover:bg-body-color disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5 dark:border-dark-2 dark:bg-dark-2">
          Get Started
        </button>
      </div>
    </aside>
  );
}
