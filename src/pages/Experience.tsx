import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Building, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer Intern',
      company: 'TechCorp Solutions',
      location: 'Bangalore, India',
      duration: 'June 2023 - August 2023',
      type: 'Internship',
      description: 'Developed and maintained web applications using React.js and Node.js. Collaborated with senior developers to implement new features and optimize existing codebases.',
      achievements: [
        'Built a customer dashboard that improved user engagement by 40%',
        'Optimized database queries reducing response time by 60%',
        'Implemented automated testing increasing code coverage to 85%',
        'Mentored 2 junior interns in modern web development practices'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Docker', 'Git'],
      companyUrl: 'https://techcorp.com',
      current: false
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      duration: 'September 2023 - Present',
      type: 'Part-time',
      description: 'Leading frontend development for a fintech startup. Responsible for creating responsive web applications and implementing modern UI/UX design patterns.',
      achievements: [
        'Developed a real-time trading dashboard used by 1000+ active users',
        'Implemented responsive design reducing mobile bounce rate by 30%',
        'Created a component library reducing development time by 50%',
        'Led code reviews and established frontend development standards'
      ],
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux', 'Chart.js'],
      companyUrl: 'https://startupxyz.com',
      current: true
    },
    {
      id: 3,
      title: 'Web Development Trainee',
      company: 'DigitalAgency Pro',
      location: 'Mumbai, India',
      duration: 'January 2023 - May 2023',
      type: 'Training',
      description: 'Intensive training program focusing on modern web development technologies. Worked on real client projects under senior developer supervision.',
      achievements: [
        'Completed 10+ client website projects with 100% on-time delivery',
        'Achieved 95% client satisfaction rating',
        'Learned and implemented modern CSS frameworks and animations',
        'Contributed to agency\'s internal tool development'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery', 'WordPress'],
      companyUrl: 'https://digitalagencypro.com',
      current: false
    },
    {
      id: 4,
      title: 'Technical Team Lead',
      company: 'College Tech Club',
      location: 'Delhi, India',
      duration: 'August 2022 - December 2022',
      type: 'Leadership',
      description: 'Led a team of 15 students in organizing technical events and hackathons. Managed project timelines and coordinated with industry mentors.',
      achievements: [
        'Organized 3 successful hackathons with 500+ participants',
        'Managed budget of ₹2,00,000 for technical events',
        'Built partnerships with 5 tech companies for sponsorships',
        'Increased club membership by 200% during tenure'
      ],
      technologies: ['Project Management', 'Event Planning', 'Team Leadership', 'Mentoring'],
      companyUrl: '#',
      current: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Part-time': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Training': return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      case 'Leadership': return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      default: return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  return (
    <div className="min-h-screen pt-8 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and career milestones
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-px" />

          {experiences.map((experience, index) => (
            <div 
              key={experience.id} 
              className={`relative mb-12 animate-fade-in-scale ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className={`absolute w-4 h-4 bg-primary rounded-full border-4 border-background ${
                index % 2 === 0 
                  ? 'left-6 md:left-auto md:-right-2 top-8' 
                  : 'left-6 md:-left-2 top-8'
              } ${experience.current ? 'animate-pulse-glow' : ''}`} />

              {/* Experience Card */}
              <Card className={`portfolio-card p-6 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              } hover:scale-[1.02] transition-all duration-300`}>
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="mb-2 md:mb-0">
                    <h3 className="text-xl font-bold text-primary">{experience.title}</h3>
                    <div className="flex items-center text-foreground font-medium">
                      <Building className="w-4 h-4 mr-2" />
                      {experience.companyUrl !== '#' ? (
                        <a 
                          href={experience.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors flex items-center"
                        >
                          {experience.company}
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      ) : (
                        experience.company
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <Badge className={`border ${getTypeColor(experience.type)}`}>
                      {experience.type}
                      {experience.current && ' • Current'}
                    </Badge>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {experience.location}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {experience.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 animate-fade-in-up">
          <div className="portfolio-card p-6 text-center rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="portfolio-card p-6 text-center rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-muted-foreground">Companies Worked</div>
          </div>
          <div className="portfolio-card p-6 text-center rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">20+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="portfolio-card p-6 text-center rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Technologies Used</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;