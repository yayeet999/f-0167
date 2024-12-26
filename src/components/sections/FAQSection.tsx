import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I upgrade my plan?",
    answer: "You can upgrade your plan at any time from your account settings or the pricing page. Simply choose the plan that best fits your needs and follow the checkout process."
  },
  {
    question: "What if I run out of tokens?",
    answer: "If you run out of tokens, you can purchase more from your dashboard or upgrade to a higher tier plan that includes more tokens. Free plan users will need to wait for their monthly reset."
  },
  {
    question: "How secure is my data?",
    answer: "We take security seriously. All data is encrypted in transit and at rest. We never share your content with third parties, and you retain full ownership of all generated content."
  },
  {
    question: "How does AI generation work?",
    answer: "Our AI uses advanced language models to understand context and generate human-like text. You provide the initial parameters and guidance, and our AI creates content that matches your requirements while maintaining quality and coherence."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-blue-900 hover:text-blue-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-blue-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;