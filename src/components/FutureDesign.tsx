import villaOriginal from "@/assets/villa-original.jpg";
import villaDesign1 from "@/assets/villa-design1.jpg";
import villaDesign2 from "@/assets/villa-design2.jpg";
import villaDesign3 from "@/assets/villa-design3.jpg";
import villaDesign4 from "@/assets/villa-design4.jpg";

const designVariations = [
  { src: villaDesign1, alt: "Tropical garden design variation" },
  { src: villaDesign2, alt: "Pool garden design variation" },
  { src: villaDesign3, alt: "Modern lawn design variation" },
  { src: villaDesign4, alt: "Flower garden design variation" },
];

export const FutureDesign = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Future of Garden Design is Here
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Tired of imagining your dream garden? See it come to life instantly with our revolutionary AI landscape generator. Ideal House's Landscaping feature allows you to upload a photo of your garden and transform it into a stunning design with just a few clicks.
          </p>
        </div>

        {/* Mockup Window */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-highlight/10 rounded-3xl p-6 sm:p-8 lg:p-10 border border-highlight/20">
            {/* Traffic Light Dots */}
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            {/* Content Grid */}
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Original Image with Arrow */}
              <div className="flex flex-col items-center gap-4 lg:w-1/3">
                <div className="relative">
                  <img
                    src={villaOriginal}
                    alt="Original garden photo"
                    className="w-48 h-60 object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                {/* Arrow */}
                <svg 
                  width="60" 
                  height="40" 
                  viewBox="0 0 60 40" 
                  className="text-primary/60 rotate-90 lg:rotate-0"
                >
                  <path 
                    d="M5 20 C15 5, 25 5, 35 20 C45 35, 55 25, 55 20 M45 15 L55 20 L45 25" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    fill="none" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Design Variations Grid */}
              <div className="grid grid-cols-2 gap-4 lg:w-2/3">
                {designVariations.map((design, index) => (
                  <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={design.src}
                      alt={design.alt}
                      className="w-full h-40 sm:h-48 lg:h-56 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
