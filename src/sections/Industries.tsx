import { ScrollReveal } from '@/components/ScrollReveal';
import { IndustryCard } from '@/components/IndustryCard';
import {
  GraduationCap,
  Building2,
  Home,
  Stethoscope,
  ShoppingCart,
  Landmark,
} from 'lucide-react';

const industries = [
  {
    icon: GraduationCap,
    title: 'Schools & Training Institutions',
  },
  {
    icon: Building2,
    title: 'Businesses & Offices',
  },
  {
    icon: Home,
    title: 'Apartments & Residential Estates',
  },
  {
    icon: Stethoscope,
    title: 'Hospitals & Medical Facilities',
  },
  {
    icon: ShoppingCart,
    title: 'Retail Shops',
  },
  {
    icon: Landmark,
    title: 'Government Institutions',
  },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-orange text-sm font-semibold tracking-wider uppercase mb-4 block">
              Industries We Serve
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Trusted Across{' '}
              <span className="text-orange">Multiple Sectors</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-white/70 text-lg">
              We deliver tailored ICT solutions to diverse industries, ensuring each client
              receives services that meet their unique requirements.
            </p>
          </ScrollReveal>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              icon={industry.icon}
              title={industry.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
