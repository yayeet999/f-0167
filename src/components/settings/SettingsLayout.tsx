import { ReactNode } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { User, CreditCard, Bell, LifeBuoy } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const NAVIGATION_ITEMS: NavItem[] = [
  { id: 'account', label: 'Account', icon: <User className="w-4 h-4" /> },
  { id: 'billing', label: 'Billing', icon: <CreditCard className="w-4 h-4" /> },
  { id: 'preferences', label: 'Preferences', icon: <Bell className="w-4 h-4" /> },
  { id: 'support', label: 'Support', icon: <LifeBuoy className="w-4 h-4" /> },
];

interface SettingsLayoutProps {
  children: ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const SettingsLayout = ({
  children,
  activeSection,
  onSectionChange,
}: SettingsLayoutProps) => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="text-gray-500">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-3">
          <Card>
            <CardContent className="p-4">
              <nav className="space-y-2">
                {NAVIGATION_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSectionChange(item.id)}
                    className={`flex items-center gap-2 p-2 rounded cursor-pointer transition-colors ${
                      activeSection === item.id 
                        ? 'bg-blue-50 text-blue-900' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </nav>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-9 space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
};