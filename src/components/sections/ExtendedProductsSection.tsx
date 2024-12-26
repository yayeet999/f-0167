import { Book, Brain, Briefcase, Lightbulb, Mail, Pencil } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const productCategories = [
  {
    title: "Interactive & Real-time",
    products: [
      {
        name: "Interactive Storytelling",
        description: "Create dynamic, branching narratives in real-time",
        icon: Book,
        bgColor: "cyan-50",
        textColor: "cyan-900",
        accentColor: "violet-600",
      },
      {
        name: "AuthentiText™",
        description: "AI-powered text authenticity verification",
        icon: Brain,
        bgColor: "green-50",
        textColor: "green-900",
        accentColor: "yellow-600",
      },
    ],
  },
  {
    title: "Professional Tools",
    products: [
      {
        name: "Business Intelligence",
        description: "Generate insightful business reports and analysis",
        icon: Briefcase,
        bgColor: "gray-50",
        textColor: "gray-900",
        accentColor: "blue-600",
      },
      {
        name: "CareerCraft",
        description: "Professional document generation and optimization",
        icon: Pencil,
        bgColor: "stone-50",
        textColor: "stone-900",
        accentColor: "orange-600",
      },
    ],
  },
  // ... Add other categories following the same pattern
];

const ExtendedProductsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          Specialized Solutions
        </h2>
        {productCategories.map((category) => (
          <div key={category.title} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-blue-800">{category.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product) => (
                <Card key={product.name} className={`bg-${product.bgColor}`}>
                  <CardHeader>
                    <div className={`h-12 w-12 rounded-lg bg-${product.bgColor} p-2 mb-4`}>
                      <product.icon className={`h-8 w-8 text-${product.textColor}`} />
                    </div>
                    <CardTitle className={`text-${product.textColor}`}>{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-${product.textColor} mb-4`}>{product.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className={`w-full bg-${product.accentColor}`} asChild>
                      <Link to="/auth/signup">Try {product.name}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtendedProductsSection;