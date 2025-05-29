
import React from "react";
import { Badge } from "@/components/ui/badge";

const skills = [
  "UI/UX Design", "Web Development", "HTML", "CSS", 
  "TypeScript", "Responsive Design", "Minimalism", "AI/ML","C","Python"
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="section-container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            {/* Profile image */}
            <div className="rounded-2xl overflow-hidden aspect-square w-full max-w-md mx-auto">
              <img 
                src="/vaibhav.jpeg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <Badge variant="outline" className="mb-3">
              About Me
            </Badge>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 md:mb-6">
              Aspiring UI/UX Designer & Developer | 2nd-Year Polytechnic Student
            </h2>
            
            <div className="space-y-4 text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
              <p>
               Hi! I'm a second-year polytechnic student with a strong passion for UI/UX design and a growing interest in development and AI. 
               I love crafting clean, user-friendly interfaces and exploring how design and code come together to create meaningful digital experiences.
              </p>
              <p>
                Alongside design, I'm also learning programming — I’m comfortable with C, C++, and Python, and currently exploring the basics of AI and machine learning. 
                Whether it’s prototyping in Figma or writing code, I enjoy building projects that challenge me and help me grow.
              </p>
              <p>
                Right now, I’m focused on improving my frontend skills and working on personal projects that combine design thinking with technical execution.
              </p>
            </div>
            
            <div className="mb-6 md:mb-8">
              <h3 className="text-lg font-medium mb-3 md:mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="font-normal text-xs md:text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <a 
              href="/resume.pdf" 
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
