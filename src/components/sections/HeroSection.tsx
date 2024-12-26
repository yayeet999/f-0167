import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen pt-16 relative overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 animate-gradient-x"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Ideas into Compelling Content with AI
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12">
            Harness the power of advanced AI to generate blogs, stories, and novels that captivate your audience and bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg" asChild>
              <Link to="/auth/signup">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-blue-100 border-blue-100 hover:bg-blue-800" asChild>
              <Link to="/auth/login">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;