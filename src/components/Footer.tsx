import { useEffect } from 'react';
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

  // No scroll effect needed anymore

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
    <footer 
      className="fixed bottom-0 left-[50%] translate-x-[-50%] z-50 
                w-[95%] max-w-3xl mx-auto mb-4
                bg-background/40 backdrop-blur-xl border border-border/50
                rounded-[40px]
                shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                transition-colors duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Navigation Links */}
          <nav className="flex items-center justify-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-medium transition-colors duration-200 hover:text-primary 
                          ${location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'}
                          whitespace-nowrap`}
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