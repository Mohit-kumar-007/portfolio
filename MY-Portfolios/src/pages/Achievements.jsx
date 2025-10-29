import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Trophy, Calendar, Users, Award, Play, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import PageLayout from '../components/PageLayout';

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const achievements = [
     {
      id: 1,
      title: 'TECH FUTURE HACKATHON 2025',
      position: '2nd runner-up',
      event: 'National Level Hackathon by IIT Delhi',
      date: '12 APRIL 2025',
      participants: '500+ participants',
      description: 'Designed and developed an inclusive hardware device with the help of ESP 32 and C++ to communicate securely with visually impaired individuals.',
      image: '/techhack.jpg',
      video: null,
      technologies: [null],
      prize: 'Goodies Swag + Recognition',
      certificate: '/techhack.jpg'
    },
    {
      id: 2,
      title: 'HackSprint 2024',
      position: '2nd Place Winner',
      event: 'National Level Hackathon By Google cloud and Geeks for Geeks',
      date: '27 SEPTEMBER 2024',
      participants: '400+ participants',
      description: 'We devloped a Social education android application that give real , life saving tricks for example how to give CPR , what to do first when someone got burned his hand like those .  ',
      image: '/hacksprint2.jpg',
      video: null,
      technologies: [null],
      prize: '₹1,500 + Certificate',
      certificate: '/hacksprint.jpg'
    },
    {
      id: 3,
      title: 'INNOVASTRA 2025',
      position: '2nd Place ',
      event: 'National Level Competition BY ARYA COLLEGE , Jaipur',
      date: '28 FEBRUARY 2025',
      participants: '1200+ participants',
      description: 'Built a Malicious QR code detector Android app with advanced scanning and safety features to protect users from harmful links.',
      image: '/innovastra2.jpg',
      video: null,
      technologies: [null],
      prize: '₹7,500 + Mentorship',
      certificate: '/innovastra.jpg'
    },
    {
      id: 4,
      title: 'HACKTECH 2025',
      position: '3rd Place',
      event: 'National Level Competition by THAPAR INSTITUTE PUNJAB',
      date: '22 FEBRUARY 2025',
      participants: '2000+ participants',
      description: 'Created a Demo web based solution for women safety using react js and express js',
      image: '/hacktech2.jpg',
      video: null,
      technologies: [null],
      prize: '₹5,000 + Certificate',
      certificate: '/hacktech.jpg'
    },
   
  ];

  return (
    <PageLayout>
      <div className="min-h-screen pt-8 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Achievements
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating wins and recognitions in hackathons and competitions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={achievement.id}
              className="portfolio-card p-6 hover:scale-[1.02] transition-all duration-300 animate-fade-in-scale relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-primary rounded-full p-2 animate-pulse-glow">
                  <Award className="w-6 h-6 text-black" />
                </div>
              </div>

              <div className="relative mb-6 rounded-lg overflow-hidden bg-muted h-64 md:h-80">
                {achievement.video && selectedAchievement === achievement.id ? (
                  <video
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    onEnded={() => setSelectedAchievement(null)}
                  >
                    <source src={achievement.video} type="video/mp4" />
                  </video>
                ) : achievement.image && !achievement.image.includes('placeholder') ? (
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <ImageIcon className="w-16 h-16 text-primary/50" />
                  </div>
                )}

                {achievement.video && selectedAchievement !== achievement.id && (
                  <button
                    onClick={() => setSelectedAchievement(achievement.id)}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center hover:bg-black/40 transition-colors"
                  >
                    <Play className="w-12 h-12 text-white" />
                  </button>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className="portfolio-gradient font-semibold !text-black">
                    <Trophy className="w-4 h-4 mr-1 !text-black" />
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

                <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>

                <div className="flex flex-wrap gap-2">
                  {achievement.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Prize & Recognition:</h4>
                  <p className="text-foreground">{achievement.prize}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
          <div className="portfolio-card p-6 text-center rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">4+</div>
            <div className="text-muted-foreground">Hackathons Won</div>
          </div>
          <div className="portfolio-card p-6 text-center rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Participants Competed</div>
          </div>
          <div className="portfolio-card p-6 text-center rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">₹15K+</div>
            <div className="text-muted-foreground">Prize Money Won</div>
          </div>
        </div>
      </div>
      </div>
    </PageLayout>
  );
};

export default Achievements;
