import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-garden.jpg";

const stats = [
  { value: "500K+", label: "community" },
  { value: "Free", label: "to use" },
  { value: "No app", label: "to install" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-hero text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in-up">
            Transform your yard with AI Powered Design
          </h1>
          
          {/* Subtitle */}
          <p className="text-hero-muted text-lg sm:text-xl mb-10 max-w-xl animate-fade-in-up animate-delay-100">
            Designed for everyone who wants a beautiful garden with a simple tap.
          </p>
          
          {/* CTA Button */}
          <div className="animate-fade-in-up animate-delay-200">
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/auth">
                GET STARTED NOW
                <ArrowUpRight className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex items-center gap-6 mt-16 animate-fade-in-up animate-delay-300">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center gap-6">
                <div className="text-hero">
                  <span className="font-bold text-base">{stat.value}</span>
                  <span className="text-hero-muted text-sm ml-1">{stat.label}</span>
                </div>
                {index < stats.length - 1 && (
                  <div className="h-4 w-px bg-hero-text/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-8 right-8 text-hero-muted/50 animate-fade-in-up animate-delay-400">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L23.5 16.5L40 20L23.5 23.5L20 40L16.5 23.5L0 20L16.5 16.5L20 0Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
};
