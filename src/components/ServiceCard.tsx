import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  index: number;
}

export function ServiceCard({ icon: Icon, title, items, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
      className="group relative bg-tech-gray border border-tech-border rounded-xl p-6 lg:p-8 hover:border-orange transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-orange/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange/20 transition-colors duration-300">
          <Icon className="w-7 h-7 text-orange" />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-tech-text text-sm">
              <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
