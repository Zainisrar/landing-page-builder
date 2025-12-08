import { Check } from "lucide-react";
import gardenBefore from "@/assets/garden-before.jpg";
import gardenAfter from "@/assets/garden-after.jpg";

const features = [
  {
    title: "Design Any Outdoor Area:",
    description: "Garden, terrace, patio, front yard, whatever space you have, we've got it covered.",
  },
  {
    title: "Visualize in Multiple Styles:",
    description: "See your own outdoor space instantly reimagined in a variety of design styles.",
  },
];

export const Transform = () => {
  return (
    <section className="py-20 lg:py-32 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Before/After Comparison */}
          <div className="relative">
            <div className="flex rounded-3xl overflow-hidden shadow-2xl">
              {/* Before Image */}
              <div className="relative w-1/2">
                <img
                  src={gardenBefore}
                  alt="Garden before transformation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <span className="bg-secondary/90 backdrop-blur-sm text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
                    BEFORE
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-10 flex items-center">
                <div className="w-0.5 h-full bg-background/80" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border-2 border-muted flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-muted-foreground">
                    <path d="M4 8H12M4 8L6 6M4 8L6 10M12 8L10 6M12 8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* After Image */}
              <div className="relative w-1/2">
                <img
                  src={gardenAfter}
                  alt="Garden after AI transformation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <span className="bg-secondary/90 backdrop-blur-sm text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
                    AFTER
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground italic">Instantly Transform</span>
              <br />
              <span className="text-highlight">Your Outdoor Space for FREE!</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Design any outdoor space based on your preferences, whether it's a garden, patio, or backyard, it only takes a few clicks.
            </p>

            {/* Features */}
            <div className="space-y-5">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded bg-highlight/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-highlight" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">{feature.title}</span>{" "}
                    <span className="text-muted-foreground">{feature.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
