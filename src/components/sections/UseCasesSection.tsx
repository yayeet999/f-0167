import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const useCases = [
  {
    title: "Blog Content Creation",
    description: "Generate engaging blog posts in minutes",
    example: "From a simple topic, our AI created a fully-researched 2000-word article about sustainable living practices.",
  },
  {
    title: "Novel Writing",
    description: "Create complete novels with AI assistance",
    example: "An aspiring author used our AI to generate a 50,000-word mystery novel in just two weeks.",
  },
  {
    title: "Business Reports",
    description: "Generate professional business content",
    example: "A marketing team automated their weekly reports, saving 10 hours per week while maintaining quality.",
  }
];

const UseCasesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % useCases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="py-20 bg-blue-50"
      aria-label="Use Cases"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          See It in Action
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {useCases.map((useCase, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="bg-white">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-blue-900">{useCase.title}</h3>
                      <p className="text-blue-700 mb-4">{useCase.description}</p>
                      <p className="text-blue-600 italic">{useCase.example}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-6 gap-2">
            {useCases.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-blue-600' : 'bg-blue-200'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show use case ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;