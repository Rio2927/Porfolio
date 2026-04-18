
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';


const Projects = () => {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('projects');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce (Zoen)",
      description: "A modern e-commerce platform built using React, Node.js, and MongoDB. The application allows users to browse products, manage carts, and complete purchases through a secure and responsive interface. Backend services handle authentication, product management, and order processing to ensure a scalable shopping experience.",
      tags: ["React", "Tailwind", "Node.js/Express.js", "MongoDB"],
      image: 'project/e-commerce-app.png',
      github: "https://github.com/Rio2927/Zoen",
      demo: "https://zoen.riocodes.dev",
    },
    {
      title: "HRMS",
      description: "Built a Human Resource Management System using React (Material UI) and Python APIs to automate HR processes such as employee management, leave tracking, and organizational data handling. Designed a responsive UI with MUI components and implemented scalable backend services for data processing, authentication, and workflow management.",
      tags: ["React","Material UI","Python (flask)","PostgreSQL"],
      image: "project/hrms.png",
      github: "https://github.com/Rio2927/HRMS",
      demo: "https://hrms.riocodes.dev",
    },
    {
      title: "Business Analytics Dashboard",
      description: "Developed a data-driven analytics dashboard using React (TypeScript) for the frontend and Python APIs with SQL for data processing. The system displays key business metrics such as revenue, orders, and user activity through interactive charts and visualizations, helping users make data-driven decisions.",
      tags: ["React", "Typescript" ,"Tailwind", "Python", "SQL"],
      image: "project/analytics.png",
      github: "https://github.com/Rio2927/Analytics-Dashboard",
      demo: "https://analytics.riocodes.dev",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-4 text-gradient">My Projects</h2>
          <p className="text-lg text-muted-foreground">
            Here are some of my recent projects. Each one was built to solve a specific problem and showcase different skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`overflow-hidden flex flex-col h-full border-primary/20 card-glow transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ 
                transitionDelay: `${index * 200 + 200}ms`,
                background: 'linear-gradient(145deg, var(--card), var(--secondary))'
              }}
            >
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-fill w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <Button size="icon" variant="secondary" asChild className="bg-primary/20 hover:bg-primary/40 border-none">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                        <Github className="h-4 w-4 text-white" />
                      </a>
                    </Button>
                    <Button size="icon" variant="secondary" asChild className="bg-primary/20 hover:bg-primary/40 border-none">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                        <ExternalLink className="h-4 w-4 text-white" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="flex flex-col flex-grow pt-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs animate-pulse-glow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          
          {/* <Button variant="outline" className="border-primary text-foreground border-glow"> 
            View All Projects
          </Button>   */}

        </div>
      </div>
    </section>
  );
};

export default Projects;
