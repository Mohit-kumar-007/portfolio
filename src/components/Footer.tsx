import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/projects', label: 'PROJECTS' },
    { path: '/achievements', label: 'ACHIEVEMENTS' },
    { path: '/certificates', label: 'CERTIFICATES' },
    { path: '/experience', label: 'EXPERIENCE' },
    { path: '/contact', label: 'CONTACT ME' },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/mohitkumar007',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://x.com/MohitKu77945356',
      label: 'Twitter'
    },
    {
      icon: Github,
      href: 'https://github.com/Mohit-kumar-007',
      label: 'GitHub'
    }
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-medium transition-colors duration-200 hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;