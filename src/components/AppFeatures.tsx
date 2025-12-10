import { Smartphone, Sparkles, Palette, Layers, Share2, Download } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Easy Upload",
    description: "Simply snap a photo of your garden or upload an existing image to get started.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Design",
    description: "Our advanced AI generates stunning, realistic garden transformations in seconds.",
  },
  {
    icon: Palette,
    title: "Style Options",
    description: "Choose from dozens of design styles—modern, tropical, cottage, zen, and more.",
  },
  {
    icon: Layers,
    title: "Multiple Variations",
    description: "Generate multiple design options to compare and find your perfect look.",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share your designs with friends, family, or your landscaper with one click.",
  },
  {
    icon: Download,
    title: "High-Quality Export",
    description: "Download high-resolution images ready for printing or professional use.",
  },
];

export const AppFeatures = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            App Features
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the powerful tools that make designing your dream garden effortless.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
