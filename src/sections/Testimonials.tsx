import { ScrollReveal } from '@/components/ScrollReveal';
import { TestimonialCard } from '@/components/TestimonialCard';

const testimonials = [
  {
    quote:
      "Netlink transformed our school's internet infrastructure. The connectivity is now reliable and fast, making digital learning seamless for our 1500 students. Their team was professional and completed the project on time.",
    author: 'Mr. John Kamau',
    role: 'Principal, Nairobi High School',
  },
  {
    quote:
      'Professional networking installation with excellent attention to detail. Their team delivered on time and within budget. The network performance has exceeded our expectations. Highly recommended!',
    author: 'Sarah Ochieng',
    role: 'IT Director, TechCorp Kenya',
  },
  {
    quote:
      'The CCTV system installation was flawless. We now have complete security coverage with remote monitoring capabilities. The support team is always responsive when we need assistance.',
    author: 'David Mwangi',
    role: 'Facilities Manager, Metro Apartments',
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 bg-tech-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(45deg, #1a1a1a 25%, transparent 25%),
                              linear-gradient(-45deg, #1a1a1a 25%, transparent 25%),
                              linear-gradient(45deg, transparent 75%, #1a1a1a 75%),
                              linear-gradient(-45deg, transparent 75%, #1a1a1a 75%)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-orange text-sm font-semibold tracking-wider uppercase mb-4 block">
              Testimonials
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our{' '}
              <span className="text-orange">Clients Say</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-white/70 text-lg">
              Don't just take our word for it. Here's what our clients have to say about
              working with Netlink Solutions.
            </p>
          </ScrollReveal>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
