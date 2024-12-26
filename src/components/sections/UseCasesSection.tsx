import { Card, CardContent } from "@/components/ui/card";

const useCases = [
  {
    title: "Blog Content Creation",
    description: "Generate engaging blog posts in minutes",
    example: "From a simple topic, our AI created a fully-researched 2000-word article about sustainable living practices.",
  },
  // Add more use cases
];

const UseCasesSection = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          See It in Action
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-900">{useCase.title}</h3>
                <p className="text-blue-700 mb-4">{useCase.description}</p>
                <p className="text-blue-600 italic">{useCase.example}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;