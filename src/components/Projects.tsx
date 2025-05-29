import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imagePlaceholder: string;
  githubUrl?: string; // Added optional GitHub repository URL
}

const projects: Project[] = [
  {
    id: 1,
    title: "Youtube to Blog Converter",
    description: "An AI-powered tool that converts YouTube videos into blog-style summaries using Python and machine learning for quick, automated content creation.",
    tags: ["AI", "Python", "Machine Learning"],
    imagePlaceholder: "bg-[url('/chat-bot.png')] bg-cover bg-center",
    githubUrl: "https://github.com/vaibhavingle2007/yt_to_blog.git"
  },
  {
    id: 2,
    title: "DiscoverIndia360",
    description: "A sleek, UI/UX-focused web interface to help users track and manage daily tasks while exploring India-related insights and data visually.",
    tags: ["UI/UX", "Website", "HTML","CSS"],
    imagePlaceholder: "bg-[url('/discoverindia360.png')] bg-cover bg-center",
    githubUrl: "https://github.com/vaibhavingle2007/Discoverindia360-sample-web.git"
  },
  {
    id: 3,
    title: "WeatherApp",
    description: "A clean and responsive Java-based weather application using AWT and APIs to display real-time weather updates and forecasts.",
    tags: ["Java", "AWT","Weather-API"],
    imagePlaceholder: "bg-[url('/weather.png')] bg-cover bg-center",
    githubUrl: "https://github.com/vaibhavingle2007/weather-app-Java.git"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-secondary/30 py-16 md:py-20">
      <div className="section-container px-4 md:px-6">
        <div className="mb-10 md:mb-16 text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-3">
            My Work
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
            Selected Projects
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            A curated selection of my recent work, showcasing my design philosophy
            and development skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border bg-card transition-all duration-300 hover:shadow-md">
              <div className={`aspect-video ${project.imagePlaceholder} transition-transform duration-500 hover:scale-105 bg-no-repeat`} />
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <Badge variant="secondary" key={tag} className="font-normal text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-lg md:text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex items-center">
                  {project.githubUrl ? (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary inline-flex items-center gap-2 transition-colors hover:text-primary/80"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={18} />
                      View Project
                    </a>
                  ) : (
                    <a 
                      href="#" 
                      className="text-sm font-medium text-primary inline-flex items-center transition-colors hover:text-primary/80"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
