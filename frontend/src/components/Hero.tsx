
import { ArrowDown, Code, Server, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);


  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary to-background"></div>
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 50 + 10}px`,
                height: `${Math.random() * 50 + 10}px`,
                animationDelay: `${Math.random() * 5}s`,
                animation: 'pulse-glow 3s ease-in-out infinite'
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl">
          <div 
            className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <h1 className="mb-4">
              <span className="text-lg md:text-xl font-medium text-foreground/80 block mb-2">
                Hello, I'm
              </span>
              <span className="text-gradient">Rohit Oberoi</span>
            </h1>
          </div>
          
          <div 
            className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <p className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              I build <span className="text-gradient">exceptional</span> digital experiences
            </p>
          </div>
          
          <div 
            className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '600ms' }}
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              I'm a passionate full-stack developer specializing in creating elegant, 
              intuitive, and high-performing web applications that solve real-world problems.
            </p>
          </div>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '800ms' }}
          >
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground relative overflow-hidden group">
              <span className="relative z-10"><a href='#projects'>View My Work</a></span>
              <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
            <Button variant="outline" className="border-primary text-foreground border-glow">
              <a href='#contact'>Contact Me</a>
            </Button>
          </div>
          
          <div 
            className={`mt-12 grid grid-cols-3 gap-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '1000ms' }}
          >
            <div className="flex flex-col items-center animate-float" style={{ animationDelay: '0s' }}>
              <div className="bg-secondary rounded-xl p-3 mb-2 animate-pulse-glow">
                <Code size={24} className="text-primary" />
              </div>
              <span className="text-sm text-foreground/70">Frontend</span>
            </div>
            <div className="flex flex-col items-center animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-secondary rounded-xl p-3 mb-2 animate-pulse-glow">
                <Server size={24} className="text-primary" />
              </div>
              <span className="text-sm text-foreground/70">Backend</span>
            </div>
            <div className="flex flex-col items-center animate-float" style={{ animationDelay: '2s' }}>
              <div className="bg-secondary rounded-xl p-3 mb-2 animate-pulse-glow">
                <Layers size={24} className="text-primary" />
              </div>
              <span className="text-sm text-foreground/70">UI/UX</span>
            </div>
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/60 hover:text-foreground animate-bounce transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1200ms' }}
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
};

export default Hero;
