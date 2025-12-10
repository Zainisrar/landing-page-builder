import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
    avatar: "SM",
    rating: 5,
    review:
      "Absolutely transformed my boring backyard into a stunning oasis! The AI suggestions were spot-on and my landscaper was impressed with the detailed designs.",
  },
  {
    name: "David Chen",
    role: "Property Developer",
    avatar: "DC",
    rating: 5,
    review:
      "We use Neighborbrite for all our property staging. It helps potential buyers visualize the outdoor potential. Game changer for our sales!",
  },
  {
    name: "Emma Thompson",
    role: "Garden Enthusiast",
    avatar: "ET",
    rating: 5,
    review:
      "I've tried many garden planning apps, but this one is incredible. The AI understands my style preferences and creates designs I actually want to implement.",
  },
  {
    name: "Michael Rodriguez",
    role: "Landscape Architect",
    avatar: "MR",
    rating: 4,
    review:
      "As a professional, I was skeptical at first. Now it's my go-to tool for quick concept presentations to clients. Saves hours of work!",
  },
  {
    name: "Lisa Park",
    role: "Interior Designer",
    avatar: "LP",
    rating: 5,
    review:
      "Finally extended my design services to outdoor spaces thanks to this app. My clients love seeing the before and after transformations.",
  },
  {
    name: "James Wilson",
    role: "Homeowner",
    avatar: "JW",
    rating: 5,
    review:
      "The variety of styles available is amazing. I went from a basic lawn to a beautiful Mediterranean garden design in minutes!",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers who transformed their outdoor spaces.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
