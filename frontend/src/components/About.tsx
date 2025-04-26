
import { Code, PenTool, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import profilePhoto from '../../public/about/pp.jpg'

const About = () => {
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
    
    const section = document.getElementById('about');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 
    'Next.js', 'Tailwind/Bootstrap', 'MongoDB', 'Python',
    'AWS', 'Git'
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto container-padding">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-4 text-gradient">About Me</h2>
          <p className="text-lg text-muted-foreground">
            I help companies and organizations build modern, responsive, and user-friendly web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} style={{ transitionDelay: '200ms' }}>
            <div className="relative rounded-2xl overflow-hidden aspect-square animate-pulse-glow">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                {/* Your Photo Here */}
                <img src = {profilePhoto}></img>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{ transitionDelay: '400ms' }}>
            <h3 className="mb-4 text-gradient">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate developer with 1 year of experience creating web applications. 
              I approach each project with enthusiasm and dedication, focusing on clean code, 
              intuitive design, and optimal performance.
            </p>
            <p className="text-muted-foreground mb-8">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or enjoying outdoor activities.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-3">My Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary border-glow"
                    style={{ 
                      transitionDelay: `${index * 50}ms`,
                      animation: 'pulse-glow 3s infinite',
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Code, 
              title: "Development", 
              description: "I write clean, maintainable code with a focus on performance and user experience." 
            },
            { 
              icon: PenTool, 
              title: "Design", 
              description: "I create beautiful, responsive interfaces that look great on all devices." 
            },
            { 
              icon: Lightbulb, 
              title: "Problem Solving", 
              description: "I approach challenges with creative solutions and attention to detail." 
            }
          ].map((item, index) => (
            <Card 
              key={item.title} 
              className={`border-primary/20 card-glow transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ 
                transitionDelay: `${index * 200 + 600}ms`,
                background: 'linear-gradient(145deg, var(--card), var(--secondary))'
              }}
            >
              <CardContent className="pt-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 animate-pulse-glow">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
