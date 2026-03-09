import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Target, Eye, CheckCircle } from 'lucide-react';

const coreValues = [
  'Reliability',
  'Innovation',
  'Professionalism',
  'Customer Focus',
  'Security',
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #dd8854 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <ScrollReveal direction="left">
              <span className="text-orange text-sm font-semibold tracking-wider uppercase mb-4 block">
                About Netlink
              </span>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Innovative ICT &{' '}
                <span className="text-orange">Connectivity Solutions</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Netlink Solutions is an innovative ICT and connectivity provider delivering
                reliable networking infrastructure and digital technology solutions. We focus
                on providing seamless internet connectivity, secure networking systems, smart
                security infrastructure, and comprehensive digital transformation services.
              </p>
            </ScrollReveal>

            {/* Mission & Vision */}
            <div className="space-y-6 mb-8">
              <ScrollReveal direction="left" delay={0.3}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Our Mission</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      To deliver reliable and innovative technology solutions that empower
                      businesses and communities through connectivity.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.4}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Our Vision</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      To become a leading ICT infrastructure and internet solutions provider
                      in Kenya and across Africa.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Core Values */}
            <ScrollReveal direction="left" delay={0.5}>
              <h3 className="text-white font-semibold text-lg mb-4">Core Values</h3>
              <div className="flex flex-wrap gap-3">
                {coreValues.map((value, index) => (
                  <motion.span
                    key={value}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-tech-gray border border-tech-border rounded-full text-white/80 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-orange" />
                    {value}
                  </motion.span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Image */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/images/about-engineer.jpg"
                  alt="IT Engineer in server room"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-tech-gray border border-tech-border rounded-xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-orange/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-orange">5+</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Years of</p>
                    <p className="text-white/60">Excellence</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-orange/10 rounded-full blur-3xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
