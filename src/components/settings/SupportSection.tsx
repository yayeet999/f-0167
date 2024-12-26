import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const SupportSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Support & Help</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Documentation Links */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-900">Documentation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="justify-start">
              Getting Started Guide
            </Button>
            <Button variant="outline" className="justify-start">
              API Documentation
            </Button>
            <Button variant="outline" className="justify-start">
              Tutorials
            </Button>
            <Button variant="outline" className="justify-start">
              FAQs
            </Button>
          </div>
        </div>

        {/* Support Ticket Form */}
        <div className="pt-6 border-t">
          <h3 className="font-medium text-gray-900 mb-4">Create Support Ticket</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Brief description of your issue" />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Provide details about your issue"
                className="min-h-[100px]"
              />
            </div>
            <Button>Submit Ticket</Button>
          </div>
        </div>

        {/* Feature Requests */}
        <div className="pt-6 border-t">
          <h3 className="font-medium text-gray-900 mb-4">Feature Requests</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="feature">Feature Description</Label>
              <Textarea
                id="feature"
                placeholder="Describe the feature you'd like to see"
                className="min-h-[100px]"
              />
            </div>
            <Button variant="outline">Submit Feature Request</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};