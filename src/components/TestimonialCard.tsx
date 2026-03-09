import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  index: number;
}

export function TestimonialCard({ quote, author, role, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="relative bg-tech-gray rounded-xl p-8 border border-tech-border"
    >
      <Quote className="absolute top-6 right-6 w-10 h-10 text-orange/20" />
      
      <p className="text-white/90 text-lg leading-relaxed mb-6 relative z-10">
        "{quote}"
      </p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-orange/20 rounded-full flex items-center justify-center">
          <span className="text-orange font-semibold text-lg">
            {author.charAt(0)}
          </span>
        </div>
        
        <div>
          <h4 className="text-white font-medium">{author}</h4>
          <p className="text-tech-text text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
