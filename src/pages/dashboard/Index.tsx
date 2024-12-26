import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { SidebarCategory } from "@/components/dashboard/SidebarCategory";
import { SidebarMenuItem } from "@/components/dashboard/SidebarMenuItem";
import { MobileMenu } from "@/components/dashboard/MobileMenu";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { 
  HomeIcon, BookIcon, PenIcon, LibraryIcon, 
  Settings, Brain, MessageSquare, Sparkles,
  Mail, FileText, BarChart, ChevronRight,
  Code, FileSearch, BookOpen, Layout,
  FileSpreadsheet
} from 'lucide-react';

const DashboardPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [expandedCategory, setExpandedCategory] = useState('core');
  const [user, setUser] = useState<any>(null);
  const [subscription, setSubscription] = useState<any>(null);
  const [recentProjects, setRecentProjects] = useState<any[]>([]);

  useEffect(() => {
    // Check auth state
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/auth/login');
        return;
      }
      setUser(session.user);
      fetchUserData(session.user.id);
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

  const fetchUserData = async (userId: string) => {
    try {
      // Fetch user subscription
      const { data: subscriptionData, error: subscriptionError } = await supabase
        .from('user_subscriptions')
        .select(`
          *,
          subscription_tiers (*)
        `)
        .eq('user_id', userId)
        .single();

      if (subscriptionError) throw subscriptionError;
      setSubscription(subscriptionData);

      // Fetch recent projects
      const { data: projectsData, error: projectsError } = await supabase
        .from('generated_content')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(3);

      if (projectsError) throw projectsError;
      setRecentProjects(projectsData);

    } catch (error: any) {
      toast({
        title: "Error fetching data",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleSettingsClick = () => {
    navigate('/dashboard/settings');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-72 fixed h-screen p-4">
          <div className="w-full bg-white h-full">
            <div className="p-2 text-blue-900 font-semibold mb-6">Narrately.ai</div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-2 p-2 bg-blue-50 text-blue-900 rounded">
                <HomeIcon className="w-4 h-4" />
                <span>Dashboard</span>
              </div>

              <SidebarCategory
                title="CORE CREATION"
                isExpanded={expandedCategory === 'core'}
                onToggle={() => setExpandedCategory(expandedCategory === 'core' ? '' : 'core')}
              >
                <SidebarMenuItem icon={PenIcon} label="Blog Writer" color="amber" />
                <SidebarMenuItem icon={BookIcon} label="Story Creator" color="purple" />
                <SidebarMenuItem icon={LibraryIcon} label="Novel Workshop" color="slate" />
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
                <div className="flex items-center gap-2 p-2 text-gray-800 hover:bg-gray-50 rounded cursor-pointer">
                  <BookOpen className="w-4 h-4" />
                  <span>My Library</span>
                </div>
                <div 
                  className="flex items-center gap-2 p-2 text-gray-800 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={handleSettingsClick}
                >
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </div>
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
                <div className="flex items-center gap-2 p-2 bg-blue-50 text-blue-900 rounded">
                  <HomeIcon className="w-4 h-4" />
                  <span>Dashboard</span>
                </div>
                <div 
                  className="flex items-center gap-2 p-2 text-gray-800 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={handleSettingsClick}
                >
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </div>
              </div>
            </div>
          </MobileMenu>
        </div>

        {/* Main Content */}
        <div className="flex-1 md:ml-72">
          <div className="p-6 pt-20 md:pt-6 space-y-6">
            {/* Top Bar */}
            <div className="bg-white rounded-lg p-4 shadow-sm flex justify-between items-center">
              <div className="text-xl font-semibold text-blue-900">
                Welcome back, {user.email}
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm text-gray-600">
                  {subscription?.subscription_tiers?.name || 'Free'} Plan
                </div>
                <Button variant="outline" className="text-blue-600">New Project</Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatsCard
                label="Active Projects"
                value={recentProjects.length}
                color="blue"
              />
              <StatsCard
                label="Words Generated"
                value="125.4k"
                color="emerald"
              />
              <StatsCard
                label="Credits Available"
                value={subscription?.subscription_tiers?.features?.credits || 0}
                color="amber"
              />
            </div>

            {/* Recent Projects */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="p-4 hover:bg-slate-50 rounded-lg flex justify-between items-center transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
                          <LibraryIcon className="text-slate-600 w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">{project.title}</div>
                          <div className="text-sm text-slate-500">
                            {project.type} • {new Date(project.created_at).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-slate-600">Continue</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
