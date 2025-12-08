import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Community } from "@/components/Community";
import { Transform } from "@/components/Transform";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Community />
      <Transform />
    </main>
  );
};

export default Index;
