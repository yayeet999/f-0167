import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BillingSectionProps {
  subscription: any;
  onUpdate: () => void;
}

export const BillingSection = ({ subscription, onUpdate }: BillingSectionProps) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg text-blue-900">
                {subscription?.subscription_tiers?.name || 'Free Plan'}
              </h3>
              <p className="text-blue-600">
                {subscription?.subscription_tiers?.features?.credits || 0} credits remaining
              </p>
              <p className="text-sm text-blue-700 mt-1">
                Active since: {formatDate(subscription?.created_at)}
              </p>
            </div>
            <Button variant="outline" className="bg-white">
              Manage Plan
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-sm text-gray-500">
              No billing history available
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};