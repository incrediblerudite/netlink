import { ScrollReveal } from '@/components/ScrollReveal';
import { ContactForm } from '@/components/ContactForm';
import { SpeedTest } from '@/components/SpeedTest';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+254 700 123 456',
    href: 'tel:+254700123456',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+254 700 123 456',
    href: 'https://wa.me/254700123456',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@netlink.co.ke',
    href: 'mailto:info@netlink.co.ke',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Nairobi, Kenya',
    href: '#',
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-1/2 h-full bg-gradient-to-r from-orange/5 to-transparent -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <ScrollReveal direction="left">
              <span className="text-orange text-sm font-semibold tracking-wider uppercase mb-4 block">
                Contact Us
              </span>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Get In{' '}
                <span className="text-orange">Touch</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                Ready to transform your connectivity? Contact us for a free consultation
                and quote. Our team is ready to help you find the perfect solution.
              </p>
            </ScrollReveal>

            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <ScrollReveal key={item.label} direction="left" delay={0.3 + index * 0.1}>
                  <a
                    href={item.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center group-hover:bg-orange/20 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-orange" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{item.label}</p>
                      <p className="text-white font-medium group-hover:text-orange transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            {/* Speed Test Button */}
            <ScrollReveal direction="left" delay={0.7}>
              <div className="flex items-center gap-4">
                <SpeedTest />
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="bg-tech-gray rounded-2xl p-8 border border-tech-border">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Request a Consultation
              </h3>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
