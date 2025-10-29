import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/input';
import { Textarea } from '../components/ui/input';
import { useToast } from '../hooks/use-toast';
import { Mail, MapPin, Phone, Send, Linkedin, Github, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';
import PageLayout from '../components/PageLayout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_2ymq8kc',
        'template_ymz06go',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'mohitsunariya@gmail.com'
        },
        'a2aQw_cSQT7Gb4IFB'
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <PageLayout>
      <div className="min-h-screen pt-8 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Contact Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities, projects, or just say hello!
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Send a Message Form */}
          <Card className="portfolio-card p-8 animate-fade-in-scale">
            <h2 className="text-2xl font-bold mb-6 text-primary">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hello..."
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full portfolio-gradient hover:scale-[1.02] transition-transform duration-200"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <strong className="text-primary">Note:</strong> I typically respond to messages within 24 hours. 
                For urgent matters, feel free to reach out on LinkedIn for a faster response.
              </p>
            </div>
          </Card>

          {/* Response Time Card */}
          <Card className="portfolio-card p-6 animate-fade-in-scale">
            <h3 className="font-semibold mb-4 text-primary text-center">Response Time</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-foreground">24h</div>
                <div className="text-sm text-muted-foreground">Email Response</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">1h</div>
                <div className="text-sm text-muted-foreground">LinkedIn Message</div>
              </div>
            </div>
          </Card>

          {/* Ready to Work Card */}
          <Card className="portfolio-card p-8 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">Ready to work together?</h3>
            <p className="text-muted-foreground mb-6 text-center">
                I'm always interested in new opportunities and exciting projects. 
                Whether you want to discuss a potential collaboration, need help with 
                a project, or just want to connect, feel free to reach out! 
                and I'm always open to discussing new projects, creative ideas, and opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="portfolio-gradient">
                <a href="mailto:mohitsunariya@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Email Me Directly</span>
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://linkedin.com/in/mohitkumar007" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
