import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { FeatureItem } from '@/components/FeatureItem';
import {
  Users,
  Zap,
  Award,
  Lock,
  TrendingUp,
  HeadphonesIcon,
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Professional ICT Engineers',
    description: 'Certified experts with years of industry experience in networking and security.',
  },
  {
    icon: Zap,
    title: 'Reliable Infrastructure',
    description: 'Enterprise-grade equipment and proven methodologies for maximum uptime.',
  },
  {
    icon: Award,
    title: 'Quality Installations',
    description: 'Meticulous attention to detail in every project we undertake.',
  },
  {
    icon: Lock,
    title: 'Secure Systems',
    description: 'Industry-standard security protocols and best practices implemented.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Future-proof systems that grow with your business needs.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Fast Technical Support',
    description: 'Responsive technical support available when you need it most.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <ScrollReveal direction="left">
              <span className="text-orange text-sm font-semibold tracking-wider uppercase mb-4 block">
                Why Choose Netlink
              </span>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                The Netlink{' '}
                <span className="text-orange">Advantage</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                We combine technical expertise with exceptional service delivery to provide
                solutions that exceed expectations. Our commitment to quality and customer
                satisfaction sets us apart.
              </p>
            </ScrollReveal>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureItem
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '500+', label: 'Projects Completed' },
                  { value: '98%', label: 'Client Satisfaction' },
                  { value: '50+', label: 'Enterprise Clients' },
                  { value: '24/7', label: 'Support Available' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-tech-gray border border-tech-border rounded-xl p-8 text-center hover:border-orange transition-colors duration-300"
                  >
                    <p className="text-4xl lg:text-5xl font-bold text-orange mb-2">
                      {stat.value}
                    </p>
                    <p className="text-white/60 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange/10 rounded-full blur-3xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
