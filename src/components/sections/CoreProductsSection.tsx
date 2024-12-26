import { Book, Pencil, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const coreProducts = [
  {
    title: "Blog Generation",
    description: "Create engaging blog posts with AI-powered content generation",
    icon: Pencil,
    color: "amber",
    accentColor: "rose",
    features: [
      "SEO-optimized content",
      "Multiple writing styles",
      "Automatic formatting",
      "Research integration"
    ]
  },
  {
    title: "Story Creation",
    description: "Craft compelling stories with advanced narrative AI",
    icon: Book,
    color: "purple",
    accentColor: "teal",
    features: [
      "Character development",
      "Plot generation",
      "Scene description",
      "Dialogue creation"
    ]
  },
  {
    title: "Novel Writing",
    description: "Generate complete novels with sophisticated AI assistance",
    icon: BookOpen,
    color: "slate",
    accentColor: "indigo",
    features: [
      "Chapter organization",
      "Character arcs",
      "World building",
      "Theme development"
    ]
  }
];

const CoreProductsSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          Core Creation Suite
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreProducts.map((product) => (
            <Card key={product.title} className={`bg-${product.color}-50 border-${product.color}-100`}>
              <CardHeader>
                <div className={`h-12 w-12 rounded-lg bg-${product.color}-100 p-2 mb-4`}>
                  <product.icon className={`h-8 w-8 text-${product.color}-900`} />
                </div>
                <CardTitle className={`text-${product.color}-900`}>{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-${product.color}-800 mb-4`}>{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className={`h-5 w-5 text-${product.accentColor}-600 mr-2`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-${product.color}-700`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full bg-${product.accentColor}-600 hover:bg-${product.accentColor}-700`}
                  asChild
                >
                  <Link to="/auth/signup">Try {product.title}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreProductsSection;