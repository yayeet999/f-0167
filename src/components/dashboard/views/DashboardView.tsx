import { StatsCard } from "@/components/dashboard/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LibraryIcon } from "lucide-react";

const DashboardView = () => {
  return (
    <div className="space-y-8 p-8 max-w-7xl mx-auto animate-reveal">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Welcome back!</h1>
        <p className="text-gray-600">Here's an overview of your creative journey.</p>
      </div>

      {/* Stats Section with warm, friendly colors */}
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

      {/* Recent Projects Section */}
      <Card className="bg-gradient-to-br from-white to-gray-50 border-gray-100">
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-semibold text-gray-900">Recent Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Project Item */}
            <div className="p-4 hover:bg-white/80 rounded-xl flex justify-between items-center transition-all duration-200 group">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200">
                  <LibraryIcon className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">My First Novel</div>
                  <div className="text-sm text-gray-500">
                    Novel Workshop • Last edited 2 days ago
                  </div>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Continue
              </Button>
            </div>

            {/* Additional Project Items */}
            <div className="p-4 hover:bg-white/80 rounded-xl flex justify-between items-center transition-all duration-200 group">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-200">
                  <LibraryIcon className="text-purple-600 w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Travel Blog</div>
                  <div className="text-sm text-gray-500">
                    Blog Writer • Last edited 5 days ago
                  </div>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors"
              >
                Continue
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions Section */}
      <Card className="bg-gradient-to-br from-gray-50 to-white border-gray-100">
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-semibold text-gray-900">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="h-auto py-6 px-4 flex flex-col items-center gap-2 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-200"
            >
              <LibraryIcon className="w-6 h-6" />
              <span>New Blog Post</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto py-6 px-4 flex flex-col items-center gap-2 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-all duration-200"
            >
              <LibraryIcon className="w-6 h-6" />
              <span>New Story</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto py-6 px-4 flex flex-col items-center gap-2 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all duration-200"
            >
              <LibraryIcon className="w-6 h-6" />
              <span>Start Novel</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto py-6 px-4 flex flex-col items-center gap-2 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200 transition-all duration-200"
            >
              <LibraryIcon className="w-6 h-6" />
              <span>Interactive Story</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardView;