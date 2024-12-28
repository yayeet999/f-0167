import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  HomeIcon, BookIcon, PenIcon, LibraryIcon,
  Settings, Brain, MessageSquare, Sparkles,
  Mail, FileText, BarChart, ChevronRight,
  Code, FileSearch, BookOpen, Layout,
  FileSpreadsheet
} from 'lucide-react';
import { SidebarCategory } from "./SidebarCategory";
import { SidebarMenuItem } from "./SidebarMenuItem";

export const DashboardSidebar = () => {
  const location = useLocation();
  const [expandedCategory, setExpandedCategory] = useState('core');

  return (
    <div className="w-72 fixed h-screen p-4">
      <div className="w-full bg-white h-full rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 text-blue-900 font-semibold border-b border-gray-100">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Narrately.ai
          </span>
        </div>
        
        <div className="space-y-1 p-2">
          <SidebarMenuItem 
            icon={HomeIcon} 
            label="Dashboard" 
            color="blue"
            isActive={location.pathname === '/dashboard'}
            to="/dashboard"
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
            />
            <SidebarMenuItem 
              icon={BookIcon} 
              label="Story Creator" 
              color="purple"
              tooltip="Write short stories"
            />
            <SidebarMenuItem 
              icon={LibraryIcon} 
              label="Novel Workshop" 
              color="slate"
              to="/dashboard/novel-workshop"
              isActive={location.pathname === '/dashboard/novel-workshop'}
              tooltip="Create full-length novels"
            />
          </SidebarCategory>

              {/* Interactive Tools */}
              <SidebarCategory
                title="INTERACTIVE"
                isExpanded={expandedCategory === 'interactive'}
                onToggle={() => setExpandedCategory(expandedCategory === 'interactive' ? '' : 'interactive')}
              >
                <SidebarMenuItem icon={Layout} label="Interactive Story" color="cyan" />
                <SidebarMenuItem icon={FileText} label="AuthentiText™" color="green" />
                <SidebarMenuItem icon={MessageSquare} label="DocumentChat" color="fuchsia" />
              </SidebarCategory>

              {/* Professional Tools */}
              <SidebarCategory
                title="PROFESSIONAL"
                isExpanded={expandedCategory === 'professional'}
                onToggle={() => setExpandedCategory(expandedCategory === 'professional' ? '' : 'professional')}
              >
                <SidebarMenuItem icon={BarChart} label="Business Reports" color="gray" />
                <SidebarMenuItem icon={FileSpreadsheet} label="CareerCraft" color="stone" />
                <SidebarMenuItem icon={Mail} label="EmailCraft" color="yellow" />
              </SidebarCategory>

              {/* Learning & Analysis */}
              <SidebarCategory
                title="LEARNING & ANALYSIS"
                isExpanded={expandedCategory === 'learning'}
                onToggle={() => setExpandedCategory(expandedCategory === 'learning' ? '' : 'learning')}
              >
                <SidebarMenuItem icon={Brain} label="Course Creator" color="orange" />
                <SidebarMenuItem icon={FileSearch} label="ProofPerfect™" color="red" />
                <SidebarMenuItem icon={Layout} label="VisualLogic" color="emerald" />
              </SidebarCategory>

              {/* Developer Tools */}
              <SidebarCategory
                title="DEVELOPER"
                isExpanded={expandedCategory === 'developer'}
                onToggle={() => setExpandedCategory(expandedCategory === 'developer' ? '' : 'developer')}
              >
                <SidebarMenuItem icon={Sparkles} label="StyleMimic" color="lime" />
                <SidebarMenuItem icon={Code} label="RepoVision" color="zinc" />
              </SidebarCategory>
        </div>
      </div>
    </div>
  );
};
