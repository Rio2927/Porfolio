
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
      title: "E-Commerce Platform (In Progress)",
      description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, product catalog, cart functionality, and payment processing.",
      tags: ["React", "Node.js/Express.js", "MongoDB", "Tailwind"],
      image: 'project/e-commerce-app.png',
      github: "https://github.com/Rio2927/E-Commerce-App",
      demo: "https://e-commerce-app-bay-two.vercel.app/",
    },
    {
      title: "Edtech App",
      description: "EdGo is an EdTech platform engineered to deliver a seamless learning experience. The frontend is built using React with modular components and optimized for performance using lazy loading, code-splitting, and responsive design.",
      tags: ["Javascript", "React","Bootstrap"],
      image: "project/edtech-web-app.png",
      github: "https://github.com/Rio2927/Edtech-Website",
      demo: "https://edtech-website-neon.vercel.app/",
    },
    {
      title: "Rewasto Recyling Website",
      description: "Built with a focus on environmental responsibility and digital accessibility, the platform allows individuals and businesses to easily schedule e-waste pickups, track disposal status, and learn about the impact of responsible recycling.",
      tags: ["React.js", "SQL", "Python", "Bootstrap"],
      image: "project/rewasto.png",
      github: "#",
      demo: "https://rewasto.in/",
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
