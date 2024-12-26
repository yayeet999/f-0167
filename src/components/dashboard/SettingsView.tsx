import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { SettingsLayout } from "@/components/settings/SettingsLayout";
import { AccountSection } from "@/components/settings/AccountSection";
import { BillingSection } from "@/components/settings/BillingSection";
import { PreferencesSection } from "@/components/settings/PreferencesSection";
import { Card, CardContent } from "@/components/ui/card";

const SettingsView = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('account');
  const [profile, setProfile] = useState<any>(null);
  const [subscription, setSubscription] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const [profileResponse, subscriptionResponse] = await Promise.all([
        supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single(),
        supabase
          .from('user_subscriptions')
          .select(`
            *,
            subscription_tiers (*)
          `)
          .eq('user_id', session.user.id)
          .single()
      ]);

      if (profileResponse.error) throw profileResponse.error;
      if (subscriptionResponse.error) throw subscriptionResponse.error;

      setProfile(profileResponse.data);
      setSubscription(subscriptionResponse.data);
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

  useEffect(() => {
    fetchUserData();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return (
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-center min-h-[200px]">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          </CardContent>
        </Card>
      );
    }

    if (!profile) {
      return (
        <Card>
          <CardContent className="p-6">
            <div className="text-center text-gray-500">
              Unable to load profile information
            </div>
          </CardContent>
        </Card>
      );
    }

    switch (activeSection) {
      case 'account':
        return <AccountSection profile={profile} onUpdate={fetchUserData} />;
      case 'billing':
        return <BillingSection subscription={subscription} onUpdate={fetchUserData} />;
      case 'preferences':
        return <PreferencesSection />;
      case 'support':
        return (
          <Card>
            <CardContent className="p-6">
              <div className="text-center text-gray-500">
                Support section coming soon
              </div>
            </CardContent>
          </Card>
        );
      default:
        return <AccountSection profile={profile} onUpdate={fetchUserData} />;
    }
  };

  return (
    <SettingsLayout
      activeSection={activeSection}
      onSectionChange={setActiveSection}
    >
      {renderContent()}
    </SettingsLayout>
  );
};

export default SettingsView;