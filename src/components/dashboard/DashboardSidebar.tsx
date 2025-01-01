import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  HomeIcon, BookIcon, PenIcon, LibraryIcon,
  Settings, Brain, MessageSquare, Sparkles,
  Mail, FileText, BarChart, ChevronRight,
  Code, FileSearch, BookOpen, Layout,
  FileSpreadsheet, User
} from 'lucide-react';
import { SidebarCategory } from "./SidebarCategory";
import { SidebarMenuItem } from "./SidebarMenuItem";

export const DashboardSidebar = () => {
  const location = useLocation();
  const [expandedCategory, setExpandedCategory] = useState('core');

  return (
    <div className="w-72 fixed h-screen p-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full bg-white h-full rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Narrately.ai
          </span>
        </div>
        
        <div className="space-y-2 p-3">
          <SidebarMenuItem 
            icon={HomeIcon} 
            label="Dashboard" 
            color="blue"
            isActive={location.pathname === '/dashboard'}
            to="/dashboard"
            className="hover:bg-blue-50 transition-colors duration-200"
          />

          <SidebarCategory
            title="CORE CREATION"
            isExpanded={expandedCategory === 'core'}
            onToggle={() => setExpandedCategory(expandedCategory === 'core' ? '' : 'core')}
          >
            <SidebarMenuItem 
              icon={PenIcon} 
              label="Blog Writer" 
              color="amber"
              tooltip="Create engaging blog posts"
              className="hover:bg-amber-50 transition-colors duration-200"
            />
            <SidebarMenuItem 
              icon={BookIcon} 
              label="Story Creator" 
              color="purple"
              tooltip="Write short stories"
              className="hover:bg-purple-50 transition-colors duration-200"
            />
            <SidebarMenuItem 
              icon={LibraryIcon} 
              label="Novel Workshop" 
              color="slate"
              to="/dashboard/novel-workshop"
              isActive={location.pathname === '/dashboard/novel-workshop'}
              tooltip="Create full-length novels"
              className="hover:bg-slate-50 transition-colors duration-200"
            />
          </SidebarCategory>

          <SidebarCategory
            title="INTERACTIVE"
            isExpanded={expandedCategory === 'interactive'}
            onToggle={() => setExpandedCategory(expandedCategory === 'interactive' ? '' : 'interactive')}
          >
            <SidebarMenuItem 
              icon={Layout} 
              label="Interactive Story" 
              color="cyan"
              className="hover:bg-cyan-50 transition-colors duration-200"
            />
            <SidebarMenuItem 
              icon={FileText} 
              label="AuthentiText™" 
              color="green"
              className="hover:bg-green-50 transition-colors duration-200"
            />
            <SidebarMenuItem 
              icon={MessageSquare} 
              label="DocumentChat" 
              color="fuchsia"
              className="hover:bg-fuchsia-50 transition-colors duration-200"
            />
          </SidebarCategory>

          <SidebarCategory
            title="PROFESSIONAL"
            isExpanded={expandedCategory === 'professional'}
            onToggle={() => setExpandedCategory(expandedCategory === 'professional' ? '' : 'professional')}
          >
            <SidebarMenuItem 
              icon={BarChart} 
              label="Business Reports" 
              color="gray"
              className="hover:bg-gray-50 transition-colors duration-200"
            />
            <SidebarMenuItem 
              icon={FileSpreadsheet} 
              label="CareerCraft" 
              color="stone"
              className="hover:bg-stone-50 transition-colors duration-200"
            />
            <SidebarMenuItem 
              icon={Mail} 
              label="EmailCraft" 
              color="yellow"
              className="hover:bg-yellow-50 transition-colors duration-200"
            />
          </SidebarCategory>

          <SidebarCategory
            title="LEARNING & ANALYSIS"
            isExpanded={expandedCategory === 'learning'}
            onToggle={() => setExpandedCategory(expandedCategory === 'learning' ? '' : 'learning')}
          >
            <SidebarMenuItem 
              icon={Brain} 
              label="Course Creator" 
              color="orange"
              className="hover:bg-orange-50 transition-colors duration-200"
            />
            <SidebarMenuItem 
              icon={FileSearch} 
              label="ProofPerfect™" 
              color="red"
              className="hover:bg-red-50 transition-colors duration-200"
            />
            <SidebarMenuItem 
              icon={Layout} 
              label="VisualLogic" 
              color="emerald"
              className="hover:bg-emerald-50 transition-colors duration-200"
            />
          </SidebarCategory>

          <SidebarCategory
            title="DEVELOPER"
            isExpanded={expandedCategory === 'developer'}
            onToggle={() => setExpandedCategory(expandedCategory === 'developer' ? '' : 'developer')}
          >
            <SidebarMenuItem 
              icon={Sparkles} 
              label="StyleMimic" 
              color="lime"
              className="hover:bg-lime-50 transition-colors duration-200"
            />
            <SidebarMenuItem 
              icon={Code} 
              label="RepoVision" 
              color="zinc"
              className="hover:bg-zinc-50 transition-colors duration-200"
            />
          </SidebarCategory>

          <SidebarCategory
            title="USER"
            isExpanded={expandedCategory === 'user'}
            onToggle={() => setExpandedCategory(expandedCategory === 'user' ? '' : 'user')}
          >
            <SidebarMenuItem 
              icon={Settings} 
              label="Profile & Settings" 
              color="gray"
              to="/dashboard/settings"
              isActive={location.pathname === '/dashboard/settings'}
              className="hover:bg-gray-50 transition-colors duration-200"
            />
          </SidebarCategory>
        </div>
      </div>
    </div>
  );
};