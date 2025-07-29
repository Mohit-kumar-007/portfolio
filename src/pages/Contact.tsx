import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone, Send, Linkedin, Github, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS (You'll need to replace these with your actual EmailJS credentials)
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'mohitsunariya@gmail.com'
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mohitsunariya@gmail.com',
      href: 'mailto:mohitsunariya@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9876543210',
      href: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Delhi, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/mohitkumar007',
      color: 'hover:text-blue-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Mohit-kumar-007',
      color: 'hover:text-gray-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://x.com/MohitKu77945356',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen pt-8 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Contact Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities, projects, or just say hello!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-scale">
            <Card className="portfolio-card p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you want to discuss a potential collaboration, need help with 
                a project, or just want to connect, feel free to reach out!
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      {info.href !== '#' ? (
                        <a 
                          href={info.href} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-semibold mb-4 text-foreground">Connect with me:</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>

            {/* Quick Response Time */}
            <Card className="portfolio-card p-6">
              <h3 className="font-semibold mb-4 text-primary">Response Time</h3>
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
          </div>

          {/* Contact Form */}
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
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <Card className="portfolio-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">Ready to work together?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects, creative ideas, and opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="portfolio-gradient">
                <a href="mailto:mohitsunariya@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me Directly
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://linkedin.com/in/mohitkumar007" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;