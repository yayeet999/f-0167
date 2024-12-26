import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ProductFeature {
  name: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  textColor: string;
  accentColor: string;
  image?: string;
  features: string[];
}

export function ProductCard({ product }: { product: ProductFeature }) {
  return (
    <Card className={`bg-${product.bgColor} border-none transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl w-full`}>
      <div className="flex flex-col md:flex-row p-6">
        <div className={`flex-1 ${product.image ? 'md:w-1/2' : 'w-full'} ${product.image ? 'md:pr-6' : ''}`}>
          <div className={`h-16 w-16 rounded-xl bg-${product.bgColor} p-3 mb-4`}>
            <product.icon className={`h-10 w-10 text-${product.textColor}`} />
          </div>
          <h4 className={`text-2xl font-bold text-${product.textColor} mb-3`}>
            {product.name}
          </h4>
          <p className={`text-${product.textColor} opacity-90 text-lg mb-4`}>
            {product.description}
          </p>
          <ul className="space-y-3 mb-6">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-center">
                <svg
                  className={`h-6 w-6 text-${product.accentColor} mr-3 flex-shrink-0`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className={`text-${product.textColor} text-lg`}>{feature}</span>
              </li>
            ))}
          </ul>
          <Button 
            className={`w-full md:w-auto text-lg py-6 px-8 bg-${product.accentColor} hover:bg-${product.accentColor}/90`} 
            asChild
          >
            <Link to="/auth/signup">Try {product.name}</Link>
          </Button>
        </div>
        {product.image && (
          <div className="md:w-1/2 mt-6 md:mt-0 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-auto h-auto object-contain"
            />
          </div>
        )}
      </div>
    </Card>
  );
}