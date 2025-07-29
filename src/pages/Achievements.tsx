import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Calendar, Users, Award, Play, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(null);

  const achievements = [
    {
      id: 1,
      title: 'HackOverflow 2023',
      position: '1st Place Winner',
      event: 'National Level Hackathon',
      date: 'October 2023',
      participants: '500+ participants',
      description: 'Developed an AI-powered healthcare management system that streamlines patient data and improves diagnostic accuracy.',
      image: '/placeholder.svg',
      video: 'https://example.com/hackoverflow-demo.mp4',
      technologies: ['React', 'TensorFlow', 'Node.js', 'MongoDB'],
      prize: '₹50,000 + Internship Offer',
      certificate: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'CodeStorm 2023',
      position: '2nd Place Runner-up',
      event: 'State Level Competition',
      date: 'August 2023',
      participants: '300+ participants',
      description: 'Built a sustainable transportation app that optimizes routes for reduced carbon footprint and cost efficiency.',
      image: '/placeholder.svg',
      video: null,
      technologies: ['Flutter', 'Firebase', 'Google Maps API'],
      prize: '₹25,000 + Mentorship',
      certificate: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'TechInnovate 2023',
      position: '3rd Place',
      event: 'Inter-College Hackathon',
      date: 'June 2023',
      participants: '200+ participants',
      description: 'Created a blockchain-based voting system ensuring transparency and security in digital democracy.',
      image: '/placeholder.svg',
      video: 'https://example.com/techinnovate-demo.mp4',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      prize: '₹15,000 + Certificate',
      certificate: '/placeholder.svg'
    },
    {
      id: 4,
      title: 'DevFest 2022',
      position: 'Best UI/UX Award',
      event: 'Google Developer Festival',
      date: 'November 2022',
      participants: '400+ participants',
      description: 'Designed and developed an inclusive learning platform with exceptional user experience and accessibility features.',
      image: '/placeholder.svg',
      video: null,
      technologies: ['React', 'Figma', 'Tailwind CSS', 'Accessibility APIs'],
      prize: 'Google Swag + Recognition',
      certificate: '/placeholder.svg'
    }
  ];

  return (
    <div className="min-h-screen pt-8 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Achievements
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating wins and recognitions in hackathons and competitions
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.id} 
              className="portfolio-card p-6 hover:scale-[1.02] transition-all duration-300 animate-fade-in-scale relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Certificate Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-primary rounded-full p-2 animate-pulse-glow">
                  <Award className="w-6 h-6 text-background" />
                </div>
              </div>

              {/* Achievement Image/Video */}
              <div className="relative mb-6 rounded-lg overflow-hidden bg-muted h-48">
                {achievement.video && selectedAchievement === achievement.id ? (
                  <video 
                    className="w-full h-full object-cover" 
                    controls 
                    autoPlay
                    onEnded={() => setSelectedAchievement(null)}
                  >
                    <source src={achievement.video} type="video/mp4" />
                  </video>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <ImageIcon className="w-16 h-16 text-primary/50" />
                  </div>
                )}
                
                {/* Play button overlay for videos */}
                {achievement.video && selectedAchievement !== achievement.id && (
                  <button
                    onClick={() => setSelectedAchievement(achievement.id)}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center hover:bg-black/40 transition-colors"
                  >
                    <Play className="w-12 h-12 text-white" />
                  </button>
                )}
              </div>

              {/* Achievement Content */}
              <div className="space-y-4">
                {/* Position Badge */}
                <div className="flex items-center justify-between">
                  <Badge className="portfolio-gradient text-background font-semibold">
                    <Trophy className="w-4 h-4 mr-1" />
                    {achievement.position}
                  </Badge>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {achievement.date}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-primary">{achievement.title}</h3>
                <p className="text-lg font-medium text-foreground">{achievement.event}</p>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-2" />
                  {achievement.participants}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-2">
                  {achievement.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Prize Information */}
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Prize & Recognition:</h4>
                  <p className="text-foreground">{achievement.prize}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
          <div className="portfolio-card p-6 text-center rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">4+</div>
            <div className="text-muted-foreground">Hackathons Won</div>
          </div>
          <div className="portfolio-card p-6 text-center rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">1400+</div>
            <div className="text-muted-foreground">Participants Competed</div>
          </div>
          <div className="portfolio-card p-6 text-center rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">₹90K+</div>
            <div className="text-muted-foreground">Prize Money Won</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;