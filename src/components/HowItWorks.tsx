import appInterface from "@/assets/app-interface.jpg";

const steps = [
  {
    number: "1",
    title: "Upload Your Garden Photo:",
    description: "Effortlessly upload a photo of your current garden to our AI landscaping tool. This allows the AI to analyze your existing space and generate designs tailored to your specific conditions.",
    linkText: "AI landscaping tool",
  },
  {
    number: "2",
    title: "Choose Your Dream Garden Style:",
    description: "Select from a wide range of captivating garden styles, including English, Japanese, or Mediterranean and more.",
  },
  {
    number: "3",
    title: "Generate and View Your Stunning Design:",
    description: "Click 'Generate' and within seconds, see your garden transformed with our powerful AI. You can experiment with different styles and designs until you find the perfect look for your outdoor space.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 italic">
            How Easy is it to Design Garden with AI?
          </h2>
          <p className="text-muted-foreground text-lg">
            Designing your garden with AI is incredibly straightforward. Here are the three simple steps to transform your outdoor space:
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Laptop Mockup */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Laptop Frame */}
              <div className="relative bg-secondary rounded-t-xl pt-6 px-4 pb-0 shadow-2xl">
                {/* Top Bar */}
                <div className="absolute top-2 left-4 flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                </div>
                
                {/* Screen */}
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={appInterface}
                    alt="AI Garden Design Interface"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              {/* Laptop Base */}
              <div className="relative h-4 bg-secondary rounded-b-lg">
                <div className="absolute inset-x-1/4 top-0 h-1 bg-muted-foreground/10 rounded-b" />
              </div>
              <div className="relative h-2 bg-muted rounded-b-xl mx-8" />
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                {/* Number */}
                <span className="text-5xl lg:text-6xl font-bold text-primary flex-shrink-0 leading-none">
                  {step.number}
                </span>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.linkText ? (
                      <>
                        Effortlessly upload a photo of your current garden to our{" "}
                        <a href="#" className="text-primary hover:underline">
                          {step.linkText}
                        </a>
                        . This allows the AI to analyze your existing space and generate designs tailored to your specific conditions.
                      </>
                    ) : (
                      step.description
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
