import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ChevronRight, PenTool, Sparkles } from "lucide-react";

const NovelWorkshop = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Novel Workshop</h1>
          <p className="text-gray-500">Create and manage your full-length novels</p>
        </div>
        <Button 
          size="lg" 
          className="gap-2"
          onClick={() => setIsLoading(true)}
        >
          <Sparkles className="w-4 h-4" />
          New Novel
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Quick Start Guide */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Quick Start Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Learn how to use the Novel Workshop to create engaging, full-length novels with AI assistance.
            </p>
            <Button variant="outline" className="w-full justify-between">
              View Guide <ChevronRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Writing Tools */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PenTool className="w-5 h-5 text-purple-600" />
              Writing Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Access our suite of AI-powered writing tools to enhance your novel-writing process.
            </p>
            <Button variant="outline" className="w-full justify-between">
              Open Tools <ChevronRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Recent Drafts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              Recent Drafts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Continue working on your existing novel drafts or start a new one.
            </p>
            <Button variant="outline" className="w-full justify-between">
              View Drafts <ChevronRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NovelWorkshop;