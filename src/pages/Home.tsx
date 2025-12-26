import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowDown, Code } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className=""
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Profile Photo */}
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1 animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Code className="w-20 h-20 text-primary" />
              </div>
            </div>
          </div>

        </div>

        {/* Name and Title */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Mohit Kumar
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium mb-2">
            Full Stack Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate developer crafting innovative solutions with modern technologies.
            Specialized in React, Node.js, and creating exceptional user experiences.
          </p>
        </div>

        {/* Bio Section */}
        <div className="max-w-3xl mx-auto mb-12 p-6 portfolio-card rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-primary">About Me</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm a dedicated full-stack developer with a passion for creating innovative digital solutions. 
            With expertise in modern web technologies and a keen eye for design, I transform ideas into 
            polished, user-friendly applications.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My journey in tech spans hackathons, internships, and continuous learning. I believe in 
            writing clean code, embracing new challenges, and building products that make a difference.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button asChild className="portfolio-gradient text-background hover:scale-105 transition-transform duration-200">
            <Link to="/projects">
              View My Projects
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-background">
            <Link to="/contact">
              Get In Touch
            </Link>
          </Button>
        </div>

      
      </div>
    </div>
  );
};

export default Home;