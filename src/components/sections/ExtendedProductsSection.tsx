import { 
  Play, Shield, BarChart3, Briefcase, 
  GraduationCap, MessageSquare, CheckCircle, 
  LineChart, Mail, Palette, GitBranch 
} from "lucide-react";
import { ProductCategory } from "@/components/ui/product-category";

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
        image: "/CareerCraft.png",
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
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          Comprehensive AI Solutions
        </h2>
        
        {productCategories.map((category) => (
          <ProductCategory
            key={category.title}
            title={category.title}
            description={category.description}
            products={category.products}
          />
        ))}
      </div>
    </section>
  );
};

export default ExtendedProductsSection;