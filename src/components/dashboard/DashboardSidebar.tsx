import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  HomeIcon,
  BookText,
  BookOpen,
  BookOpenText,
  Gamepad2,
  Settings,
  UserRound
} from 'lucide-react';
import { SidebarMenuItem } from "./SidebarMenuItem";

export const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <div className="w-72 fixed h-screen p-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full bg-white h-full rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Narrately.ai
          </span>
        </div>
        
        <div className="space-y-6 p-4">
          {/* Home Section */}
          <div className="space-y-1">
            <SidebarMenuItem 
              icon={HomeIcon} 
              label="Home" 
              color="blue"
              isActive={location.pathname === '/dashboard'}
              to="/dashboard"
              className="hover:bg-blue-50 transition-colors duration-200"
            />
          </div>

          {/* Author Section */}
          <div className="space-y-1">
            <div className="px-3 py-2">
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Author Tools
              </h3>
            </div>
            <SidebarMenuItem 
              icon={BookText} 
              label="Blog Writer" 
              color="amber"
              className="hover:bg-amber-50 transition-colors duration-200"
            />
            <SidebarMenuItem 
              icon={BookOpen} 
              label="Story Writer" 
              color="purple"
              className="hover:bg-purple-50 transition-colors duration-200"
            />
            <SidebarMenuItem 
              icon={BookOpenText} 
              label="Novel Workshop" 
              color="slate"
              to="/dashboard/novel-workshop"
              isActive={location.pathname === '/dashboard/novel-workshop'}
              className="hover:bg-slate-50 transition-colors duration-200"
            />
            <SidebarMenuItem 
              icon={Gamepad2} 
              label="Interactive Workshop" 
              color="cyan"
              className="hover:bg-cyan-50 transition-colors duration-200"
            />
          </div>

          {/* User Section */}
          <div className="mt-auto pt-6 border-t border-gray-100">
            <SidebarMenuItem 
              icon={UserRound} 
              label="Profile & Settings" 
              color="gray"
              to="/dashboard/settings"
              isActive={location.pathname === '/dashboard/settings'}
              className="hover:bg-gray-50 transition-colors duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};