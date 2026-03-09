import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function FeatureItem({ icon: Icon, title, description, index }: FeatureItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="flex gap-4"
    >
      <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-orange" />
      </div>
      
      <div>
        <h4 className="text-white font-semibold mb-1">{title}</h4>
        <p className="text-tech-text text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
