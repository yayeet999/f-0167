import { StatsCard } from "@/components/dashboard/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LibraryIcon } from "lucide-react";

const DashboardView = () => {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          label="Active Projects"
          value="5"
          color="blue"
        />
        <StatsCard
          label="Words Generated"
          value="125.4k"
          color="emerald"
        />
        <StatsCard
          label="Credits Available"
          value="10"
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
            <div className="p-4 hover:bg-slate-50 rounded-lg flex justify-between items-center transition-colors">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
                  <LibraryIcon className="text-slate-600 w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-slate-900">Project Title</div>
                  <div className="text-sm text-slate-500">
                    Project Type • 01/01/2023
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-slate-600">Continue</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardView;
