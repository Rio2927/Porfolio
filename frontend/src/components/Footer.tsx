
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Rio2927', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rohit-oberoi27', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/RohitOberoi27', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-background py-12 border-t border-border/30">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-heading font-bold text-gradient">
              RO
            </a>
            <p className="text-muted-foreground mt-2">
              Building digital experiences that make a difference.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-secondary/60 text-foreground p-2 rounded-full transition-colors animate-pulse-glow"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Rohit Oberoi. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap space-x-4 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
