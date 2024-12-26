import { useState, useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { SidebarCategory } from "@/components/dashboard/SidebarCategory";
import { SidebarMenuItem } from "@/components/dashboard/SidebarMenuItem";
import { MobileMenu } from "@/components/dashboard/MobileMenu";
import DashboardView from "@/components/dashboard/views/DashboardView";
import LibraryView from "@/components/dashboard/LibraryView";
import SettingsView from "@/components/dashboard/SettingsView";
import { 
  HomeIcon, BookIcon, PenIcon, LibraryIcon, 
  Settings, Brain, MessageSquare, Sparkles,
  Mail, FileText, BarChart, ChevronRight,
  Code, FileSearch, BookOpen, Layout,
  FileSpreadsheet
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [expandedCategory, setExpandedCategory] = useState('core');
  const [activeView, setActiveView] = useState('dashboard');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check auth state
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/auth/login');
        return;
      }
      setUser(session.user);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('/auth/login');
        return;
      }
      setUser(session.user);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const renderContent = () => {
    // If we're on a nested route, render the Outlet
    if (location.pathname !== '/dashboard') {
      return <Outlet />;
    }

    // Otherwise render the appropriate view
    switch (activeView) {
      case 'dashboard':
        return <DashboardView />;
      case 'library':
        return <LibraryView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-72 fixed h-screen p-4">
          <div className="w-full bg-white h-full rounded-lg shadow-sm">
            <div className="p-2 text-blue-900 font-semibold mb-6">Narrately.ai</div>
            
            <div className="space-y-1">
              <SidebarMenuItem 
                icon={HomeIcon} 
                label="Dashboard" 
                color="blue"
                isActive={activeView === 'dashboard'}
                onClick={() => setActiveView('dashboard')}
              />

              <SidebarCategory
                title="CORE CREATION"
                isExpanded={expandedCategory === 'core'}
                onToggle={() => setExpandedCategory(expandedCategory === 'core' ? '' : 'core')}
              >
                <SidebarMenuItem icon={PenIcon} label="Blog Writer" color="amber" />
                <SidebarMenuItem icon={BookIcon} label="Story Creator" color="purple" />
                <SidebarMenuItem 
                  icon={LibraryIcon} 
                  label="Novel Workshop" 
                  color="slate"
                  to="/dashboard/novel-workshop"
                  isActive={location.pathname === '/dashboard/novel-workshop'}
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

              {/* Workspace */}
              <div className="mt-6">
                <div className="p-2 text-sm font-medium text-gray-500">WORKSPACE</div>
                <SidebarMenuItem 
                  icon={BookOpen} 
                  label="My Library" 
                  color="gray"
                  isActive={activeView === 'library'}
                  onClick={() => setActiveView('library')}
                />
                <SidebarMenuItem 
                  icon={Settings} 
                  label="Settings" 
                  color="gray"
                  isActive={activeView === 'settings'}
                  onClick={() => setActiveView('settings')}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white p-4 flex items-center justify-between shadow-sm">
          <div className="text-blue-900 font-semibold">Narrately.ai</div>
          <MobileMenu>
            <div className="w-full bg-white h-full">
              <div className="p-2 text-blue-900 font-semibold mb-6">Narrately.ai</div>
              <div className="space-y-1">
                <SidebarMenuItem 
                  icon={HomeIcon} 
                  label="Dashboard" 
                  color="blue"
                  isActive={activeView === 'dashboard'}
                  onClick={() => setActiveView('dashboard')}
                />
                <SidebarMenuItem 
                  icon={LibraryIcon} 
                  label="My Library" 
                  color="gray"
                  isActive={activeView === 'library'}
                  onClick={() => setActiveView('library')}
                />
                <SidebarMenuItem 
                  icon={Settings} 
                  label="Settings" 
                  color="gray"
                  isActive={activeView === 'settings'}
                  onClick={() => setActiveView('settings')}
                />
              </div>
            </div>
          </MobileMenu>
        </div>

        {/* Main Content */}
        <div className="flex-1 md:ml-72">
          <div className="p-6 pt-20 md:pt-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
