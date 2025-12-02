"use client";

import { Bell, Search, Menu } from "lucide-react";
import { mockUser } from "@/lib/mock-data";

interface TopbarProps {
  onMenuClick: () => void;
}

export function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center border-b border-white/10 bg-black/50 px-6 backdrop-blur-xl">
      <button 
        className="mr-4 text-gray-400 md:hidden"
        onClick={onMenuClick}
      >
        <Menu className="h-6 w-6" />
      </button>

      <div className="flex flex-1 items-center justify-between">
        <div className="hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="h-10 w-64 rounded-lg border border-white/10 bg-white/5 pl-10 text-sm text-white placeholder-gray-400 focus:border-metallic-gold focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative rounded-lg p-2 text-gray-400 hover:bg-white/5 hover:text-white">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            <div className="text-right hidden md:block">
              <p className="text-sm font-medium text-white">{mockUser.name}</p>
              <p className="text-xs text-gray-400">Verified User</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-metallic-gold to-yellow-600" />
          </div>
        </div>
      </div>
    </header>
  );
}
