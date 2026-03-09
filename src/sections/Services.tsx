import { ScrollReveal } from '@/components/ScrollReveal';
import { ServiceCard } from '@/components/ServiceCard';
import {
  Wifi,
  Network,
  Shield,
  Cpu,
  Code,
  Globe,
} from 'lucide-react';

const services = [
  {
    icon: Wifi,
    title: 'Internet Connectivity',
    items: [
      'Wireless Internet Solutions',
      'PPPoE Network Deployment',
      'Public Hotspot Systems',
      'Starlink Internet Integration',
      'WiFi Network Deployment',
      'Network Monitoring & Management',
    ],
  },
  {
    icon: Network,
    title: 'Computer Networking',
    items: [
      'LAN & WAN Installations',
      'Office & Enterprise Networking',
      'Router & Switch Configuration',
      'MikroTik Configuration',
      'Network Optimization',
      'Troubleshooting & Support',
    ],
  },
  {
    icon: Shield,
    title: 'CCTV & Security',
    items: [
      'Professional CCTV Installation',
      'IP Surveillance Systems',
      'Hikvision Security Cameras',
      'Remote Camera Monitoring',
      'Security System Maintenance',
      'Access Control Systems',
    ],
  },
  {
    icon: Cpu,
    title: 'Systems Integration',
    items: [
      'Enterprise IT Infrastructure',
      'System Integration Services',
      'Smart Office Technology',
      'Smart Building Solutions',
      'Server Deployment',
      'Cloud Integration',
    ],
  },
  {
    icon: Code,
    title: 'Web Development',
    items: [
      'Professional Business Websites',
      'Corporate Web Platforms',
      'Custom Web Development',
      'Responsive Web Design',
      'E-commerce Solutions',
      'Web Applications',
    ],
  },
  {
    icon: Globe,
    title: 'Web Hosting & Domains',
    items: [
      'Website Hosting Services',
      'Domain Registration',
      'Business Email Hosting',
      'Website Maintenance',
      'SSL Certificates',
      'Backup Solutions',
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-tech-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, #1a1a1a 1px, transparent 1px),
                              linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-orange text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Services
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive{' '}
              <span className="text-orange">Technology Solutions</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-white/70 text-lg">
              From internet connectivity to security systems, we provide end-to-end ICT
              solutions tailored to your needs.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              items={service.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
