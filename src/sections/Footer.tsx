import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Internet Connectivity',
  'Computer Networking',
  'CCTV & Security',
  'Web Development',
  'Web Hosting',
  'Systems Integration',
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-tech-dark border-t border-tech-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <img 
                src="/images/logo.jpg" 
                alt="Netlink Solutions" 
                className="h-10 w-auto rounded-lg"
              />
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Kenya's leading ICT solutions provider, delivering reliable internet
              connectivity, networking infrastructure, and security systems.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-tech-gray rounded-lg flex items-center justify-center text-white/60 hover:text-orange hover:bg-orange/10 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/60 hover:text-orange transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-sm">Phone</p>
                <a
                  href="tel:+254700123456"
                  className="text-white hover:text-orange transition-colors duration-200"
                >
                  +254 700 123 456
                </a>
              </div>
              <div>
                <p className="text-white/60 text-sm">Email</p>
                <a
                  href="mailto:info@netlink.co.ke"
                  className="text-white hover:text-orange transition-colors duration-200"
                >
                  info@netlink.co.ke
                </a>
              </div>
              <div>
                <p className="text-white/60 text-sm">Location</p>
                <p className="text-white">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-tech-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Netlink Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/60 hover:text-orange text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-orange text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-6 w-12 h-12 bg-orange rounded-full flex items-center justify-center shadow-lg hover:shadow-glow transition-shadow duration-300 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-black" />
      </motion.button>
    </footer>
  );
}
