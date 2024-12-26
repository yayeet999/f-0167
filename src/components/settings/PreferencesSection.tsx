import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Moon, Bell } from 'lucide-react';

export const PreferencesSection = () => {
  const [notifications, setNotifications] = useState({
    inApp: true,
    email: true,
    credits: true
  });

  const handleNotificationToggle = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferences</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
            <div className="flex items-center gap-2">
              <Moon className="w-4 h-4" />
              <span>Theme</span>
            </div>
            <Select defaultValue="system">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4" />
                <span>
                  {key === 'inApp' ? 'In-App Notifications' :
                   key === 'credits' ? 'Credit Alerts' :
                   'Email Notifications'}
                </span>
              </div>
              <Switch
                checked={value}
                onCheckedChange={() => handleNotificationToggle(key as keyof typeof notifications)}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};