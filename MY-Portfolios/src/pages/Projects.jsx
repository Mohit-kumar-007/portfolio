import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ExternalLink, Github, Play, Image as ImageIcon } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'PDF-Merger',
      description: 'A fast and user-friendly PDF Merger Web App that allows users to combine multiple PDF files into one seamlessly within their browser.',
      image: '/pdfmerge.png',
      video: '/pdfmerger.mp4',
      technologies: ['React', 'Node.js', 'pdf-lib','Typescript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Mohit-kumar-007/PDF-Merger.git',
      liveUrl: 'https://pdf-merger-gamma-steel.vercel.app/',
      features: ['User Authentication', 'Upload multiple PDF files at once.', 'Quick and secure PDF merging', 'Download the merged PDF instantly.']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A modern, user-friendly To Do App designed to help you efficiently manage your tasks with seamless synchronization and offline support.',
      image: '/todo.png',
      video: '/to do.mp4',
      technologies: ['React', 'Tailwind ', 'Animations-UI', 'WebRTC '],
      githubUrl: 'https://github.com/Mohit-kumar-007/TO-DO.git',
      liveUrl: 'https://to-do-app-snowy-iota.vercel.app/',
      features: ['Real-time Updates', 'Add, edit, and delete tasks easily', 'Light and dark mode', 'Data persistence using local storage']
    },
    {
      id: 3,
      title: 'Guitar Music Academy website ',
      description: 'An interactive Guitar Music Academy website that showcases guitar courses, instructors, and class details, helping users explore and join music learning sessions easily.',
      image: '/guitar.png',
      video: '/guitar.mp4',
      technologies: ['React', 'email.js', 'React Router', 'tailwind CSS'],
      githubUrl: 'https://github.com/Mohit-kumar-007/Guitar-classes',
      liveUrl: 'https://guitarmusicacademy.vercel.app/',
      features: ['Playable instuments , just click on instuments ', 'Smooth navigation and visually appealing UI', 'Modern and responsive design', 'Course schedule or class information section.']
    },
    {
      id: 4,
      title: 'Text to Voice chrome extension',
      description: 'A simple browser extension that turns webpage text into spoken audio using a click of the extension icon.It allows users to listen to selected or full text content directly within their browser, improving accessibility and convenience.',
      image: '/text to speech.png',
      video: '/text to speech.mp4',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Browser extension APIs','Web Speech API','Manifest v3'],
      githubUrl: 'https://github.com/Mohit-kumar-007/Text-to-Voice-extension',
      liveUrl: null,
      features: ['A browser extension (manifest + popup) that converts selected text into voice/audio.', 'Supports the typical extension UI (popup) and background/manifest logic for triggering text-to-speech', 'Enables ease of access: you click the extension icon, select text / have page read aloud.']
    },
    {
      id: 5,
      title: 'Air-mouse',
      description: 'An ESP32-based Air Mouse that uses an MPU6050 sensor to control your PC or phone cursor through Bluetooth Low Energy (BLE) — just move the ESP32 like an air remote.',
      image: '/airmouse.png',
      video: '/airmouse.mp4',
      technologies: ['ESP32 (ESP32-WROOM)', ' MPU6050 sensor', 'Arduino IDE', 'Libraries: ESP32 BLE Mouse , MPU6050 + I2Cdevlib'],
      githubUrl: 'https://github.com/Mohit-kumar-007/QRDetector',
      liveUrl: 'https://www.youtube.com/watch?v=UeD53UfsAAo',
      features: ['Optional setup with two ESP32 modules (Wi-Fi transmitter + BLE receiver).','Functions as a Bluetooth LE mouse — no external receiver needed.', 'Includes customizable sensitivity, deadzone, and motion smoothing for precise control.', 'Supports hardware buttons for left/right click functionality.', 'Uses MPU6050 accelerometer and gyroscope to detect motion and control cursor movement.']
    },
    {
      id: 6,
      title: 'ESP32 Binary LED Watch',
      description: 'A DIY ESP32-based binary LED watch that displays time in binary format using LEDs for hours and minutes — a perfect blend of electronics and coding simplicity.',
      image: '/binarywatch.png',
      video: '/Binary Watch.mp4',
      technologies: ['Arduino IDE', ' ESP32 (ESP32-WROOM)', 'C++', 'LEDs and resistors'],
      githubUrl: 'https://github.com/Mohit-kumar-007/Binary-watch',
      liveUrl: null,
      features: ['Displays time in binary format using LEDs.', 'Separate LED indicators for hours (4 bits) and minutes (6 bits).', 'Compact and minimal hardware design using ESP32 and resistors.', 'Fully customizable — you can change LED colors or pin mapping.','Low-power and real-time binary clock ideal for learning embedded systems.']
    },
    
    {
      id: 7,
      title: 'QR Detector App',
      description: 'A simple app to detect and decode malicious QR codes , converting the code contents into readable output. It enables quick extraction of encoded information from QR codes in a straightforward, automated way.',
      image: '/QR.png',
      video: null,
      technologies: ['Kotlin', ' CameraX', 'Material Design', 'Android architecture','google API s'],
      githubUrl: 'https://github.com/Mohit-kumar-007/QRDetector',
      liveUrl: null,
      features: ['Real-time QR code detection using the device  camera', 'Clean and intuitive user interface', 'Built with modern Android development practices', 'Uses CameraX for reliable camera functionality']
    },
    {
      id: 8,
      title: 'CHAT App',
      description: 'COMEING SOON...........',
      image: '',
      video: '',
      technologies: ['COMEING SOON...........'],
      githubUrl: 'https://github.com/Mohit-kumar-007',
      liveUrl: null,
      features: ['COMEING SOON...........']
    },
    
  ];

  return (
    <PageLayout>
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
              <div className="relative mb-6 rounded-lg overflow-hidden bg-muted h-64 md:h-80">
                {project.video && selectedProject === project.id ? (
                  <video 
                    className="w-full h-full object-cover" 
                    controls 
                    autoPlay
                    onEnded={() => setSelectedProject(null)}
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : project.image && !project.image.includes('placeholder') ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
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
                    aria-label={`Play ${project.title} demo video`}
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
                  <Button 
                    asChild 
                    size="sm" 
                    variant="github"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button 
                      asChild 
                      size="sm" 
                      variant="darkPill"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
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
            <Button 
              asChild 
              variant="github"
              className="px-6"
            >
              <a href="https://github.com/Mohit-kumar-007" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                <span>Visit My GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
      </div>
    </PageLayout>
  );
};

export default Projects;
