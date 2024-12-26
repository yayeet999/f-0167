import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      price: { monthly: 0, yearly: 0 },
      features: [
        "Basic content generation",
        "Limited templates",
        "Standard processing speed",
        "Community support"
      ]
    },
    {
      name: "Standard",
      price: { monthly: 10, yearly: 100 },
      features: [
        "Higher usage limits",
        "Priority generation",
        "Advanced templates",
        "Email support",
        "Partial access to specialized tools"
      ]
    },
    {
      name: "Pro",
      price: { monthly: 20, yearly: 200 },
      features: [
        "Maximum usage limits",
        "Priority processing",
        "Custom templates",
        "Advanced customization",
        "Priority support",
        "Access to all tools",
        "API access"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-blue-600 mb-12">
          Choose the plan that best fits your needs
        </p>

        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            <span className={`text-sm ${!isYearly ? "text-blue-900" : "text-blue-600"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isYearly ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? "text-blue-900" : "text-blue-600"}`}>
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="relative">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-900">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-blue-600">/{isYearly ? "year" : "month"}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-emerald-500 mr-2 mt-1"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-blue-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link to="/auth/signup">
                    {plan.name === "Free" ? "Get Started" : "Upgrade Now"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;