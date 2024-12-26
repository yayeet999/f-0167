import { 
  Play, Shield, BarChart3, Briefcase, 
  GraduationCap, MessageSquare, CheckCircle, 
  LineChart, Mail, Palette, GitBranch 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const productCategories = [
  {
    title: "Interactive & Real-time",
    description: "Engage with AI in real-time for dynamic content creation",
    products: [
      {
        name: "Interactive Storytelling",
        description: "Real-time story generation with interactive editing",
        icon: Play,
        bgColor: "cyan-50",
        textColor: "cyan-900",
        accentColor: "violet-600",
        features: [
          "Real-time collaboration",
          "Interactive story branches",
          "Dynamic character development",
          "Instant plot suggestions"
        ]
      },
      {
        name: "AuthentiText™",
        description: "AI text humanization and authenticity enhancement",
        icon: Shield,
        bgColor: "green-50",
        textColor: "green-900",
        accentColor: "yellow-600",
        features: [
          "Style preservation",
          "Voice consistency",
          "Natural language flow",
          "Authenticity scoring"
        ]
      },
    ],
  },
  {
    title: "Professional Tools",
    description: "Enterprise-grade AI solutions for business needs",
    products: [
      {
        name: "Business Intelligence",
        description: "Financial report generation and analysis",
        icon: BarChart3,
        bgColor: "gray-50",
        textColor: "gray-900",
        accentColor: "blue-600",
        features: [
          "Financial forecasting",
          "Market analysis",
          "Trend identification",
          "Data visualization"
        ]
      },
      {
        name: "CareerCraft",
        description: "Context-aware resume building",
        icon: Briefcase,
        bgColor: "stone-50",
        textColor: "stone-900",
        accentColor: "orange-600",
        features: [
          "Role-specific optimization",
          "Skills analysis",
          "ATS compatibility",
          "Personal branding"
        ]
      },
    ],
  },
  {
    title: "Educational & Analysis",
    description: "Comprehensive tools for learning and document analysis",
    products: [
      {
        name: "Course Creator",
        description: "Comprehensive course generation and quiz creation",
        icon: GraduationCap,
        bgColor: "orange-50",
        textColor: "orange-900",
        accentColor: "sky-600",
        features: [
          "Curriculum planning",
          "Quiz generation",
          "Learning objectives",
          "Progress tracking"
        ]
      },
      {
        name: "DocumentChat",
        description: "Interactive PDF and textbook analysis",
        icon: MessageSquare,
        bgColor: "fuchsia-50",
        textColor: "fuchsia-900",
        accentColor: "lime-600",
        features: [
          "PDF analysis",
          "Content summarization",
          "Interactive Q&A",
          "Key point extraction"
        ]
      },
      {
        name: "ProofPerfect™",
        description: "Advanced proofreading and quality analysis",
        icon: CheckCircle,
        bgColor: "red-50",
        textColor: "red-900",
        accentColor: "slate-600",
        features: [
          "Grammar correction",
          "Style consistency",
          "Readability scoring",
          "Citation checking"
        ]
      },
      {
        name: "VisualLogic",
        description: "Text-to-diagram visualization",
        icon: LineChart,
        bgColor: "emerald-50",
        textColor: "emerald-900",
        accentColor: "pink-600",
        features: [
          "Diagram generation",
          "Process visualization",
          "Flow mapping",
          "Visual exports"
        ]
      },
    ],
  },
  {
    title: "Specialized Solutions",
    description: "Targeted tools for specific content needs",
    products: [
      {
        name: "EmailCraft",
        description: "Contextual email generation",
        icon: Mail,
        bgColor: "yellow-50",
        textColor: "yellow-900",
        accentColor: "purple-600",
        features: [
          "Tone matching",
          "Context awareness",
          "Template creation",
          "Response suggestions"
        ]
      },
      {
        name: "StyleMimic",
        description: "Personal writing style replication",
        icon: Palette,
        bgColor: "lime-50",
        textColor: "lime-900",
        accentColor: "red-600",
        features: [
          "Style analysis",
          "Voice matching",
          "Consistency check",
          "Adaptation tools"
        ]
      },
      {
        name: "RepoVision",
        description: "GitHub repository visualization",
        icon: GitBranch,
        bgColor: "zinc-50",
        textColor: "zinc-900",
        accentColor: "teal-600",
        features: [
          "Code analysis",
          "Documentation gen",
          "Structure mapping",
          "Dependency tracking"
        ]
      },
    ],
  },
];

const ExtendedProductsSection = () => {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          Comprehensive AI Solutions
        </h2>
        
        {productCategories.map((category) => (
          <div key={category.title} className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">{category.title}</h3>
              <p className="text-blue-600 max-w-2xl mx-auto">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product) => (
                <Card 
                  key={product.name} 
                  className={`bg-${product.bgColor} border-none transform transition-transform hover:scale-105`}
                >
                  <CardHeader>
                    <div className={`h-12 w-12 rounded-lg bg-${product.bgColor} p-2 mb-4`}>
                      <product.icon className={`h-8 w-8 text-${product.textColor}`} />
                    </div>
                    <CardTitle className={`text-${product.textColor}`}>
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className={`text-${product.textColor} mb-6 opacity-90`}>
                      {product.description}
                    </p>
                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <svg
                            className={`h-5 w-5 text-${product.accentColor} mr-2`}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span className={`text-${product.textColor}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      className={`w-full bg-${product.accentColor} hover:bg-${product.accentColor}/90`} 
                      asChild
                    >
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