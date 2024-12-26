import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Narrately.ai transformed our content creation process. We're now producing twice the content in half the time.",
    author: "Sarah Johnson",
    role: "Content Manager",
    company: "TechStart Inc.",
  },
  // Add more testimonials
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-blue-50">
              <CardContent className="p-6">
                <p className="text-blue-800 italic mb-4">{testimonial.quote}</p>
                <div className="text-blue-900 font-semibold">{testimonial.author}</div>
                <div className="text-blue-600">{testimonial.role}</div>
                <div className="text-blue-600">{testimonial.company}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;