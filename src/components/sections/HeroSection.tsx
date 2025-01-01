import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-blue-50"
      aria-label="Hero Section"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 leading-tight"
          >
            Transform Your Ideas into Compelling Content
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Harness the power of advanced AI to generate blogs, stories, and novels that captivate your audience and bring your vision to life.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-8"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg h-14 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" 
              asChild
            >
              <Link to="/auth/signup">Get Started Free</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-blue-200 hover:border-blue-300 text-blue-600 hover:bg-blue-50 text-lg h-14 px-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300" 
              asChild
            >
              <Link to="/auth/login">Login</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
              {['50K+', '4.9/5', '10M+', '24/7'].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat}</div>
                  <div className="text-sm text-gray-600">
                    {index === 0 && 'Active Users'}
                    {index === 1 && 'User Rating'}
                    {index === 2 && 'Words Generated'}
                    {index === 3 && 'Support'}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-4 md:left-12 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-1/2 right-4 md:right-12 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
    </section>
  );
};

export default HeroSection;