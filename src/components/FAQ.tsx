import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI garden design work?",
    answer:
      "Simply upload a photo of your current garden or outdoor space, and our AI analyzes the layout, lighting, and existing elements. It then generates multiple design variations based on your chosen style preferences, showing you realistic visualizations of how your space could look.",
  },
  {
    question: "What types of gardens can I design?",
    answer:
      "You can design any outdoor space including front yards, backyards, patios, balconies, rooftops, and commercial landscapes. Our AI supports various styles like modern minimalist, tropical paradise, cottage garden, zen garden, Mediterranean, and many more.",
  },
  {
    question: "How accurate are the AI-generated designs?",
    answer:
      "Our AI produces highly realistic visualizations that accurately represent how your space would look with the proposed changes. The designs account for your existing structures, lighting conditions, and spatial proportions to create believable transformations.",
  },
  {
    question: "Can I share my designs with a landscaper?",
    answer:
      "Absolutely! You can download high-resolution images of your designs and share them directly with landscapers, contractors, or garden centers. Many professionals use our designs as reference points for their work.",
  },
  {
    question: "How many design variations can I generate?",
    answer:
      "Depending on your subscription plan, you can generate multiple variations for each photo. Free users get a limited number of designs per month, while premium subscribers enjoy unlimited generations and access to exclusive design styles.",
  },
  {
    question: "Is there a mobile app available?",
    answer:
      "Yes! Neighborbrite is available on both iOS and Android devices. You can snap photos directly from the app, generate designs on-the-go, and access your saved projects from any device.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about transforming your garden with AI.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
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
