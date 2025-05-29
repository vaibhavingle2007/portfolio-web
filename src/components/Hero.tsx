
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import SplineBackground from "./SplineBackground";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-12 md:pt-20 relative">
      <SplineBackground />
      
      <div className="section-container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground mb-3 animate-fade-in">
            Welcome to my portfolio
          </span>
          
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium mb-4 md:mb-6 animate-fade-in font-display tracking-tighter" style={{ animationDelay: "0.1s" }}>
            Building Cool Stuff While Learning Even Cooler Things
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            I’m a student diving into design, code, and creativity — making things that look good and work even better.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="rounded-full px-8 w-full sm:w-auto">
              <a href="#projects">View projects</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 w-full sm:w-auto">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      </div>
      
      <a 
        href="#projects" 
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} className="text-muted-foreground" />
      </a>
    </section>
  );
};

export default Hero;
