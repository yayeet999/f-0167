import { ProductCard } from "./product-card";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { LucideIcon } from "lucide-react";

interface Product {
  name: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  textColor: string;
  accentColor: string;
  image?: string;
  features: string[];
}

interface ProductCategoryProps {
  title: string;
  description: string;
  products: Product[];
}

export function ProductCategory({ title, description, products }: ProductCategoryProps) {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold mb-4 text-blue-800">{title}</h3>
        <p className="text-blue-600 max-w-3xl mx-auto">{description}</p>
      </div>
      
      <div className="space-y-12">
        {products.map((product) => (
          <ScrollReveal key={product.name}>
            <ProductCard product={product} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}