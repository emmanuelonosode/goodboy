"use client";

import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      <div className="flex min-h-screen flex-col md:pl-64">
        <Topbar onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
