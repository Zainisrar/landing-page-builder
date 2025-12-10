import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Community } from "@/components/Community";
import { Transform } from "@/components/Transform";
import { FutureDesign } from "@/components/FutureDesign";
import { AppFeatures } from "@/components/AppFeatures";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Community />
      <Transform />
      <FutureDesign />
      <AppFeatures />
      <Footer />
    </main>
  );
};

export default Index;
