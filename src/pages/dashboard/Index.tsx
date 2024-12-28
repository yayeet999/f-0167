import { useState, useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { MobileMenu } from "@/components/dashboard/MobileMenu";
import DashboardView from "@/components/dashboard/views/DashboardView";
import LibraryView from "@/components/dashboard/LibraryView";
import SettingsView from "@/components/dashboard/SettingsView";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [activeView, setActiveView] = useState('dashboard');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/auth/login');
        return;
      }
      setUser(session.user);
    };

    checkAuth();

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
    if (location.pathname !== '/dashboard') {
      return <Outlet />;
    }

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
        <DashboardSidebar />
        
        {/* Mobile Menu */}
        <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white p-4 flex items-center justify-between shadow-sm">
          <div className="text-blue-900 font-semibold">Narrately.ai</div>
          <MobileMenu>
            <DashboardSidebar />
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