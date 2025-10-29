import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ZoomIn, Download, Calendar, Building, Award, Image as ImageIcon, X } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'November 2023',
      category: 'cloud',
      description: 'Foundational cloud computing certification covering AWS services, architecture, and best practices.',
      image: '/placeholder.svg',
      verificationUrl: 'https://aws.amazon.com/verification/ABC123',
      skills: ['AWS Services', 'Cloud Architecture', 'Security', 'Pricing']
    },
    {
      id: 2,
      title: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: 'September 2023',
      category: 'frontend',
      description: 'Advanced React development certification covering hooks, context, performance optimization, and testing.',
      image: '/placeholder.svg',
      verificationUrl: 'https://meta.com/certificates/XYZ789',
      skills: ['React.js', 'Hooks', 'State Management', 'Testing']
    },
    {
      id: 3,
      title: 'Full Stack Web Development',
      issuer: 'The Odin Project',
      date: 'July 2023',
      category: 'fullstack',
      description: 'Comprehensive full-stack development program covering both frontend and backend technologies.',
      image: '/placeholder.svg',
      verificationUrl: 'https://theodinproject.com/cert/DEF456',
      skills: ['HTML/CSS', 'JavaScript', 'Node.js', 'Databases']
    },
    {
      id: 4,
      title: 'Google Analytics Certified',
      issuer: 'Google',
      date: 'May 2023',
      category: 'analytics',
      description: 'Digital marketing analytics certification for tracking and analyzing web traffic and user behavior.',
      image: '/placeholder.svg',
      verificationUrl: 'https://skillshop.exceedlms.com/GHI789',
      skills: ['Analytics', 'Data Analysis', 'Reporting', 'Conversion Tracking']
    },
    {
      id: 5,
      title: 'MongoDB Developer Certification',
      issuer: 'MongoDB University',
      date: 'March 2023',
      category: 'database',
      description: 'Database development certification focusing on MongoDB design patterns and optimization.',
      image: '/placeholder.svg',
      verificationUrl: 'https://university.mongodb.com/cert/JKL012',
      skills: ['MongoDB', 'NoSQL', 'Database Design', 'Aggregation']
    },
    {
      id: 6,
      title: 'JavaScript Algorithms',
      issuer: 'freeCodeCamp',
      date: 'January 2023',
      category: 'programming',
      description: 'Data structures and algorithms certification with JavaScript implementation.',
      image: '/placeholder.svg',
      verificationUrl: 'https://freecodecamp.org/cert/MNO345',
      skills: ['Algorithms', 'Data Structures', 'Problem Solving', 'JavaScript']
    }
  ];

  const categories = [
    { value: 'all', label: 'All Certificates' },
    { value: 'cloud', label: 'Cloud Computing' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'analytics', label: 'Analytics' },
    { value: 'database', label: 'Database' },
    { value: 'programming', label: 'Programming' }
  ];

  const filteredCertificates = selectedCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <PageLayout>
      <div className="min-h-screen pt-8 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Certificates
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements in technology
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.value)}
              className={selectedCategory === category.value ? "portfolio-gradient" : ""}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((certificate, index) => (
            <Card 
              key={certificate.id} 
              className="portfolio-card p-6 hover:scale-[1.02] transition-all duration-300 animate-fade-in-scale group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <ImageIcon className="w-16 h-16 text-primary/50" />
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedCertificate(certificate)}
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-lg"
                  aria-label={`View ${certificate.title} certificate details`}
                >
                  <ZoomIn className="w-8 h-8 text-white" />
                </button>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary line-clamp-2">{certificate.title}</h3>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Building className="w-4 h-4 mr-2" />
                  {certificate.issuer}
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  {certificate.date}
                </div>

                <p className="text-sm text-muted-foreground line-clamp-3">
                  {certificate.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {certificate.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs bg-primary/10 text-primary">
                      {skill}
                    </Badge>
                  ))}
                  {certificate.skills.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-muted">
                      +{certificate.skills.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    className="portfolio-gradient flex-1"
                    onClick={() => setSelectedCertificate(certificate)}
                  >
                    <ZoomIn className="w-4 h-4 mr-2" />
                    View
                  </Button>

                  <Button size="sm" variant="outline" asChild>
                    <a href={certificate.verificationUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredCertificates.length === 0 && (
          <div className="text-center py-12">
            <Award className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">No certificates found in this category.</p>
          </div>
        )}
      </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div 
            className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-primary/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-primary/20 p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-primary">{selectedCertificate.title}</h2>
              <button 
                onClick={() => setSelectedCertificate(null)}
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="Close certificate details"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <Award className="w-24 h-24 text-primary/50" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">Issuer</h3>
                    <p className="text-muted-foreground">{selectedCertificate.issuer}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">Date Issued</h3>
                    <p className="text-muted-foreground">{selectedCertificate.date}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">Description</h3>
                    <p className="text-muted-foreground">{selectedCertificate.description}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">Skills Covered</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full portfolio-gradient">
                    <a href={selectedCertificate.verificationUrl} target="_blank" rel="noopener noreferrer">
                      Verify Certificate
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default Certificates;
