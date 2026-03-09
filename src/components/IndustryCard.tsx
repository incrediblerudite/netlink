import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  index: number;
}

export function IndustryCard({ icon: Icon, title, index }: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        backgroundColor: 'rgba(26, 26, 26, 1)',
        transition: { duration: 0.2 },
      }}
      className="group flex flex-col items-center justify-center p-8 rounded-xl bg-tech-dark border border-tech-border cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange/20 transition-colors duration-200"
      >
        <Icon className="w-8 h-8 text-orange" />
      </motion.div>
      
      <h3 className="text-white font-medium text-center">{title}</h3>
    </motion.div>
  );
}
