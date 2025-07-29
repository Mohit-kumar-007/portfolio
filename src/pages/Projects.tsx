import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play, Image as ImageIcon } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: '/placeholder.svg',
      video: 'https://example.com/demo-video.mp4',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Mohit-kumar-007/ecommerce-platform',
      liveUrl: 'https://mohit-ecommerce.vercel.app',
      features: ['User Authentication', 'Payment Gateway', 'Admin Dashboard', 'Responsive Design']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/placeholder.svg',
      video: null,
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      githubUrl: 'https://github.com/Mohit-kumar-007/task-manager',
      liveUrl: 'https://mohit-tasks.netlify.app',
      features: ['Real-time Updates', 'Drag & Drop', 'Team Collaboration', 'File Attachments']
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/placeholder.svg',
      video: 'https://example.com/weather-demo.mp4',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
      githubUrl: 'https://github.com/Mohit-kumar-007/weather-dashboard',
      liveUrl: 'https://mohit-weather.vercel.app',
      features: ['Location Detection', 'Interactive Maps', 'Weather Analytics', 'Offline Support']
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for social media platforms with data visualization and performance tracking.',
      image: '/placeholder.svg',
      video: null,
      technologies: ['React', 'D3.js', 'Express.js', 'PostgreSQL'],
      githubUrl: 'https://github.com/Mohit-kumar-007/social-analytics',
      liveUrl: null,
      features: ['Data Visualization', 'Performance Tracking', 'Custom Reports', 'API Integration']
    }
  ];

  return (
    <div className="min-h-screen pt-8 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="portfolio-card p-6 hover:scale-[1.02] transition-all duration-300 animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Video */}
              <div className="relative mb-6 rounded-lg overflow-hidden bg-muted h-48">
                {project.video && selectedProject === project.id ? (
                  <video 
                    className="w-full h-full object-cover" 
                    controls 
                    autoPlay
                    onEnded={() => setSelectedProject(null)}
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <ImageIcon className="w-16 h-16 text-primary/50" />
                  </div>
                )}
                
                {/* Play button overlay for videos */}
                {project.video && selectedProject !== project.id && (
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center hover:bg-black/40 transition-colors"
                  >
                    <Play className="w-12 h-12 text-white" />
                  </button>
                )}
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button asChild size="sm" className="portfolio-gradient">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button asChild size="sm" variant="outline">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="portfolio-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">Want to see more?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for more projects and contributions
            </p>
            <Button asChild className="portfolio-gradient">
              <a href="https://github.com/Mohit-kumar-007" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                Visit My GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;