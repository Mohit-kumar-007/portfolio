import { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowDown, Code, Sparkles } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import GradientText from '../components/ui/GradientText';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLayout>
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div
          className={`relative z-10 px-4 max-w-7xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Photo - Left Side */}
            <div className="lg:w-1/3 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-1 animate-pulse-glow">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-background to-card flex items-center justify-center overflow-hidden border-2 border-primary/20">
                    <img 
                      src="/profile.jpg" 
                      alt="Mohit Kumar - Full Stack Developer" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="lg:w-2/3 text-center lg:text-left space-y-4">
            <GradientText 
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="text-5xl md:text-7xl font-bold lg:-ml-0"
            >
              Mohit Kumar
            </GradientText>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <p className="text-xl md:text-2xl text-primary font-semibold tracking-wide">Full Stack Developer</p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl lg:mx-0 mx-auto leading-relaxed">
              Innovative Full-Stack Developer | <span className="text-primary font-semibold">4× Hackathon Champion </span>| Building seamless web solutions with  <span className="text-primary font-semibold">React</span>, <span className="text-primary font-semibold">Node.js</span>, and curiosity-driven creativity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button asChild className="portfolio-gradient text-background hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/50 px-8 py-6 text-lg font-semibold">
                <Link to="/projects">
                  <span>View My Projects</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 px-8 py-6 text-lg font-semibold">
                <Link to="/contact">
                  <span>Get In Touch</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        </div>

        {/* About Me Section */}
        <div className="max-w-6xl mx-auto mt-20 px-4">
          <div className="p-8 glass-card rounded-3xl border border-primary/50 hover:border-primary/100 transition-all duration-300 group ">
            <div className="flex items-center justify-center gap-2 mb-6">
              
              <h2 className="text-3xl font-bold text-primary">About Me</h2>
             
            </div>
            <p className="text-muted-foreground font-bold leading-relaxed mb-6 text-lg text-center">
             I’m a passionate Full-Stack Developer (MERN) and a 4× Hackathon Winner (IIT Delhi & more) with a strong drive for innovation and problem-solving. With hands-on experience in building scalable web applications and a curiosity for exploring emerging technologies, I love turning complex ideas into seamless, user-focused solutions.

            </p>
            <p className="text-muted-foreground font-bold leading-relaxed text-lg text-center">
             As a 3rd-year B.Tech student, I’m constantly learning and experimenting — from cybersecurity in web dev to devops  — to stay ahead in the ever-evolving tech landscape. I believe in writing clean, efficient code, collaborating creatively, and developing digital experiences that truly make an impact.
            </p>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-primary/60" />
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
