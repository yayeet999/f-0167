import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { SettingsLayout } from "@/components/settings/SettingsLayout";
import { AccountSection } from "@/components/settings/AccountSection";
import { BillingSection } from "@/components/settings/BillingSection";
import { PreferencesSection } from "@/components/settings/PreferencesSection";
import { SupportSection } from "@/components/settings/SupportSection";

const SettingsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('account');
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);
  const [subscription, setSubscription] = useState<any>(null);

  useEffect(() => {
    checkAuth();
    fetchUserData();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/auth/login');
    }
  };

  const fetchUserData = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();

      if (profileError) throw profileError;

      const { data: subscriptionData, error: subscriptionError } = await supabase
        .from('user_subscriptions')
        .select(`
          *,
          subscription_tiers (*)
        `)
        .eq('user_id', session.user.id)
        .single();

      if (subscriptionError) throw subscriptionError;

      setProfile(profileData);
      setSubscription(subscriptionData);
    } catch (error: any) {
      toast({
        title: "Error fetching user data",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'account':
        return <AccountSection profile={profile} onUpdate={fetchUserData} />;
      case 'billing':
        return <BillingSection subscription={subscription} onUpdate={fetchUserData} />;
      case 'preferences':
        return <PreferencesSection />;
      case 'support':
        return <SupportSection />;
      default:
        return null;
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <SettingsLayout
      activeSection={activeSection}
      onSectionChange={setActiveSection}
    >
      {renderActiveSection()}
    </SettingsLayout>
  );
};

export default SettingsPage;