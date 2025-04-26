import { useState, useEffect } from 'react';
import { Briefcase, Calendar, Building, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

type Experience = {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
};

const WorkExperience = () => {
  const [isInView, setIsInView] = useState(false);
  const [openExp, setOpenExp] = useState<number | null>(null); 
  
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
    
    const section = document.getElementById('experience');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  const experiences: Experience[] = [
    {
      id: 1,
      company: "Meon Technologies",
      role: "Frontend Developer",
      period: "October 2024 - Present",
      description: "Worked for development of the company's flagship web application using React and MUI, resulting in a 40% increase in user engagement.",
      highlights: [
        "Implemented responsive design principles, improving mobile user retention by 35%",
        "Mentored other developers and established frontend coding standards",
        "Optimized application performance, reducing load time by 25%",
        "Collaborated with UX team to implement new design system"
      ]
    },
    {
      id: 2,
      company: "Rewasto Recycling",
      role: "Junior Developer",
      period: "July 2024 - August 2024",
      description: "Developed and maintained company web application with a focus on performance and accessibility.",
      highlights: [
        "Created dynamic, interactive web application using JavaScript frameworks",
        "Improved site performance through optimization techniques",
        "Implemented automated testing, reducing bugs in production by 40%",
        "Collaborated with cross-functional teams to deliver projects on time"
      ]
    },
    {
      id: 3,
      company: "Talentship Global Advisory Forum",
      role: "SDE Intern",
      period: "July 2023 - September 2023",
      description: "Assisted in the development of websites for small to medium-sized businesses, focusing on responsive design and user experience.",
      highlights: [
        "Developed responsive, mobile-first websites",
        "Implemented best practices, increasing client traffic by 25%",
        "Created and maintained Figma themes and plugins",
        "Participated in client meetings to gather requirements"
      ]
    }
  ];

  const toggleExp = (id: number) => {
    setOpenExp(openExp === id ? null : id);
  };

  return (
    <section id="experience" className="section-padding bg-secondary/10">
      <div className="container mx-auto container-padding">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-4 text-gradient">Work Experience</h2>
          <p className="text-lg text-muted-foreground">
            My professional journey and notable contributions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-primary/30">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`mb-12 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`} 
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute left-[-8px] w-4 h-4 bg-primary rounded-full animate-pulse-glow"></div>
                
                <Collapsible 
                  open={openExp === exp.id} 
                  onOpenChange={() => toggleExp(exp.id)}
                  className="bg-card rounded-lg overflow-hidden card-glow border border-primary/10"
                >
                  <CollapsibleTrigger className="w-full text-left p-5 flex justify-between items-center hover:bg-secondary/30 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <div className="flex items-center gap-2">
                        <Building className="text-primary h-5 w-5" />
                        <h3 className="text-lg md:text-xl font-semibold">{exp.company}</h3>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm inline-flex items-center">
                        <Briefcase className="h-3.5 w-3.5 mr-1" />
                        {exp.role}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground text-sm flex items-center">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        {exp.period}
                      </span>
                      <ChevronRight className={`h-5 w-5 transition-transform ${openExp === exp.id ? 'rotate-90' : ''}`} />
                    </div>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <CardContent className="pt-0 pb-5">
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-primary">Key Contributions:</h4>
                        <ul className="space-y-2 text-sm">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;